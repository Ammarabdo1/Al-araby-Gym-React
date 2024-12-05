import React, { useState } from "react";
import { Btn } from "designs";
import { Step } from "styles/designs/ProjectSteps";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const ProjectSteps = ({ children, hasIcon }) => {
  return (
    <Step>
      <Btn hoverDirection="left">{children}</Btn>
      {hasIcon && <ArrowLeftIcon />}
    </Step>
  );
};

export default ProjectSteps;
