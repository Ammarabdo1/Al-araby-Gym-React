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
import Aos from "aos";
import "aos/dist/aos.css";
import { InitialAos } from "utils/initialAos";
import { useNavigate } from "react-router-dom";

const About = ({ className }) => {
  const isMobile = useMediaQuery(`(max-width: ${media.mobile})`);
  const [showMoreText, setShowMoreText] = useState(false);
  const navigate = useNavigate();
  InitialAos(Aos);
  return (
    <AboutContainer container className={className}>
      <Text lg={6} md={12} xs={12} data-aos="fade-left">
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
          <Button
            onClick={() => {
              setShowMoreText(false);
              window.scrollBy({
                top: -1200,
                behavior: "smooth",
              });
            }}
          >
            {" "}
            قراءة محتوي أقل.
          </Button>
        )}
        <ContactBtn>
          <Btn
            onClick={() => {
              navigate("/contact");
              setTimeout(() => {
                const contactPage = document.getElementById("contactUsPage");
                if (contactPage) {
                  contactPage.scrollIntoView({ behavior: "smooth" });
                }
              }, 1300);
            }}
          >
            تواصل معنا
            <ContactMailIcon />
          </Btn>
        </ContactBtn>
      </Text>

      <Image data-aos="zoom-in" lg={6} md={12} xs={12}>
        <img src={AboutImg} alt="About Us" />
      </Image>
    </AboutContainer>
  );
};

export default About;
