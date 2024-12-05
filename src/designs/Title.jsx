import React, {useEffect} from "react";
import {Text,
  HeaderTitleText,
  SubHeaderTitleText}
from 'styles/designs/Title'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { InitialAos } from "utils/initialAos";

const Title = ({ children }) => {
  useEffect(() => {
    InitialAos(Aos)
  }, []);
  return <Text data-aos='zoom-in' variant="h1">{children}</Text>;
};

const HeaderTitle = ({ children }) => {
  useEffect(() => {
    InitialAos(Aos)
  }, []);
  return <HeaderTitleText data-aos='zoom-in' variant="h1">{children}</HeaderTitleText>;
};

const SubHeaderTitle = ({ children }) => {
  useEffect(() => {
    InitialAos(Aos)
  }, []);
  return <SubHeaderTitleText data-aos='fade-right' variant="h2">{children}</SubHeaderTitleText>;
};

Title.Header = HeaderTitle;
Title.Sub = SubHeaderTitle;

export default Title;
