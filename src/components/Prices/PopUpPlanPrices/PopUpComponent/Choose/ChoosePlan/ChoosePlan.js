import { styled as muiStyled } from "@mui/system";
import PlanCard from "./PlanCard";
import { Box } from "@mui/material";
import { PlansTypes as plans } from "components/Prices/Plans/PlansTypes";
import { chooseDes } from "components/Prices/PopUpPlanPrices/PopUpComponent/Choose/ChooseDes";
import { colors } from "libs/themes";
import ChooseInfo from "../ChooseInfo";
import { Rocket } from "@mui/icons-material";

export default function ChoosePlan() {
  return (
    <PlanContainer id='package'>
      <ChoosePlanText>
        <ChooseInfo
          color={colors.des}
          bgcolor={colors.bg_hover2}
          text={chooseDes.ChoosePlan}
          icon={<Rocket />}
        ></ChooseInfo>
      </ChoosePlanText>
      {plans.map((plan, index) => (
        <PlanCard index={index} plan={plan} />
      ))}
    </PlanContainer>
  );
}

const PlanContainer = muiStyled(Box)({
  display: "flex",
  gap: "10%",
  justifyContent: "center",
  flexWrap: "wrap",
  padding: "20px 0",
});

const ChoosePlanText = muiStyled(Box)({
  textAlign: "center",
  color: colors.after,
  display: "grid",
  placeItems: "center",
  width: "100%",

});
