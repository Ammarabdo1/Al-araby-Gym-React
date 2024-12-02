/** @jsxImportSource @emotion/react */
import { Grid } from "@mui/material";
import Title from "designs/Title";
import { ServicesContainer } from "styles/Home/Services";
import { services } from "utils/Services";
import Service from "designs/ServiceCard";

const ServicesSection = () => {
  return (
    <ServicesContainer>
      <Title>
        خدمات التدريب 
      </Title>
      <Grid container justifyContent="center">
        {services.map((service, index) => (
            <Service service={service} index={index} />
        ))}
      </Grid>
    </ServicesContainer>
  );
};

export default ServicesSection;
