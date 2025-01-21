import React from "react";
import styled from "@emotion/styled";
import headerBgImg from "assets/images/AboutPage.JPG";
import pigHeaderBgImg from "assets/images/AboutPagePig.jpg";
import { media } from "libs/themes";
import { Title } from "designs";

const AboutHeader = () => {
  return (
    <Header>
      <Container>
        <HeaderText>من نحن</HeaderText>
      </Container>
    </Header>
  );
};

const Header = styled.div`
  height: 70vh;
  width: 100%;
  background: url(${pigHeaderBgImg});
  background-size: cover;
  background-position: bottom -50px;
  position: relative;
  z-index: 2;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    z-index: -1;
  }
  @media (max-width: ${media.mobile}) {
    background: url(${headerBgImg});
    background-size: cover;
    background-position: center;
    &::after {
      background-color: rgba(0, 0, 0, 0.55);
    }
  }
`;

const HeaderText = styled(Title)`
  /* backdrop-filter: blur(20px); */
  border-right: 4px solid;
  border-left: 4px solid;
  padding: 10px;
  padding-bottom: 20px;
  border-radius: 40px;
  backdrop-filter: blur(5px);
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default AboutHeader;
