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
import { InitialAos } from "utils/initialAos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import SwipeRightIcon from "@mui/icons-material/SwipeRight";
import SwipeIcon from '@mui/icons-material/Swipe';
import { iconMover } from "libs/frames";

function Header() {
  const isMobile = useMediaQuery(`(max-width: ${media.mobile})`);
  InitialAos();
  const navigate = useNavigate();
  if (!isMobile) {
    return (
      <HeaderSection>
        <HeaderContainer data-aos="zoom-out">
          <Title.Header>{title.Header}</Title.Header>
          <Title.Sub>{HeaderContent[0].Desc}</Title.Sub>
          <Btn onClick={() => navigate("/prices")}>
            أبدأ رحلتك <RocketLaunchIcon className="rock-icon" />
          </Btn>
        </HeaderContainer>
      </HeaderSection>
    );
  }
  return (
    <HeaderSection>
      <HeaderWrapper data-aos="zoom-out">
        <HeaderSwiper />
      </HeaderWrapper>
      <SwipeRightHand color="error" />
    </HeaderSection>
  );
}

const HeaderSection = styled.div`
  overflow: hidden;
  position: relative;
`;

const SwipeRightHand = styled(SwipeIcon)`
  position: absolute;
  top: 150px;
  left: 10px;
  color: ${colors.title};
  z-index: 1000;
  font-size: 3rem;
  opacity: 0;
  

  /* animation: iconMover 1s linear 1s 1; */
  /* animation: ${iconMover} 1.8s ease-out 1s 1; */
  animation: ${iconMover} 1.8s cubic-bezier(0.4, 0, 0.2, 1) 1s 1;
`;

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
