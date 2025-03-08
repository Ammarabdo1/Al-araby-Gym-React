import AboutHeader from "components/HeaderPage";
import About from "components/Home/About";
import React from "react";
import styled from "@emotion/styled";
import AboutInfo from "components/AboutUs/AboutInfo";
import pigHeaderBgImg from "assets/images/AboutPagePig.jpg";
import headerBgImg from "assets/images/AboutPage.JPG";
import { title } from "utils/titles-text";
import Certificates from "components/AboutUs/Certificates";

const AboutUs = () => {
  return (
    <div>
      <AboutHeader
        title={title.page.about}
        headerBgImg={headerBgImg}
        pigHeaderBgImg={pigHeaderBgImg}
      />
      <AboutSection />
      <AboutInfo />
      <Certificates />
    </div>
  );
};

const AboutSection = styled(About)`
  padding-top: 50px;
`;

export default AboutUs;
