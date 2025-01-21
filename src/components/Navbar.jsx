import React, { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navImg from "assets/images/imgFooter.png";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import EmailIcon from "@mui/icons-material/Email";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import { NavbarContainer } from "styles/Navbar.js";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { Facebook, WhatsApp } from "@mui/icons-material";
import Btn from "designs/Button";
import { colors } from "libs/themes.js";
import ImgInstagram from "assets/images/instagram.ico";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navbarRef = useRef(null);
  const navigate = useNavigate();

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Mobile size <= 768px
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close Navbar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsExpanded(false);
  };

  return (
    <NavbarContainer>
      <Navbar
        expand="md"
        className="navbar"
        expanded={isExpanded}
        ref={navbarRef}
      >
        <Container fluid>
          {/* //! List icon */}
          <Navbar.Toggle
            aria-controls="navbarScroll"
            id="list"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <MenuIcon className="list-icon" />
          </Navbar.Toggle>

          {/* //! Logo */}
          <Navbar.Brand href="#">
            <img src={navImg} alt="navLogo" />
          </Navbar.Brand>

          {/* //! Links */}
        <Navbar.Collapse id="navbarScroll" onClick={handleLinkClick} >
            <Nav
              className={`mx-auto ${isMobile ? "" : "w-auto"}`}
              style={{
                maxHeight: "300px",
                display: "flex",
                justifyContent: isMobile ? "flex-start" : "center",
                gap: "20px", // Space between links
              }}
              navbarScroll
            >
              <Link
                to='/'
                className="link d-flex text-decoration-none justify-content-between align-items-center"
                style={{ marginTop: isMobile && "20px" }}
                onClick={handleLinkClick}
              >
                <span>الرئيسية</span>
                {isMobile && <HomeIcon />}
              </Link>
              <Link
                to='/about'
                className="link d-flex text-decoration-none justify-content-between align-items-center"
                onClick={handleLinkClick}
              >
                <span>من نحن</span>
                {isMobile && <InfoIcon />}
              </Link>
              <Nav.Link
                href="#action3"
                className="link d-flex text-decoration-none justify-content-between align-items-center"
                onClick={handleLinkClick}
              >
                <span>تواصل معنا</span>
                {isMobile && <EmailIcon />}
              </Nav.Link>
              <Link
                to='/projects'
                className="link d-flex text-decoration-none justify-content-between align-items-center"
                onClick={handleLinkClick}
              >
                <span>البعض من ابطالنا</span>
                {isMobile && <SportsMartialArtsIcon />}
              </Link>
            </Nav>
            {!isMobile && (
              <Btn>
                <WhatsApp
                  style={{
                    color: colors.whatsApp,
                    fontSize: "1.5rem",
                    marginRight: "0",
                  }}
                />
              </Btn>
            )}
            <div className="social-buttons">
              {isMobile && (
                <>
                  <Button>
                    <WhatsApp
                      style={{ color: colors.whatsApp, fontSize: "2rem" }}
                    />
                  </Button>
                  <Button>
                    <Facebook
                      style={{ color: colors.facebook, fontSize: "2rem" }}
                    />
                  </Button>
                  <Button>
                    <img src={ImgInstagram} alt="Instagram" />
                  </Button>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavbarContainer>
  );
}

export default NavBar;
