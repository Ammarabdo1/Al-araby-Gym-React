import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useNavigate } from "react-router-dom"; // For React Router
import { Button } from "@mui/material"; // Material UI Button
import { colors } from "libs/themes";
import { TbError404 } from "react-icons/tb";

// Blinking animation for "404"
const blink = keyframes`
  50% { opacity: 0.3; }
`;

// Floating animation for text
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

// Styled container
const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${colors.btn_hover_bg};
  color: #fff;
  text-align: center;
  padding: 20px;
`;

// 404 Number Style
const Error404 = styled(TbError404)`
  font-size: 8rem;
  font-weight: bold;
  color: #ff3e3e; /* Neon red */
  text-shadow: 0 0 15px rgba(255, 62, 62, 0.8);
  animation: ${blink} 1.5s infinite alternate;
`;

// Message Style
const ErrorMessage = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;
  opacity: 0.9;
  animation: ${float} 3s ease-in-out infinite;
`;

// Button Styling
const BackButton = styled(Button)`
  margin-top: 20px;
  background: #ff3e3e !important;
  color: #121212 !important;
  font-weight: bold !important;
  padding: 10px 25px !important;
  border-radius: 8px !important;
  text-transform: none !important;
  transition: all 0.3s ease !important;
  &:hover {
    background: #ff5757 !important;
    transform: scale(1.05);
  }
`;

const NotFound = () => {
  const navigate = useNavigate(); // React Router Navigation
  return (
    <NotFoundWrapper>
      <Error404/>
      <ErrorMessage>عذرًا! الصفحة التي تبحث عنها غير موجودة.</ErrorMessage>
      <BackButton onClick={() => navigate("/")}>العودة إلى الرئيسية</BackButton>
    </NotFoundWrapper>
  );
};

export default NotFound;
