import { colors } from "libs/themes";
import styled from "styled-components";
import { AfterLayout } from "utils/GeneralStyles";

export const StartUpContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const CloseLoader = styled.div`
  position: absolute;
  top: 5vh;
  right: 5vh;
  @media (max-width: 1000px) {
    top: 1vh;
    right: 1vh;
  }    
`;

