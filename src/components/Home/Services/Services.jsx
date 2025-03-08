import React from 'react'
import { Grid } from "@mui/material";
import Title from "designs/Title";
import { services } from "utils/Services";
import Service from "components/Home/Services/ServiceCard";
import { title } from "utils/titles-text";
import TuneIcon  from '@mui/icons-material/Tune' 

import styled from "@emotion/styled";
import { colors, media } from "libs/themes";
import { AfterLayout } from "utils/GeneralStyles";
import FireBg from "assets/images/Fire.png";


const ServicesSection = () => {
  return (
    <ServicesContainer>
      <Title>
       {title.Service} <TuneIcon/>
      </Title>
      <Grid container justifyContent="center">
        {services.map((service, index) => (
            <Service service={service} index={index}/>
        ))}
      </Grid>
    </ServicesContainer>
  );
};


export const ServicesContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 1.2rem 12rem 1.2rem;
  background: ${colors.bg};
  overflow: hidden;
  position: relative;
  z-index: 1;
  &::before {
    ${AfterLayout()}
    background-image: url(${FireBg});
    @media (max-width: ${media.mobile}) {
      background-size: contain;
    }
    opacity: 0.5;
  }

  .grid {
    margin-left: 2rem;
  }

  @media (max-width: ${media.mobile}) {
    .grid {
      margin-left: 0;
    }
    
    padding-bottom: 10rem;
  }
`;

export default ServicesSection;
