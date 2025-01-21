import React from 'react'
import { ButtonContainer } from "styles/designs/Button";

const Btn = ({ children, hoverDirection, shadow }) => {
  return <ButtonContainer shadow={shadow} dir={hoverDirection} >{children}</ButtonContainer>;
};

export default Btn;
