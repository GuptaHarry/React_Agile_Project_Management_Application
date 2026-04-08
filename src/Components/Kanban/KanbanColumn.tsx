import { Box, Typography, Stack, Tooltip, IconButton } from "@mui/material";
import type { UserStory } from "../../Types/userstory";
import StoryCard from "./StoryCard";
import SwapVertTwoToneIcon from "@mui/icons-material/SwapVertTwoTone";
import { useMemo, useState } from "react";

interface Props {
  status: string;
  stories: UserStory[];
}
const columnColors: Record<string, string> = {
  Backlog: "#f7e3e3",
  "In Progress": "#fef6e7", // direct value taken bcz it is declared as InProgress : "In Progress". so color will not render for InProgress.
  Testing: "#defbec",
  Done: "#e6effe",
};

const priorityWeight: Record<string, number> = {
  High: 3,
  Medium: 2,
  Low: 1,
};

export default function KanbanColumn({ status, stories }: Props) {
  const [sortDesc, setSortDesc] = useState(true);

  const sortedStories = useMemo(() => {
    return [...stories].sort((a, b) => {
      const diff = priorityWeight[b.priority] - priorityWeight[a.priority];

      return sortDesc ? diff : -diff;
    });
  }, [stories, sortDesc]);

  return (
    <Box
      sx={{
        minWidth: {
          xs: 260,
          sm: 280,
          md: 300,
        },
        width: {
          xs: 260,
          sm: 280,
          md: 300,
        },
        maxWidth: 320,
        background: columnColors[status],
        borderRadius: 3,
        p: {
          xs: 1.5,
          sm: 2,
        },
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

        <Tooltip title="Sort by Priority">
          <IconButton
            size="small"
            onClick={() => setSortDesc((prev) => !prev)}
            sx={{
              transition: "0.25s",
              transform: sortDesc ? "rotate(0deg)" : "rotate(180deg)",
              color: "#1e3c72",
              "&:hover": {
                background: "#1e3c7210",
              },
            }}
          >
            <SwapVertTwoToneIcon />
          </IconButton>
        </Tooltip>
      </Stack>

      <Stack spacing={2}>
        {sortedStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </Stack>
    </Box>
  );
}
