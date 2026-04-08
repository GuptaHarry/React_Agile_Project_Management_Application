import { Container, Typography, Button, Stack, Box } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useNavigate } from "react-router-dom";


export default function HeroSection (){
  const navigate = useNavigate();
    return (

      <Box
        sx={{
    
    py: 4,
    background: "linear-gradient(180deg, #eef2ff 0%, #e6ecff 100%)",
  }}
      >
        <Container>
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography variant="h3" fontWeight="bold">
              Manage Projects with Agile Precision
            </Typography>

            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Plan, track, and deliver your projects efficiently using Kanban
              workflows.
            </Typography>

            <Button
              variant="contained"
              size="large"
              startIcon={<RocketLaunchIcon />}
              onClick={() => navigate("/projects")}
              sx={{
                borderRadius: 3,
                backgroundColor: "#ffffff",
                color: "#1e3c72",
                fontWeight: 600,
                px: 4,
                "&:hover": {
                  backgroundColor: "#f0f4ff",
                },
              }}
            >
              Explore Projects
            </Button>
          </Stack>
        </Container>
      </Box>

 )
};
