import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { Title } from "designs";
import { title } from "utils/titles-text";
import { desc } from "utils/description-text";
import { colors, media } from "libs/themes";
import { InitialAos } from "utils/initialAos";
import Aos from "aos";

const Contact = () => {
  InitialAos(Aos)
  return (
    <Container item lg={3} md={3} xs={12}>
      <Title>{title.Footer.contact_Title}</Title>
      <Typography variant="h6" data-aos='fade' >{desc.Footer.email}</Typography>
    </Container>
  );
};

const Container = styled(Grid)`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    text-align: start;
    margin-bottom: 50px;
  }

  h6 {
    color: ${colors.subTitle};
  }
  
  @media (max-width: ${media.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h6 {
      font-size: 6vw;
      text-align: center;
      border-right: 8px solid ${colors.after_hover};
      border-left: 8px solid ${colors.after_hover};
      border-radius: 25px;
      box-shadow: 0 0px 30px 1px ${colors.after_hover};
      padding: 0 5px;
    }
  }
`;

export default Contact;
