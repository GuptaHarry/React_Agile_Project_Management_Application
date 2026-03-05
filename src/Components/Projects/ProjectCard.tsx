import {
  Card,
  CardContent,
  Typography,
  Avatar,
  AvatarGroup,
  Stack,
  Chip,
  Box,
  CardActionArea,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import type { Project } from "../../Types/project";
import { useNavigate } from "react-router-dom";
import useUsers from "../../Hooks/useUsers";

interface Props {
  project: Project;
}

// Calculate days difference
const getDaysAgo = (dateString: string) => {
  const createdDate = new Date(dateString);
  const now = new Date();
  const diffTime: number = now.getTime() - createdDate.getTime(); // difference in milliseconds
  const diffDays = Math.abs(Math.floor(diffTime / (1000 * 60 * 60 * 24)));

  if (diffDays === 0) return "Created today";
  if (diffDays === 1) return "Created 1 day ago";
  return `Created ${diffDays} days ago`;
};

export default function ProjectCard({ project }: Props) {
  const navigate = useNavigate();
  const { users } = useUsers();
  const handleOpen = () => {
    navigate(`/projects/${project.id}`);
  };

  const teamMembers = project.teamMemberIds
    .map((id) => {
      return users[id];
    })
    .filter(Boolean);

  return (
    <Card
      sx={{
        height: "100%", // equal height
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        boxShadow: 3,
        transition: "0.3s",
        "&:hover": {
          boxShadow: 8,
          transform: "translateY(-0.4rem)",
        },
      }}
    >
      <CardActionArea
        onClick={handleOpen}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <CardContent
          sx={{
            flexGrow: 1,
            p: {
              xs: 2,
              sm: 2.5,
              md: 3,
            },
          }}
        >
          {/* Header */}
          <Stack direction="row" spacing={1} alignItems="center" mb={1}>
            <FolderIcon color="primary" />
            <Typography variant="h6" fontWeight="bold" noWrap>
              {project.name}
            </Typography>
          </Stack>

          {/* Description */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              minHeight: 60, // fixed space for text
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.description || "No description available"}
          </Typography>

          {/* Team Section */}
          <Box mt={3}>
            <Typography variant="caption" color="text.secondary">
              Team Members
            </Typography>

            <AvatarGroup max={3} sx={{ mt: 1 }}>
              {teamMembers.map((user) => (
                <Avatar
                  key={user.id}
                  sx={{
                    bgcolor: user.avatarColor,
                    width: 36,
                    height: 36,
                    fontSize: 14,
                  }}
                >
                  {user.name.charAt(0)}
                </Avatar>
              ))}
            </AvatarGroup>
          </Box>
        </CardContent>

        {/* Footer */}
        <Box
          sx={{
            px: 2,
            pb: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Chip
            label={`${project.teamMemberIds.length} Members`}
            color="primary"
            size="small"
            variant="outlined"
          />

          <Typography variant="caption" color="text.secondary">
            {/* {new Date(project.createdAt).toLocaleDateString()} */}
            {getDaysAgo(project.createdAt)}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
