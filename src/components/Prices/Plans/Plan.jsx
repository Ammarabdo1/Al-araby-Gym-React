import { Button, Box, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
// import fireImage from "assets/images/Fire.png";
import { Des } from "styles/designs/Description";
import { colors, media } from "libs/themes";
import PlanAvatar from "./PlanAvatar";
import { backgroundMover } from "libs/frames";
import { InitialAos } from "utils/initialAos";
import { styled as newStyled } from "@mui/system";
import useStore from "libs/useStore";
import { servicesInfo } from "./ServicesInfo";

export default function Plan({ planType, service }) {
  const { setShowPopupPrices, setServiceName, setPlanType, setSubPrices } = useStore();
  InitialAos();

  const planPrices = {
    bronze: 500,
    silver: 900,
    gold: 1800, // Default case
  };

  function handelOnClick() {
    setShowPopupPrices(true);
    setServiceName(servicesInfo[service].title.split(","));
    setPlanType(planType.type);
    setSubPrices('service', 1);
    setSubPrices('planType', planPrices[planType.type] || 0)
    setTimeout(() => {
      const popupSection = document.getElementById("popupSection");
      if (popupSection) {
        popupSection.scrollTo({
          top: popupSection.scrollHeight - popupSection.clientHeight,
          behavior: "smooth",
        });
      }
    }, 600);
  }

  return (
    <div style={{ overflow: "hidden" }}>
      <PlanContainer
        sx={{
          minHeight: ["600px", "500px", "1100px", "900px", "700px"],
          width: { xs: "100vw", md: "30vw" },
        }}
        data-aos="fade-down"
      >
        <PlanAvatar planColor={planType.color} type={planType.type} />
        <PlanTitle planColor={planType.color}>{planType.title}</PlanTitle>

        <DesContainer planColor={planType.color}>
          {planType.features[`${service}`].map((feature, i) => (
            <PlanDes>{feature}</PlanDes>
          ))}
        </DesContainer>

        <PlanButton
          href="#duration"
          planColor={planType.color}
          onClick={handelOnClick}
        >
          اشترك الان
        </PlanButton>

        <PlanImage
          src={`/images/plansTypes/${planType.type}Price.png`}
          alt=""
        />
        <FlowerIcon planColor={planType.color}>
          {planType.flowerIcon}
        </FlowerIcon>
      </PlanContainer>
    </div>
  );
}

const PlanContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
  position: relative;
  margin-bottom: 60px;
`;

const PlanTitle = styled(Des)`
  text-align: center;
  background: none;
  margin: 80px 0 30px 0;
  text-shadow: 2px 2px 4px black,
    4px 4px 4px ${({ planColor }) => planColor.light};
  color: ${({ planColor }) => planColor.light} !important;
  background: linear-gradient(
    ${({ planColor }) => planColor.hover},
    transparent
  );
  backdrop-filter: blur(10px);
  padding: 1px 5px;
`;

const DesContainer = styled(Box)`
  max-width: 75%;
  margin: 0 auto;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 5px;
  /* background: #1f1f1f73;
  backdrop-filter: blur(5px); */
`;

const PlanDes = styled(Des)`
  text-align: center;
  background: none;
  color: ${colors.link};
  font-size: 18px !important;
  text-align: start;
  margin: 0;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;

    svg[data-testid="VerifiedIcon"] {
      color: #2db82d;
    }

    svg[data-testid="DoNotDisturbOnIcon"] {
      color: #d82323;
    }
  }

  @media (max-width: ${media.tablet}) {
    font-size: 12px !important;
  }
`;

const PlanButton = styled(Button)`
  position: absolute;
  bottom: 0;
  color: ${({ planColor }) => planColor.light};
  z-index: 0;
  text-shadow: 2px 2px 4px black, 4px 4px 4px black;
  font-size: 1.5rem;
  border-radius: 50px;
  background: ${({ planColor }) =>
    `linear-gradient(270deg, ${planColor.light} 0%, ${planColor.transparent} 70%)`};
  background-size: 200% 100%;
  animation: ${backgroundMover} 2s linear infinite;
  backdrop-filter: blur(5px);

  &::after {
    border-right: 3px dotted;
    border-left: 3px dotted;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(100px);
    background: rgba(0, 0, 0, 0.7);
    z-index: -1;
    border-radius: 50px;
  }

  @media (max-width: ${media.mobile}) {
    font-size: 1.2rem;
  }
`;

const PlanImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const FlowerIcon = newStyled(Box)(({ theme, planColor }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return {
    position: "absolute",
    top: isMobile ? "-5px" : "-3px",
    zIndex: "-1",

    svg: {
      fontSize: 75,
      color: planColor.main,
    },
  };
});
