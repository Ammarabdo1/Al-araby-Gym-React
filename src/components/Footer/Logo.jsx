import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import FooterLogo from "assets/images/imgFooter.png";
import { media } from "libs/themes";
import { InitialAos } from "utils/initialAos";
import Aos from "aos";

const Logo = () => {
  useEffect(() => {
    return InitialAos(Aos)
  }, [])
  return (
    <Container item lg={12} md={12} xs={12}>
      <img data-aos='fade-down' src={FooterLogo} />
    </Container>
  );
};

const Container = styled(Grid)`
  img {
    width: 80px;
  }

  @media (max-width: ${media.mobile}) {
    display: flex;
    justify-content: center;
  }
`;

export default Logo;
