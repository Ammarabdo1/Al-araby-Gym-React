import { Box, Typography } from "@mui/material";
import { styled as muiStyled } from "@mui/system";
import { servicesInfo } from "./ServicesInfo";
import { colors } from "libs/themes";
import { Btn } from "designs";
import { MdOutlineHdrStrong } from "react-icons/md";
import useStore from "libs/useStore";

export default function ServiceInfo({ serviceName }) {
  const { setShowPopupPrices, setServiceName, setSubPrices } = useStore();

  function handelOnClick() {
    setShowPopupPrices(true);
    setServiceName(servicesInfo[serviceName].title.split(","));
    setSubPrices("service", 1);
  }

  return (
    <Container>
      <ServiceTitle
        variant="h3"
        sx={{ fontSize: { xs: "2.3rem", sm: "2.7rem", md: "3rem" } }}
      >
        {servicesInfo[serviceName].title}
      </ServiceTitle>
      <ServiceDescriptions
        sx={{ width: { xs: "250px", sm: "500px", lg: "700px" } }}
      >
        <ServiceDes variant="body1">{servicesInfo[serviceName].des}</ServiceDes>
      </ServiceDescriptions>
      <ServiceButton onClick={handelOnClick}>
        التفاصيل و الأسعار <MdOutlineHdrStrong />
      </ServiceButton>
      <IconContainer>{servicesInfo[serviceName].icon}</IconContainer>
    </Container>
  );
}

const Container = muiStyled(Box)({
  position: "relative",
  display: "grid",
  placeItems: "center",
  textAlign: "center",
  marginTop: "30px",
  zIndex: '5',
});

const ServiceDescriptions = muiStyled(Box)({
  marginTop: "10px",
});

const ServiceTitle = muiStyled(Typography)({
  color: colors.title,
});

const ServiceDes = muiStyled(Typography)({
  color: colors.des,
  textShadow: `2px 2px 2px black, 0px 0px 1px black`,
});

const ServiceButton = muiStyled(Btn)({
  margin: "20px 0",
});

const IconContainer = muiStyled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "90%",
  svg: {
    width: "100%",
    height: "100%",
    color: colors.after_hover2,
    opacity: 0.2,
  },
  zIndex: '-2',
  "&::after": {
    content: "''",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: `radial-gradient(circle, ${colors.after_hover} 0%, transparent 70%) `,
    zIndex: '1',
    opacity: '.7',
  },
});
