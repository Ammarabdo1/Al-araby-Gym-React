import React from "react";
import {Text,
  HeaderTitleText,
  SubHeaderTitleText}
from 'styles/designs/Title'

const Title = ({ children }) => {
  return <Text variant="h1">{children}</Text>;
};

const HeaderTitle = ({ children }) => {
  return <HeaderTitleText variant="h1">{children}</HeaderTitleText>;
};

const SubHeaderTitle = ({ children }) => {
  return <SubHeaderTitleText variant="h2">{children}</SubHeaderTitleText>;
};

Title.Header = HeaderTitle;
Title.Sub = SubHeaderTitle;

export default Title;
