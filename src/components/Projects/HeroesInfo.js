import { RiMedalLine } from "react-icons/ri";
import { RiMedal2Fill } from "react-icons/ri";
import StarIcon from "@mui/icons-material/Star";
import {styled as muiStyled} from '@mui/system';

const First = muiStyled(RiMedal2Fill)({
  color: 'rgb(201, 154, 0) !important',
})

const Second = muiStyled(RiMedalLine)({
  color: 'rgb(142, 142, 142) !important',
})

const Third = muiStyled(StarIcon)({
  color: 'rgb(88, 63, 37) !important',
})

export const HeroesInfo = [
    {
      heroName: "عمرو خالد و رمانه عبد الله",
      score: "1st",
      des: "امبابي ",
      icon: <First />,
    },

    {
      heroName: " رمانه عبد الله",
      score: "1st",
      des: "الورداني برو كلاسيك ",
      icon: <First />,
    },

    {
      heroName: "محمد زين",
      score: "2nd",
      des: "شرف جيم ",
      icon: <Second />,
    },

    {
      heroName: "محمود شوقي",
      score: "2nd",
      des: "الورداني برو كلاسيك ",
      icon: <Second />,
    },

    {
      des: "الورداني برو كلاسيك",
      heroName: "احمد كرم ",
      score: "1st",
      icon: <First />,
    },

    {
      des: "الجمهورية",
      heroName: "احمد كرم ",
      score: "2nd",
      icon: <Second />,
    },

    {
      des: "جيمز كلاسيك",
      heroName: "احمد كرم ",
      score: "4th",
      icon: <Third />,
    },

    {
      des: "اتحاد الاسكندرية",
      heroName: "يوسف هاني ",
      score: "2nd",
      icon: <Second />,
    },

    {
      des: "الكينج",
      heroName: "يوسف الجزار ",
      score: "2nd",
      icon: <Second />,
    },

    {
      des: "جيمز كلاسيك",
      heroName: "يوسف الجزار ",
      score: "3rd",
      icon: <Third />,
    },

    {
      heroName: " رمانه عبد الله",
      score: "1st",
      des: "شرف جيم ",
      icon: <First />,
    },

    {
      des: "شلبي كلاسيك",
      heroName: "يوسف الجزار ",
      score: "1st",
      icon: <First />,
    },

    {
      des: "اتحاد الاسكندريه",
      heroName: "محمد زين ",
      score: "5th",
      icon: <Third />,
    },

    {
      heroName: " رمانه عبد الله",
      score: "1st",
      des: "اتحاد الاسكندريه",
      icon: <First />,
    },

    {
      heroName: " باسم عاشور",
      score: "5th",
      des: "اتحاد الاسكندريه",
      icon: <Third />,
    },
  ];