import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import GroupIcon from "@mui/icons-material/Group";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";

import Personal from 'assets/images/ServiceCard/PersonalTraning.jpg'
import healthy from 'assets/images/ServiceCard/healthyFood.jpg'
import brok from 'assets/images/ServiceCard/Brok.jpg'
import fintnes from 'assets/images/ServiceCard/fitnes.jpg'

// Service data
export const services = [
    {
      icon: <FitnessCenterIcon fontSize="large" />,
      title: "التدريب الشخصي",
      description: "احصل على خطط مخصصة لتحقيق أهدافك الرياضية.",
      bg: Personal
    },
    {
      icon: <GroupIcon fontSize="large" />,
      title: " التغذية العلاجية",
      description: "انضم إلى جلسات ممتعة تلائم مستويات مختلفة.",
      bg: healthy
    },
    {
      icon: <HealthAndSafetyIcon fontSize="large" />,
      title: "التعافي من الإصابات",
      description: "تعاون مع الخبراء لاستعادة قوتك بعد الإصابات.",
      bg: brok
    },
    {
      icon: <SportsGymnasticsIcon fontSize="large" />,
      title: "اللياقة البدنية",
      description: "طور قوتك وتحملك مع برامج شاملة للياقة البدنية.",
      bg: fintnes
    },
  ];