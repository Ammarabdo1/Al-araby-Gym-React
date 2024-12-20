import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { Title } from "designs";
import { title } from "utils/titles-text";
import { desc } from "utils/description-text";
import { colors, media } from "libs/themes";
import { InitialAos } from "utils/initialAos";
import Aos from "aos";

const Links = () => {
  useEffect(() => {
      return InitialAos(Aos)
    }, [])
  return (
    <Container item lg={3} md={3} xs={12}>
      <Title>{title.Footer.links_Title}</Title>

      <LinksContainer>
        <Typography variant="h6" data-aos='fade-left'>{desc.Footer.links[0]}</Typography>
        <Typography variant="h6" data-aos='fade-left'>{desc.Footer.links[1]}</Typography>
        <Typography variant="h6" data-aos='fade-left'>{desc.Footer.links[2]}</Typography>
        <Typography variant="h6" data-aos='fade-left'>{desc.Footer.links[3]}</Typography>
      </LinksContainer>
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

  @media (max-width: ${media.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const LinksContainer = styled.div`
  h6 {
    color: ${colors.subTitle};
    &:hover {
      background: ${colors.after_hover};
      transform: scale(1.05);
    }
    margin-bottom: 10px;
  }
  @media (max-width: ${media.mobile}) {
     width: 90%;
  }
`;

export default Links;
