import React from "react";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { Title } from "designs";
import { title } from "utils/titles-text";
import { desc } from "utils/description-text";
import { colors, media } from "libs/themes";

const Contact = () => {
  return (
    <Container item lg={3} md={3} xs={12}>
      <Title>{title.Footer.contact_Title}</Title>
      <Typography variant="h6">{desc.Footer.email}</Typography>
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
      border-right: 5px solid;
      border-left: 5px solid;
      border-radius: 25px;
      padding: 0 5px;
    }
  }
`;

export default Contact;
