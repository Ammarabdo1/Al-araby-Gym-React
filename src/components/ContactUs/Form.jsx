import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import Input from "./Input";
import { colors, media } from "libs/themes";
import { Btn } from "designs";
import SendIcon from "@mui/icons-material/Send";
import Aos from "aos";
import "aos/dist/aos.css";
import { InitialAos } from "utils/initialAos";

const Form = () => {
  InitialAos(Aos)

  const UserData = ["name", "email", "message"];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required...")
        .min(3, "Minimum 3 characters...")
        .max(20, "Maximum 20 characters..."),
      email: Yup.string()
        .required("Email is required...")
        .email("Invalid Email...")
        .max(50, "Very long..."),
      message: Yup.string()
        .required("Field is required...")
        .max(100, "Maximum 100 characters..."),
    }),
  });
  return (
    <SendEmailForm>
      <Container data-aos='zoom-in'>
        {UserData.map((data, index) => (
          <Input
            key={index}
            id={data}
            value={formik.values[data]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched[data]}
            error={formik.errors[data]}
          />
        ))}
        <Btn shadow="calm">
          ارسال <SendIcon />
        </Btn>
      </Container>
    </SendEmailForm>
  );
};

const SendEmailForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.form`
  width: 60%;
  padding: 20px;
  border-radius: 20px;
  background-color: ${colors.bg_hover};
  backdrop-filter: blur(2px);
  box-shadow: 0px 0px 4px 2px ${colors.bg};
  @media (max-width: ${media.mobile}) {
    width: 95%;
  }

  button {
    width: 100%;
  }
`;

export default Form;
