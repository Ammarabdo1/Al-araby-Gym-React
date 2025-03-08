import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";

export const servicesInfo = {
  training: {
    title: 'التدريب الشخصي',
    des: [
      "احصل على تجربة تدريب فريدة مع مدرب شخصي محترف يصمم لك برنامجًا خاصًا ",
      " يناسب أهدافك البدنية، سواء كنت ",
      "ترغب في بناء العضلات، فقدان ",
      "الوزن زيادة اللياقة، أو تحسين ",
      " ، القوة البدنية. ",
    ],
    icon: <FitnessCenterIcon/>
  },

  nutrition: {
    title: 'التغذية العلاجية',
    des: [
      " هل تسعى لتحسين لياقتك، بناء عضلاتك ",
      " أو حتى فقدان الوزن بطريقة صحية ",
      "وآمنة؟ مع خدمة التغذية العلاجية ",
      "لدينا ستجد الحل الأمثل لتحقيق ",
      " أهدافك البدنية بأفضل  ",
      " الطرق العلمية ",
    ],
    icon: <MedicationLiquidIcon/>
  },

  recovering: {
    title: 'التعافي من الإصابات',
    des: [
      " نقدم برنامجًا متخصصًا في استعادة القوة ",
      " واللياقة بعد الإصابات، مصمم خصيصًا ",
      " لمساعدتك على التعافي بأمان والعودة ",
      " نشاطك اليومي بأفضل أداء. ",
    ],
    icon: <HealthAndSafetyIcon/>
  },

  fitness: {
    title: 'اللياقة البدنية',
    des: [
      " هل تبحث عن طريقة فعالة لتحسين لياقتك، ",
      " تطوير قدرتك الجسدية، وزيادة تحملك؟ نحن",
      " نقدم لك برنامجًا تدريبيًا متكاملًا لمساعدتك ",
      " بطريقة على تحقيق أهدافك الرياضية",
      "   ممتعة وآمنة، ",
    ],
    icon: <SportsGymnasticsIcon/>
  },
};
