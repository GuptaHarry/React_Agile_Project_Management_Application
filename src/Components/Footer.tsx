import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  Divider,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CodeIcon from "@mui/icons-material/Code";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        color: "white",
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2} alignItems="center">
          <Stack direction="row" spacing={1} alignItems="center">
            <CodeIcon />
            <Typography variant="h6" fontWeight="bold">
              Agile Project Management Application
            </Typography>
          </Stack>

          <Divider
            sx={{ width: "100%", borderColor: "rgba(255,255,255,0.2)" }}
          />

          <Stack spacing={0.5} alignItems="center">
            <Typography fontWeight="bold">Project Created By</Typography>

            <Typography>Harikrishna Gupta</Typography>

            <Typography variant="body2" sx={{ opacity: 0.85 }}>
              SSC Intern — Software Development Team @ VConstruct Pvt. Ltd.
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center">
              <MailOutlineIcon sx={{ fontSize: 18 }} />
              <Link
                href="mailto:harikrishnagupta72@gmail.com"
                underline="hover"
                sx={{
                  color: "white",
                  opacity: 0.9,
                  "&:hover": { opacity: 1 },
                }}
              >
                harikrishnagupta72@gmail.com
              </Link>
            </Stack>
          </Stack>

          <Divider
            sx={{ width: "100%", borderColor: "rgba(255,255,255,0.2)" }}
          />

          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} Agile Project Manager • Built with
            React & Material UI
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
