import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import styled from "@emotion/styled";
import { HeaderContent } from "utils/Header";
import { Btn, Title } from "designs";
import { title } from "utils/titles-text";
import { colors } from "libs/themes";
import { AfterLayout } from "utils/GeneralStyles";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useNavigate } from "react-router-dom";

const HeaderSwiper = () => {
  const navigate = useNavigate();
  return (
    <StyledSwiper
      modules={[EffectCoverflow, Autoplay]}
      effect="coverflow"
      speed={1000} // Transition duration set to 1200ms (slower than before)
      coverflowEffect={{
        rotate: -50, // Rotate the slides to the left (or try changing to +50 for right)
        stretch: 0, // Space between slides
        depth: 200, // Depth of the coverflow effect
        modifier: 1, // Strength of the effect
        slideShadows: true, // Enable shadows on the slides
      }}
      loop={true}
    >
      {HeaderContent.map((content, index) => (
        <HeaderSlide key={index} BgImg={content.BgImg}>
          <Title.Header>{title.Header}</Title.Header>
          <Title.Sub>{content.Desc}</Title.Sub>
          <HeaderBTN onClick={() => navigate("/prices")}>
            أبدأ رحلتك <RocketLaunchIcon className="rock-icon" />
          </HeaderBTN>
        </HeaderSlide>
      ))}
    </StyledSwiper>
  );
};

const HeaderBTN = styled(Btn)``;

const StyledSwiper = styled(Swiper)`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const HeaderSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${(props) => props.BgImg});
  background-size: cover;
  background-position: center;

  &::after {
    ${AfterLayout()}
    background: radial-gradient(circle, ${colors.bg_hover} 30%, ${colors.after_hover});
    background-size: cover;
  }
`;

export default HeaderSwiper;
