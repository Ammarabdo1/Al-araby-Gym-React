import React, { useEffect } from "react";
import Title from "designs/Title.jsx";
import { HeaderSection, HeaderContainer } from "styles/Home/Header.js";
import Btn from "designs/Button";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Aos from "aos";
import "aos/dist/aos.css";
import { InitialAos } from "utils/initialAos";
import { title } from "utils/titles-text";
import { desc } from "utils/description-text";

const HeaderElement = ({content, index}) => {
  useEffect(() => {
    InitialAos(Aos, 3000)
  }, []);

  return (
      <HeaderSection key={index} BgImg={content.BgImg} data-aos={ index === 0 ? "zoom-out" : "fade-up"} data-aos-duration='1500'>
        <Title.Header>{title.Header}</Title.Header>
        <Title.Sub>
            {content.Desc}
        </Title.Sub>
        <Btn>
          أبدأ رحلتك <RocketLaunchIcon className="rock-icon" />{" "}
        </Btn>
      </HeaderSection>      

  );
};

export default HeaderElement;
