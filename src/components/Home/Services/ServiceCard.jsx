import { Grid, Button, IconButton } from "@mui/material";
import { animated } from "react-spring";
import Description from "designs/Description";
import "aos/dist/aos.css";
import { InitialAos } from "utils/initialAos";
import useMediaQuery from "@mui/material/useMediaQuery";
import { colors, media } from "libs/themes";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import serviceBg from "assets/images/ServiceHover.jpg";
import DarkBg from "assets/images/serviceCardBg4.JPG";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import salehBg from "assets/images/SalehService.jpg";
import { floatAnimation, RotateBackGround, shadowEff } from "libs/frames";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useNavigate } from "react-router-dom";

const Service = ({ index, service }) => {
  InitialAos();
  const isMobile = useMediaQuery(`(max-width: ${media.mobile})`);
  const navigate = useNavigate();

  function handelOnClick() {
    navigate(`/prices/${service.name}`);
    setTimeout(() => {
      const servicesSec = document.getElementById("servicesSec");
      console.log(servicesSec ? "found" : "notFound");
      servicesSec
        ? servicesSec.scrollIntoView({ behavior: "smooth" })
        : window.scrollTo({ top: 0, behavior: "smooth" });
    }, 400);
  }

  return (
    <CardContainer
      item
      md={4}
      xs={12}
      key={index}
      className="grid"
      data-aos={
        isMobile ? (index % 2 === 0 ? "fade-right" : "fade-left") : "zoom-in"
      }
    >
      <ServiceCard>
        <FrontSide>
          <Des>
            <IconWrapper>{service.icon}</IconWrapper>
            {service.title}
          </Des>
          <ShowMoreButton variant="contained" endIcon={<AdsClickIcon />}>
            معلومات عن الخدمه
          </ShowMoreButton>
        </FrontSide>

        <BackSide bg={service.bg}>
          <ButtonIconContainer>
            <ButtonIconWrapper aria-label={service.title} sx={{ p: 0 }}>
              {service.icon}
              <TurnAround />
            </ButtonIconWrapper>
          </ButtonIconContainer>

          <SubDesContainer>
            {isMobile ? (
              <>
                <SubDes>{service.description[0]}</SubDes>
                <SubDes>{service.description[1]}</SubDes>
                <SubDes>{service.description[2]}</SubDes>
                <SubDes>{service.description[3]}</SubDes>
                <SubDes>{service.description[4]}</SubDes>
                <SubDes>{service.description[5]}</SubDes>
              </>
            ) : (
              <SubDes>{service.description}</SubDes>
            )}
          </SubDesContainer>

          <ShowDetailsContainer onClick={handelOnClick}>
            <AutoAwesomeIcon className="startIcon" />
            <ShowDetailsBottom> التفاصيل و الأسعار</ShowDetailsBottom>
            <AutoAwesomeIcon className="endIcon" />
            <div className="after"></div>
            <div className="before"></div>
          </ShowDetailsContainer>
        </BackSide>
      </ServiceCard>
    </CardContainer>
  );
};

const CardContainer = styled(Grid)`
  perspective: 1000px;
  min-height: 35vh;
  min-height: 320px;
  margin-bottom: 30px;
  @media (max-width: ${media.mobile}) {
    min-height: 70vh;
  }
  & > div {
    &:hover {
      transform: rotateY(180deg);
    }
  }
`;

