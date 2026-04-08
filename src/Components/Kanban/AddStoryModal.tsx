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
} from "@mui/material";

import { useState } from "react";
import type React from "react";

import { Priority, StoryStatus } from "../../Types/enums";
import type { UserId } from "../../Types/id";
import type { UserStory } from "../../Types/userstory";

import useUsers from "../../Hooks/useUsers";
import useStories from "../../Hooks/useStories";
import { useParams } from "react-router-dom";
import useProjects from "../../Hooks/useProjects";

interface Props {
  addStoryModal: boolean;
  setAddStoryModal: React.Dispatch<React.SetStateAction<boolean>>;
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

export default function AddStoryModal({
  addStoryModal,
  setAddStoryModal,
}: Props) {
  const { users } = useUsers();
  const { projects } = useProjects();
  const { setStories } = useStories();
  const { projectId } = useParams();

  const project = projectId ? projects[projectId] : undefined;

  const usersList = project ? project.teamMemberIds.map((id) => users[id]) : [];

  const [storyTitle, setStoryTitle] = useState("");
  const [storyDescription, setStoryDescription] = useState("");
  const [storyPriority, setStoryPriority] = useState<Priority>(Priority.Medium);
  const [storyStatus, setStoryStatus] = useState<StoryStatus>(
    StoryStatus.Backlog,
  );
  const [storyPoints, setStoryPoints] = useState<number>(3);
  const [storyUserId, setStoryUserId] = useState<UserId | "">("");

  function generateStoryId() {
    return `s_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  }

  function resetForm() {
    setStoryTitle("");
    setStoryDescription("");
    setStoryPriority(Priority.Medium);
    setStoryStatus(StoryStatus.Backlog);
    setStoryPoints(0);
    setStoryUserId("");
  }

  function handleClose() {
    setAddStoryModal(false);
    resetForm();
  }

  function handleCreate() {
    if (!projectId || !storyTitle.trim()) return;

    const newStory: UserStory = {
      id: generateStoryId(),
      projectId,
      title: storyTitle,
      description: storyDescription,
      priority: storyPriority,
      storyPoints,
      assignedUserId: storyUserId || null,
      status: storyStatus,
      createdAt: new Date().toISOString(),
    };

    setStories((prev) => ({
      ...prev,
      [newStory.id]: newStory,
    }));

    handleClose();
  }

  return (
    <>
      <Dialog
        open={addStoryModal}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        sx={{
          "& .MuiDialog-paper": {
            width: {
              xs: "95%",
              sm: 500,
              md: 540,
              lg: 580,
            },
          },
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: "bold",
            color: "#1e3c72",
            borderBottom: "0.1rem solid #1e3c7214",
          }}
        >
          Add New Story
          <Typography variant="body2" color="text.secondary">
            Create a new task for this project
          </Typography>
        </DialogTitle>

        <DialogContent>
          <Stack spacing={3} mt={1}>
            <TextField
              label="Story Title "
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

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
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
              value={storyUserId}
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
        </DialogContent>

        <DialogActions
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "flex-end",
            borderTop: "0.01rem solid #0000000f",
          }}
        >
          <Button onClick={handleClose} sx={{ textTransform: "none", mr: 3 }}>
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleCreate}
            sx={{
              textTransform: "none",
              fontWeight: 500,
              background: "linear-gradient(135deg, #1e3c72, #2a5298)",
              "&:hover": {
                background: "linear-gradient(135deg, #16325c, #1f3f7a)",
              },
            }}
          >
            Create Story
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
