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
import { desc } from "utils/decription-text";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech'

const Projects = () => {

  const [moveArrow1, setMoveArrow1] = useState(false);
  const [moveArrow2, setMoveArrow2] = useState(false);
  const [showImg, setShowImg] = useState(false);

  return (
    <ProjectsContainer container>
      {/* <TextSide lg={6} md={12} xs={12}>

      </TextSide> */}

      <TextSide lg={6} md={12} xs={12}>
        <Title>{title.Projects} <MilitaryTechIcon/></Title>
        <Description>
          {desc.projects.main}
        </Description>
        <StepsContainer>
          <ProjectSteps hasIcon={true} moveArrow1={moveArrow1}> {desc.projects.steps[0]}</ProjectSteps>
          <ProjectSteps hasIcon={true} moveArrow2={moveArrow2}>{desc.projects.steps[1]} </ProjectSteps>
          <ProjectSteps>{desc.projects.steps[2]}</ProjectSteps>
        </StepsContainer>

        <ContactButtonContainer>
          <Btn>
            كون قد التحدي
            <WhatshotIcon />
          </Btn>
        </ContactButtonContainer>
      </TextSide>

      <ImagesSide lg={6} md={12} xs={12}>
        <SwiperJs noOfImgs={27} ImgSrc={"/images/TransitionImages/T"} />
      </ImagesSide>
    </ProjectsContainer>
  );
};

export default Projects;
