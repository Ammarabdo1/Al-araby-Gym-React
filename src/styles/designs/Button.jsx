import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { colors, media } from "libs/themes";
import { flashRightToLeft } from "libs/frames";
import fireImg from "assets/images/Fire.png";

export const ButtonContainer = styled(Button)`
  color: ${colors.btn};
  transition: all .3s ease;
  border-radius: 10px;
  box-shadow: ${colors.shadow};
  font-weight: 900;
  font-size: 1.5rem;
  //! Flash effect

  background-image: ${({ dir }) =>
    dir === "left"
      ? `url(${fireImg})`
      : `linear-gradient(45deg, ${colors.btn_bg}, ${colors.btn_bg}, ${colors.btn_bg}, ${colors.btn_bg}, ${colors.btn_bg}, #ffffff ,#fffab3, ${colors.btn_bg}, ${colors.btn_bg}) `};
  background-size: 200%;
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  animation: ${({ dir }) => flashRightToLeft(dir)} 7s linear infinite;

  &:hover {
  background: ${colors.btn_hover_bg};
    color: ${colors.title};
  }

  svg {
    font-size: 1.6rem;
    margin-right: 7px;
  }

  @media (max-width: ${media.mobile}) {
    font-size: 1rem;
    svg {
      font-size: 1.3rem;
      margin-right: 5px;
    }
  }
`;
