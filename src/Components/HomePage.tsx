
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import { Box, Toolbar } from "@mui/material";
import Footer from "./Footer";
export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f4f7ff 0%, #eef2ff 100%)",
      }}
    >
      <Navbar />

      {/* Spacer to prevent overlap */}
      <Toolbar />

      <MainContent />
      <Footer/>
    </Box>
  );
}
