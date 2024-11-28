/** @jsxImportSource @emotion/react */
import { useTransition } from '@react-spring/web';
import { useState, useEffect } from 'react';
import {
  HeaderSection,
  BackgroundContainer,
  AnimatedBackground,
  Title,
  Subtitle,
  ContactButton,
} from 'styles/Home/Header';
import img1 from 'assets/images/header/1.jpg';
import img2 from 'assets/images/header/2.jpg';
import img3 from 'assets/images/header/3.jpeg';

export default function Header() {
  const [backgrounds] = useState([
    { image: img1, title: 'Welcome to Our Website', subtitle: 'Your satisfaction is our priority' },
    { image: img2, title: 'Discover New Horizons', subtitle: 'We help you achieve your dreams' },
    { image: img3, title: 'Innovate and Grow', subtitle: 'Empowering your business' },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const transitions = useTransition(currentIndex, {
    keys: currentIndex,
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
    config: { duration: 1500 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % backgrounds.length);
    }, 7000); // Switch background every 5 seconds

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <HeaderSection>
      <BackgroundContainer>
        {transitions((style, index) => (
          <AnimatedBackground
            key={index}
            style={{
              ...style,
              backgroundImage: `url(${backgrounds[index].image})`,
            }}
          >
            <Title>{backgrounds[index].title}</Title>
            <Subtitle>{backgrounds[index].subtitle}</Subtitle>
            <ContactButton>Contact Us</ContactButton>
          </AnimatedBackground>
        ))}
      </BackgroundContainer>
    </HeaderSection>
  );
}
