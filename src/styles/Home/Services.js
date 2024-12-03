import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { colors, media } from "libs/themes";
import { AfterLayout } from "utils/GeneralStyles";
import FireBg from 'assets/images/Fire.png'

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.2rem;
  padding-top: 3rem;
  background: ${colors.bg};

  position: relative;
  z-index: 1;
  &::before {
    ${AfterLayout("#a33f3a37")}
    background-image: url(${FireBg});
    opacity: .3;
  }

  .grid {
    margin-left: 2rem;
  }

  @media (max-width: ${media.mobile}) {
    .grid {
    margin-left: 0;
  }

  }
`;

export const ServiceCard = styled(Card)`
  width: 20vw;
  height: 90%;
  min-width: 280px;
  margin-top: 1.5rem;
  text-align: center;
  background-size: cover;
  background-position: center;
  box-shadow: ${colors.shadow};
  background: ${({ bg }) => `url(${bg}) `};
  background-color: black;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${colors.bg_hover};
    backdrop-filter: blur(2px);
    z-index: -1;
  }
  @media (max-width: ${media.mobile}) {
    width: 100%;
  height: 90%;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: #a33f3a;

`;
