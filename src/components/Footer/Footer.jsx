import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import About from "./About";
import Links from "./Links";
import Media from "./Media";
import Contact from "./Contact";
import Copyright from "./Copyright";
import { colors, media } from "libs/themes";
import { AfterLayout } from "utils/GeneralStyles";
import fireImg from "assets/images/Fire.png";
import Logo from "./Logo";

const Footer = () => {
  return (
    <FooterSection>
      <Container container spacing={10}>
        <Logo />
        <About />
        <Links />
        <Media />
        <Contact />
      </Container>
      <Copyright />
    </FooterSection>
  );
};

const FooterSection = styled.div`
  background: ${colors.bg};
  position: relative;
  z-index: 2;
  &::after {
    ${AfterLayout()};
    background-image: url(${fireImg});
    opacity: 0.3;
    z-index: -1;
  }
`;

const Container = styled(Grid)`
  padding: 0px 100px 100px 100px;
  @media (max-width: ${media.mobile}) {
    padding: 0 30px 50px 30px;
  }
`;

export default Footer;
