import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { colors } from "libs/themes";

const Btn = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

const ButtonContainer = styled(Button)`
  color: ${colors.link};
  background: ${colors.btn_bg};
  transition: background .3s ease ;
  &:hover {
    background: ${colors.btn_hover_bg};
  }
`;

export default Btn;
