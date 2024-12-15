import React, {useEffect} from "react";
import { CardContent, Grid } from "@mui/material";
import Description from "designs/Description";
import {
  ServiceCard,
  IconWrapper,
} from "styles/Home/Services";
import Aos from "aos";
import "aos/dist/aos.css";
import { InitialAos } from 'utils/initialAos';
import useMediaQuery from "@mui/material/useMediaQuery";
import { media } from "libs/themes";

const Service = ({index, service}) => {
  useEffect(() => InitialAos(Aos), []);

  const isMobile = useMediaQuery(`(max-width: ${media.mobile})`);

  return (
    <Grid item key={index} className="grid">
      <ServiceCard bg={service.bg} data-aos={isMobile ? (index % 2 === 0 ? 'fade-right' : 'fade-left') : 'zoom-in'}>
        <IconWrapper>{service.icon}</IconWrapper>
        <CardContent>
          <Description>{service.title}</Description>
          <Description.Sub>{service.description}</Description.Sub>
        </CardContent>
      </ServiceCard>
    </Grid>
  );
};

export default Service;
