import React, {useEffect} from 'react'
import { ButtonContainer } from "styles/designs/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import { InitialAos } from 'utils/initialAos';

const Btn = ({ children, hoverDirection, shadow }) => {
  useEffect(() => InitialAos(Aos), []);
  return <ButtonContainer data-aos='flip-right' shadow={shadow} dir={hoverDirection} >{children}</ButtonContainer>;
};

export default Btn;
