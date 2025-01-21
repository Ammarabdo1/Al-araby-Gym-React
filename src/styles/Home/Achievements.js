import styled from "@emotion/styled";
import { Grid, Card, Typography, Box } from "@mui/material";
import { colors, media } from "libs/themes";
import { AfterLayout } from "utils/GeneralStyles";
import FireBg from "assets/images/Fire.png";
import FireImg from "assets/images/Fire.png";

export const AchieveContainer = styled.div`
  overflow: hidden;
`;

export const AchieveSection = styled(Box)`
  padding: "2rem";
  text-align: "center";
  background: ${colors.bg};
  padding-bottom: 14rem;
  padding-top: 8rem;
  position: relative;
  z-index: 1;
  &::before {
    ${AfterLayout()}
    background-image: url(${FireBg});
    @media (max-width: ${media.mobile}) {
      background-size: contain;
    }
    opacity: 0.5;
  }
  h1 {
    svg {
      margin-right: 1rem;
    }
  }

  @media (max-width: ${media.mobile}) {
    padding-bottom: 10rem;
  }
`;

export const CardsContainer = styled(Grid)`
  margin-top: 2rem;
  padding: 0 2rem;
`;

export const GridCard = styled(Grid)``;

export const AchieveCard = styled(Card)`
  background: transparent;
  box-shadow: ${colors.shadow};
  padding: 1rem;
  text-align: start;
  svg {
    color: ${colors.subTitle};
}
`;

export const KnowMoreButton = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  button {
    background: url(${FireImg});
    background-size: 200%;
    box-shadow: 0 2px 3px 2px;
    border-bottom: 3px solid ${colors.after_hover};
    border-right: 3px solid ${colors.after_hover};
    border-left: 3px solid ${colors.after_hover};
  }
`;
