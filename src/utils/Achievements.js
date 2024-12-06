import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarRateIcon from '@mui/icons-material/StarRate';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

import { title } from "./titles-text";
import { desc } from "./description-text";

export const achievements = [
    {
      title: title.AchieveCard[0],
      description: desc.Achieve[0],
      icon: <EmojiEventsIcon fontSize="large" />,
    },
    {
      title: title.AchieveCard[1],
      description: desc.Achieve[1],
      icon: <WorkspacePremiumIcon fontSize="large" />,
    },
    {
      title: title.AchieveCard[2],
      description: desc.Achieve[2],
      icon: <StarRateIcon fontSize="large" />,
    },
  ];