const ServiceCard = styled(animated.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1.5s;
`;

const FlipSide = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  z-index: 3;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${serviceBg}) center/cover no-repeat;
    z-index: -1;
    opacity: 0.7;
  }
`;

const FrontSide = styled.div`
  border: 2px solid;
  background: url(${DarkBg}) center / cover no-repeat;
  ${FlipSide};
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.subTitle};
  z-index: 5;
  @media (max-width: ${media.mobile}) {
    margin-left: 10px;
  }
`;

const Des = styled(Description)`
  color: ${colors.subTitle};
  text-shadow: 2px 2px 2px black, 4px 4px 2px black;
  border-bottom: 2px dashed;
  border-top: 3px solid;
  border-radius: 50% 0;
  padding: 20px;
  background: none;
  backdrop-filter: blur(5px);
  display: flex;
  box-shadow: 10px 2px 5px 3px ${colors.bg_hover2},
    2px 10px 5px 3px ${colors.bg_hover2};

  @media (max-width: ${media.mobile}) {
    width: min-content;
  }
`;

const ShowMoreButton = styled(Button)`
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 20px 80px;
  backdrop-filter: blur(3px);
  background: none;
  svg {
    color: ${colors.des};
    margin-right: 10px;
  }

  @media (max-width: ${media.mobile}) {
    padding: 20px;
  }
`;

const BackSide = styled.div`
  ${FlipSide}
  background: ${({ bg }) => `url(${bg}) center / cover no-repeat`};
  transform: rotateY(180deg);
  flex-direction: column;
  z-index: 2;
  padding-top: 50px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: ${colors.after_hover};
    @media (max-width: ${media.mobile}) {
      background: url(${salehBg}) center/cover no-repeat;
    }
    opacity: 1;
    z-index: -1;
  }
  overflow: hidden;
`;

const ButtonIconContainer = styled.div`
  position: relative;
  width: 0;
  height: 0;
  border-left: 15.5vw solid transparent;
  border-right: 15.5vw solid transparent;
  border-bottom: 60px solid rgba(208, 134, 88, 0.158);

  @media (max-width: ${media.mobile}) {
    border-left: 45.1vw solid transparent;
    border-right: 45.1vw solid transparent;
    border-bottom: 40px solid rgba(208, 134, 88, 0.158);
  }
`;

const ButtonIconWrapper = styled(IconButton)`
  position: absolute;
  top: -53px;
  left: 50%;
  transform: translateX(-50%);

  svg {
    color: ${colors.des};
    border-radius: 50%;
    font-size: 3.5rem;
    padding: 10px;
  }
`;

const TurnAround = styled.div`
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 -50%;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  backdrop-filter: blur(5px);
  border-top: 2px dotted ${colors.subTitle};
  border-bottom: 2px dotted ${colors.subTitle};
  border-left: 2px dotted ${colors.subTitle};
  border-right: 2px dotted ${colors.subTitle};
  background: ${colors.after_hover};
  z-index: -1;
  animation: ${RotateBackGround} 100s infinite linear;
`;

const SubDesContainer = styled.div`
  width: 100%;
  padding: 0px 0px 20px 0px;
  /* box-shadow: 0px 65px 40px rgba(208, 134, 88, 0.158) inset; */
  background: linear-gradient(rgba(208, 134, 88, 0.158), transparent);
  @media (min-width: ${media.mobile}) {
    width: 95%;
  }
`;

const SubDes = styled(Description.Sub)`
  /* backdrop-filter: blur(50px); */
  margin: 0;
`;

const ShowDetailsContainer = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 100%;
  padding: 20px 80px;
  /* backdrop-filter: blur(3px); */
  /* background: rgba(0, 0, 0, 0.4); */
  background: none;
  color: ${colors.after};
  font-size: 1.1rem;

  svg.startIcon {
    margin-left: 10px;
    transform: rotate(180deg) translateY(10px);
  }

  svg.endIcon {
    margin-right: 7px;
    transform: translateY(-10px);
  }

  z-index: 2;

  /* .after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    width: 1px;
    height: 50%;
    z-index: -1;
    box-shadow: -70px 0 70px 10px ${colors.after};
    background: transparent;
    opacity: 0.9;
  }

  .before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
    width: 1px;
    height: 50%;
    z-index: -1;
    box-shadow: 70px 0 70px 10px ${colors.after};
    background: transparent;
    opacity: 0.9;
  } */

  &::after {
    content: "";
    position: absolute;
    bottom: 10px;
    left: 25%;
    width: 24%;
    height: 5px;
    z-index: -1;
    border: 1px solid ${colors.after};
    border-radius: 50%;
    box-shadow: 0 -10px 20px 1px ${colors.title};
    animation: ${shadowEff} 3s ease-in-out infinite;
    background: transparent;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 10px;
    right: 25%;
    width: 24%;
    height: 5px;
    z-index: -1;
    border: 1px solid ${colors.after};
    border-radius: 50%;
    box-shadow: 0 -10px 20px 1px ${colors.title};
    animation: ${shadowEff} 3s ease-in-out infinite;
    background: transparent;
  }

  @media (max-width: ${media.mobile}) {
    padding: 20px;
  }
`;

const ShowDetailsBottom = styled(Button)`
  color: ${colors.after};
  animation: ${floatAnimation} 3s ease-in-out infinite;
  text-shadow: 2px 2px 2px black, 3px 3px 2px rgba(0, 0, 0, 0.8);
  background: linear-gradient(${colors.after_hover} 60%, transparent 90%);
  border-radius: 5px;
`;

export default Service;
