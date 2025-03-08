import React from "react";
import styled from "@emotion/styled";
import ServicesTabs from "./ServicesTabs";
import { Outlet } from "react-router-dom";
import { colors, media } from "libs/themes";
import { AfterLayout } from "utils/GeneralStyles";
import fireImage from 'assets/images/Fire.png'

const ShowPrices = () => {
  return (
    <Container>
      <ServicesTabs />
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  background: ${colors.bg};
  position: relative;
  z-index: 2;

  &::after {
    ${AfterLayout()}
    background-image: url(${fireImage});
    @media (max-width: ${media.mobile}) {
      background-size: contain;
    }
    opacity: 0.5;
  }

`;

export default ShowPrices;
