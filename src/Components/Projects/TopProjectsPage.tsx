import type { Project } from "../../Types/project";
import {
  Container,
  Typography,
  Box,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";
import useProjects from "../../Hooks/useProjects";

export default function TopProjectsPage({ top }: { top: number }) {
  const navigate = useNavigate();

  const { projects } = useProjects();

  function getTopProjects(
    projects: Record<string, Project>,
    top: number,
  ): Project[] {
    return Object.values(projects)
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
      .slice(0, top);
  }

  const latestProjects = getTopProjects(projects, top);

  return (
    <Box sx={{ py: 2 }}>
      <Container>
        {/* Section Container */}
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
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <FolderOpenIcon sx={{ color: "#1e3c72", fontSize: 28 }} />

              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ color: "#1e3c72" }}
              >
                Latest Projects
              </Typography>
            </Stack>

            <Button
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate("/projects")}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                color: "#1e3c72",
              }}
            >
              View All
            </Button>
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
              },
              gap: 3,
            }}
          >
            {latestProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
