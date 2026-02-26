import { Box, Typography, Stack } from "@mui/material";
import type { UserStory } from "../../Types/userstory";
import type { User } from "../../Types/user";
import StoryCard from "./StoryCard";
import SwapVertTwoToneIcon from "@mui/icons-material/SwapVertTwoTone";
interface Props {
  status: string;
  stories: UserStory[];
  users: Record<string, User>;
}
const columnColors: Record<string, string> = {
  Backlog: "#f7e3e3",
  "In Progress": "#fef6e7", // direct value taken bcz it is declared as InProgress : "In Progress". so color will not render for InProgress.
  Testing: "#defbec",
  Done: "#e6effe",
};

export default function KanbanColumn({ status, stories, users }: Props) {
  return (
    <Box
      sx={{
        minWidth: 300,
        width: 300,
        maxWidth: 300,
        background: columnColors[status],
        borderRadius: 3,
        p: 2,
        border: "0.1rem solid rgba(30,60,114,0.08)",
      }}
    >
      <Stack
        sx={{
          mb: 4,
        }}
        direction="row"
        justifyContent="space-between"
      >
        <Typography fontWeight="bold" sx={{ color: "#1e3c72" }}>
          {status} ({stories.length})
        </Typography>

        <SwapVertTwoToneIcon
          sx={{
            color: "darkblue",
          }}
        />
      </Stack>

      <Stack spacing={2}>
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
            user={
              users[story.assignedUserId !== null ? story.assignedUserId : ""]
            }
          />
        ))}
      </Stack>
    </Box>
  );
}
