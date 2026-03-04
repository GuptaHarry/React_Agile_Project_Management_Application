import { Box, Stack, Typography } from "@mui/material";
import FolderOffIcon from "@mui/icons-material/FolderOff";

export default function NoProjectFound() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          py: 8,
          display: "flex",
          justifyContent: "center",
          minHeight: "30vh",
          minWidth: "30vh",
        }}
      >
        <Stack
          alignItems="center"
          spacing={2}
          sx={{
            p: 4,
            borderRadius: 3,
            background: "#1e3c720a",
            border: "0.1rem dashed rgba(30,60,114,0.2)",
            maxWidth: 420,
            textAlign: "center",
          }}
        >
          <FolderOffIcon
            sx={{
              fontSize: 50,
              color: "#1e3c72",
              opacity: 0.7,
            }}
          />

          <Typography variant="h6" fontWeight="bold" sx={{ color: "#1e3c72" }}>
            No Projects Found
          </Typography>

          <Typography variant="body2" color="text.secondary">
            We couldn’t find any projects matching your search. Try adjusting
            filters or create a new project.
          </Typography>
        </Stack>
      </Box>
    </>
  );
}
