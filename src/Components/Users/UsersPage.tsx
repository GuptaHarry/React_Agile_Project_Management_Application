import {
  Box,
  Container,
  Typography,
  Stack,
  Divider,
  Toolbar,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import Navbar from "../Navbar";
import useUsers from "../../Hooks/useUsers";
import UserCard from "../Users/UserCard";
import GroupIcon from "@mui/icons-material/Group";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import AddUserModal from "./AddUserModal";
import type { User } from "../../Types/user";
import EditUserModal from "./EditUserModal";
export default function UsersPage() {
  const { users } = useUsers();

  let displayUsers = Object.values(users);
  const [addUserModal, setAddUserModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortFilter, setSortFilter] = useState("A-Z");
  const [openFilter, setOpenFilter] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  function handleEditUser(user: User) {
    setSelectedUser(user);
    setEditUserModal(true);
  }

  // search
  if (searchQuery) {
    displayUsers = displayUsers.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  // sort
  displayUsers.sort((a, b) => {
    if (sortFilter === "A-Z") {
      return a.name.localeCompare(b.name);
    }

    if (sortFilter === "Z-A") {
      return b.name.localeCompare(a.name);
    }

    return 0;
  });

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
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <TextField
                  size="small"
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  sx={{
                    width: { xs: "100%", sm: 260, md: 320 },
                    background: "#f4f7ff",
                    borderRadius: 2,
                  }}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Box>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  startIcon={<AddCircleOutlineIcon />}
                  onClick={() => setAddUserModal(true)}
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
                  onClick={() => setOpenFilter(true)}
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
                <UserCard key={user.id} user={user} onEdit={handleEditUser} />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
      {addUserModal && (
        <AddUserModal
          addUserModal={addUserModal}
          setAddUserModal={setAddUserModal}
        />
      )}

      <Dialog
        open={openFilter}
        onClose={() => setOpenFilter(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            fontWeight: "bold",
            color: "#1e3c72",
          }}
        >
          User Filters
        </DialogTitle>

        <DialogContent>
          <Stack spacing={3} mt={1}>
            <TextField
              select
              label="Sort Users"
              size="small"
              value={sortFilter}
              onChange={(e) => setSortFilter(e.target.value)}
            >
              <MenuItem value="A-Z">Name A → Z</MenuItem>
              <MenuItem value="Z-A">Name Z → A</MenuItem>
            </TextField>
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => setSortFilter("A-Z")}
            sx={{ textTransform: "none" }}
          >
            Reset
          </Button>

          <Button
            variant="contained"
            onClick={() => setOpenFilter(false)}
            sx={{
              textTransform: "none",
              background: "linear-gradient(135deg, #1e3c72, #2a5298)",
            }}
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
      {selectedUser && (
        <EditUserModal
        key={selectedUser.id}
          user={selectedUser}
          open={editUserModal}
          setOpen={setEditUserModal}
        />
      )}
    </>
  );
}
