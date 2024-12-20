import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import Form from "./Form";
import { colors, media } from "libs/themes";
import fireImg from "assets/images/Fire.png";
import { AfterLayout } from "utils/GeneralStyles";
import { moveBackGround } from "libs/frames";
import GymBg from "assets/images/ContactUs.JPG";
import GymBgMonitor from "assets/images/GymBg2.jpg";
import { title } from "utils/titles-text";
import { desc } from "utils/description-text";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { InitialAos } from "utils/initialAos";

const ContactUs = () => {
  useEffect(() => InitialAos(Aos), [])
  return (
    <ContactSection>
      <Container container>
        <TextSide lg={6} md={6} xs={12}>
          <TextContainer>
            <Box width={600} className="text">
              <Typography variant="h6" data-aos="flip-right" >{title.ContactUs}</Typography>
              <Typography variant="h3" data-aos="fade-left" >
                {desc.ContactUs.content}
                <span data-aos="zoom-in">
                  {desc.ContactUs.subContent}
                  <AutoGraphIcon className="icon" />
                </span>
              </Typography>
              <Typography variant="h5" data-aos="fade-left" >{desc.ContactUs.res}</Typography>
            </Box>
          </TextContainer>
        </TextSide>

        <FormSide lg={6} md={6} xs={12}>
          <Form />
        </FormSide>
      </Container>
    </ContactSection>
  );
};

const ContactSection = styled.div`
  overflow: hidden;
`;

const Container = styled(Grid)`
  background: url(${GymBgMonitor}) no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 150px 100px 200px 100px;
  position: relative;
  z-index: 2;
  &::after {
    ${AfterLayout()}
    background-image: url(${fireImg});
    background-attachment: fixed;
    /* opacity: .5; */
    animation: ${moveBackGround(false)} 40s linear infinite;
  }

  @media (max-width: ${media.mobile}) {
    background: url(${GymBg});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding: 100px 0 170px 0;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      z-index: -1;
      background: url(${fireImg}) repeat;
      background-attachment: fixed;
      background-size: contain;
      animation: ${moveBackGround(true)} 40s linear infinite;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      z-index: -1;
      background: url(${fireImg}) repeat;
      background-attachment: fixed;
      background-size: contain;
      animation: ${moveBackGround(true)} 40s linear infinite;
    }
  }
`;

const TextSide = styled(Grid)``;

const TextContainer = styled.div`
  margin-bottom: 50px;
  .text {
    h6 {
      color: ${colors.title};
      margin-bottom: 20px;
      font-family: "Cairo", sans-serif;
      text-shadow: 0px 0px 2px rgba(255, 253, 203, 0), 2px 2px 2px rgb(0, 0, 0),
        4px 4px 2px rgb(0, 0, 0);
      width: fit-content;
      padding: 0 5px;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 50%;
        height: 5px;
        border-radius: 50%;
        border: 1px solid;
        box-shadow: 0 -4px 4px 1px #ffdd8761;
      }

      &::before {
        content: "";
        position: absolute;
        bottom: -10px;
        right: 0;
        width: 50%;
        height: 5px;
        border-radius: 50%;
        border: 1px solid;
        box-shadow: 0 -4px 4px 1px #ffdd8761;
      }
    }

    h3 {
      color: ${colors.des};
      span {
        color: ${colors.title};
      }
    }

    .icon {
      font-size: 2rem;
      margin-right: 5px;
    }

    h5 {
      width: 300px;
      color: ${colors.subTitle};
      font-family: "Cairo", sans-serif;
      margin-top: 15px;
      padding-top: 8px;
      border-top: 1px solid;
    }
  }
  @media (max-width: ${media.mobile}) {
    margin-bottom: 30px;
    margin-right: 20px;

    h6 {
      font-size: 4vw;
    }

    h3 {
      font-size: 8.5vw;
      width: 50%;
    }

    .icon {
      font-size: 1.1rem !important ;
    }

    h5 {
      font-size: 5vw;
      text-shadow: 0px 0px 2px rgb(0, 0, 0), 2px 2px 2px rgb(0, 0, 0),
        4px 4px 2px rgb(0, 0, 0);
      width: 200px !important;
      margin-top: 15px;
      padding-top: 8px;
      border-top: 1px solid;
    }
  }
`;

const FormSide = styled(Grid)``;

export default ContactUs;
