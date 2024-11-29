import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { colors, media } from "libs/themes";
import { flashRightToLeft } from "libs/frames";

const Btn = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

const ButtonContainer = styled(Button)`
  color: ${colors.btn};
  transition: background, color .3s ease ;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px silver;
  font-weight: 900;
  font-size: 1.5rem;

  //! Flash effect
  background-image: linear-gradient(45deg, ${colors.btn_bg}, ${colors.btn_bg}, ${colors.btn_bg}, ${colors.btn_bg}, ${colors.btn_bg}, #ffffff ,#fffab3 ,${colors.btn_bg}, ${colors.btn_bg});
  background-size: 200%;
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  animation: ${flashRightToLeft} 7s linear infinite;

  &:hover {
    background: ${colors.btn_hover_bg};
    color: ${colors.title};
  }

  .rock-icon {
      font-size: 1.6rem; 
      margin-right: 7px;
    }

  @media (max-width: ${media.mobile}) {
    font-size: 1rem;
    .rock-icon {
      font-size: 1.3rem;  
      margin-right: 5px;
    }
  }
`;

export default Btn;
