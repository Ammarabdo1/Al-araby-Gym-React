import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";

const phoneNumber = "+201287194379";
export const cardsInfo = [
  {
    infoIcon: <PhoneIcon />,
    infoText: "01287194379",
    path: {url: `https://wa.me/${phoneNumber}`, type: '_blank'},
  },

  {
    infoIcon: <MailOutlineIcon />,
    type: 'email',
    infoText: "saleh@elarabygym.com",
    path: {url: `#`, type: '_self'},
  },

  {
    infoIcon: <LocationOnTwoToneIcon />,
    infoText: "كفر الدوار / شارع الحدايق",
    path: {url: `#`, type: '_self'},
  },
];