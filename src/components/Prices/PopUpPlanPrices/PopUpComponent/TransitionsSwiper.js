import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "@emotion/styled";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // (Optional) No need to import, but keeps it clear

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { colors } from "libs/themes";

export default function TransitionSwiper() {
  return (
    // <div style={{minHeight: '1000px'}}>

    <TransitionsSwiper
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 2000, // Adjust speed (2 seconds per slide)
        disableOnInteraction: false, // Keeps autoplay running even after user interaction
      }}
      modules={[Pagination, Autoplay]}
    >
      {Array(9)
        .fill(null)
        .map((_, i) => (
          <TransitionSlide key={i} i={i + 1} />
        ))}
    </TransitionsSwiper>
    // </div> 
  );
}

const TransitionsSwiper = styled(Swiper)`
  min-height: 300px;
  width: 95%;

  .swiper-pagination-bullet {
    background: ${colors.after};
  }
`;

const TransitionSlide = styled(SwiperSlide)`
  height: 280px;
  width: 100%;
  background: ${({ i }) =>
    `url(/images/PlanPricesTransitions/${i}.jpg) center/contain no-repeat`};
`;
