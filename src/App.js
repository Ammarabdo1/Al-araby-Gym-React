import React, { useState, useEffect } from "react";
import NavBar from "components/Navbar";
import Home from "pages/Home.js";
import StartUpLoader from "pages/StartUp";

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
    <div style={{ position: "relative" }}>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
