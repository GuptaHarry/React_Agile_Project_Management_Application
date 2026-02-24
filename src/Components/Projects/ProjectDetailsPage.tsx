import { useParams } from "react-router-dom";
import { Typography, Container, Toolbar } from "@mui/material";
// import { mockProjects } from '../../Mock/projects';
import useProjects from "../../Hooks/useProjects";
import Navbar from "../Navbar";

export default function ProjectDetailsPage() {
  const { projectId } = useParams();
  const {projects} = useProjects();

  const project = projectId ? projects[projectId] : null;

  if (!project) {
    return (
      <Container>
        <Typography variant="h5">Project not found</Typography>
         
      </Container>
    );
  }

  return (
    <>
    <Navbar/>
    <Toolbar/>

    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" fontWeight="bold">
        {project.name}
      </Typography>

      <Typography variant="body1" mt={2}>
        {project.description}
      </Typography>

      <Typography variant="body2" mt={2}>
        Team Members: {project.teamMemberIds.length}
      </Typography>
    </Container>
    </>
  );
}
