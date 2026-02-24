import { Box, Typography, Stack, Paper } from "@mui/material";

interface StatCardProps {
  title: string;
  value: string;
}

function StatCard({ title, value }: StatCardProps) {
  return (
    <Paper
      sx={{
        p: 3,
        flex: 1,
        borderRadius: 3,
        boxShadow: "0px 8px 30px rgba(30,60,114,0.08)",
      }}
    >
      <Typography variant="h6">{value}</Typography>
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>
    </Paper>
  );
}

export default function AnalyticsSection() {
  return (
    <Box mb={1}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
        <StatCard title="Projects" value="12" />
        <StatCard title="Users" value="8" />
        <StatCard title="Stories" value="32" />
        <StatCard title="Completed" value="18" />
      </Stack>
    </Box>
  );
}
