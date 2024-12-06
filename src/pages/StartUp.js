import { useState } from "react";
import { CloseLoader, StartUpContainer } from "styles/StartUp";
import { Button, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { GiOpenGate } from "react-icons/gi";
import ChairIcon from "@mui/icons-material/Chair";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

import {
  PacmanLoader,
  PropagateLoader,
  DotLoader,
  CircleLoader,
} from "react-spinners";

import { useRef, useEffect } from "react";
import { styled, keyframes } from "@stitches/react";
import { useTrail, animated } from "@react-spring/web";

import AOS from "aos";
import "aos/dist/aos.css";
import { colors, media } from "libs/themes";
import arabyGym from "assets/images/imgFooter.png";
import bgImgMobile from "assets/images/header/2.jpg";
import bgImg from "assets/images/Al3rapyImages/BgloaderMain2.jpg";
import fireImg from "assets/images/Fire.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

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
    gap: 7,
    marginBottom: 15,
  },
});

const Container2 = styled("div", {
  display: "flex",
  gap: 10,
  marginBottom: 80,
  direction: "ltr",
  "@media (max-width: 1000px)": {
    gap: 12,
    marginBottom: 40,
  },
});

const Box = styled("div", {
  position: "relative",
  width: "9vw",
  height: 150,

  "@media (max-width: 700px)": {
    width: "9vw",
    height: 50,
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
  borderRadius: "50%",
  "@media(max-width: 700px)": {
    borderRadius: "50px",
  },
});

const moveGradient = keyframes({
  "0%": {
    backgroundPosition: "0% 50%",
  },
  "100%": {
    backgroundPosition: "100% 50%",
  },
});

const BackBox = styled(animated.div, {
  ...SharedStyles,
  border: "none",
  borderRadius: "50%",
  boxShadow: `0 3px 5px 1px  ${colors.subTitle}`,
  color: colors.title,
  fontSize: "6vw",
  transition: "background-position 1s ease",
  background: `url(${fireImg})`,
  backgroundSize: "200% 100%",
  animation: `${moveGradient} 3s 3s ease infinite`, // Apply the keyframes animation
  backdropFilter: "blur(5px)",
  "& .alaraby_img": {
    fontSize: "5vw",
  },

  "@media(max-width: 700px)": {
    fontSize: "9vw !important",
    borderRadius: "50px",
    backdropFilter: "blur(15px)",

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
  "y",
  <img src={arabyGym} className="alaraby_img" />,
];

const items2 = [
  "G",
  "y",
  "m",
  <svg width="100" height="100">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: colors.title, stopOpacity: 1 }} />
        <stop
          offset="100%"
          style={{ stopColor: colors.subTitle, stopOpacity: 1 }}
        />
      </linearGradient>
    </defs>
    <FitnessCenterIcon
      style={{
        fontSize: "100px",
        fill: "url(#iconGradient)", // Reference the gradient by ID
      }}
    />
  </svg>,
];

export default function StartUpLoader(props) {
  AOS.init();

  const [trail, api] = useTrail(items.length, () => ({
    rotateY: 0,
  }));

  const [trail2, api2] = useTrail(items2.length, () => ({
    rotateY: 0,
  }));

  const isFlipped = useRef(false);

  const [gradientIndex, setGradientIndex] = useState(0);

  // Array of gradient colors
  const gradients = [
    "linear-gradient(45deg, transparent, transparent)", // Peach
    "linear-gradient(45deg, #585858, #E5E5E5)", // Blue
    "linear-gradient(45deg, #E5E5E5, #003641)", // Pink
  ];

  // Auto change gradient every few seconds
  useEffect(() => {
    const setTime1 = setTimeout(() => {
      setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
      const setTime2 = setTimeout(() => {
        setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
      }, 1000); // Change every 3 seconds
      return () => clearTimeout(setTime2);
    }, 2000); // Change every 3 seconds

    return () => clearTimeout(setTime1); // Cleanup on component unmount
  }, []);
  useEffect(() => {
    api.start({
      rotateY: 180,
    });
    api2.start({
      rotateY: 180,
    });
    isFlipped.current = true;
  }, []);

  const isMobile = useMediaQuery(`(max-width: ${media.tablet})`);

  return (
    <StartUpContainer>
      <AppContainer
        style={{ direction: "ltr !important" }}
        data-aos="zoom-out"
        data-aos-duration="2000"
      >
        <Container>
          {trail.map(({ rotateY }, i) => (
            <Box key={i}>
              <FrontBox
                key={items[i]}
                style={{
                  transform: rotateY.to(
                    (val) => `perspective(600px) rotateY(${val}deg)`
                  ),
                  transformStyle: "preserve-3d",
                }}
              ></FrontBox>
              <BackBox
                gradientIndex={gradientIndex}
                style={{
                  // background: gradients[gradientIndex],
                  transform: rotateY.to(
                    (val) => `perspective(600px) rotateY(${180 - val}deg)`
                  ),
                  transformStyle: "preserve-3d",
                }}
              >
                {items[i]}
              </BackBox>
            </Box>
          ))}
        </Container>
        <Container2>
          {trail2.map(({ rotateY }, i) => (
            <Box key={i}>
              <FrontBox
                key={items2[i]}
                style={{
                  transform: rotateY.to(
                    (val) => `perspective(600px) rotateY(${val}deg)`
                  ),
                  transformStyle: "preserve-3d",
                }}
              ></FrontBox>
              <BackBox
                gradientIndex={gradientIndex}
                style={{
                  // background: gradients[gradientIndex],
                  transform: rotateY.to(
                    (val) => `perspective(600px) rotateY(${180 - val}deg)`
                  ),
                  transformStyle: "preserve-3d",
                }}
              >
                {items2[i]}
              </BackBox>
            </Box>
          ))}
        </Container2>
        {/* <CircleLoader 
          className="loader"
          color={colors.title}
          radius={100}
          speedMultiplier={1}
          size={isMobile ? 15 : 25}
        /> */}
        {/* <PacmanLoader */}
        {/* <DotLoader */}
        <CircleLoader
          className="loader"
          color={colors.title}
          radius={100}
          speedMultiplier={1}
          size={isMobile ? 60 : 80}
        />

        <CloseLoader>
          <Button onClick={() => props.setLoader(false)}>
            <CloseIcon style={{ fontSize: "2rem", color: "#EECE95" }} />
          </Button>
        </CloseLoader>
      </AppContainer>
    </StartUpContainer>
  );
}
