import React from "react";
import styled from "@emotion/styled";
import { colors, media } from "libs/themes";
import { Title } from "designs";
import { InitialAos } from "utils/initialAos";

const HeaderPage = ({ title, headerBgImg, pigHeaderBgImg, position }) => {
  InitialAos();
  return (
    <HeaderSection>
      <Header
        data-aos="zoom-out"
        headerBgImg={headerBgImg}
        pigHeaderBgImg={pigHeaderBgImg}
        position={position}
      >
        <Container>
          <HeaderText>{title}</HeaderText>
        </Container>
      </Header>
    </HeaderSection>
  );
};

const HeaderSection = styled.div`
  overflow: hidden;
  background: ${colors.bg};
`;

const Header = styled.div`
  height: 70vh;
  width: 100%;
  background: url(${(props) => props.pigHeaderBgImg});
  background-size: cover;
  background-position: ${({position}) => (position === 'top' ? 'bottom -50px' : 'bottom -50px')};
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
    background: url(${(props) => props.headerBgImg});
    background-size: cover;
    background-position: ${({position}) => (position === 'top' ? 'top center' : 'center')};
    &::after {
      background-color: rgba(0, 0, 0, 0.55);
    }
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled(Title)`
  /* backdrop-filter: blur(20px); */
  border-right: 3px solid;
  border-left: 3px solid;
  padding: 5px 10px 20px 10px;
  margin-top: 50px;
  border-radius: 7%;
  backdrop-filter: blur(8px);
  @media (max-width: ${media.mobile}) {
    padding: 7px 10px 10px 10px;
  }
`;

export default HeaderPage;
