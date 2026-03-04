import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
  TextField,
  MenuItem,
  Avatar,
  Typography,
} from "@mui/material";

import { useState } from "react";
import type React from "react";

import { UserRole } from "../../Types/enums";
import type { User } from "../../Types/user";

import useUsers from "../../Hooks/useUsers";

interface Props {
  addUserModal: boolean;
  setAddUserModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const avatarColors = [
  "#FF5733",
  "#33C3FF",
  "#8D33FF",
  "#4CAF50",
  "#FF9800",
  "#009688",
];

export default function AddUserModal({ addUserModal, setAddUserModal }: Props) {
  const { users, setUsers } = useUsers();

  const [name, setName] = useState("");
  const [role, setRole] = useState<UserRole>(UserRole.Developer);
  const [color, setColor] = useState(avatarColors[0]);

  function generateUserId() {
    return `u_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  }

  function handleCreate() {
    const id = generateUserId();

    const newUser: User = {
      id,
      name,
      role,
      avatarColor: color,
      createdAt: new Date().toISOString(),
    };

    setUsers({
      ...users,
      [id]: newUser,
    });

    handleClose();
  }

  function handleClose() {
    setAddUserModal(false);
    setName("");
    setRole(UserRole.Developer);
    setColor(avatarColors[0]);
  }

  return (
    <Dialog open={addUserModal} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle
        sx={{
          fontWeight: "bold",
          color: "#1e3c72",
          borderBottom: "0.1rem solid #1e3c7214",
        }}
      >
        Add New User
        <Typography variant="body2" color="text.secondary">
          Create a new team member
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Stack spacing={3} mt={1}>
          <TextField
            label="Full Name"
            fullWidth
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            select
            label="Role"
            fullWidth
            size="small"
            value={role}
            onChange={(e) => setRole(e.target.value as UserRole)}
          >
            {Object.values(UserRole).map((r) => (
              <MenuItem key={r} value={r}>
                {r}
              </MenuItem>
            ))}
          </TextField>

          <Stack spacing={1}>
            <Typography variant="body2" fontWeight={600}>
              Avatar Color
            </Typography>

            <Stack direction="row" spacing={2}>
              {avatarColors.map((c) => (
                <Avatar
                  key={c}
                  onClick={() => setColor(c)}
                  sx={{
                    bgcolor: c,
                    cursor: "pointer",
                    border:
                      color === c
                        ? "0.3rem solid #1e3c72"
                        : "0.2rem solid transparent",
                  }}
                />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={handleClose} sx={{ textTransform: "none" }}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleCreate}
          sx={{
            textTransform: "none",
            fontWeight: 400,
            background: "linear-gradient(135deg, #1e3c72, #2a5298)",
            "&:hover": {
              background: "linear-gradient(135deg, #16325c, #1f3f7a)",
            },
          }}
        >
          Create User
        </Button>
      </DialogActions>
    </Dialog>
  );
}
