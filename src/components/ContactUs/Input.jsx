import React from "react";
import { TextField } from "@mui/material";
import ErrorMessage from "./ErrorMessage";
import styled from "@emotion/styled";
import { colors, media } from "libs/themes";

const Input = (props) => {
  return (
    <Container>
      {props.error && props.touched && (
        <ErrorContainer>
          <ErrorMessage>{props.error}</ErrorMessage>
        </ErrorContainer>
      )}

      <InputField
        id={props.id}
        label={props.id}
        name={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        fullWidth
        multiline
        rows={props.id === "message" ? 5 : 1}
      />
    </Container>
  );
};

const Container = styled.div`
  direction: ltr;
`;

const InputField = styled(TextField)`
  /* width: 100%; */
  margin-bottom: 30px;



  & .MuiInputLabel-root {
    color: ${colors.des}; // Default label color: ;
  }

  & .MuiInputLabel-root.Mui-focused {
    color: ${colors.title}; // Label color when focused
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${colors.des}; // Default border color
    }

    &:hover fieldset {
      border-color: ${colors.after_hover}; // Border color on hover
    }

    &.Mui-focused fieldset {
      border-color: ${colors.title}; // Border color when focused
    }
    ${props => props.id !== 'email' && ('direction: rtl;')}
    color: ${colors.des}; // Input text color
  }
`;

const ErrorContainer = styled.div`
  @media (max-width: ${media.mobile}) {
    span {
      font-size: 3vw ;
      font-weight: 900;
    }
  }
`;

export default Input;
