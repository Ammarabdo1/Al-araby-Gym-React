import styled from "@emotion/styled";
import { colors, media } from "libs/themes.js";
import bgImg from "assets/images/header/1.jpg";
import { AfterLayout } from "utils/GeneralStyles";

export const HeaderContainer = styled.div`
  overflow: hidden;
  background: ${colors.bg};
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${bgImg});
  background-position: center -200px;
  background-size: cover;

  @media (max-width: ${media.mobile}) {
    background: url(${({ BgImg }) => BgImg});
    background-position: center;
    background-size: cover;
    &::after {
      ${AfterLayout()}
      background: radial-gradient(circle, ${colors.bg_hover}, ${colors.after_hover});
      background-size: cover;
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
