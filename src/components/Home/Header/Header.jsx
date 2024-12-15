import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import styled from "@emotion/styled";
import { HeaderContent } from "utils/Header";
import { Btn, Title } from "designs";
import { title } from "utils/titles-text";
import { colors, media } from "libs/themes";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import useMediaQuery from "@mui/material/useMediaQuery";
import bgImg from "assets/images/header/1.jpg";
import HeaderSwiper from "./HeaderSwiper";
import { AfterLayout } from "utils/GeneralStyles";
import FireBg from "assets/images/Fire.png";

function Header() {
  const isMobile = useMediaQuery(`(max-width: ${media.mobile})`);

  if (!isMobile) {
    return (
      <HeaderContainer>
        <Title.Header>{title.Header}</Title.Header>
        <Title.Sub>{HeaderContent[0].Desc}</Title.Sub>
        <Btn>
          أبدأ رحلتك <RocketLaunchIcon className="rock-icon" />
        </Btn>
      </HeaderContainer>
    );
  }
  return (
    <HeaderWrapper>
      <HeaderSwiper/>
    </HeaderWrapper>
  );
}

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${bgImg});
  background-position: center -200px;
  background-size: cover;
`;

const HeaderWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${colors.bg};
  position: relative;
  z-index: 1;
  &::before {
    ${AfterLayout()}
    background-image: url(${FireBg});
    background-size: contain;
  }
  &::after {
    ${AfterLayout()}
    background-image: url(${FireBg});
    background-size: contain;
  }
`;

export default Header;
