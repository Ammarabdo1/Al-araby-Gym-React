import styled from '@emotion/styled';
import { animated } from '@react-spring/web';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
  color: #fff;

  @media (max-width: ${breakpoints.mobile}) {
    justify-content: flex-start;
    padding-top: 20px;
  }
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
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

  @media (max-width: ${breakpoints.mobile}) {
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 7vw;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    font-size: 7vw;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
  font-weight: 400;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    font-size: 1.25rem;
  }
`;

export const ContactButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
    padding: 8px 16px;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    font-size: 1rem;
    padding: 10px 18px;
  }
`;
