import React, { useEffect } from "react";
import Title from "designs/Title.jsx";
import { HeaderSection, HeaderContainer } from "styles/Home/Header.js";
import Btn from "designs/Button";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Aos from "aos";
import "aos/dist/aos.css";
import { InitialAos } from "utils/initialAos";

const Header = () => {
  useEffect(() => {
    InitialAos(Aos)
  }, []);

  return (
    <HeaderContainer>
      <HeaderSection data-aos="zoom-out">
        <Title.Header>العربي جيم</Title.Header>
        <Title.Sub>
          هنحققلك هدفك بما يتناسب مع نظام حياتك وبالسعر المناسب ليك
        </Title.Sub>
        <Btn>
          أبدأ رحلتك <RocketLaunchIcon className="rock-icon" />{" "}
        </Btn>
      </HeaderSection>      
    </HeaderContainer>

  );
};

export default Header;
