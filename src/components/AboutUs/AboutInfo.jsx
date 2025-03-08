import React from "react";
import { InitialAos } from "utils/initialAos";

import StarIcon from "@mui/icons-material/Star";
import CardsInfo from "components/CardIsnfo";
import InsightsIcon from "@mui/icons-material/Insights";
import saleh from "assets/images/Reviews/Saleh.JPG";

import { RiMedalLine } from "react-icons/ri";
import { RiMedal2Fill } from "react-icons/ri";
import { styled as muiStyled } from "@mui/system";

const First = muiStyled(RiMedal2Fill)({
  color: "rgb(201, 154, 0) !important",
  fontSize: "1rem !important",
});

const Second = muiStyled(RiMedalLine)({
  color: "rgb(142, 142, 142) !important",
  fontSize: "1rem !important",
});

const Third = muiStyled(StarIcon)({
  color: "rgb(88, 63, 37) !important",
  fontSize: "1rem !important",
});

const AboutInfo = () => {
  const cards = [
    {
      heroName: "ك_ صالح العربي",
      des: "احمد علي الدوليه ",
      icon: <First />,
      img: "1",
      score: <span style={{ fontSize: ".8rem" }}>1st</span>,
    },

    {
      heroName: "ك_ صالح العربي",
      des: "الاسكندريه درجه اولي",
      icon: <First />,
      img: "4",
      score: <span style={{ fontSize: ".8rem" }}>1st</span>,
    },

    {
      heroName: "ك_ صالح العربي",
      des: "حورس الدوليه",
      icon: <First />,
      img: "5",
      score: <span style={{ fontSize: ".8rem" }}>1st</span>,
    },

    {
      heroName: "ك_ صالح العربي",
      icon: <First />,
      des: "جمهورية",
      img: "6",
      score: <span style={{ fontSize: ".8rem" }}>1st</span>,
    },

    {
      heroName: "ك_ صالح العربي",
      icon: <First />,
      des: "جمهورية",
      img: "6",
      score: <span style={{ fontSize: ".8rem" }}>1st</span>,
    },

    {
      heroName: "ك_ صالح العربي",
      des: "احمد علي الدوليه ",
      icon: <StarIcon />,
    },

    {
      heroName: "ك_ صالح العربي",
      des: "احمد علي الدوليه ",
      icon: <StarIcon />,
    },

    {
      heroName: "ك_ صالح العربي",
      des: "احمد علي الدوليه ",
      icon: <StarIcon />,
    },

    {
      heroName: "ك_ صالح العربي",
      des: "شلبي كلاسيك",
      score: "1st",
      icon: <StarIcon />,
    },

    {
      heroName: "ك_ صالح العربي",
      des: "مستر ايجيبت",
      score: "1st",
      icon: <StarIcon />,
    },
  ];
  InitialAos();
  return (
    <div id="champions">
      <CardsInfo
        cards={cards}
        title={
          <span>
            بطولات العربي <InsightsIcon />
          </span>
        }
        src="AlarabyChampions/"
        avatar={saleh}
      />
    </div>
  );
};

export default AboutInfo;
