import {
  Box,
  Stack,
  Typography,
  Card,
  CardContent,
  LinearProgress,
} from "@mui/material";
import useStories from "../../Hooks/useStories";
import useUsers from "../../Hooks/useUsers";
import { StoryStatus, Priority } from "../../Types/enums";

interface Props {
  projectId: string;
}

export default function ProjectAnalytics({ projectId }: Props) {
  const { stories } = useStories();
  const { users } = useUsers();

  const projectStories = Object.values(stories).filter(
    (story) => story.projectId === projectId,
  );

  const totalStories = projectStories.length;

  const doneStories = projectStories.filter(
    (s) => s.status === StoryStatus.Done,
  ).length;

  const inProgressStories = projectStories.filter(
    (s) => s.status === StoryStatus.InProgress,
  ).length;

  const backlogStories = projectStories.filter(
    (s) => s.status === StoryStatus.Backlog,
  ).length;

  const testingStories = projectStories.filter(
    (s) => s.status === StoryStatus.Testing,
  ).length;

  const highPriority = projectStories.filter(
    (s) => s.priority === Priority.High,
  ).length;

  const mediumPriority = projectStories.filter(
    (s) => s.priority === Priority.Medium,
  ).length;

  const lowPriority = projectStories.filter(
    (s) => s.priority === Priority.Low,
  ).length;

  const completion =
    totalStories === 0 ? 0 : Math.round((doneStories / totalStories) * 100);

  const workload: Record<string, number> = {};

  projectStories.forEach((story) => {
    if (!story.assignedUserId) return;

    workload[story.assignedUserId] = (workload[story.assignedUserId] || 0) + 1;
  });

  return (
    <Box
      sx={{
        mt: 4,
        background: "white",
        borderRadius: 3,
        p: 4,
        border: "0.01rem solid #1e3c7214",
        boxShadow: "0rem 0.1rem 0.2rem #1e3c7214",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ color: "#1e3c72" }}
        mb={3}
      >
        Project Analytics
      </Typography>

      {/* STORY STATS */}
      <Stack direction="row" spacing={3} mb={3}>
        <StatCard title="Total Stories" value={totalStories} />
        <StatCard title="Completed" value={doneStories} />
        <StatCard title="In Progress" value={inProgressStories} />
        <StatCard title="Backlog" value={backlogStories} />
        <StatCard title="Testing" value={testingStories} />
      </Stack>

      {/* PRIORITY */}
      <Stack direction="row" spacing={3} mb={3}>
        <StatCard title="High Priority" value={highPriority} />
        <StatCard title="Medium Priority" value={mediumPriority} />
        <StatCard title="Low Priority" value={lowPriority} />
      </Stack>

      {/* COMPLETION */}
      <Box mb={3}>
        <Typography fontWeight={600} mb={1}>
          Completion Progress ({completion}%)
        </Typography>

        <LinearProgress
          variant="determinate"
          value={completion}
          sx={{
            height: 10,
            borderRadius: 5,
          }}
        />
      </Box>

      {/* WORKLOAD */}
      <Box>
        <Typography fontWeight={600} mb={2}>
          Team Workload
        </Typography>

        <Stack spacing={1}>
          {Object.entries(workload).map(([userId, count]) => (
            <Typography key={userId}>
              {users[userId]?.name || "Unknown"} → {count} stories
            </Typography>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

function StatCard({ title, value }: { title: string; value: number }) {
  return (
    <Card
      sx={{
        flex: 1,
        borderRadius: 2,
        border: "0.01rem solid #1e3c7214",
      }}
    >
      <CardContent>
        <Typography color="text.secondary" fontSize={13}>
          {title}
        </Typography>

        <Typography variant="h5" fontWeight="bold" sx={{ color: "#1e3c72" }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
