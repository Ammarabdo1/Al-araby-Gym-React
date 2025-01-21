import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import FooterLogo from "assets/images/imgFooter.png";
import { colors, media } from "libs/themes";
import { InitialAos } from "utils/initialAos";
import Aos from "aos";
import { RotateBackGround, Scale } from "libs/frames";

const Logo = () => {
  InitialAos(Aos)
  return (
    <Container item lg={12} md={12} xs={12}>
      <Section data-aos="fade-down">
        <Image data-aos="zoom-in">
          <img src={FooterLogo} />
        </Image>
        <ImageContainer></ImageContainer>
      </Section>
    </Container>
  );
};

const Container = styled(Grid)`
  @media (max-width: ${media.mobile}) {
    display: flex;
    justify-content: center;
  }
`;

const Section = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 10;
  animation: ${Scale} 20s linear infinite;
  img {
    width: 80%;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  background: transparent;
  width: 100px;
  height: 100px;

  background: conic-gradient(
    transparent,
    ${colors.bg_hover},
    transparent,
    ${colors.bg_hover},
    transparent,
    ${colors.bg_hover},
    transparent,
    ${colors.bg_hover}
  );

  border-radius: 50%;
  border-right: 4px solid ${colors.subTitle};
  border-left: 4px solid ${colors.title};
  box-shadow: 0px 0 10px 3px ${colors.after_hover};

  animation: ${RotateBackGround} 40s linear infinite;
`;

export default Logo;
