import { Box, IconButton } from "@mui/material";
import { styled as muiStyled } from "@mui/system";

import CancelSharpIcon from "@mui/icons-material/CancelSharp";
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
        <ShutterIcon fontSize="large" />
      </ShutterButton>
    </ShutterContainer>
  );
}
const ShutterContainer = muiStyled(Box)({
  position: "absolute",
  top: "0px",
  right: "0px",
});

const ShutterButton = muiStyled(IconButton)({
  color: colors.after,
});

const ShutterIcon = muiStyled(CancelSharpIcon)({
  color: colors.btn,
  boxShadow: "0 0 5px 1px " + colors.btn,
  borderRadius: "50%",
});
