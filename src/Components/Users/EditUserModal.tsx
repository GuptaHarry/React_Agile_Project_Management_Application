import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Stack,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import type { User } from "../../Types/user";
import { UserRole } from "../../Types/enums";
import useUsers from "../../Hooks/useUsers";

interface Props {
  user: User | null;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditUserModal({ user, open, setOpen }: Props) {
  const { users, setUsers } = useUsers();

  const [name, setName] = useState(user?.name || "");
  const [role, setRole] = useState(user?.role || "");

  function handleSave() {
    if (!user) return;

    const updatedUser: User = {
      ...user,
      name: name || user.name,
      role: (role || user.role) as UserRole,
    };

    setUsers({
      ...users,
      [user.id]: updatedUser,
    });

    setOpen(false);
  }

  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
      <DialogTitle
        sx={{
          fontWeight: "bold",
          color: "#1e3c72",
        }}
      >
        Edit User
      </DialogTitle>

      <DialogContent>
        <Stack spacing={3} mt={1}>
          <TextField
            label="User Name"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            select
            label="Role"
            size="small"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {Object.values(UserRole).map((roleOption) => (
              <MenuItem key={roleOption} value={roleOption}>
                {roleOption}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={() => setOpen(false)} sx={{ textTransform: "none" }}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSave}
          sx={{
            textTransform: "none",
            background: "linear-gradient(135deg,#1e3c72,#2a5298)",
          }}
        >
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
