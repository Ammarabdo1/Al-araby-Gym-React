import ChooseInfo from "./ChooseInfo";
import { chooseDes } from "components/Prices/PopUpPlanPrices/PopUpComponent/Choose/ChooseDes";
import DiscountIcon from "@mui/icons-material/LocalOffer";
import SelectChoices from "./SelectChoices";
import { Box } from "@mui/material";

export default function ChooseServices() {
  return (
      <Box id='service' sx={{display: 'grid', placeItems: 'center'}}>
        <ChooseInfo icon={<DiscountIcon />} text={chooseDes.ChooseService} />
        <SelectChoices select={chooseDes.ChooseService} />
      </Box>
  );
}
