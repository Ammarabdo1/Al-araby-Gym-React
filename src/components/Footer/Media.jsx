import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import Instagram from "assets/images/instagram.ico";
import { Title } from "designs";
import { title } from "utils/titles-text";
import { Facebook, WhatsApp } from "@mui/icons-material";
import { colors, media } from "libs/themes";
import { InitialAos } from "utils/initialAos";
import Aos from "aos";

const Media = () => {
  useEffect(() => {
    return InitialAos(Aos);
  }, []);
  return (
    <Container item lg={3} md={3} xs={12}>
      <Title>{title.Footer.media_Title}</Title>

      <LinksContainer>
        <div data-aos="flip-left">
          <WhatsApp className="whats" />
        </div>
        <div data-aos="flip-left">
          <Facebook className="face" />
        </div>
        <img src={Instagram} data-aos="flip-left" />
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
  display: flex;
  justify-content: start;
  align-items: center;
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
    height: 35px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: ${media.mobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-left: 2rem;
    }
  }
`;

export default Media;
