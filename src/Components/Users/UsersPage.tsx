import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  Toolbar,
  Button,
} from "@mui/material";
import Navbar from "../Navbar";
import useUsers from "../../Hooks/useUsers";
import UserCard from "../Users/UserCard";
import GroupIcon from "@mui/icons-material/Group";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TuneIcon from "@mui/icons-material/Tune";

export default function UsersPage() {
  const { users } = useUsers();

  const displayUsers = Object.values(users);

  return (
    <>
      <Navbar />
      <Toolbar />

      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #f4f7ff 0%, #eef2ff 100%)",
          py: 6,
        }}
      >
        <Container maxWidth="xl">
          {/* Panel */}
          <Box
            sx={{
              background: "white",
              borderRadius: 3,
              p: 4,
              boxShadow: "0rem 0.1rem 0.2rem #1e3c7214",
              border: "0.01rem solid #1e3c7214",
            }}
          >
            {/* Header */}
            <Stack direction="row" justifyContent="space-between" mb={3}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <GroupIcon sx={{ color: "#1e3c72", fontSize: 28 }} />

                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ color: "#1e3c72" }}
                >
                  Team Members
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  startIcon={<AddCircleOutlineIcon />}
                  sx={{
                    borderRadius: 2,
                    fontWeight: 600,
                    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
                    boxShadow: "0rem 0.2rem 0.3rem #1e3c724d",
                    "&:hover": {
                      background: "linear-gradient(135deg, #16325c, #1f3f7a)",
                    },
                  }}
                >
                  Add User
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<TuneIcon />}
                  sx={{
                    borderRadius: 2,
                    fontWeight: 600,
                    color: "#1e3c72",
                    borderColor: "#1e3c7266",
                    "&:hover": {
                      borderColor: "#1e3c72",
                      backgroundColor: "#1e3c720d",
                    },
                  }}
                >
                  Filters
                </Button>
              </Stack>
            </Stack>

            <Divider sx={{ mb: 3 }} />

            {/* Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                  lg: "repeat(4, 1fr)",
                },
                gap: 3,
              }}
            >
              {displayUsers.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
