import React, { useEffect, useState } from "react";
import Header from "components/Home/Header/Header.jsx";
import ServicesSection from "components/Home/Services";
import About from "components/Home/About";
import Projects from "components/Home/Projects";
import Achievements from "components/Home/Achievements";
import Family from "components/Home/Family";
import styled from "@emotion/styled";
import Reviews from "components/Home/Reviews";
import NavBar from "components/Navbar";
import ContactUs from "components/ContactUs/ContactUs";
import Footer from "components/Footer/Footer";
import FloatingButton from "components/FloatingButton";
import StartUpLoader from "./StartUp";
import useStore from "libs/useStore";

const Home = () => {
  // const [loader, setLoader] = useState(true);
  const {loader, setLoader} = useStore()
  useEffect(() => {
    let LoaderTimer = setTimeout(() => setLoader(false), 4000);

    return () => clearTimeout(LoaderTimer);
  }, []);

  if (loader) {
    return <StartUpLoader setLoader={setLoader} />;
  }

  return (
    <Container>
      <NavBar />
      <Header />
      <Achievements />
      <About />
      <Projects />
      <ServicesSection />
      <Family />
      <Reviews />
      <ContactUs />
      <FloatingButton />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

export default Home;
