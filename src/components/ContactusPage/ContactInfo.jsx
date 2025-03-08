import React from "react";
import fireImg from "assets/images/Fire.png";
import styled from "@emotion/styled";
import { Title } from "designs";
import { colors, media } from "libs/themes";

import RecentActorsOutlinedIcon from "@mui/icons-material/RecentActorsOutlined";
import CardInfo from "./CardInfo";
import { cardsInfo } from "./CardsInfo";

const ContactInfo = () => {
  return (
    <Container id='contactUsPage'>
      <ContactTitle>
        تواصل معنا <RecentActorsOutlinedIcon />
      </ContactTitle>
      <CardsContainer>
        {cardsInfo.map((card) => (
          <CardInfo card={card} />
        ))}
      </CardsContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 70px;
  background: ${colors.bg};
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 40vh;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url(${fireImg}) center;
    opacity: 0.3;
    z-index: 1;
    @media (max-width: ${media.mobile}) {
      background-size: contain;
    }
  }

  @media (max-width: ${media.mobile}) {
    padding: 70px 0;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 70px 50px;
  @media (max-width: ${media.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 70px 0px;
  }
`;

const ContactTitle = styled(Title)`
  font-family: "Open Sans", Tahoma, Arial, Helvetica;
  box-shadow: 0 0 10px 2px ${colors.title};
  padding: 5px 0;
`;

export default ContactInfo;
