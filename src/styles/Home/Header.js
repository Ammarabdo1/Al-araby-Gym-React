import styled from "@emotion/styled";
import { animated } from "@react-spring/web";
import { colors, media } from "libs/themes.js";
import bgImg from "assets/images/header/1.jpg";
import { AfterLayout } from "utils/GeneralStyles";

export const HeaderContainer = styled.div`
  overflow: hidden
`

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background: url(${bgImg});
  background-position: 0 -300px;
  background-size: cover;

  @media (max-width: ${media.mobile}) {
    background-position: center;
    &::after {
      ${AfterLayout()}
      background: ${colors.bg_hover};
    }
  }
`;

export const ContactButton = styled.div`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${colors.btn_bg};
  color: ${colors.btn_text};
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: ${media.mobile}) {
    font-size: 0.9rem;
    padding: 8px 16px;
  }

  @media (min-width: ${media.tablet}) and (max-width: ${media.desktop}) {
    font-size: 1rem;
    padding: 10px 18px;
  }
`;
