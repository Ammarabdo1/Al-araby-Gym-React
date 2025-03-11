import { PiSealPercentDuotone as CustomPercentIcon } from "react-icons/pi";
import OfferIcon from "@mui/icons-material/PercentSharp";
// import { PiPercentFill as LimitedOfferIcon } from "react-icons/pi";

import { styled as muiStyled } from "@mui/system";
import { Box } from "@mui/material";
import { ShadowLight } from "libs/frames";
import { useEffect } from "react";

function getOffer(finalPrice, offer) {
  let result = (finalPrice * (100 - offer)) / 100;
  return Math.floor(result / 50) * 50;
}

function CustomOffer({subPrices, setSubPrices}) {
  const CustomDiscounts = { 1: 15, 3: 20, 6: 30, 12: 50 };
  const discount = CustomDiscounts[subPrices.duration];
  const offerPrice = getOffer(subPrices.finalPrice, discount);

  useEffect(() => {
    setSubPrices("discount", discount);
    setSubPrices("offerPrice", offerPrice);
  }, [discount, offerPrice]);

  if (!discount) {
    return null;
  }

  return (
    <span>
      <s>{subPrices.finalPrice}</s> - {offerPrice}
      <PercentOffer custom={true}>
        <p>خصم خاص</p>
        <span>
          <CustomPercentIcon
            style={{
              background: "rgba(0, 128, 0, 0.252)",
              boxShadow: "-5px 0 10px 2px rgba(0, 128, 0, 0.252)",
              borderRadius: "50%",
            }}
          />{" "}
          {discount}
        </span>
      </PercentOffer>
    </span>
  );
}

function GeneralOffer({subPrices, setSubPrices}) {
  const GeneraDiscounts = { 1: 10, 3: 15, 6: 25, 12: 40 };
  const discount = GeneraDiscounts[subPrices.duration];
  const offerPrice = getOffer(subPrices.finalPrice, discount);

  useEffect(() => {
    setSubPrices("discount", discount);
    setSubPrices("offerPrice", offerPrice);
  }, [discount, offerPrice]);

  if (!discount) {
    return null;
  }

  return (
    <span>
      <s>{subPrices.finalPrice}</s> - {offerPrice}
      <PercentOffer>
        <span>
          <p style={{ width: "min-content" }}>
            خصم {[25, 40].includes(discount) && "لفتره محدوده"}
          </p>
          {[25, 40].includes(discount) ? (
            <OfferIcon
              sx={{
                bgcolor: "rgba(0, 128, 0, 0.252)",
                boxShadow: "-5px 0 10px 2px rgba(0, 128, 0, 0.252)",
                borderRadius: "50%",
              }}
            />
          ) : (
            <OfferIcon />
          )}
          {discount}
        </span>
      </PercentOffer>
    </span>
  );
}

export function GetTotalPrice(subPrices, setSubPrices) {
  if (subPrices.finalPrice) {
    if (subPrices.planType === 1800 && subPrices.service >= 2) {
      return <CustomOffer subPrices={subPrices} setSubPrices={setSubPrices} />;
    } else {
      return <GeneralOffer subPrices={subPrices} setSubPrices={setSubPrices} />;
    }
  } else {
    return 0;
  }
}

//! mui styles
const PercentOffer = muiStyled(Box)(({ theme, custom }) => ({
  position: "absolute",
  top: custom ? "0px" : "-10px",
  right: custom ? "-10px" : "-5px",
  color: theme.palette.success.main, // Uses MUI theme color
  fontWeight: "bold",
  fontSize: "1rem",
  backgroundColor: "rgba(0, 128, 0, 0.149)", // Light green background
  padding: "2px 6px",
  borderRadius: "6px",
  animation: custom ? `${ShadowLight} 2s ease-in-out infinite` : "none",
  display: "grid",
  placeItems: "center",
  textAlign: "center",
  minWidth: "30px", // Ensures proper spacing
  p: {
    color: theme.palette.success.dark,
    lineHeight: custom ? "0px" : "17px",
    textShadow: "2px 2px 4px rgba(0, 128, 0, 0.584)",
  },
  svg: {
    fontSize: "1.3rem",
  },
}));
