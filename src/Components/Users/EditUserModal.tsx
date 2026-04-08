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

  const [name, setName] = useState(user?.name ?? "");
  const [role, setRole] = useState<UserRole>(
    user?.role ?? UserRole.Developer
  );

  function handleClose() {
    setName(user?.name ?? "");
    setRole(user?.role ?? UserRole.Developer);
    setOpen(false);
  }

  function handleSave() {
    if (!user) return;

    const updatedUser: User = {
      ...user,
      name,
      role,
    };

    setUsers({
      ...users,
      [user.id]: updatedUser,
    });

    handleClose();
  }

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
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
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            select
            label="Role"
            size="small"
            fullWidth
            value={role}
            onChange={(e) => setRole(e.target.value as UserRole)}
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
        <Button onClick={handleClose} sx={{ textTransform: "none" }}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSave}
          disabled={!name.trim()}
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
