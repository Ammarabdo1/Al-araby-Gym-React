import React, { useState, useEffect } from "react";
import Title from "designs/Title.jsx";
import { HeaderSection, HeaderContainer } from "styles/Home/Header.js";
import Btn from "designs/Button";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Aos from "aos";
import "aos/dist/aos.css";
import { InitialAos } from "utils/initialAos";
import HeaderElement from "designs/Header";
import { HeaderContent } from "utils/Header";
import useMediaQuery from "@mui/material/useMediaQuery";
import { media } from "libs/themes";

const Header = () => {
  const [headerNumber, setHeaderNumber] = useState(0);
  useEffect(() => {
    InitialAos(Aos, 3000);
    let Timer = 15;
    const repeatedHeader = setInterval(() => {
      setHeaderNumber((prevValue) => (prevValue + 1) % HeaderContent.length);
    }, Timer * 1000);

    return () => clearInterval(repeatedHeader);
  }, []);

  const isMobile = useMediaQuery(`(max-width: ${media.tablet})`);

  return (
    <HeaderContainer>
      {isMobile ? (
        HeaderContent.map((content, index) => (
          <>
            {headerNumber === index && (
              <HeaderElement content={content} index={index}></HeaderElement>
            )}
          </>
        ))
      ) : (
        <HeaderElement content={HeaderContent[0]}></HeaderElement>
      )}
    </HeaderContainer>
  );
};

export default Header;
