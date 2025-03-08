import React, { useEffect } from "react";
import styled from "@emotion/styled";
import img0 from "assets/images/Reviews/R20.jpeg";
import img1 from "assets/images/Reviews/R16.jpg";
import img2 from "assets/images/Reviews/R14.jpg";
import img3 from "assets/images/Reviews/R7.jpeg";
import { colors, media } from "libs/themes";
import { AfterLayout } from "utils/GeneralStyles";
import FireBg from "assets/images/Fire.png";
import { Title } from "designs";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import VerifiedIcon from "@mui/icons-material/Verified"; // Import the icon
import avatarImg from "assets/images/Reviews/Saleh.JPG";
import avatarImg2 from "assets/images/Reviews/Saleh2.JPG";
import avatarImg3 from "assets/images/Reviews/Saleh3.JPG";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { InitialAos } from "utils/initialAos";
import { useNavigate } from "react-router-dom";

// Reviews Component
const Reviews = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(`(max-width: ${media.mobile})`);
  const reviews = [
    {
      name: "John Doe",
      src: isMobile ? img0 : img1,
      rating: 6,
      avatar: avatarImg,
    },
    {
      name: "Jane Smith",
      src: img2,
      rating: 6,
      avatar: avatarImg2,
    },
    {
      name: "Emily Johnson",
      src: img3,
      rating: 6,
      avatar: avatarImg3,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) =>
      index < rating ? <StarIcon key={index} /> : <StarBorderIcon key={index} />
    );
  };
  InitialAos();
  return (
    <ReviewsSection>
      <Title>
        آراء أبطالنا <VerifiedIcon />{" "}
      </Title>
      <ReviewsContainer>
        {reviews.map((review, index) => (
          <ReviewCard key={index} data-aos="zoom-in">
            <ReviewerDetails>
              <img src={review.avatar} alt={review.name} />
              <ReviewerName>- ك _ صالح العربي</ReviewerName>
            </ReviewerDetails>

            <ReviewImg>
              <img src={review.src} alt="" />
            </ReviewImg>
            <StarRating>{renderStars(review.rating)}</StarRating>
            <MoreButton
              onClick={() => {
                navigate("/projects");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              المزيد
            </MoreButton>
          </ReviewCard>
        ))}
      </ReviewsContainer>
    </ReviewsSection>
  );
};

const ReviewsSection = styled.section`
  background: ${colors.bg};
  padding: 0px 20px 100px;

  position: relative;
  z-index: 1;
  overflow: hidden;
  &::after {
    ${AfterLayout()}
    background-image: url(${FireBg});
    @media (max-width: ${media.mobile}) {
      background-size: contain;
    }
    opacity: 0.5;
  }
`;

const ReviewsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const ReviewCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(34, 34, 34, 0.8),
    rgba(50, 50, 50, 0.8)
  );
  border: 1px solid #444;
  border-radius: 15px;
  padding: 20px;
  max-width: 300px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5); /* Add more depth with a subtle dark shadow */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: left;
  color: #fff; /* Ensure text is white for readability in dark mode */

  @media (max-width: ${media.mobile}) {
    max-width: 90vw;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.7); /* Enhance shadow on hover */
  }
`;

const ReviewerDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    /* border: 2px solid ${colors.after_hover}; */
  }
`;

const ReviewerName = styled.p`
  font-weight: bold;
  color: ${colors.subTitle};
`;

const ReviewImg = styled.div`
  margin: 15px 0;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const StarRating = styled.div`
  color: ${colors.subTitle};
  margin-top: 10px;
  font-size: 1.2rem;

  svg {
    margin-right: 2px;
  }
`;

const MoreButton = styled(Button)`
  background-color: ${colors.primary}; // Use primary color for the background
  color: ${colors.subTitle}; // White text color: ;
  font-size: 1rem; // Adjust font size for better readability
  font-weight: bold; // Make text bold
  padding: 10px 20px; // Add padding for comfortable spacing
  border-radius: 20px; // Rounded edges
  text-transform: none; // Disable uppercase transformation
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Add a subtle shadow for depth
  transition: background-color 0.3s ease, transform 0.2s ease; // Smooth transitions
  margin-top: 10px;
  &:hover {
    background-color: ${colors.secondary}; // Change background color on hover
    transform: translateY(-2px); // Add hover lift effect
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); // Enhance shadow on hover
  }

  &:active {
    background-color: ${colors.accent}; // Slightly darker background on active
    transform: translateY(1px); // Active press effect
  }

  width: 100%; // Make button full-width on smaller screens
  @media (max-width: ${media.mobile}) {
    font-size: 0.9rem; // Adjust font size for smaller screens
    padding: 8px 15px; // Reduce padding for smaller screens
  }
`;

export default Reviews;
