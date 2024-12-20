import React, { useState, useEffect } from "react";
import NavBar from "components/Navbar";
import Home from "pages/Home.js";
import StartUpLoader from "pages/StartUp";
import ContactUs from "components/ContactUs/ContactUs";
import styled from '@emotion/styled'
import Footer from "components/Footer/Footer.jsx";
import FloatingButton from "components/FloatingButton";

function App() {
  const [loader, setLoader] = useState(true);

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
      <Home />
      <ContactUs />
      <Footer/>
      <FloatingButton />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  direction: rtl;
  text-align: right;
`

export default App;
