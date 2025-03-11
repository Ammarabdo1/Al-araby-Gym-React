import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import { styled as muiStyled } from "@mui/system";
import { colors } from "libs/themes"; // Assuming you have a color theme setup
import { chooseDes } from "../Choose/ChooseDes";
import useStore from "libs/useStore";
import { PlansTypes } from "components/Prices/Plans/PlansTypes";
import { GetTotalPrice } from "./GetTotalPrice";
import { KeyboardDoubleArrowUp } from "@mui/icons-material";
import ConfirmForm from "./ConfirmForm";

export default function SubscriptionSummary() {
  const result = chooseDes.Result || {}; // Prevent undefined error
  const { planType, serviceName, duration, subPrices, setSubPrices, player } =
    useStore();
  const plan = PlansTypes.find((pt) => pt.type === planType) || {}; // Prevent undefined error
  const [showConfirm, setShowConfirm] = useState(false);

  const [totalCost, setTotalCost] = React.useState("");

  React.useEffect(() => {
    setTotalCost(
      GetTotalPrice(subPrices, setSubPrices) ? (
        <PriceOffer>{GetTotalPrice(subPrices, setSubPrices)} EGP</PriceOffer>
      ) : (
        ""
      )
    );
  }, [subPrices]);

  const subscribeData = [
    serviceName,
    plan.title || "", // Handle undefined title
    duration,
    totalCost,
  ];

  return (
    <SummaryContainer>
      <Typography variant="h5" sx={{ color: colors.subTitle, mb: 2 }}>
        {result.title || "No Title Available"}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, color: colors.link_hover }}>
        {result.subTitle || "No Subtitle Available"}
      </Typography>

      {Array.isArray(result.des) &&
        result.des.map((item, index, arr) => (
          <Box key={item.id} sx={{ position: "relative" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: colors.after_hover2 }}
            >
              {item.text}
              {index < arr.length - 1 &&
                (Array.isArray(subscribeData[index])
                  ? subscribeData[index].length <= 0
                  : true) && (
                  <IconButton
                    sx={{ position: "absolute", top: "-5px", right: "0px" }}
                    href={`#${item.id}`}
                    aria-label={`up to ${item.id} section`}
                  >
                    <KeyboardDoubleArrowUp
                      fontSize="large"
                      sx={{
                        color: colors.link,
                        borderRadius: "50%",
                        padding: "7px",
                        boxShadow: `0 12px 10px 1px ${colors.after_hover}`,
                      }}
                    />
                  </IconButton>
                )}
            </Typography>
            <Typography variant="body1" sx={{ color: "#ddd" }}>
              {Array.isArray(subscribeData[index]) ? (
                subscribeData[index].length > 0 ? (
                  subscribeData[index].map((service, i, arr) => (
                    <span key={i}>
                      {service} {i === arr.length - 1 ? "" : "-"}{" "}
                    </span>
                  ))
                ) : (
                  <span style={{ color: "gray" }}>{item.defaultValue} </span>
                )
              ) : (
                subscribeData[index] || (
                  <span style={{ color: "gray" }}>{item.defaultValue} </span>
                )
              )}
            </Typography>
            <StyledDivider />
          </Box>
        ))}

      <Typography
        variant="caption"
        sx={{ display: "block", mt: 2, color: "lightgray" }}
      >
        {result.note || ""}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button href="#service" variant="outlined" color="warning">
          {result.editButton || "Edit"}
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{
            color: colors.link,
            "&.Mui-disabled": { color: colors.link_hover },
          }}
          disabled={!subPrices.finalPrice}
          onClick={() =>
            player.sendValid
              ? setShowConfirm(true)
              : alert(
                  `✅ تم إرسال التفاصيل بالفعل! 📩 سنقوم بالرد عليك علي الرقم ${player.phone} خلال 48 ساعة. شكراً لصبرك! 😊`
                )
          }
        >
          {result.confirmButton || "Confirm"}
        </Button>
      </Box>

      {/*//! confirm form */}
      {showConfirm && (
        <ConfirmWrapper onClick={() => setShowConfirm(false)}>
          <ConfirmForm
            subscribeData={subscribeData}
            setShowConfirm={setShowConfirm}
            onClick={(e) => e.stopPropagation()}
          />
        </ConfirmWrapper>
      )}
      {/*//* end confirm form */}
    </SummaryContainer>
  );
}

const SummaryContainer = muiStyled(Paper)({
  position: "relative",
  backgroundColor: "rgba(20, 20, 20, 0.95)",
  color: "#fff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
  maxWidth: "400px",
  margin: "auto",
  marginTop: "20px",
  textAlign: "center",
});

const StyledDivider = muiStyled(Divider)({
  backgroundColor: "rgba(255, 255, 255, 0.2)", // Light divider for separation
  margin: "10px 0",
});

const PriceOffer = muiStyled(Box)({
  s: {
    textDecorationThickness: "2px",
    textDecorationColor: "gray",
    letterSpacing: "1px",
    color: colors.des,
  },
});

const ConfirmWrapper = muiStyled(Box)({
  position: "absolute",
  top: "0",
  right: "0",
  width: "100%",
  height: "100%",
  backgroundColor: colors.bg_hover2,
  backdropFilter: "blur(5px)",
  display: "grid",
  placeItems: "center",
});
