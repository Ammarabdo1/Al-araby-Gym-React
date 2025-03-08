import React from "react";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { desc } from "utils/description-text";
import { title } from "utils/titles-text";
import { colors } from "libs/themes";
import { InitialAos } from "utils/initialAos";


const About = () => {
InitialAos()
  return (
    <Container item lg={3} md={3} xs={12}>
      <TextContainer>
        <Typography variant="subtitle1" data-aos='zoom-out'>
          <span>{title.Footer.About_Title}</span> {desc.Footer.about}
        </Typography>
      </TextContainer>
    </Container>
  );
};

const Container = styled(Grid)``;

const TextContainer = styled.div`
  text-align: center;
  h6 {
    color: ${colors.des};
    span {
      color: ${colors.title};
    }
    margin-bottom: 8px;
  }
`;

export default About;
