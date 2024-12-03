import React, { useState } from "react";
import { Title, Description, Btn } from "designs";
import { AboutContainer, Text, Image } from "styles/Home/About";
import AboutImg from "assets/images/About.png";
import { desc } from "utils/decription-text";
import { title } from "utils/titles-text";
import { Button, useMediaQuery } from "@mui/material";
import { media } from "libs/themes";

const About = () => {
  const isMobile = useMediaQuery(`(max-width: ${media.mobile})`);
  const [showMoreText, setShowMoreText] = useState(false);
  return (
    <AboutContainer container>
      <Text lg={6} md={6} xs={12}>
        <Title>{title.About}</Title>
        <Description.Sub>{desc.About[0]}</Description.Sub>
        {isMobile && !showMoreText && <Button onClick={()=> setShowMoreText(true)} >قراءة المزيد.</Button>}

        {(!isMobile || showMoreText) && (
          <>
            <Description.Sub>{desc.About[1]}</Description.Sub>
            <Description.Sub>{desc.About[2]}</Description.Sub>
            <Description.Sub>{desc.About[3]}</Description.Sub>
          </>
        )}
        {(isMobile && showMoreText) && <Button onClick={()=> setShowMoreText(false)} > قراءة محتوي أقل.</Button>}
      </Text>

      <Image lg={6} md={6} xs={12}>
        <img src={AboutImg} alt="About Us" />
      </Image>
    </AboutContainer>
  );
};

export default About;
