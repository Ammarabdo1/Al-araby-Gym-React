import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { RouterProvider } from "react-router-dom";
import router from "libs/router";
import useStore from "libs/useStore";
import StartUpLoader from "pages/StartUp";
function App() {
  const { loader, setLoader, loaderTimer, setLoaderTimer } = useStore();
  useEffect(() => {
    setLoaderTimer((loaderTimer + 1) % 5);
    if (!loaderTimer) {
      setLoader(true);
    }
    let LoaderTimerDown = setTimeout(() => setLoader(false), 4000);
    return () => {
      clearTimeout(LoaderTimerDown);
    };
  }, [loader]);

  if (loader) {
    return <StartUpLoader />;
  }

  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  direction: rtl;
  text-align: right;
`;

export default App;
