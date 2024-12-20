// import React from 'react'
// import styled from '@emotion/styled'

// const FloatingButton = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// const Container = styled.div`

// `

// export default FloatingButton

import React, { useEffect } from "react";
import { Fab, Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { InitialAos } from "utils/initialAos";
import Aos from "aos";
import { colors } from "libs/themes";

const FloatingButton = () => {
  const phoneNumber = "+201287194379";
  useEffect(() => {
    return InitialAos(Aos);
  }, []);
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
        }}
        data-aos="fade-up"
      >
        <Fab
          color="success"
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          sx={{
            color: colors.whatsApp,
            background: colors.bg_hover,
            backdropFilter: "blur(2px)",
          }}
        >
          <WhatsAppIcon sx={{ fontSize: "2rem" }} />
        </Fab>
      </Box>
    </>
  );
};

export default FloatingButton;
