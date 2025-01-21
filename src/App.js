import React from "react";
import styled from "@emotion/styled";
import { RouterProvider } from "react-router-dom";
import router from "libs/router";

function App() {
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
