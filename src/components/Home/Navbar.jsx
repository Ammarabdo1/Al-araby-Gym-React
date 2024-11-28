import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navImg from "assets/images/imgFooter.png";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ConstructionIcon from "@mui/icons-material/Construction";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile size <= 768px
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        {/* //! List icon */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* //! Logo */}
        <Navbar.Brand href="#">
          <img src={navImg} alt="navLogo" style={{ height: "40px" }} />
        </Navbar.Brand>

        {/* //! Links */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className={`mx-auto ${isMobile ? "" : "w-auto"}`}
            style={{
              maxHeight: "200px",
              display: "flex",
              justifyContent: isMobile ? "flex-start" : "center",
              gap: "20px", // Space between links
            }}
            navbarScroll
          >
            <Nav.Link
              href="#action1"
              className="d-flex justify-content-between align-items-center"
            >
              <span>الرئيسية</span>
              {isMobile && <HomeIcon />}
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className="d-flex justify-content-between align-items-center"
            >
              <span>من نحن</span>
              {isMobile && <InfoIcon />}
            </Nav.Link>
            <Nav.Link
              href="#action3"
              className="d-flex justify-content-between align-items-center"
            >
              <span>البعض من مشاريعنا</span>
              {isMobile && <ConstructionIcon />}
            </Nav.Link>
            <Nav.Link
              href="#action4"
              className="d-flex justify-content-between align-items-center"
            >
              <span>أبطال العربي</span>
              {isMobile && <SportsMartialArtsIcon />}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
