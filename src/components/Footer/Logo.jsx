import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import FooterLogo from "assets/images/imgFooter.png";
import { colors, media } from "libs/themes";

const Logo = () => {
  return (
    <Container item lg={12} md={12} xs={12}>
      <img src={FooterLogo} />
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
