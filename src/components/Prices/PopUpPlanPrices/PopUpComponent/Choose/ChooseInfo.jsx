import { Box, Typography } from "@mui/material";
import { styled as muiStyled } from "@mui/system";
import { glow } from "libs/frames";
import { colors } from "libs/themes";

export default function ChooseInfo({ icon = "", text }) {
  return (
    <Box
      sx={{
        overflow: "hidden",
        width: { xs: "100%", md: "80%", lg: "70%" },
        marginTop: { md: "50px" },
      }}
    >
      <InfoContainer>
        <InfoTitle variant="h3" sx={{width: {xs: '100%', md: '90%'}}}>
          {icon && icon} {text?.title}
        </InfoTitle>

        <InfoDes
          sx={{ width: { xs: "90%", md: "70%", lg: "80%" } }}
          variant="subtitle1"
        >
          {text?.des}
        </InfoDes>
      </InfoContainer>
    </Box>
  );
}

// تنسيق خاص للتنبيه مع تأثير إضاءة
const InfoContainer = muiStyled(Box)(() => ({
  borderColor: colors.after_hover,
  // background: colors.after_hover,
  textAlign: "center",
  margin: "20px auto",
  width: "100%",
  display: 'grid',
  placeItems: 'center',
  "& svg": {
    fontSize: 30,
    color: colors.title, // You can replace with a dynamic prop
    animation: `${glow} 1.5s infinite alternate`,
    boxShadow: "5px 0 5px 1px ",
    borderRadius: "50%",
  },
}));

const InfoTitle = muiStyled(Typography)(() => ({
  boxShadow: "0 0 4px 10px",
  margin: "10px 0",
  fontSize: "1.8rem",
  color: colors.title,
}));

const InfoDes = muiStyled(Typography)({
  margin: "20px auto",
  textShadow: "0 0 4px rgba(0, 0, 0, .4)",
  fontWeight: "bold",
  color: colors.after,
});
