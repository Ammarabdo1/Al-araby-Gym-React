import { Box, Button } from "@mui/material";
import ChooseServices from "./ChooseServices";
import ChoosePlan from "./ChoosePlan/ChoosePlan";
import ChooseDuration from "./ChooseDuration";

export default function Choose() {
  return (
    <Box>
      <ChooseServices />
      <ChoosePlan />
      <ChooseDuration />
    </Box>
  );
}
