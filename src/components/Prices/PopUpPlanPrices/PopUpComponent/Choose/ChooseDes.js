import { NewReleases, SyncProblem, RunningWithErrors } from '@mui/icons-material';

export const chooseDes = {
  ChooseService: {
    type: "services",
    title: "حدد مسارك لتحقيق أهدافك",
    subTitle: "حدد خدمتك",
    des: "استمتع بتجربة تدريب متكاملة مصممة خصيصًا لك. اختر الخدمة التي تلبي احتياجاتك، وحقق أفضل النتائج مع خصومات مميزة عند الاشتراك في أكثر من خدمة ضمن باقة النخبة.",
    choices: [
      "التدريب الشخصي",
      "التغذية العلاجية",
      "التعافي من الإصابات",
      "اللياقة البدنية",
    ],
  },
  ChoosePlan: {
    title: "اختر طريقك إلى القوة",
    des: "هل أنت مستعد لتحدي نفسك وتحقيق أفضل ما لديك؟ اختر الباقة المناسبة لك وابدأ رحلتك نحو التغيير الجسدي والعقلي",
  },
  ChooseDuration: {
    type: "duration",
    title: "حدد مدة التحدي الخاص بك",
    subTitle: "حدد المدة",
    des: "اختر المدة التي تناسب نمط حياتك وأهدافك لتحقيق أقصى استفادة من برنامجك التدريبي.",
    choices: ["شهر واحد", "3 أشهر", "6 أشهر", "سنة كاملة"],
    noOfMonths: { "شهر واحد": 1, "3 أشهر": 3, "6 أشهر": 6, "سنة كاملة": 12 },
  },
  Result: {
    type: "result",
    title: "ملخص اشتراكك", // A clear title
    subTitle: "تفاصيل اختيارك", // Brief and relevant
    des: [
      {
        id: "service",
        text: "الخدمة المختارة",
        defaultValue:<span>يرجى اختيار خدمة <NewReleases/></span>,
      },
      {
        id: "package",
        text: "الباقة المختارة",
        defaultValue: <span>لم يتم اختيار الخطة <NewReleases/></span>,
      },
      {
        id: "duration",
        text: "مدة الاشتراك",
        defaultValue: <span>لم يتم تحديد المدة <NewReleases/></span>,
      },
      {
        id: "totalCost",
        text: "التكلفة الإجمالية",
        defaultValue:  <span>لم يتم احتساب التكلفة بعد <RunningWithErrors/></span>,
      },
    ],
    note: "يرجى مراجعة التفاصيل قبل تأكيد اشتراكك. يمكنك تعديل اختياراتك إذا لزم الأمر.", // Adds a helpful note
    confirmButton: "تأكيد الاشتراك", // Text for confirmation button
    editButton: "تعديل الاختيارات", // Text for edit button
  },
};
