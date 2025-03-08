import { keyframes } from "@emotion/react";
import { colors } from "./themes";

export const flashRightToLeft = (position) => keyframes`
  0% {
    background-position: ${position === "left" ? "-200%" : "200%"};
  }
  10% {
    background-position: 0%;
  }
  100% {
    background-position: 0%; /* Hold position for the last 10 seconds */
  }
`;

export const moveBackGround = (isMobile) => keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: ${isMobile ? "0% -200%" : "-100% -200%"};
  }
`;

export const flash = (isMobile) => keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const RotateBackGround = keyframes`
  0% {
    transform: rotate(0deg); /* Start position */
  }
  100% {
    transform: rotate(1440deg); /* End position */
  }
`;

export const Scale = keyframes`
  0% {
    backdrop-filter: blur(8px);
    transform: scale(1);
  }
  30% {
    
    backdrop-filter: blur(8px);
    transform: scale(1);
  }
  50% {
    
    backdrop-filter: blur(0px);
    transform: scale(.7);
  }
  80% {
    
    backdrop-filter: blur(0px);
    transform: scale(.7);
  }
  100% {
    backdrop-filter: blur(8px);
    transform: scale(1);

  }
`;

export const MoveTOLeft = (Displacement) => keyframes`
  0% {
    transform: translateX(0px);
  }

  40% {
    transform: translateX(${Displacement}px);
  }

  70% {
    transform: translateX(0px);
  }

  100% {
    transform: translateX(0px);
  }
`;

export const floatAnimation = keyframes`
0% {
  transform: translateY(-10px) scale(1.05);
}
50% {
  transform: translateY(0px);
}
100% {
  transform: translateY(-10px) scale(1.05);
}
`;

export const shadowEff = keyframes`
  0% {
    box-shadow: 0 -10px 20px 2px ${colors.after};
  }

  50% {
    box-shadow: 0 -10px 20px 2px ${colors.after_hover};
  }

  100% {
    box-shadow: 0 -10px 20px 2px ${colors.after};
  }
`;

export const iconMover = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  50% {
    transform: translateX(40px); /* Moves right */
    opacity: 1;
  }
  75% {
    transform: translateX(30px); /* Slight bounce back */
    opacity: 0.8;
  }
  100% {
    transform: translateX(50px); /* Final position */
    opacity: 0;
  }
`;

export const backgroundMover = keyframes`
  0% {
    background-position: 100% 0;
  }
  50% {
    background-position: 50% 0;
  }
  100% {
    background-position: 100% 0;
  }
`;

export const glow = keyframes`
  from {
    opacity: 0.7;
  }
  to {
    opacity: 1;
  }
`;

export const ShadowLight = keyframes`
  0% {
    box-shadow: 0px 2px 10px rgba(0, 128, 0, 0.58);
  }
  50% {
    box-shadow: 0px 2px 15px rgba(0, 128, 0, 0.28);
  }
  100% {
    box-shadow: 0px 2px 10px rgba(0, 128, 0, 0.58);
  }
`;
