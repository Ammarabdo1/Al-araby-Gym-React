import React, { useEffect, useState } from "react";
import { Btn } from "designs";
import { Step } from "styles/designs/ProjectSteps";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { InitialAos } from "utils/initialAos";
import Aos from 'aos'
const ProjectSteps = ({ children, hasIcon }) => {
  useEffect(() => InitialAos(Aos), []);
  return (
    <Step data-aos='zoom-in' >
      <Btn hoverDirection="left">{children}</Btn>
      {hasIcon && <ArrowLeftIcon />}
    </Step>
  );
};

export default ProjectSteps;
