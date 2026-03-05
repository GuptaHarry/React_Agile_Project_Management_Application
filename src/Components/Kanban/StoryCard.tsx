import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Chip,
  IconButton,
} from "@mui/material";
import type { UserStory } from "../../Types/userstory";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useNavigate } from "react-router-dom";
import useUsers from "../../Hooks/useUsers";
interface Props {
  story: UserStory;
}

const priorityTheme: Record<string, { bg: string; color: string }> = {
  High: {
    bg: "#ffe4e3",
    color: "#d32f2f",
  },
  Medium: {
    bg: "#fff4dc",
    color: "#ed6c02",
  },
  Low: {
    bg: "#e6fbf3",
    color: "#1b8a5a",
  },
};

export default function StoryCard({ story }: Props) {
  const navigate = useNavigate();
  const { users } = useUsers();
  const user = users[story.assignedUserId !== null ? story.assignedUserId : ""];
  function handleClick() {
    navigate(`/projects/${story.projectId}/stories/${story.id}`);
  }
  return (
    <>
      <Card
        sx={{
          width: "100%",
          minHeight: {
            xs: 120,
            sm: 130,
            md: 140,
          },
          borderRadius: 2,
          boxShadow: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "0.2s",
          borderLeft: `0.3rem solid ${priorityTheme[story.priority].color}`,
          "&:hover": {
            boxShadow: 6,
            transform: "translateY(-0.2rem)",
          },
        }}
      >
        <CardContent sx={{ p: 1.5 }}>
          {/* Header */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Typography
              fontWeight="bold"
              sx={{
                fontSize: {
                  xs: 13,
                  sm: 14,
                  md: 15,
                },
                lineHeight: 1.3,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                pr: 1,
              }}
            >
              {story.title}
            </Typography>

            <IconButton size="small" onClick={() => handleClick()}>
              <EditNoteIcon
                sx={{
                  color: "#1e3c72",
                  fontSize: 20,
                }}
              />
            </IconButton>
          </Stack>

          {/* Description */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              mt: 0.5,
              mb: 1,
              fontSize: {
                xs: 11,
                sm: 12,
                md: 13,
              },
            }}
          >
            {story.description}
          </Typography>

          {/* Footer */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Chip
              label={story.priority}
              size="small"
              sx={{
                background: priorityTheme[story.priority].bg,
                color: priorityTheme[story.priority].color,
                fontWeight: 600,
                borderRadius: 1.5,
                height: 22,
                fontSize: 11,
              }}
            />

            {user && (
              <Avatar
                sx={{
                  bgcolor: user.avatarColor,
                  width: 26,
                  height: 26,
                  fontSize: 12,
                }}
              >
                {user.name[0]}
              </Avatar>
            )}
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
