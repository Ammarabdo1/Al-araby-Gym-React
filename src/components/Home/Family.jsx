import React from "react";
import {
  ProjectsContainer,
  TextSide,
  ImagesSide,
  ContactButtonContainer,
} from "styles/Home/Projects";
import SwiperJs from "designs/Swiper";
import { Btn, Description, Title } from "designs";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { title } from "utils/titles-text";
import { desc } from "utils/description-text";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { InitialAos } from "utils/initialAos";
import { useNavigate } from "react-router-dom";

const Family = () => {
  const navigate = useNavigate();
  InitialAos();
  return (
    <ProjectsContainer container>
      <TextSide lg={6} md={12} xs={12} data-aos="fade-left">
        <Title>
          {title.Family} <MilitaryTechIcon />
        </Title>
        <Description>{desc.Family}</Description>

        <ContactButtonContainer>
          <Btn
            onClick={() => {
              navigate("/prices");
              setTimeout(() => {
                const servicesSec = document.getElementById("servicesSec");
                if (servicesSec) {
                  servicesSec.scrollIntoView({ behavior: "smooth" });
                }
              }, 1300);
            }}
          >
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
