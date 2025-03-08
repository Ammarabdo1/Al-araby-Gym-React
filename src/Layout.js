import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "components/Navbar";
import ContactUs from "components/ContactUs/ContactUs";
import FloatingButton from "components/FloatingButton";
import Footer from "components/Footer/Footer";

export default function Layout() {
  return (
    <Box sx={{ position: "relative", direction: "rtl", textAlign: "right" }}>
      <NavBar />
      <Outlet />  {/* current page */}
      <ContactUs />
      <FloatingButton />
      <Footer />
    </Box>
  );
}
