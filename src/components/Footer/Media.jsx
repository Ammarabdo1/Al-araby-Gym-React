import React from "react";
import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import Instagram from "assets/images/instagram.ico";
import { Title } from "designs";
import { title } from "utils/titles-text";
import { Facebook, WhatsApp } from "@mui/icons-material";
import { colors, media } from "libs/themes";

const Media = () => {
  return (
    <Container item lg={3} md={3} xs={12}>
      <Title>{title.Footer.media_Title}</Title>

      <LinksContainer>
        <WhatsApp className="whats" />
        <Facebook className="face" />
        <img src={Instagram} />
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

const LinksContainer = styled(Grid)`
  svg {
    font-size: 2.5rem;
    margin-left: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
  .whats {
    color: ${colors.whatsApp};
  }

  .face {
    color: ${colors.facebook};
  }

  img {
    width: 35px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: ${media.mobile}) {
    svg {
      margin-left: 2rem;
    }
  }
`;

export default Media;
