import React from "react";
import CardsInfo from "components/CardIsnfo";
import { InitialAos } from "utils/initialAos";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { HeroesInfo } from "./HeroesInfo";
import { Box } from "@mui/material";
import { styled as muiStyled } from "@mui/system";
import HeroGym from "assets/images/Hero.png";

const ProjectsInfo = () => {
  InitialAos();
  return (
    <HeroesContainer id="heroes">
      <CardsInfo
        cards={HeroesInfo}
        title={
          <span>
            ابطال العربي <FlashOnIcon />
          </span>
        }
        src="Heroes/H"
        avatar={HeroGym}
      />
    </HeroesContainer>
  );
};

const HeroesContainer = muiStyled(Box)({});

export default ProjectsInfo;
