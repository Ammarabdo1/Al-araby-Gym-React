import { keyframes } from "@emotion/react";

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
