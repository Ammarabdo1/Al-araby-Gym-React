import { FeaturesDes } from "./FeaturesDes";
import { Divider } from "@mui/material";
import { GiLotusFlower as BronzeIcon } from "react-icons/gi";
import { GiVineFlower as SilverIcon } from "react-icons/gi";
import { GiVanillaFlower as GoldIcon } from "react-icons/gi";
import { MilitaryTech as BronzePlan } from "@mui/icons-material";
import { Star as SilverPlan } from "@mui/icons-material";
import { WorkspacePremium as GoldPlan } from "@mui/icons-material";

import { PiSpeedometerFill as BronzeSelected } from "react-icons/pi";
import { PiSpeedometerLight as BronzeOutlined } from "react-icons/pi";
import {
  LocalFireDepartment as SilverSelected,
  LocalFireDepartmentOutlined as SilverOutlined,
} from "@mui/icons-material";
import {
  RocketLaunch as GoldSelected,
  RocketLaunchOutlined as GoldOutlined,
} from "@mui/icons-material";

export const PlansTypes = [
  {
    type: "bronze",
    price: 500,
    title: "باقة المحارب ",
    subTitle: "للذين لا يعرفون الاستسلام",
    des: "اكتسب القوة واللياقة مع تدريبات مصممة لتحسين أدائك البدني وزيادة صلابتك ",
    flowerIcon: <BronzeIcon />,
    icon: {
      plan: <BronzePlan />,
      selected: <BronzeSelected />,
      outlined: <BronzeOutlined />,
    },
    color: {
      main: "rgb(140, 98, 57)",
      light: " #CD7F32",
      hover: "rgba(140, 98, 57, 0.93)",
      transparent: "rgba(140, 98, 57, 0.19)",
    },
    features: {
      training: FeaturesDes("bronze").training.map((f, i) => (
        <p key={i}>
          {f.icon}{" "}
          <Divider
            variant="middle"
            sx={{ bgcolor: "silver", ml: 1, mr: 0.5 }}
            orientation="vertical"
            flexItem
          />
          {f.text}
        </p>
      )),

      nutrition: FeaturesDes("bronze").nutrition.map((f, i) => (
        <p key={i}>
          {f.icon}{" "}
          <Divider
            variant="middle"
            sx={{ bgcolor: "silver", ml: 1, mr: 0.5 }}
            orientation="vertical"
            flexItem
          />
          {f.text}
        </p>
      )),

      recovering: FeaturesDes("bronze").recovering.map((f, i) => (
        <p key={i}>
          {f.icon}{" "}
          <Divider
            variant="middle"
            sx={{ bgcolor: "silver", ml: 1, mr: 0.5 }}
            orientation="vertical"
            flexItem
          />
          {f.text}
        </p>
      )),
      fitness: FeaturesDes("bronze").fitness.map((f, i) => (
        <p key={i}>
          {f.icon}{" "}
          <Divider
            variant="middle"
            sx={{ bgcolor: "silver", ml: 1, mr: 0.5 }}
            orientation="vertical"
            flexItem
          />
          {f.text}
        </p>
      )),
    },
  },
  {
    type: "silver",
    price: 900,
    title: "باقة الابطل ",
    subTitle: "للذين يسعون إلى التفوق",
    des: "ارتقِ بمستواك مع خطة تدريب متقدمة وتوجيه احترافي للوصول إلى أعلى مستويات اللياقة والقوة",
    flowerIcon: <SilverIcon />,
    icon: {
      plan: <SilverPlan />,
      selected: <SilverSelected />,
      outlined: <SilverOutlined />,
    },
    color: {
      main: "rgb(142, 142, 142)",
      light: " #C0C0C0",
      hover: "rgba(142, 142, 142, 0.83)",
      transparent: "rgba(142, 142, 142, 0.17)",
    },
    features: {
      training: FeaturesDes("silver").training.map((f, i) => (
        <p key={i}>
          {f.icon}{" "}
          <Divider
            variant="middle"
            sx={{ bgcolor: "silver", ml: 1, mr: 0.5 }}
            orientation="vertical"
            flexItem
          />
          {f.text}
        </p>
      )),

      nutrition: FeaturesDes("silver").nutrition.map((f, i) => (
        <p key={i}>
          {f.icon}{" "}
          <Divider
            variant="middle"
            sx={{ bgcolor: "silver", ml: 1, mr: 0.5 }}
            orientation="vertical"
            flexItem
          />
          {f.text}
        </p>
      )),

      recovering: FeaturesDes("silver").recovering.map((f, i) => (
        <p key={i}>
          {f.icon}{" "}
          <Divider
            variant="middle"
            sx={{ bgcolor: "silver", ml: 1, mr: 0.5 }}
            orientation="vertical"
            flexItem
          />
          {f.text}
        </p>
      )),
      fitness: FeaturesDes("silver").fitness.map((f, i) => (
        <p key={i}>
          {f.icon}{" "}
          <Divider
            variant="middle"
            sx={{ bgcolor: "silver", ml: 1, mr: 0.5 }}
            orientation="vertical"
            flexItem
          />
          {f.text}
        </p>
      )),
    },
  },
  {
    type: "gold",
    price: 1800,
    title: "باقة النخبة ",
    subTitle: "للذين يصنعون الفرق",
    des: "خطة تدريب حصرية مصممة خصيصًا لك، مع متابعة دقيقة لتحقيق أقصى أداء بدني",
    flowerIcon: <GoldIcon />,
    icon: {
      plan: <GoldPlan />,
      selected: <GoldSelected />,
      outlined: <GoldOutlined />,
    },
    color: {
      main: "rgb(201, 154, 0)",
      light: " #FFD700",
      hover: "rgba(201, 154, 0, 0.72)",
      transparent: "rgba(201, 154, 0, 0.19)",
    },
    features: {
      training: FeaturesDes("gold").training.map((f, i) => (
        <p key={i}>
          {f.icon}
          <Divider
            variant="middle"
            sx={{ bgcolor: "silver", ml: 1, mr: 0.5 }}
            orientation="vertical"
            flexItem
          />
          {f.text}
        </p>
      )),

      nutrition: FeaturesDes("gold").nutrition.map((f, i) => (
        <p key={i}>
          {f.icon}
          <Divider
            variant="middle"
            sx={{ bgcolor: "silver", ml: 1, mr: 0.5 }}
            orientation="vertical"
            flexItem
          />
          {f.text}
        </p>
      )),

      recovering: FeaturesDes("gold").recovering.map((f, i) => (
        <p key={i}>
          {f.icon}
          <Divider
            variant="middle"
            sx={{ bgcolor: "silver", ml: 1, mr: 0.5 }}
            orientation="vertical"
            flexItem
          />
          {f.text}
        </p>
      )),
      fitness: FeaturesDes("gold").fitness.map((f, i) => (
        <p key={i}>
          {f.icon}
          <Divider
            variant="middle"
            sx={{ bgcolor: "silver", ml: 1, mr: 0.5 }}
            orientation="vertical"
            flexItem
          />
          {f.text}
        </p>
      )),
    },
  },
];
