import { Box, Stack } from "@mui/material";
import KanbanColumn from "./KanbanColumn";
import { StoryStatus } from "../../Types/enums";
import useStories from "../../Hooks/useStories";
interface Props {
  projectId: string;
}

export default function KanbanBoard({ projectId }: Props) {
  const { stories } = useStories();

  const projectStories = Object.values(stories).filter(
    (s) => s.projectId === projectId,
  );

  const columns = [
    StoryStatus.Backlog,
    StoryStatus.InProgress,
    StoryStatus.Testing,
    StoryStatus.Done,
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        overflowX: "auto",
      }}
    >
      <Stack
        direction="row"
        spacing={3}
        sx={{
          overflowX: "auto",
          pb: 2,
          flexWrap: "nowrap",
          alignItems: "flex-start",
          px: {
            xs: 1,
            md: 2,
            lg: 3,
          },
        }}
      >
        {columns.map((status) => (
          <KanbanColumn
            key={status}
            status={status}
            stories={projectStories.filter((s) => s.status === status)}
          />
        ))}
      </Stack>
    </Box>
  );
}
