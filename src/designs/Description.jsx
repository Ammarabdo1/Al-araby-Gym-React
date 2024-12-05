import React, {useEffect} from "react";
import { Des } from "styles/designs/Description";
import Aos from "aos";
import "aos/dist/aos.css";
import { InitialAos } from "utils/initialAos";

const Description = ({ children }) => {
  useEffect(() => {
    InitialAos(Aos);
  }, []);

  return (
    <Des data-aos='fade-left' variant="h6" card={true}>
      {children}
    </Des>
  );
};

const DesSub = ({ children }) => {
  useEffect(() => {
    InitialAos(Aos);
  }, []);

  return (
    <Des data-aos='fade-left' isSub={true} card={true} variant="h6">
      {children}
    </Des>
  );
};
Description.Sub = DesSub;

export default Description;
