import { useNavigate, useParams } from "react-router-dom";
import {
  Typography,
  Container,
  Toolbar,
  Box,
  Chip,
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Autocomplete,
  Avatar,
  Snackbar,
  Alert,
} from "@mui/material";
import useProjects from "../../Hooks/useProjects";
import Navbar from "../Navbar";
import KanbanBoard from "../Kanban/KanbanBoard";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import type { Project } from "../../Types/project";
import useUsers from "../../Hooks/useUsers";
import useStories from "../../Hooks/useStories";
import EditStoryModal from "../Kanban/EditStoryModal";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import NoProjectFound from "./NoProjectFound";
import AddStoryModal from "../Kanban/AddStoryModal";
import ProjectAnalytics from "./ProjectAnalytics";
export default function ProjectDetailsPage() {
  const { projectId, storyId } = useParams();

  const { projects, setProjects } = useProjects();
  const { users } = useUsers();

  const openEditStoryModal = Boolean(storyId);
  const { stories } = useStories();
  const navigate = useNavigate();
  const selectedStory = storyId ? stories[storyId] : null;
  const allUsersList = Object.values(users);
  const project = projectId ? projects[projectId] : null;

  const presentUsersList = allUsersList.filter((user) => {
    return project?.teamMemberIds.includes(user.id);
  });

  const absentUsersList = allUsersList.filter((user) => {
    return !project?.teamMemberIds.includes(user.id);
  });
  const [editProjectModal, setEditProjectModal] = useState(false);
  const [projectName, setProjectName] = useState<string>(project?.name || "");
  const [projectDescription, setProjectDescription] = useState<string>(
    project?.description || "",
  );
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [addStoryModal, setAddStoryModal] = useState(false);

  function handleEditProject(
    projectName: string,
    projectDescription: string,
    selectedUsers: string[],
  ) {
    if (project !== null) {
      const editedProject: Project = {
        id: project.id,
        name: projectName,
        description: projectDescription,
        createdAt: project.createdAt,
        teamMemberIds: [...project.teamMemberIds, ...selectedUsers],
        updatedAt: `${new Date().toISOString()}`,
      };
      const editedProjectRecord: Record<string, Project> = {
        [editedProject.id]: editedProject,
      };
      console.log(project);
      setProjects({ ...projects, ...editedProjectRecord });
      setEditProjectModal(false);
      setOpenSnackbar(true);
      setSelectedUsers([]);
    }
  }

  if (!project) {
    return (
      <Container>
        <NoProjectFound />
      </Container>
    );
  }

  return (
    <>
      <Navbar />
      <Toolbar />
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #f4f7ff 0%, #eef2ff 100%)",
          py: 4,
        }}
      >
        <Container maxWidth="xl">
          {/* Project Header Panel */}
          <Box
            sx={{
              background: "white",
              borderRadius: 3,
              p: 4,
              mb: 4,
              boxShadow: "0rem 0.1rem 0.2rem #1e3c7214",
              border: "0.01rem solid #1e3c7214",
            }}
          >
            <Stack spacing={2}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", md: "center" }}
                spacing={{ xs: 2, md: 0 }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ color: "#1e3c72" }}
                >
                  {project.name}
                </Typography>

                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Button
                    variant="contained"
                    startIcon={<BorderColorTwoToneIcon />}
                    onClick={() => setEditProjectModal(true)}
                    sx={{
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: 600,
                      backgroundColor: "#ffffff",
                      color: "#1e3c72",
                      "&:hover": {
                        backgroundColor: "#f0f4ff",
                      },
                    }}
                  >
                    Edit Project
                  </Button>

                  <Button
                    variant="contained"
                    startIcon={<AddCircleOutlineIcon />}
                    onClick={() => setAddStoryModal(true)}
                    sx={{
                      borderRadius: 2,
                      ml: 3,
                      fontWeight: 600,
                      textTransform: "none",
                      background: "linear-gradient(135deg, #1e3c72, #2a5298)",
                      boxShadow: "0rem 0.1rem 0.2rem #1e3c724d",
                      "&:hover": {
                        background: "linear-gradient(135deg, #16325c, #1f3f7a)",
                      },
                    }}
                  >
                    User Story
                  </Button>
                </Stack>
              </Stack>

              <Typography color="text.secondary">
                {project.description}
              </Typography>

              <Stack direction="row" spacing={2}>
                <Chip
                  label={`${project.teamMemberIds.length} Members`}
                  sx={{
                    background: "#1e3c7214",
                    color: "#1e3c72",
                    fontWeight: 600,
                  }}
                />
              </Stack>
              <Stack direction="row" spacing={2} mt={1} flexWrap="wrap">
                {/* Created */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    background: "#1e3c720f",
                    border: "0.1rem solid #1e3c7226",
                  }}
                >
                  <EventAvailableIcon sx={{ fontSize: 18, color: "#1e3c72" }} />

                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ display: "block", color: "text.secondary" }}
                    >
                      Created
                    </Typography>

                    <Typography
                      fontWeight={600}
                      sx={{ color: "#1e3c72", fontSize: 13 }}
                    >
                      {new Date(project.createdAt).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Box>

                {/* Updated */}
                {project.updatedAt && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      background: "#1e3c720f",
                      border: "0.1rem solid #1e3c7226",
                    }}
                  >
                    <AccessTimeIcon sx={{ fontSize: 18, color: "#1e3c72" }} />

                    <Box>
                      <Typography
                        variant="caption"
                        sx={{ display: "block", color: "text.secondary" }}
                      >
                        Updated
                      </Typography>

                      <Typography
                        fontWeight={600}
                        sx={{ color: "#1e3c72", fontSize: 13 }}
                      >
                        {new Date(project.updatedAt).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Stack>
            </Stack>
          </Box>

          {projectId && <KanbanBoard projectId={projectId} />}
          {projectId && <ProjectAnalytics projectId={projectId} />}
        </Container>
      </Box>

      <Dialog
        open={editProjectModal}
        onClose={() => setEditProjectModal(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            fontWeight: "bold",
            color: "#1e3c72",
          }}
        >
          Edit Project Details
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

            {/* Present Team Members */}
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                border: "0.01rem solid #00000026",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  display: "block",
                  mb: 1,
                }}
              >
                Current Team Members
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1}>
                {presentUsersList.map((currentUser) => (
                  <Chip
                    key={currentUser.id}
                    label={currentUser.name}
                    avatar={
                      <Avatar
                        sx={{
                          bgcolor: currentUser.avatarColor,
                          fontSize: 13,
                        }}
                      >
                        {currentUser.name[0]}
                      </Avatar>
                    }
                    sx={{
                      fontWeight: 500,
                      background: "white",
                      border: "0.01rem solid #1e3c7226",
                      "&:hover": {
                        background: "#1e3c720d",
                      },
                    }}
                  />
                ))}
              </Stack>
            </Box>

            <Autocomplete
              multiple
              options={absentUsersList}
              getOptionLabel={(option) => option.name}
              value={absentUsersList.filter((u) =>
                selectedUsers.includes(u.id),
              )}
              onChange={(_, newValue) =>
                setSelectedUsers(newValue.map((u) => u.id))
              }
              renderOption={(props, option) => {
                const { key, ...rest } = props;
                return (
                  <li key={key} {...rest}>
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
                );
              }}
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
            onClick={() => setEditProjectModal(false)}
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
              handleEditProject(projectName, projectDescription, selectedUsers)
            }
          >
            Save Changes
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
          Project Details updated successfully!
        </Alert>
      </Snackbar>

      {selectedStory && (
        <EditStoryModal
          story={selectedStory}
          openEditStoryModal={openEditStoryModal}
          setOpenEditStoryModal={() => navigate(`/projects/${projectId}`)}
        />
      )}

      {addStoryModal && (
        <AddStoryModal
          addStoryModal={addStoryModal}
          setAddStoryModal={setAddStoryModal}
        />
      )}
    </>
  );
}
