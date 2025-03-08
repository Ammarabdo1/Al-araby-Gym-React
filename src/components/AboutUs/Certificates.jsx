import React from "react";
import { InitialAos } from "utils/initialAos";
import fireImg from "assets/images/Fire.png";
import { PiCertificate as CertificationIcon } from "react-icons/pi";
import { Box, Grid } from "@mui/material";
import { Title } from "designs";
import styled from "styled-components";
import { colors, media } from "libs/themes";

const Certificates = () => {
  InitialAos();
  return (
    <AboutSection>
      <InfoTitle>
        شهادات العربي <CertificationIcon />
      </InfoTitle>
      <CertificationsContainer
        container
        sx={{ margin: { xs: "0px 0 100px 0", md: "50px 0 100px 0" } }}
      >
        {Array(3)
          .fill(null)
          .map((e, i) => (
            <CertificationItem item xs={12} md={4} lg={3}>
              <ImageContainer>
                <img
                  data-aos="zoom-out"
                  src={`images/certificates/${i}.png`}
                  alt="certificate"
                />
              </ImageContainer>
            </CertificationItem>
          ))}
      </CertificationsContainer>
    </AboutSection>
  );
};

const InfoTitle = styled(Title)`
  font-family: "Open Sans", Tahoma, Arial, Helvetica !important;
  padding: 5px 0;
  @media (max-width: ${media.mobile}) {
    box-shadow: 0 0 10px 2px ${colors.title};
  }
`;

const AboutSection = styled(Box)`
  background: ${colors.bg};
  overflow: hidden;
  position: relative;
  z-index: 2;
  padding-top: 70px;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: 1;
    background-image: url(${fireImg});
    opacity: 0.3;

    @media (max-width: ${media.mobile}) {
      background-size: contain;
    }
  }
`;

const CertificationsContainer = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const CertificationItem = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const ImageContainer = styled.div`
  width: 90%;
  height: fit-content;
  border-radius: 15px;
  overflow: hidden;
  img {
    width: 100%;
    margin: auto;
    transition: transform 0.3s ease;
  }
`;

export default Certificates;
