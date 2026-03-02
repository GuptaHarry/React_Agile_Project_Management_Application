import {
  Dialog,
  DialogActions,
  Button,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  MenuItem,
  Avatar,
  Typography,
  Chip,
  Box,
} from "@mui/material";

import { useState } from "react";

import type { UserStory } from "../../Types/userstory";
import type { User } from "../../Types/user";
import type React from "react";

import { Priority, StoryStatus } from "../../Types/enums";
import type { UserId } from "../../Types/id";
import useUsers from "../../Hooks/useUsers";
import useStories from "../../Hooks/useStories";
import { useNavigate, useParams } from "react-router-dom";
import useProjects from "../../Hooks/useProjects";

interface Props {
  story: UserStory;
  openEditStoryModal: boolean;
  setOpenEditStoryModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const priorityTheme: Record<string, { bg: string; color: string }> = {
  High: { bg: "#ffe4e3", color: "#d32f2f" },
  Medium: { bg: "#fff4dc", color: "#ed6c02" },
  Low: { bg: "#e6fbf3", color: "#1b8a5a" },
};

const statusTheme: Record<string, { bg: string; color: string }> = {
  Backlog: { bg: "#fed9d8", color: "#b42318" },
  "In Progress": { bg: "#fbedcf", color: "#b26a00" },
  Testing: { bg: "#c9f8e2", color: "#0f7a4f" },
  Done: { bg: "#d4d7dc", color: "#4b5563" },
};

export default function EditStoryModal({
  story,
  openEditStoryModal,
  setOpenEditStoryModal,
}: Props) {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { users } = useUsers();
  const { projects } = useProjects();

  const { stories, setStories } = useStories();
  const user = users[story.assignedUserId !== null ? story.assignedUserId : ""];
  const project = projectId ? projects[projectId] : undefined;
  const usersList: User[] = project
    ? project.teamMemberIds.map((id) => users[id])
    : [];
  const [storyTitle, setStoryTitle] = useState(story.title);
  const [storyDescription, setStoryDescription] = useState(story.description);
  const [storyPriority, setStoryPriority] = useState<Priority>(story.priority);
  const [storyStatus, setStoryStatus] = useState<StoryStatus>(story.status);
  const [storyPoints, setStoryPoints] = useState<number>(story.storyPoints);
  const [storyUserId, setStoryUserId] = useState<UserId | "">(
    story.assignedUserId !== null ? story.assignedUserId : "",
  );

  const [confirmDelete, setConfirmDelete] = useState(false);

  const safeUserValue = usersList.some((u) => u.id === storyUserId)
    ? storyUserId
    : "";

  function handleSave() {
    const editedStory: UserStory = {
      ...story,
      title: storyTitle,
      description: storyDescription,
      priority: storyPriority,
      storyPoints: storyPoints,
      assignedUserId: storyUserId || null,
      status: storyStatus,
      updatedAt: new Date().toISOString(),
    };

    setStories({
      ...stories,
      [editedStory.id]: editedStory,
    });

    setOpenEditStoryModal(false);
  }

  function handleDelete() {
    const updatedStories = { ...stories };
    delete updatedStories[story.id];

    setStories(updatedStories);

    setConfirmDelete(false);
    setOpenEditStoryModal(false);
  }

  function handleClose() {
    navigate(`/projects/${story.projectId}`);
  }
  return (
    <Dialog
      open={openEditStoryModal}
      onClose={() => handleClose()}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle
        sx={{
          fontWeight: "bold",
          color: "#1e3c72",
          borderBottom: "0.1rem solid #1e3c7214",
        }}
      >
        {confirmDelete ? "Delete Story" : "Edit Story"}

        {user && !confirmDelete && (
          <Typography variant="body2" color="text.secondary">
            Assigned to {user.name}
          </Typography>
        )}
      </DialogTitle>

      <DialogContent>
        {!confirmDelete ? (
          <Stack spacing={3} mt={1}>
            <TextField
              label="Story Title"
              fullWidth
              size="small"
              value={storyTitle}
              onChange={(e) => setStoryTitle(e.target.value)}
            />

            <TextField
              label="Description"
              fullWidth
              multiline
              rows={3}
              size="small"
              value={storyDescription}
              onChange={(e) => setStoryDescription(e.target.value)}
            />

            <Stack direction="row" spacing={2}>
              <TextField
                select
                label="Priority"
                fullWidth
                size="small"
                value={storyPriority}
                onChange={(e) => setStoryPriority(e.target.value as Priority)}
              >
                {Object.values(Priority).map((p) => (
                  <MenuItem key={p} value={p}>
                    <Chip
                      label={p}
                      sx={{
                        background: priorityTheme[p].bg,
                        color: priorityTheme[p].color,
                        fontWeight: 600,
                      }}
                    />
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                label="Status"
                fullWidth
                size="small"
                value={storyStatus}
                onChange={(e) => setStoryStatus(e.target.value as StoryStatus)}
              >
                {Object.values(StoryStatus).map((s) => (
                  <MenuItem key={s} value={s}>
                    <Chip
                      label={s}
                      sx={{
                        background: statusTheme[s].bg,
                        color: statusTheme[s].color,
                        fontWeight: 600,
                      }}
                    />
                  </MenuItem>
                ))}
              </TextField>
            </Stack>

            <TextField
              label="Story Points"
              type="text"
              size="small"
              value={storyPoints}
              onChange={(e) => setStoryPoints(Number(e.target.value))}
            />

            <TextField
              select
              label="Assigned User"
              fullWidth
              size="small"
              value={safeUserValue}
              onChange={(e) => setStoryUserId(e.target.value as UserId | "")}
            >
              {usersList.map((u) => (
                <MenuItem key={u.id} value={u.id}>
                  <Chip
                    avatar={
                      <Avatar
                        sx={{
                          width: 26,
                          height: 26,
                          bgcolor: u.avatarColor,
                          fontSize: 13,
                        }}
                      >
                        {u.name[0]}
                      </Avatar>
                    }
                    label={u.name}
                  />
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        ) : (
          <Box textAlign="center" py={3}>
            <Typography fontWeight="bold" color="error" mb={1}>
              Are you sure you want to delete this story?
            </Typography>

            <Typography variant="body2" color="text.secondary">
              This action cannot be undone.
            </Typography>
          </Box>
        )}
      </DialogContent>

      <DialogActions
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          borderTop: "0.01rem solid #0000000f",
        }}
      >
        {!confirmDelete ? (
          <>
            <Button
              color="error"
              variant="outlined"
              onClick={() => setConfirmDelete(true)}
              sx={{
                textTransform: "none",
                fontWeight: 500,
                borderColor: "#ef5350",
                color: "#d32f2f",
                "&:hover": {
                  background: "#fdecea",
                },
              }}
            >
              Delete Story
            </Button>

            <Box>
              <Button
                onClick={() => setOpenEditStoryModal(false)}
                sx={{ textTransform: "none", mr: 1 }}
              >
                Cancel
              </Button>

              <Button
                variant="contained"
                onClick={handleSave}
                sx={{
                  textTransform: "none",
                  fontWeight: 400,
                  background: "linear-gradient(135deg, #1e3c72, #2a5298)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #16325c, #1f3f7a)",
                  },
                }}
              >
                Save Changes
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Button
              onClick={() => setConfirmDelete(false)}
              sx={{ textTransform: "none" }}
            >
              Cancel
            </Button>

            <Button
              color="error"
              variant="contained"
              onClick={handleDelete}
              sx={{ textTransform: "none", fontWeight: 400 }}
            >
              Confirm Delete
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
}
