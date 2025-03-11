import { Box, IconButton } from "@mui/material";
import { styled as muiStyled } from "@mui/system";

import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import CloseIcon from "@mui/icons-material/Close";
import { colors } from "libs/themes";
import useStore from "libs/useStore";

export default function Shutter() {
  const { setShowPopupPrices } = useStore();

  function handelOnClick() {
    setShowPopupPrices(false);
  }

  return (
    <ShutterContainer>
      <ShutterButton onClick={handelOnClick}>
        <ShutterIcon color='error' sx={{fontSize: {xs: '1.8rem', md: "2rem"}}} />
      </ShutterButton>
    </ShutterContainer>
  );
}
const ShutterContainer = muiStyled(Box)({
  position: "absolute",
  top: "2px",
  right: "0px",
});

const ShutterButton = muiStyled(IconButton)({
  color: colors.after,
});

const ShutterIcon = muiStyled(CloseIcon)({
  color: colors.after,
  boxShadow: `inset 0 0 15px 1px ${colors.after_hover2}, 0 0 10px 1px`,
  borderRadius: "50%",
});
