import React, {useState} from "react";
import {
  ProjectsContainer,
  TextSide,
  ImagesSide,
  StepsContainer,
  ContactButtonContainer
} from "styles/Home/Projects";
import SwiperJs from "designs/Swiper";
import { Btn, Description, ProjectSteps, Title } from "designs";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { title } from "utils/titles-text";
import { desc } from "utils/description-text";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech'

const Family = () => {

  const [moveArrow1, setMoveArrow1] = useState(false);
  const [moveArrow2, setMoveArrow2] = useState(false);
  const [showImg, setShowImg] = useState(false);

  return (
    <ProjectsContainer container>
      {/* <TextSide lg={6} md={12} xs={12}>

      </TextSide> */}

      <TextSide lg={6} md={12} xs={12}>
        <Title>{title.Family} <MilitaryTechIcon/></Title>
        <Description>
          {desc.Family}
        </Description>

        <ContactButtonContainer>
          <Btn>
           انضم لاخواتك
            <WhatshotIcon />
          </Btn>
        </ContactButtonContainer>
      </TextSide>

      <ImagesSide lg={6} md={12} xs={12}>
        <SwiperJs noOfImgs={20} ImgSrc={"/images/Al3rapyFamily/F"} />
      </ImagesSide>
    </ProjectsContainer>
  );
};

export default Family;
