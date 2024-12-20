import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import { colors, media } from "libs/themes";
import { AfterLayout, centerStyles } from "utils/GeneralStyles";
import FireBg from "assets/images/Fire.png";

export const ProjectsContainer = styled(Grid)`
  padding-bottom: 14rem;
  padding-top: 1rem;
  background: ${colors.bg};
  position: relative;
  z-index: 1;
  overflow: hidden;
  &::after {
    ${AfterLayout()}
    background-image: url(${FireBg});
    @media (max-width: ${media.mobile}) {
      background-size: contain;
    }
    opacity: 0.5;
  }

  @media (max-width: ${media.mobile}) {
    padding-bottom: 10rem;
  }
`;

export const TextSide = styled(Grid)`
  padding-right: 7vw;
  max-height: fit-content;
  ${centerStyles("column", "start", "start")} // center sec
  h1 {
    text-align: start;
    margin-bottom: 30px;
    width: 100%;
  }

  h6 {
    text-align: start;
    margin-bottom: 0px;
    color: ${colors.link_hover};
  }

  @media (max-width: ${media.tablet}) {
    ${centerStyles("column", "center", "start")} // center sec
    h1 {
      width: 90%;
    }
    h6 {
      width: 90%;
      font-size: 6vw;
      background: transparent;
    }
    padding-right: 0px;
  }
`;

export const StepsContainer = styled.div`
  margin-top: 30px;
  width: 70%;
  ${centerStyles("row", "center", "start")}
  @media (max-width: ${media.tablet}) {
    width: 90%;
  }
`;

export const ContactButtonContainer = styled.div`
  margin-bottom: 6rem;
  width: 100%;
  button {
    margin-top: 4rem;
  }

  @media (max-width: ${media.tablet}) {
    width: 90%;
  }
`;

export const ImagesSide = styled(Grid)``;
