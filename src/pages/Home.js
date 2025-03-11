import Header from "components/Home/Header/Header.jsx";
import ServicesSection from "components/Home/Services/Services";
import About from "components/Home/About";
import Projects from "components/Home/Projects";
import Family from "components/Home/Family";
import styled from "@emotion/styled";
import Reviews from "components/Home/Reviews";
import { useEffect } from "react";
import useStore from "libs/useStore";
import Achievements from "components/Home/Achievements/Achievements";

const Home = () => {
  const { open } = useStore();
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  return (
    <Container>
      <Header />
      <Achievements />
      <About />
      <Projects />
      <ServicesSection />
      <Family />
      <Reviews />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

export default Home;
