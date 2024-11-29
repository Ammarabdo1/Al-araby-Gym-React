import { keyframes } from '@emotion/react';

export const flashRightToLeft = keyframes`
  0% {
    background-position: 200%;
  }
  10% {
    background-position: 0%;
  }
  100% {
    background-position: 0%; /* Hold position for the last 10 seconds */
  }
`;

export const rotate3D = keyframes`
0% { transform: rotateX(0deg) rotateY(0deg); }
50% { transform: rotateX(180deg) rotateY(180deg); }
100% { transform: rotateX(360deg) rotateY(360deg); }
`;
