import { Button, CircularProgress, Paper, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { styled as muiStyled } from "@mui/system";
import { colors } from "libs/themes";
import { InitialAos } from "utils/initialAos";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import useStore from "libs/useStore";

export default function ConfirmForm({
  setShowConfirm,
  onClick,
  subscribeData,
}) {
  const { subPrices, setPlayer } = useStore();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("الاسم مطلوب").min(3, "علي الأقل 3 حروف"),
      phone: Yup.string()
        .matches(/^\d{10,}$/, "رقم الهاتف غير صحيح")
        .required("رقم الهاتف مطلوب"),
    }),

    async onSubmit(values, { resetForm }) {
      if (loading) return;
      setLoading(true);
      try {
        await emailjs.send(
          "service_635i5ml",
          "template_tnl9vek",
          {
            ...values,
            serviceName: subscribeData[0],
            planType: subscribeData[1],
            duration: subscribeData[2],
            totalCost: subPrices.finalPrice,
            AfterOfferCost: subPrices.offerPrice,
            Offer: subPrices.discount,
          },
          "8oxVXoILaiQEP6xKY"
        );
        setPlayer({ ...values, sendValid: false });
        resetForm();
        setShowConfirm(false);
        setTimeout(() => alert(`✅ شكراً لك، ${formik.values.name}! 🎉  
          تم إرسال التفاصيل بنجاح. 📩 سنقوم بالتواصل معك على الرقم ${formik.values.phone} خلال 48 ساعة.  
          نقدر صبرك ونتطلع إلى مساعدتك! 😊`),1000)
      } catch (e) {
        console.log(formik.errors);
        console.error("an error accorded:", e);
        alert(`❌ عذرًا، ${formik.values.name}!  
          حدث خطأ أثناء إرسال التفاصيل. ⚠️ يرجى المحاولة مرة أخرى لاحقًا.  
          إذا استمرت المشكلة، يمكنك التواصل معنا مباشرة. 📞  
          شكرًا لتفهمك! 💡`)
      }
      setLoading(false);
    },
  });

  InitialAos();

  const error = (inputType) =>
    formik.errors[inputType] && formik.touched[inputType];

  const inputTypes = ["name", "phone"];

  return (
    <div
      style={{ overflow: "hidden", width: "90%", margin: "auto" }}
      onClick={onClick}
    >
      <FormContainer
        component="form"
        onSubmit={formik.handleSubmit}
        data-aos="fade-down"
      >
        <Title>متابعه الاشتراك</Title>
        {inputTypes.map((inputType, index) => (
          <DarkTextField
            key={index}
            name={inputType}
            placeholder={inputType === "name" ? "الاسم" : "رقم الهاتف"}
            id={inputType}
            label={inputType}
            value={formik.values[inputType]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={error(inputType)}
            fullWidth
            helperText={error(inputType) ? formik.errors[inputType] : ""}
            color={
              error(inputType)
                ? "error"
                : formik.touched[inputType]
                ? "success"
                : "info"
            }
          />
        ))}
        <ConfirmButton disabled={loading} fullWidth type="submit">
          <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            {loading ? (
              <>
                <CircularProgress size={24} color="inherit" />
                <span>جاري الإرسال...</span>
              </>
            ) : (
              <>
                <span>متابعه</span>
              </>
            )}
          </span>
        </ConfirmButton>

        <Button
          fullWidth
          sx={{ color: colors.title }}
          onClick={() => setShowConfirm(false)}
        >
          تعديل الاشتراك
        </Button>
      </FormContainer>
    </div>
  );
}

const FormContainer = muiStyled(Paper)(({ theme }) => ({
  padding: `${theme.spacing(5)} ${theme.spacing(2)} ${theme.spacing(
    3
  )} ${theme.spacing(2)}`,
  display: "grid",
  placeItems: "center",
  gap: theme.spacing(2),
}));

const Title = muiStyled("h2")(({ theme }) => ({
  color: colors.title, // Gold color to match the theme
  fontSize: "1.8rem", // Larger font size
  fontWeight: "bold", // Bold text
  textAlign: "center",
  marginBottom: theme.spacing(2), // Space below title
  textShadow: "2px 2px 4px rgba(255, 204, 0, 0.5)", // Glow effect
}));

const DarkTextField = muiStyled(TextField)({
  "& label": {
    color: "#aaa", // Label color
  },
  "& label.Mui-focused": {
    color: colors.title, // Highlighted label color
  },
  "& .MuiInputBase-root": {
    color: "#fff", // Text color
    backgroundColor: "#222", // Input background
    borderRadius: "8px",
  },
});

const ConfirmButton = muiStyled(Button)({
  backgroundColor: colors.title,
  color: "#121212",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#ffaa00",
  },
});
