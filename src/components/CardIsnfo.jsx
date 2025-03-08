import React from "react";
import styled from "@emotion/styled";
import { styled as muiStyled } from "@mui/system";
import { colors, media } from "libs/themes";
import fireImg from "assets/images/Fire.png";
import { Title } from "designs";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { InitialAos } from "utils/initialAos";
import { GiMuscularTorso } from "react-icons/gi";
import { GiMuscleUp } from "react-icons/gi";

const CardsInfo = ({ cards, title, src, className, avatar = "" }) => {
  InitialAos();
  const isMobile = useMediaQuery(`(max-width: ${media.mobile})`);
  return (
    <AboutSection className={className}>
      <Container data-aos={!isMobile && "zoom-in"}>
        <InfoTitle> {title} </InfoTitle>
        <Images container>
          {cards.map((card, i) => (
            <CardContainer
              item
              xs={5.5}
              sm={4}
              md={3}
              data-aos={isMobile && (i % 2 === 0 ? "fade-left" : "fade-right")}
              sx={{ height: { xs: "45vh", md: "70vh" } }}
            >
              <HeroInfo>
                {/* <GiMuscleUp /> */}
                <img src={avatar} alt="" />
                <p>- {card.heroName}</p>
              </HeroInfo>
              <ImageContainer src={`images/${src}${i}.jpg`}>
                <HeroEvaluation>
                  {card.score} {card.icon}
                </HeroEvaluation>
                <HeroChampion
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="500"
                >
                  <Typography variant="h6">{card.des}</Typography>
                </HeroChampion>
              </ImageContainer>
            </CardContainer>
          ))}
        </Images>
      </Container>
    </AboutSection>
  );
};

const AboutSection = styled.div`
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

const Container = styled.div`
  min-height: 100vh;
  padding-bottom: 100px;
`;

const InfoTitle = styled(Title)`
  font-family: "Open Sans", Tahoma, Arial, Helvetica !important;
  padding: 5px 0;
  @media (max-width: ${media.mobile}) {
    box-shadow: 0 0 10px 2px ${colors.title};
  }
`;

const Images = muiStyled(Grid)({
  display: "flex",
  gap: "10px",
  justifyContent: "center",
});

const CardContainer = muiStyled(Grid)({
  position: "relative",
  borderRadius: "20px",
  marginBottom: "20px",
});

const ImageContainer = styled(Box)`
  background: url(${({ src }) => src}) center/cover;
  position: relative;
  margin-bottom: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
  z-index: 3;
  width: 100%;
  height: 80%;
`;

const HeroInfo = muiStyled(Box)({
  width: "100%",
  minHeight: "20%",
  display: "flex",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
  alignItems: "center",
  background: colors.btn_hover_bg,
  paddingRight: "10px",
  p: {
    fontWeight: "bold",
    color: colors.subTitle,
    fontSize: ".8rem",
    margin: 0,
    padding: 0,
  },

  img: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    background: colors.des,
    padding: "2px",
    color: colors.btn_hover_bg,
    marginLeft: "5px",
  },
});

const HeroChampion = styled.div`
  position: absolute;
  text-align: center;
  bottom: 0;
  right: 0;
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.btn_hover_bg};
  h6 {
    color: ${colors.des};
  }

  svg {
    color: ${colors.des};
    margin-right: 10px;
  }
`;

const HeroEvaluation = muiStyled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  background: colors.btn_hover_bg,
  // backdropFilter: '',
  color: colors.des,
  padding: "5px",
  svg: {
    fontSize: "1.5rem",
  },
});

export default CardsInfo;
