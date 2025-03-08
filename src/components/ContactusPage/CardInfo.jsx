import React from "react";
import styled from "@emotion/styled";
import { colors, media } from "libs/themes";

const CardInfo = ({ card }) => {
  const scrollToContactUsSection = (e) => {
    if (card.type === "email") {
      e.preventDefault();
      const section = document.getElementById("emailSection"); // Replace with the ID of your section
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
      }
    }
  };

  return (
    <Card
      href={card.path.url}
      target={card.path.type}
      onClick={scrollToContactUsSection}
    >
      <CardIcon>{card.infoIcon}</CardIcon>
      <CardTitle>{card.infoText}</CardTitle>
    </Card>
  );
};

const Card = styled.a`
  text-decoration: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  box-shadow: 0 3px 6px rgba(255, 145, 145, 0.57);
  border-radius: 8px;
  padding: 16px 20px;
  margin-top: 24px;
  z-index: 3;
  width: 20vw;
  padding: 10px;
  border-radius: 50px;
  margin-bottom: 25px;
  transition: all 0.5s ease;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-bottom: 2px solid ${colors.subTitle};

  &:hover {
    transform: translateY(-5px);
    box-shadow: none;
    background: ${colors.bg_hover};
  }

  @media (max-width: ${media.mobile}) {
    width: 90vw;
  }
`;

const CardIcon = styled.div`
  display: flex;
  margin: 0 10px 0 16px;
  padding-left: 3px;
  border-left: 1px solid ${colors.subTitle};
  svg {
    color: ${colors.subTitle};
    font-size: 2.5rem;
  }

  @media (max-width: ${media.mobile}) {
    margin-right: 12px;
    font-size: 1.5rem;
  }
`;

const CardTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.subTitle};

  @media (max-width: ${media.mobile}) {
    font-size: 16px;
  }
`;

export default CardInfo;
