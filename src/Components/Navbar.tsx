import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Stack,
  Box,
} from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        borderRadius: 0,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: 70,
        }}
      >
        {/* Left Section — Logo / Title */}
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <DashboardIcon sx={{ fontSize: 30 }} />

          <Typography variant="h6" fontWeight="bold">
            Agile Project Manager
          </Typography>
        </Stack>

        {/* Middle Section — Navigation Buttons */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyItems="flex-end"
        >
          <Button
            variant="contained"
            startIcon={<FolderOpenIcon />}
            onClick={() => navigate("/projects")}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              backgroundColor: "#ffffff",
              color: "#1e3c72",
              "&:hover": {
                backgroundColor: "#f0f4ff",
              },
            }}
          >
            Manage Projects
          </Button>

          <Button
            variant="outlined"
            startIcon={<GroupIcon />}
            onClick={() => navigate("/users")}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              color: "white",
              borderColor: "rgba(255,255,255,0.6)",
              "&:hover": {
                borderColor: "white",
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            Manage Users
          </Button>

          {/* Right Section — Admin Avatar */}
          <Box>
            <Avatar
              sx={{
                bgcolor: "#ff9800",
                width: 40,
                height: 40,
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: 2,
              }}
            >
              A
            </Avatar>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
