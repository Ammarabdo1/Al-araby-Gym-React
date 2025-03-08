import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import Input from "./Input";
import { media } from "libs/themes";
import { Btn } from "designs";
import SendIcon from "@mui/icons-material/Send";
import "aos/dist/aos.css";
import { InitialAos } from "utils/initialAos";
import emailjs from "@emailjs/browser";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/ChatBubble";
import PersonCompleteIcon from "@mui/icons-material/HowToReg";
import EmailCompleteIcon from "@mui/icons-material/MarkEmailRead";
import MessageCompleteIcon from "@mui/icons-material/MarkChatRead";

import { Button, CircularProgress } from "@mui/material";

import sendSound from "assets/Audios/SendMessage.mp3";
import errorSound from "assets/Audios/errorSound.mp3";

const Form = () => {
  const [loader, setLoader] = useState(false);
  InitialAos();

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  const UserData = [
    {
      name: "name",
      label: "الاسم...",
      icons: { default: PersonIcon, complete: PersonCompleteIcon },
    },
    {
      name: "email",
      label: "person@example.com",
      icons: { default: EmailIcon, complete: EmailCompleteIcon },
    },
    {
      name: "message",
      label: "رسالتك...",
      icons: { default: MessageIcon, complete: MessageCompleteIcon },
    },
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("الاسم مطلوب")
        .min(3, "يجب أن يكون على الأقل 3 أحرف")
        .max(20, "يجب ألا يزيد عن 20 حرفًا"),
      email: Yup.string()
        .required("البريد الإلكتروني مطلوب")
        .email("البريد الإلكتروني غير صالح")
        .max(50, "البريد الإلكتروني طويل جدًا"),
      message: Yup.string()
        .required("هذا الحقل مطلوب")
        .max(100, "يجب ألا يزيد عن 100 حرف"),
    }),

    async onSubmit(values, { resetForm }) {
      setLoader(true);
      try {
        await emailjs.send(
          "service_66dtr2u",
          "template_r3bo482",
          values,
          "MDysJ-6mXVNP-yGRG"
        );
        
        playSound(sendSound);
        // alert("تم إرسال الرسالة بنجاح!");
        resetForm(); // Clear the form after successful submission
      } catch (error) {
        console.error("an error accorded:", error);
        playSound(errorSound);
        // alert("حدث خطأ أثناء الإرسال، حاول مرة أخرى.");
      }
      setLoader(false);
    },
  });

  return (
    <FormContainer>
      <SendEmailForm data-aos="zoom-in" onSubmit={formik.handleSubmit}>
        {UserData.map((data, index) => (
          <Input
            key={index}
            data={data}
            value={formik.values[data.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched[data.name]}
            error={formik.errors[data.name]}
          />
        ))}
        <Btn disabled={loader} shadow="calm" type="submit" aria-busy={loader}>
          <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            {loader ? (
              <>
                <CircularProgress size={24} color="inherit" />
                <span>جاري الإرسال...</span>
              </>
            ) : (
              <>
                <SendIcon />
                <span>إرسال</span>
              </>
            )}
          </span>
        </Btn>
      </SendEmailForm>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SendEmailForm = styled.form`
  width: 60%;
  padding: 10px;
  border-radius: 15px;
  /* backdrop-filter: blur(10px); */
  box-shadow: 0 0 7px 2px rgba(255, 255, 255, 0.2);
  @media (max-width: ${media.mobile}) {
    width: 95%;
  }

  button {
    width: 100%;
  }
`;

export default Form;
