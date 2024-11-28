import styled from '@emotion/styled';
import { animated } from '@react-spring/web';
import { colors, media } from 'libs/themes.js';

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  position: relative;
  overflow: hidden;
  color: #fff;
  z-index: 1;
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const AnimatedBackground = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  will-change: transform, opacity;
`;

export const Title = styled.h1`
  font-size: 8vw;
  font-weight: 700;
  color: ${colors.title};
  @media (max-width: ${media.mobile}) {
    font-size: 15vw;
  }

  @media (min-width: ${media.mobile}) and (max-width: ${media.tablet}) {
    font-size: 16vw;
  }
`;

export const Subtitle = styled.h2`
  font-size: 3vw;
  margin: 10px 0;
  font-weight: 400;
  color: ${colors.subTitle};

  /* Background Transition Effect */
  padding: 5px;
  background-image: linear-gradient(to left,#1f364a ,white );
  background-position: 200% center;
  background-size: 200% 100%;
  animation: ${props => props.imageChanging ? 'slideIn 1s ease-out forwards' : 'none'};

  @keyframes slideIn {
    0% {
      background-position: 200% center;
    }
    100% {
      background-position: left;
    }
  }

  @media (max-width: ${media.mobile}) {
    font-size: 4vw;
  }

  @media (min-width: ${media.mobile}) and (max-width: ${media.tablet}) {
    font-size: 4vw;
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
