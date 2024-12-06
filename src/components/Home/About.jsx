import React, { useState, useEffect } from "react";
import { Title, Description, Btn } from "designs";
import { AboutContainer, Text, Image, ContactBtn } from "styles/Home/About";
import AboutImg from "assets/images/About.png";
import { desc } from "utils/description-text";
import { title } from "utils/titles-text";
import { Button, useMediaQuery } from "@mui/material";
import { media } from "libs/themes";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { InitialAos } from "utils/initialAos";

const About = () => {
  const isMobile = useMediaQuery(`(max-width: ${media.mobile})`);
  const [showMoreText, setShowMoreText] = useState(false);

  useEffect(() => {
    InitialAos(Aos);
  }, [])

  return (
    <AboutContainer container>
      <Text lg={6} md={12} xs={12}>
        <Title>
          {title.About} <AutoStoriesIcon />
        </Title>
        <Description.Sub>{desc.About[0]}</Description.Sub>
        {isMobile && !showMoreText && (
          <Button onClick={() => setShowMoreText(true)}>قراءة المزيد.</Button>
        )}

        {(!isMobile || showMoreText) && (
          <>
            <Description.Sub>{desc.About[1]}</Description.Sub>
            <Description.Sub>{desc.About[2]}</Description.Sub>
            <Description.Sub>{desc.About[3]}</Description.Sub>
          </>
        )}
        {isMobile && showMoreText && (
          <Button onClick={() => setShowMoreText(false)}>
            {" "}
            قراءة محتوي أقل.
          </Button>
        )}
        <ContactBtn>
          <Btn>
            تواصل معنا
            <ContactMailIcon />
          </Btn>
        </ContactBtn>
      </Text>

      <Image data-aos='zoom-in' lg={6} md={12} xs={12}>
        <img src={AboutImg} alt="About Us" />
      </Image>
    </AboutContainer>
  );
};

export default About;
