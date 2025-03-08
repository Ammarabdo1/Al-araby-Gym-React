import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { styled as muiStyled } from "@mui/system";
import TransitionSwiper from "./PopUpComponent/TransitionsSwiper";
import Choose from "./PopUpComponent/Choose";
import Result from "./PopUpComponent/SubscriptionResult/SubscriptionSummary";
import Shutter from "./PopUpComponent/Shutter";
import { InitialAos } from "utils/initialAos";

export default function PlanPrices() {
  InitialAos();

  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPage(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PlanPricesContainer data-aos="fade-smooth">
      <Shutter />
      {showPage && (
        <PlanPricesSection id='popupSection' sx={{width: ['95%', '90%', '80%', '70%']}} data-aos="fade-up">
          <PlanPricesBox>
            <TransitionSwiper />
            <Choose />
            <Result />
          </PlanPricesBox>
        </PlanPricesSection>
      )}
    </PlanPricesContainer>
  );
}

const PlanPricesContainer = muiStyled(Box)({
  background: "rgba(0, 0, 0, .6)",
  backdropFilter: "blur(20px)",
  paddingTop: "20px",
  height: "100vh",
  width: "100vw",
  position: "fixed",
  display: "grid",
  placeItems: "center",
  zIndex: 190000,
});

const PlanPricesSection = muiStyled(Box)({
  maxHeight: "90%",
  overflowY: "auto",
  overflowX: "hidden",
  scrollbarWidth: 'none',
});

const PlanPricesBox = muiStyled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});
