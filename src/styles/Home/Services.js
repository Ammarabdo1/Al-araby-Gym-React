import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { colors, media } from "libs/themes";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: ${colors.bg};

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
  width: 100%;
  max-width: 310px;
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
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: #a33f3a;
`;
