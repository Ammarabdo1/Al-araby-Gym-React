import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarRateIcon from "@mui/icons-material/StarRate";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import { title } from "./titles-text";
import { desc } from "./description-text";

export const achievements = [
  {
    type: "champions",
    title: title.AchieveCard[0],
    description: desc.Achieve[0],
    icon: <EmojiEventsIcon fontSize="large" />,
    clickHandler: (navigate) => {
      navigate("/about");
      setTimeout(() => {
        const championsSec = document.getElementById("champions");
        if (championsSec) {
          championsSec.scrollIntoView({ behavior: "smooth" });
        }
      }, 1300);
    },
  },
  {
    type: "certificates",
    title: title.AchieveCard[1],
    description: desc.Achieve[1],
    icon: <WorkspacePremiumIcon fontSize="large" />,
    clickHandler: (navigate, set) => {
      set();
    },
  },
  {
    type: "heroes",
    title: title.AchieveCard[2],
    description: desc.Achieve[2],
    icon: <StarRateIcon fontSize="large" />,
    clickHandler: (navigate) => {
      navigate("/projects");
      setTimeout(() => {
        const heroesSec = document.getElementById("heroes");
        if (heroesSec) {
          heroesSec.scrollIntoView({ behavior: "smooth" });
        }
      }, 1300);
    },
  },
];
