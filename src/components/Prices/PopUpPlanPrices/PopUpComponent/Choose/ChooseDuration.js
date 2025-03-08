import { Box } from "@mui/material";
import { styled as muiStyled } from "@mui/system";
import ChooseInfo from "./ChooseInfo";
import { chooseDes } from "./ChooseDes";
import SelectChoices from "./SelectChoices";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
export default function ChooseDuration() {
  return (
    <DurationContainer id='duration'>
      <ChooseInfo text={chooseDes.ChooseDuration} icon={<ShutterSpeedIcon />} />
      <SelectChoices select={chooseDes.ChooseDuration} />
    </DurationContainer>
  );
}

const DurationContainer = muiStyled(Box)({
  display: 'grid',
  placeItems: 'center',
});
