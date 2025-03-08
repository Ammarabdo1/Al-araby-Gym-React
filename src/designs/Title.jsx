import React from "react";
import {
  Text,
  HeaderTitleText,
  SubHeaderTitleText,
} from "styles/designs/Title";

const Title = ({ children, className }) => {
  return (
    <Text className={className} variant="h1">
      {children}
    </Text>
  );
};

const HeaderTitle = ({ children, className }) => {
  return (
    <HeaderTitleText className={className} variant="h1">
      {children}
    </HeaderTitleText>
  );
};

const SubHeaderTitle = ({ children, className }) => {
  return (
    <SubHeaderTitleText className={className} variant="h2">
      {children}
    </SubHeaderTitleText>
  );
};

Title.Header = HeaderTitle;
Title.Sub = SubHeaderTitle;

export default Title;
