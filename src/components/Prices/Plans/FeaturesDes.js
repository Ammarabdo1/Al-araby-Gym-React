import VerifiedIcon from "@mui/icons-material/Verified";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
export const FeaturesDes = (planType = "") => ({
  training: [
    {
      text: " متابعة شهرية علي البريد الإلكتروني الخاص بكابتن صالح العربي",
      icon: <VerifiedIcon />,
    },

    {
      text: " متابعة أسبوعية مع أحد مدربينا للتأكد من تقدمك على الطريق الصحيح",
      icon: <VerifiedIcon />,
    },

    {
      text: " تحفيز أسبوعي من الكابتن صالح العربي لمساعدتك على الاستمرار في تحقيق هدفك",
      icon: planType === "bronze" ? <DoNotDisturbOnIcon /> : <VerifiedIcon />,
    },

    {
      text: " يوم تدريبي كامل كل شهر مع الكابتن صالح العربي، يشمل التمارين، الاستشارات، والنصائح من خبرته",
      icon: planType === "gold" ? <VerifiedIcon /> : <DoNotDisturbOnIcon />,
    },

    {
      text: " متابعة يوم ويوم مع أحد مدربينا  للتأكد من تقدمك على الطريق الصحيح",
      icon: planType === "bronze" ? <DoNotDisturbOnIcon /> : <VerifiedIcon />,
    },

    {
      text: " متابعة يومية مع أحد مدربينا لضمان تقدمك في المسار الصحيح",
      icon: planType === "gold" ? <VerifiedIcon /> : <DoNotDisturbOnIcon />,
    },

    {
      text: " تحضير للبطولات تحت إشراف تام، يشمل خطط تدريبية متقدمة، متابعة الأداء، وتوجيهات متخصصة لتحقيق أفضل النتائج",
      icon: planType === "gold" ? <VerifiedIcon /> : <DoNotDisturbOnIcon />,
    },
  ],

  nutrition: [
    {
      text: " متابعة شهرية علي البريد الإلكتروني الخاص بكابتن صالح العربي",
      icon: <VerifiedIcon />,
    },

    {
      text: " متابعة أسبوعية مع أحد مدربينا للتأكد من تقدمك على الطريق الصحيح",
      icon: <VerifiedIcon />,
    },

    {
      text: " تحفيز أسبوعي من الكابتن صالح العربي لمساعدتك على الاستمرار في تحقيق هدفك",
      icon: planType === "bronze" ? <DoNotDisturbOnIcon /> : <VerifiedIcon />,
    },

    {
      text: " متابعة يومية عبر الواتساب أو الهاتف للرد على استفساراتك وتصحيح أي أخطاء غذائية",
      icon: planType === "gold" ? <VerifiedIcon /> : <DoNotDisturbOnIcon />,
    },

    {
      text:
        planType === "gold"
          ? " إعداد خطة وجبات مخصصة وفقًا لحالتك الصحية وتفضيلاتك الغذائية، مع تحديثات كل أسبوعين"
          : planType === "silver"
          ? " إعداد خطة وجبات أساسية مخصصة، مع تحديثات كل شهر"
          : " نصائح غذائية عامة وخطة وجبات ثابتة بدون تخصيص",
      icon: <VerifiedIcon />,
    },

    {
      text: " متابعة يوم ويوم مع أحد مدربينا  للتأكد من تقدمك على الطريق الصحيح",
      icon: planType === "bronze" ? <DoNotDisturbOnIcon /> : <VerifiedIcon />,
    },

    {
      text: " متابعة يومية مع أحد مدربينا لضمان تقدمك في المسار الصحيح",
      icon: planType === "gold" ? <VerifiedIcon /> : <DoNotDisturbOnIcon />,
    },
  ],

  recovering: [
    {
      text: " متابعة شهرية علي البريد الإلكتروني الخاص بكابتن صالح العربي",
      icon: <VerifiedIcon />,
    },

    {
      text: " متابعة أسبوعية مع أحد مدربينا للتأكد من تقدمك على الطريق الصحيح",
      icon: <VerifiedIcon />,
    },

    {
      text: " تحفيز أسبوعي من الكابتن صالح العربي لمساعدتك على الالتزام بخطة التعافي",
      icon: planType === "bronze" ? <DoNotDisturbOnIcon /> : <VerifiedIcon />,
    },

    {
      text: " متابعة يومية عبر الواتساب أو الهاتف للرد على استفساراتك وتحقيق تعافٍ أسرع",
      icon: planType === "gold" ? <VerifiedIcon /> : <DoNotDisturbOnIcon />,
    },

    {
      text:
        planType === "gold"
          ? " برنامج استشفائي متكامل، وفقًا لحالتك الصحية مع تحديثات كل أسبوعين"
          : planType === "silver"
          ? " خطة علاجية مخصصة تتضمن تمارين استشفائية مع متابعة شهرية"
          : " إرشادات عامة حول التعافي وتمارين أساسية بدون تخصيص",
      icon: <VerifiedIcon />,
    },

    {
      text: " متابعة يوم ويوم مع أحد مدربينا  للتأكد من تقدمك على الطريق الصحيح",
      icon: planType === "bronze" ? <DoNotDisturbOnIcon /> : <VerifiedIcon />,
    },

  ],

  fitness: [
    {
      text: " متابعة شهرية علي البريد الإلكتروني الخاص بكابتن صالح العربي",
      icon: <VerifiedIcon />,
    },

    {
      text: " متابعة أسبوعية مع أحد مدربينا للتأكد من تقدمك على الطريق الصحيح",
      icon: <VerifiedIcon />,
    },

    {
      text: " تحفيز أسبوعي من الكابتن صالح العربي لمساعدتك على تحقيق أهدافك الرياضية",
      icon: planType === "bronze" ? <DoNotDisturbOnIcon /> : <VerifiedIcon />,
    },

    {
      text: " متابعة يومية عبر الواتساب أو الهاتف للرد على استفساراتك لتحسين أدائك البدني",
      icon: planType === "gold" ? <VerifiedIcon /> : <DoNotDisturbOnIcon />,
    },

    {
      text:
        planType === "gold"
          ? " برنامج تدريبي متكامل يشمل تمارين قوة، لياقة، وتحسين الأداء الرياضي مع تحديثات أسبوعية"
          : planType === "silver"
          ? " خطة تدريب مخصصة تشمل تمارين لياقة وتحسين الأداء مع مراجعة شهرية"
          : " جدول تمارين أساسي مصمم للمبتدئين بدون تخصيص",
      icon: <VerifiedIcon />,
    },

    {
      text: " متابعة يوم ويوم مع أحد مدربينا  للتأكد من تقدمك على الطريق الصحيح",
      icon: planType === "bronze" ? <DoNotDisturbOnIcon /> : <VerifiedIcon />,
    },

  ],
});
