import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";

import Personal from 'assets/images/ServiceCard/PersonalTraning.jpg'
import healthy from 'assets/images/ServiceCard/healthyFood.jpg'
import brok from 'assets/images/ServiceCard/Brok.jpg'
import fintnes from 'assets/images/ServiceCard/fitnes.jpg'
import { title } from "./titles-text";
import { desc } from "./description-text";

// Service data
export const services = [
    {
      name: 'training',
      icon: <FitnessCenterIcon fontSize="large" />,
      title: title.CardService[0],
      description: desc.Service[0],
      bg: Personal
    },
    {
      name: 'nutrition',
      icon: <MedicationLiquidIcon fontSize="large" />,
      title:  title.CardService[1],
      description: desc.Service[1],
      bg: healthy
    },
    {
      name: 'recovering',
      icon: <HealthAndSafetyIcon fontSize="large" />,
      title:  title.CardService[2],
      description: desc.Service[2],
      bg: brok
    },
    {
      name: 'fitness',
      icon: <SportsGymnasticsIcon fontSize="large" />,
      title:  title.CardService[3],
      description: desc.Service[3],
      bg: fintnes
    },
  ];