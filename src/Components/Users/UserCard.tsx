import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Chip,
  Box,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import type { User } from "../../Types/user";

interface Props {
  user: User;
  onEdit: (user: User) => void;
}

export default function UserCard({ user, onEdit }: Props) {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 3,
        boxShadow: 2,
        transition: "0.25s",
        border: "0.01rem solid #1e3c7214",
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-0.2rem)",
        },
      }}
    >
      <CardContent>
        {/* Header */}
        <Stack direction="row" justifyContent="space-between">
          <Avatar
            sx={{
              bgcolor: user.avatarColor,
              width: 48,
              height: 48,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {user.name.charAt(0)}
          </Avatar>

          <Stack direction="row" spacing={1}>
            <IconButton
              onClick={() => onEdit(user)}
              sx={{
                color: "#1e3c72",
                backgroundColor: "#1e3c720d",
                "&:hover": {
                  backgroundColor: "#1e3c721f",
                },
              }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>

        {/* Name */}
        <Typography
          variant="h6"
          fontWeight="bold"
          mt={2}
          sx={{ color: "#1e3c72" }}
        >
          {user.name}
        </Typography>

        {/* Role */}
        <Chip
          label={user.role}
          size="small"
          sx={{
            mt: 1,
            background: "#1e3c7214",
            color: "#1e3c72",
            fontWeight: 600,
          }}
        />

        {/* Details */}
        <Box mt={2}>
          <Typography variant="body2" color="text.secondary">
            User ID: {user.id}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Joined: {new Date(user.createdAt).toLocaleDateString()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
