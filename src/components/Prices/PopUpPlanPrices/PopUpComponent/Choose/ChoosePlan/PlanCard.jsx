import { Box, Typography } from "@mui/material";
import { styled as muiStyled } from "@mui/system";
import { colors } from "libs/themes";
import useStore from "libs/useStore";
import { InitialAos } from "utils/initialAos";

export default function PlanCard({ plan, index }) {
  InitialAos({ once: true });
  const { planType, setPlanType, setSubPrices } = useStore();

  function handleChoosePlan() {
    setPlanType(plan.type);
    setSubPrices("planType", plan.price);
  }

  function handleCancelPlan() {
    setPlanType("");
    setSubPrices("planType", 0);
  }

  return (
    <StyledChip
      key={index}
      plan={plan}
      sx={{
        width: { xs: "85%", sm: "45%", md: "25%" },
        marginBottom: { xs: "30px", md: "0" },
      }}
      onClick={handleChoosePlan}
      onDoubleClick={handleCancelPlan}
      planType={planType}
    >
      <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
        {plan.icon.plan}
        <PlanTitle plan={plan} variant="h5">
          {plan.title}
        </PlanTitle>
        <PlanSubTitle plan={plan} variant="h6">
          {plan.subTitle}
        </PlanSubTitle>
        <PlanDes plan={plan} planType={planType} variant="body2">
          {plan.des}
        </PlanDes>
      </Box>
      <ChooseButton plan={plan} planType={planType}>
        {plan.type === planType ? plan.icon.selected : plan.icon.outlined}
      </ChooseButton>
    </StyledChip>
  );
}

const StyledChip = muiStyled(Box)(({ plan, planType }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  padding: "15px 20px",
  borderRadius: "20px",
  background: `url(/images/plansTypes/${plan.type}-plan.jpg) center/cover no-repeat`,
  color: "#fff",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: plan.type === planType ? `0 0 15px ${plan.color.light}` : "none",
  transform: plan.type === planType ? "scale(1.05)" : "scale(1)",
  position: "relative",
  zIndex: "2",

  svg: {
    color: plan.color.light,
    fontSize: "2rem",
    borderRadius: "50%",
    padding: "2px",
    background: "rgba(0, 0, 0, .2)",
    backdropFilter: "blur(10px)",
  },

  "&:hover": {
    transform: "scale(1.05)",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    zIndex: "-1",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    transition: "all .3 ease",
    borderRadius: "20px",
    background:
      plan.type === planType
        ? `linear-gradient(to top, ${plan.color.hover} 5%, ${plan.color.transparent} 35%, rgba(0, 0, 0, .3) )`
        : "none",
    backdropFilter: plan.type === planType ? "blur(0px)" : "blur(2px)",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    zIndex: "-1",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    transition: "all .3 ease",
    borderRadius: "20px",
    background: "rgba(0, 0, 0, .5)",
  },
}));

const PlanTitle = muiStyled(Typography)(({ plan }) => ({
  fontSize: "2.4rem",
  fontWeight: "bold",
  color: colors.title,
}));

const PlanSubTitle = muiStyled(Typography)(({ plan, planType }) => ({
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: colors.after,
  textShadow: "0px 0px 3px black, 2px 2px 5px black",
}));

const PlanDes = muiStyled(Typography)(({ plan, planType }) => ({
  fontSize: "1rem",
  fontWeight: "normal",
  color: colors.link,
  maxWidth: "80%",
  textShadow: "0px 0px 3px black, 2px 2px 5px black",
  lineHeight: 1.4,
}));

const ChooseButton = muiStyled(Box)(({ plan, planType }) => {
  const selected = plan.type === planType;
  return {
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: "0px",
    borderTopRightRadius: "20px",
    borderBottomLeftRadius: "50%",
    width: "40px",
    height: "40px",
    textAlign: "right",
    svg: {
      color: !selected && 'gray !important',
      opacity: !selected && '.6',
      width: "100%",
      height: "100%",
      background: "none !important",
      backdropFilter: "blur(0px) !important",
      borderRadius: "0px !important",
      borderTopRightRadius: "20px !important",
      borderBottomLeftRadius: "50% !important",
      padding: "5px !important",
      boxShadow:
      selected
          ? `-30px 10px 40px 10px ${plan.color.hover}, -10px 30px 40px 10px ${plan.color.hover}`
          : "none",
    },
  };
});
