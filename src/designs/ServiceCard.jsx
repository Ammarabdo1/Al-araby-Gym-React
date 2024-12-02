/** @jsxImportSource @emotion/react */
import { CardContent, Grid } from "@mui/material";
import Description from "designs/Description";
import {
  ServiceCard,
  IconWrapper,
} from "styles/Home/Services";

const Service = ({index, service}) => {
  return (
    <Grid item key={index} className="grid">
      <ServiceCard bg={service.bg}>
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
