import React, { useEffect, useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import {SwiperContainer,
  AutoplayContainer,} from 'styles/designs/SwiperSlider'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "aos/dist/aos.css";
import { InitialAos } from "utils/initialAos";

export default function SwiperJs({noOfImgs, ImgSrc}) {
  const AlarabyHeros = Array(noOfImgs).fill(null);
InitialAos()

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <SwiperContainer>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {AlarabyHeros.map((img, i) => (
            <SwiperSlide>
              <img
                key={i}
                src={`${ImgSrc}${i + 1}.jpg`}
                alt=""
              />
            </SwiperSlide>
        ))}
        <AutoplayContainer>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </AutoplayContainer>
      </Swiper>
    </SwiperContainer>
  );
}
