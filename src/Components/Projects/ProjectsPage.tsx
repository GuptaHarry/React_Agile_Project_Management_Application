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
import ProjectCard from "../Projects/ProjectCard";
import Navbar from "../Navbar";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import useProjects from "../../Hooks/useProjects";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TuneIcon from "@mui/icons-material/Tune";
import { mockUsers } from "../../Mock/users";
import type { Project } from "../../Types/project";

export default function ProjectsPage() {
  const { projects, setProjects } = useProjects();
  const userList = Object.values(mockUsers);
  const [addProjectModal, setAddProjectModal] = useState(false);
  const [projectName, setProjectName] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const displayProjects = Object.values(projects);

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

    console.log(newProjectObject);
    setProjects({ ...projects, ...newRecord });
    setAddProjectModal(false);
    setProjectDescription("");
    setProjectName("");
    setSelectedUsers([]);
    setOpenSnackbar(true);
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
              boxShadow: "0px 8px 30px rgba(30,60,114,0.08)",
              border: "1px solid rgba(30,60,114,0.08)",
            }}
          >
            {/* Header */}
            <Stack
              direction="row"
              alignItems="center"
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
                  sx={{
                    width: { xs: "100%", sm: 300, md: 380 },
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
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  startIcon={<AddCircleOutlineIcon />}
                  onClick={() => setAddProjectModal(true)}
                  sx={{
                    borderRadius: 2,
                    fontWeight: 600,
                    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
                    boxShadow: "0px 4px 12px rgba(30,60,114,0.3)",
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
                  sx={{
                    borderRadius: 2,
                    fontWeight: 600,
                    color: "#1e3c72",
                    borderColor: "rgba(30,60,114,0.4)",
                    "&:hover": {
                      borderColor: "#1e3c72",
                      backgroundColor: "rgba(30,60,114,0.05)",
                    },
                  }}
                >
                  Filters
                </Button>
              </Stack>
            </Stack>

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
              {displayProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
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
