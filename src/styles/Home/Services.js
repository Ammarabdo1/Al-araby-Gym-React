import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { colors, media } from "libs/themes";
import { AfterLayout } from "utils/GeneralStyles";
import FireBg from "assets/images/Fire.png";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.2rem 14rem 1.2rem;
  background: ${colors.bg};
  overflow: hidden;
  position: relative;
  z-index: 1;
  &::before {
    ${AfterLayout("#a33f3a37")}
    background-image: url(${FireBg});
    opacity: 0.3;
  }

  .grid {
    margin-left: 2rem;
  }

  @media (max-width: ${media.mobile}) {
    .grid {
      margin-left: 0;
    }
    
    padding-bottom: 10rem;
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
    z-index: -1;
  }
  transition: transform 0.3s ease, background 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);

    &::after {
      background: url(${FireBg});
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to left, ${colors.after_hover}, ${colors.bg_hover});
      z-index: -1;
    }
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
