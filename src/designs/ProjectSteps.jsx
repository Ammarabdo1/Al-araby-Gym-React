import React, { useEffect, useState } from "react";
import { Btn } from "designs";
import { Step } from "styles/designs/ProjectSteps";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { InitialAos } from "utils/initialAos";
const ProjectSteps = ({ children, hasIcon }) => {
 InitialAos()
  return (
    <Step data-aos='zoom-in' >
      <Btn hoverDirection="left">{children}</Btn>
      {hasIcon && <ArrowLeftIcon />}
    </Step>
  );
};

export default ProjectSteps;
