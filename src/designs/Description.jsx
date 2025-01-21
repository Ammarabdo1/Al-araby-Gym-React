import React from "react";
import { Des } from "styles/designs/Description";

const Description = ({ children }) => {
  return (
    <Des variant="h6" card={true}>
      {children}
    </Des>
  );
};

const DesSub = ({ children }) => {
  return (
    <Des isSub={true} card={true} variant="h6">
      {children}
    </Des>
  );
};
Description.Sub = DesSub;

export default Description;
