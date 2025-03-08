import styled from "styled-components";
import { colors, media } from "libs/themes";

export const SwiperContainer = styled.div`
  .swiper {
    width: 500px;
    height: 600px;
    box-shadow: ${colors.shadow};
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: transparent;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 80%;
    object-fit: cover;
  }

  .swiper-pagination-bullet {
    background: ${colors.title};
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${colors.title};
    background: ${colors.bg_hover};
    padding: 30px 20px;
    border-radius: 50%;
  }

  @media (max-width: 1000px) {
    .swiper {
      width: 290px;
      margin: auto;
      height: 350px;
    }
    .swiper-pagination-bullet {
      display: none;
    }
  }
`;

export const AutoplayContainer = styled.div`
  .autoplay-progress {
    position: absolute;
    right: 16px;
    bottom: 16px;
    z-index: 10;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: ${colors.title};
    background: ${colors.bg_hover2};
    border-radius: 50%;
  }

  .autoplay-progress svg {
    --progress: 0;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-width: 3px;
    stroke: ${colors.title};
    fill: none;
    stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(-90deg);
  }
`;
