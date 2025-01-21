import AboutHeader from "components/AboutUs/AboutHeader";
import ContactUs from "components/ContactUs/ContactUs";
import FloatingButton from "components/FloatingButton";
import Footer from "components/Footer/Footer";
import About from "components/Home/About";
import NavBar from "components/Navbar";
import React from "react";
import styled from '@emotion/styled'
const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <AboutHeader />
      <AboutSection />
      <ContactUs />
      <FloatingButton />
      <Footer />
    </div>
  );
};

const AboutSection = styled(About) `
    padding-top: 50px;
`

export default AboutUs;
