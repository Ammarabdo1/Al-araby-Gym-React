import React from "react";
import { AboutSection, About, ImgContainer } from "styles/Home/AboutUs";
import AboutImg from 'assets/images/About.jpeg'
import Title from "designs/Title";

const AboutUs = () => {
  return (
    <AboutSection>
      <About.Container container spacing="5">
        {/* //! Details part */}
        <About.RightSection xs={12} sm={6} md={6} >
          <Title> من نحن</Title>
        </About.RightSection>

        {/* //! Image part */}
        <About.LeftSection xs={12} sm={6} md={6} >
          <ImgContainer>
            <img src={AboutImg} alt="" />
          </ImgContainer>
        </About.LeftSection>
      </About.Container>
    </AboutSection>
  );
};

export default AboutUs;
