import React from "react";
import { Des } from "styles/designs/Description";

const Description = ({ children, className }) => {
  return (
    <Des variant="h6" card={true} className={className}>
      {children}
    </Des>
  );
};

const DesSub = ({ children, className }) => {
  return (
    <Des isSub={true} card={true} variant="h6" className={className}>
      {children}
    </Des>
  );
};
Description.Sub = DesSub;

export default Description;
