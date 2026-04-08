import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  Toolbar,
  TextField,
  Button,
  Snackbar,
  Alert,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import NoProjectFound from "./NoProjectFound";
import ProjectCard from "../Projects/ProjectCard";
import Navbar from "../Navbar";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import useProjects from "../../Hooks/useProjects";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TuneIcon from "@mui/icons-material/Tune";
import type { Project } from "../../Types/project";
import useUsers from "../../Hooks/useUsers";
import useStories from "../../Hooks/useStories";
export default function ProjectsPage() {
  const { projects, setProjects } = useProjects();
  const { users } = useUsers();
  const { stories } = useStories();
  const userList = Object.values(users);

  const [addProjectModal, setAddProjectModal] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const [projectName, setProjectName] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [memberFilter, setMemberFilter] = useState("");
  const [teamSizeFilter, setTeamSizeFilter] = useState("");
  const [recentFilter, setRecentFilter] = useState(false);
  const [myProjectsOnly, setMyProjectsOnly] = useState(false);
  const [noStoriesFilter, setNoStoriesFilter] = useState(false);
  const [mostStoriesFilter, setMostStoriesFilter] = useState(false);
  const [sortFilter, setSortFilter] = useState("Newest");

  function getTopProjects(projects: Record<string, Project>): Project[] {
    return Object.values(projects).sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  }

  let displayProjects = getTopProjects(projects);

  function handleCreateProject(
    projectName: string,
    projectDescription: string,
    selectedUsers: string[],
  ) {
    const newProjectId = displayProjects.length + 1;
    const newProjectObject: Project = {
      id: `p${newProjectId}`,
      name: projectName,
      description: projectDescription,
      teamMemberIds: selectedUsers,
      createdAt: `${new Date().toISOString()}`,
      updatedAt: "",
    };

    const newRecord: Record<string, Project> = {
      [`p${newProjectId}`]: newProjectObject,
    };

    setProjects({ ...projects, ...newRecord });
    setAddProjectModal(false);
    setProjectDescription("");
    setProjectName("");
    setSelectedUsers([]);
    setOpenSnackbar(true);
  }

  if (searchQuery) {
    displayProjects = displayProjects.filter((project) => {
      return project.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }

  // team member
  if (memberFilter) {
    displayProjects = displayProjects.filter((project) =>
      project.teamMemberIds.includes(memberFilter),
    );
  }

  // my projects
  if (myProjectsOnly) {
    const currentUser = userList[0]?.id;

    displayProjects = displayProjects.filter((p) =>
      p.teamMemberIds.includes(currentUser),
    );
  }

  // recent
  if (recentFilter) {
    const last7 = new Date();
    last7.setDate(last7.getDate() - 7);

    displayProjects = displayProjects.filter((p) =>
      p.updatedAt ? new Date(p.updatedAt) >= last7 : false,
    );
  }

  // teamsize
  if (teamSizeFilter === "small") {
    displayProjects = displayProjects.filter(
      (p) => p.teamMemberIds.length <= 2,
    );
  }

  if (teamSizeFilter === "medium") {
    displayProjects = displayProjects.filter(
      (p) => p.teamMemberIds.length >= 3 && p.teamMemberIds.length <= 5,
    );
  }

  if (teamSizeFilter === "large") {
    displayProjects = displayProjects.filter((p) => p.teamMemberIds.length > 5);
  }

  /// no stories
  if (noStoriesFilter) {
    displayProjects = displayProjects.filter(
      (project) =>
        !Object.values(stories).some((story) => story.projectId === project.id),
    );
  }

  // most stories
  if (mostStoriesFilter) {
    displayProjects.sort((a, b) => {
      const aCount = Object.values(stories).filter(
        (s) => s.projectId === a.id,
      ).length;

      const bCount = Object.values(stories).filter(
        (s) => s.projectId === b.id,
      ).length;

      return bCount - aCount;
    });
  }
  // sort
  displayProjects.sort((a, b) => {
    if (sortFilter === "Newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }

    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

  function handleSearchQuery(value: string) {
    setSearchQuery(value);
  }

  function clearFilters() {
    setMemberFilter("");
    setTeamSizeFilter("");
    setRecentFilter(false);
    setMyProjectsOnly(false);
    setNoStoriesFilter(false);
    setMostStoriesFilter(false);
    setSortFilter("Newest");
  }

  return (
    <>
      <Navbar />
      <Toolbar />
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #f4f7ff 0%, #eef2ff 100%)",
          py: 6,
        }}
      >
        <Container maxWidth="xl">
          {/* Panel Container */}
          <Box
            sx={{
              background: "white",
              borderRadius: 3,
              p: 4,
              boxShadow: "0rem 0.1rem 0.2rem #1e3c7214",
              border: "0.1rem solid #1e3c7214",
            }}
          >
            {/* Header */}
            <Stack
              direction={{xs:"column" , md:"row"}}
              alignItems={{xs:"flex-start" , md:"center"}}
              justifyContent="space-between"
              mb={3}
              spacing={2}
            >
              {/* Left — Title */}
              <Stack direction="row" spacing={1.5} alignItems="center">
                <FolderOpenIcon sx={{ color: "#1e3c72", fontSize: 28 }} />

                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ color: "#1e3c72" }}
                >
                  Manage Projects
                </Typography>
              </Stack>

              {/* Middle — Search Bar */}
              <Box
                sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
              >
                <TextField
                  size="small"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => handleSearchQuery(e.target.value)}
                  sx={{
                    width: { xs: "100%", sm: 300, md: 380 , lg:420 },
                    background: "#f4f7ff",
                    borderRadius: 2,
                  }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Box>

              {/* Right — Actions */}
              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Button
                  variant="contained"
                  startIcon={<AddCircleOutlineIcon />}
                  onClick={() => setAddProjectModal(true)}
                  sx={{
                    borderRadius: 2,
                    fontWeight: 600,
                    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
                    boxShadow: "0rem 0.1rem 0.2rem #1e3c724d",
                    "&:hover": {
                      background: "linear-gradient(135deg, #16325c, #1f3f7a)",
                    },
                  }}
                >
                  Add Project
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<TuneIcon />}
                  onClick={() => setOpenFilter(true)}
                  sx={{
                    borderRadius: 2,
                    fontWeight: 600,
                    color: "#1e3c72",
                    borderColor: "#1e3c7266",
                    "&:hover": {
                      borderColor: "#1e3c72",
                      backgroundColor: "#1e3c720d",
                    },
                  }}
                >
                  Filters
                </Button>
              </Stack>
            </Stack>

            {/* FILTER CHIPS */}

            {(memberFilter ||
              teamSizeFilter ||
              recentFilter ||
              myProjectsOnly ||
              noStoriesFilter ||
              mostStoriesFilter) && (
              <Stack direction="row" spacing={1} mb={2} flexWrap="wrap">
                {memberFilter && (
                  <Chip
                    label={`Member: ${users[memberFilter]?.name}`}
                    onDelete={() => setMemberFilter("")}
                  />
                )}

                {teamSizeFilter && (
                  <Chip
                    label={`Team Size: ${teamSizeFilter}`}
                    onDelete={() => setTeamSizeFilter("")}
                  />
                )}

                {recentFilter && (
                  <Chip
                    label="Updated Recently"
                    onDelete={() => setRecentFilter(false)}
                  />
                )}

                {myProjectsOnly && (
                  <Chip
                    label="My Projects"
                    onDelete={() => setMyProjectsOnly(false)}
                  />
                )}

                {noStoriesFilter && (
                  <Chip
                    label="No Stories"
                    onDelete={() => setNoStoriesFilter(false)}
                  />
                )}

                {mostStoriesFilter && (
                  <Chip
                    label="Most Stories"
                    onDelete={() => setMostStoriesFilter(false)}
                  />
                )}

                <Chip label="Clear All" color="error" onClick={clearFilters} />
              </Stack>
            )}

            <Divider sx={{ mb: 3 }} />

            {/* Projects Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                  lg: "repeat(4, 1fr)",
                },
                gap: 3,
              }}
            >
              {displayProjects.length > 0 ? (
                displayProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <NoProjectFound />
              )}
            </Box>
          </Box>
        </Container>
      </Box>

      <Dialog
        open={addProjectModal}
        onClose={() => setAddProjectModal(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            fontWeight: "bold",
            color: "#1e3c72",
          }}
        >
          Add New Project
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3} mt={1}>
            <TextField
              label="Project Name"
              fullWidth
              size="small"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />

            <TextField
              label="Description"
              fullWidth
              multiline
              rows={3}
              size="small"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            />

            <Autocomplete
              multiple
              options={userList}
              getOptionLabel={(option) => option.name}
              value={userList.filter((u) => selectedUsers.includes(u.id))}
              onChange={(_, newValue) =>
                setSelectedUsers(newValue.map((u) => u.id))
              }
              renderOption={(props, option) => (
                <li {...props}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Avatar
                      sx={{
                        width: 28,
                        height: 28,
                        bgcolor: option.avatarColor,
                        fontSize: 14,
                      }}
                    >
                      {option.name[0]}
                    </Avatar>
                    <span>{option.name}</span>
                  </Stack>
                </li>
              )}
              renderValue={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    {...getTagProps({ index })}
                    key={option.id}
                    label={option.name}
                    avatar={
                      <Avatar sx={{ bgcolor: option.avatarColor }}>
                        {option.name[0]}
                      </Avatar>
                    }
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Team Members"
                  placeholder="Select users"
                  size="small"
                />
              )}
            />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button
            onClick={() => setAddProjectModal(false)}
            sx={{ textTransform: "none" }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              background: "linear-gradient(135deg, #1e3c72, #2a5298)",
              "&:hover": {
                background: "linear-gradient(135deg, #16325c, #1f3f7a)",
              },
            }}
            onClick={() =>
              handleCreateProject(
                projectName,
                projectDescription,
                selectedUsers,
              )
            }
          >
            Create Project
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openFilter}
        onClose={() => setOpenFilter(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            fontWeight: "bold",
            color: "#1e3c72",
          }}
        >
          Project Filters
        </DialogTitle>

        <DialogContent>
          <Stack spacing={3} mt={1}>
            {/* Member Filter */}
            <Autocomplete
              options={userList}
              getOptionLabel={(option) => option.name}
              value={userList.find((u) => u.id === memberFilter) || null}
              onChange={(_, newValue) =>
                setMemberFilter(newValue ? newValue.id : "")
              }
              renderOption={(props, option) => (
                <li {...props}>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Avatar
                      sx={{
                        width: 26,
                        height: 26,
                        bgcolor: option.avatarColor,
                        fontSize: 13,
                      }}
                    >
                      {option.name[0]}
                    </Avatar>
                    {option.name}
                  </Stack>
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} label="Team Member" size="small" />
              )}
            />

            {/* Team Size */}
            <TextField
              select
              label="Team Size"
              size="small"
              value={teamSizeFilter}
              onChange={(e) => setTeamSizeFilter(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="small">1–2 Members</MenuItem>
              <MenuItem value="medium">3–5 Members</MenuItem>
              <MenuItem value="large">6+ Members</MenuItem>
            </TextField>

            {/* Toggle Filters */}
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <Button
                variant={recentFilter ? "contained" : "outlined"}
                onClick={() => setRecentFilter(!recentFilter)}
                sx={{ textTransform: "none" }}
              >
                Updated Recently
              </Button>

              <Button
                variant={myProjectsOnly ? "contained" : "outlined"}
                onClick={() => setMyProjectsOnly(!myProjectsOnly)}
                sx={{ textTransform: "none" }}
              >
                My Projects
              </Button>

              <Button
                variant={noStoriesFilter ? "contained" : "outlined"}
                onClick={() => setNoStoriesFilter(!noStoriesFilter)}
                sx={{ textTransform: "none" }}
              >
                No Stories
              </Button>

              <Button
                variant={mostStoriesFilter ? "contained" : "outlined"}
                onClick={() => setMostStoriesFilter(!mostStoriesFilter)}
                sx={{ textTransform: "none" }}
              >
                Most Stories
              </Button>
            </Stack>

            {/* Sort */}
            <TextField
              select
              label="Sort"
              size="small"
              value={sortFilter}
              onChange={(e) => setSortFilter(e.target.value)}
            >
              <MenuItem value="Newest">Newest First</MenuItem>
              <MenuItem value="Oldest">Oldest First</MenuItem>
            </TextField>
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={clearFilters} sx={{ textTransform: "none" }}>
            Clear Filters
          </Button>

          <Button
            variant="contained"
            onClick={() => setOpenFilter(false)}
            sx={{
              textTransform: "none",
              background: "linear-gradient(135deg, #1e3c72, #2a5298)",
            }}
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Project created successfully!
        </Alert>
      </Snackbar>
    </>
  );
}
