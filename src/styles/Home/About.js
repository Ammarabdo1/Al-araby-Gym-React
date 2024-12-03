import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import { colors, media } from "libs/themes";
import { AfterLayout, centerStyles } from "utils/GeneralStyles";
import FireBg from 'assets/images/Fire.png'

export const AboutContainer = styled(Grid)`
  background: ${colors.bg};
  padding: 80px 0;
  position: relative;
  z-index: 1;
  &::before {
    ${AfterLayout("#a33f3a37")}
    background-image: url(${FireBg});
    opacity: .3;
  }
`;

export const Text = styled(Grid)`
  ${centerStyles("column")} // center sec
  padding-right: 7vw;

  h1 {
    text-align: start;
    margin-bottom: 20px;
    width: 100%;
  }

  h6 {
    text-align: start;
    line-height: 30px;
    margin-bottom: 0px;
    font-size: 1rem;
    color: ${colors.link_hover};
  }

  @media (max-width: ${media.tablet}) {
    h1 {
        width: 90%;
    }
    h6 {
      width: 90%;
    }
    padding-right: 0px;
  }
`;

export const Image = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  &::after {
    ${AfterLayout(colors.after_hover)}
  }

  img {
    width: 50%;
    max-width: 100%;
  }

  @media (max-width: ${media.mobile}) {
    img {
      width: 70%;
      max-width: 100%;
    }
    margin-top: 30px;
  }
`;
