import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "@emotion/styled";
import { Grid, Card, Box } from "@mui/material";
import { colors, media } from "libs/themes";
import { AfterLayout } from "utils/GeneralStyles";
import FireBg from "assets/images/Fire.png";
import FireImg from "assets/images/Fire.png";
import { Btn, Description } from "designs";
import { InitialAos } from "utils/initialAos";

import useStore from "libs/useStore";
import { useNavigate } from "react-router-dom";

const AchievementCard = ({achievement}) => {
  InitialAos(Aos);
  const { set } = useStore();
  const navigate = useNavigate();
  return (
    <GridCard item xs={12} sm={6} md={4} data-aos="fade-up">
      <AchieveCard>
        <Box>{achievement.icon}</Box>
        <Description>{achievement.title}</Description>
        <Description.Sub>{achievement.description}</Description.Sub>
        <KnowMoreButton>
          <Btn onClick={() => achievement.clickHandler(navigate, set)}>
            أعرف أكثر
          </Btn>
        </KnowMoreButton>
      </AchieveCard>
    </GridCard>
  );
};

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

export default AchievementCard;
