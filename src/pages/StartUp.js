import React ,{ useRef, useEffect } from "react";
import { CloseLoader, StartUpContainer } from "styles/StartUp";
import { Button } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { ScaleLoader } from "react-spinners";

import { styled, keyframes } from "@stitches/react";
import { useTrail, animated } from "@react-spring/web";

import Aos from "aos";
import "aos/dist/aos.css";
import { colors, media } from "libs/themes";
import bgImgMobile from "assets/images/header/2.jpg";
import bgImg from "assets/images/Al3rapyImages/BgloaderMain2.jpg";
import fireImg from "assets/images/Fire.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { InitialAos } from "utils/initialAos";
import useStore from "libs/useStore";

export default function StartUpLoader() {
InitialAos(Aos)
  const {setLoader} = useStore();
  const [trail, api] = useTrail(items.length, () => ({
    rotateX: 0,
  }));

  const isFlipped = useRef(false);

  useEffect(() => {
    api.start({
      rotateX: 180,
    });
    isFlipped.current = true;
  }, [api]);

  const isMobile = useMediaQuery(`(max-width: ${media.tablet})`);

  return (
    <StartUpContainer>
      <AppContainer
        style={{ direction: "ltr !important" }}
        data-aos="zoom-out"
        data-aos-duration="2000"
      >
        <Container>
          {trail.map(({ rotateX }, i) => (
            <Box key={i}>
              <FrontBox
                key={items[i]}
                style={{
                  transform: rotateX.to(
                    (val) => `perspective(600px) rotateX(${val}deg)`
                  ),
                  transformStyle: "preserve-3d",
                }}
              ></FrontBox>
              <BackBox
                style={{
                  // background: gradients[gradientIndex],
                  transform: rotateX.to(
                    (val) => `perspective(600px) rotateX(${180 - val}deg)`
                  ),
                  transformStyle: "preserve-3d",
                }}
              >
                {items[i]}
              </BackBox>
            </Box>
          ))}
        </Container>

        <ScaleLoader
          className="loader"
          color={colors.title}
          height={isMobile ? 60 : 100}
          radius={100}
          speedMultiplier={1}
          width={isMobile ? 6 : 10}
        />

        <CloseLoader>
          <Button onClick={() => setLoader(false)}>
            <CloseIcon style={{ fontSize: "2rem", color: "#EECE95" }} />
          </Button>
        </CloseLoader>
      </AppContainer>
    </StartUpContainer>
  );
}


const AppContainer = styled("div", {
  position: "relative",
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center bottom",

  "@media (max-width: 700px)": {
    backgroundImage: `url(${bgImgMobile})`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
  },
});

const Container = styled("div", {
  display: "flex",
  gap: 10,
  marginBottom: 80,
  direction: "ltr",
  "@media (max-width: 1000px)": {
    gap: 8,
    marginBottom: 50,
  },
});

const Box = styled("div", {
  position: "relative",
  width: "4vw",
  height: "5vw",

  "@media (max-width: 700px)": {
    width: "8vw",
    height: "12vw",
  },
});

const SharedStyles = {
  width: "100%",
  height: "100%",

  position: "absolute",
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Helvetica",
  fontWeight: 800,
  backfaceVisibility: "hidden",
};

const FrontBox = styled(animated.div, {
  ...SharedStyles,
  backgroundColor: "transparent",
  border: "none",
});

const moveGradient = keyframes({
  "0%": {
    backgroundPosition: "100% 100%",
    boxShadow: `0 3px 5px 1px  ${colors.title}`,
  },
  "20%": {
    boxShadow: `0 3px 5px 1px  ${colors.after_hover}`,
  },
  "85%": {
    boxShadow: `0 3px 5px 1px  ${colors.title}`,
    backgroundSize: "cover",
  },
  "100%": {
    backgroundPosition: "0% 0%",
    backgroundSize: "cover",
  },
});

const BackBox = styled(animated.div, {
  ...SharedStyles,
  border: "none",
  borderRadius: "5px",
  boxShadow: `0 3px 5px 1px  ${colors.title}`,
  color: colors.title,
  fontSize: "4vw",
  transition: "background-position 1s ease",
  background: `url(${fireImg})`,
  animation: `${moveGradient} 3s 2s ease infinite`, // Apply the keyframes animation
  backdropFilter: "blur(15px)",
  "& .alaraby_img": {
    fontSize: "5vw",
  },

  "@media(max-width: 700px)": {
    fontSize: "9vw !important",

    "& .alaraby_img": {
      width: "100%",
    },
  },
});

const items = [
  "a",
  "l",
  "-",
  "a",
  "r",
  "a",
  "b",
  "i",
  <svg width="80%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="30%" stopColor={colors.title} />
        <stop offset="30%" stopColor={colors.subTitle} />
        <stop offset="80%" stopColor={colors.title} />
      </linearGradient>
    </defs>
    <FitnessCenterIcon
      sx={{
        fill: "url(#iconGradient)", // Reference the gradient
      }}
    />
  </svg>,
];