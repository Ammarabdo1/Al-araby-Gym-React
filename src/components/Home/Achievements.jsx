import React, { useEffect } from "react";
import { Grid, Card, Typography, Box } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  AchieveContainer,
  AchieveSection,
  CardsContainer,
  GridCard,
  AchieveCard,
  KnowMoreButton,
} from "styles/Home/Achievements";
import { Btn, Description, Title } from "designs";
import { InitialAos } from "utils/initialAos";
import { achievements } from "utils/Achievements";
import { title } from "utils/titles-text";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const Achievements = () => {
  useEffect(() => {
    InitialAos(Aos);
  }, []);

  return (
    <AchieveContainer>
      <AchieveSection>
        <Title>
          {title.Achieve}
          <TrendingUpIcon />
        </Title>
        <Description></Description>
        <CardsContainer container spacing={3} justifyContent="center">
          {achievements.map((achievement, index) => (
            <GridCard item xs={12} sm={6} md={4} key={index} data-aos="fade-up">
              <AchieveCard>
                <Box>{achievement.icon}</Box>
                <Description>{achievement.title}</Description>
                <Description.Sub>{achievement.description}</Description.Sub>
                <KnowMoreButton>
                  <Btn>أعرف أكثر</Btn>
                </KnowMoreButton>
              </AchieveCard>
            </GridCard>
          ))}
        </CardsContainer>
      </AchieveSection>
    </AchieveContainer>
  );
};

export default Achievements;
