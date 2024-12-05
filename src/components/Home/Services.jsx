import React, {useEffect} from 'react'
import { Grid } from "@mui/material";
import Title from "designs/Title";
import { ServicesContainer } from "styles/Home/Services";
import { services } from "utils/Services";
import Service from "designs/ServiceCard";
import { title } from "utils/titles-text";
import TuneIcon  from '@mui/icons-material/Tune' 

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

export default ServicesSection;
