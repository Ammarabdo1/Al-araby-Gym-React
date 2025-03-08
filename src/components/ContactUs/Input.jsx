import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import styled from "@emotion/styled";
import { colors, media } from "libs/themes";
import ErrorIcon from "@mui/icons-material/ErrorOutline";

const Input = ({ data, ...props }) => {
  return (
    <Container>
      <InputField
        id={data.name}
        name={data.name}
        placeholder={data.label}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        fullWidth
        multiline
        variant={data.name === "message" ? "filled" : "filled"}
        error={props.error && props.touched}
        color={
          props.touched && props.error
            ? "error"
            : props.touched
            ? "success"
            : "primary"
        }
        rows={data.name === "message" ? 5 : 1}
        helperText={
          props.error && props.touched ? (
            <ErrorContainer error={props.error && props.touched}>
              {props.error}
            </ErrorContainer>
          ) : (
            <ErrorContainer>success</ErrorContainer>
          )
        }
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                {props.error && props.touched ? (
                  <ErrorIcon color="error" />
                ) : !props.touched ? (
                  <data.icons.default sx={{ color: colors.after }} />
                ) : (
                  <data.icons.complete color="success" />
                )}
              </InputAdornment>
            ),
          },
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  direction: ltr;
`;

const InputField = styled(TextField)`
  margin-bottom: 10px;
  & .MuiInputLabel-root {
    color: ${colors.des}; // Default label color: ;
  }

  & .MuiInputLabel-root.Mui-focused {
    color: ${colors.title}; // Label color when focused
  }

  & .MuiInputBase-root {
    color: ${colors.link}; // Input text color
    direction: rtl;
    background: ${colors.bg_hover2};
    background: ${({ error }) => (error ? colors.after_hover : colors.bg_hover2)};

    &.Mui-focused {
      background: ${({ error }) => (error ? colors.after_hover : colors.bg)};
    }
  }
`;

const ErrorContainer = styled.div`
  visibility: ${({ error }) => (error ? "visible" : "hidden")};
`;

export default Input;
