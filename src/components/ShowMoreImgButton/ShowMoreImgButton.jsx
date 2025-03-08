import React, { useEffect, useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

import data from "./imagesInfo";
import { styled as muiStyled } from "@mui/system";
import { Box } from "@mui/material";
import useStore from "libs/useStore";

export default function ShowMoreImgButton() {
  const { open, set } = useStore();
  const [isOpen, setIsOpen] = useState(open);
  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "0%", background: "transparent" },
    to: {
      size: open ? "100%" : "0%",
      background: open ? "white" : "transparent",
    },
  });

  useEffect(() => {
    open && setIsOpen(open);
    if (!open) {
      let openTimer = setTimeout(() => setIsOpen(open), 500);
      return () => clearTimeout(openTimer);
    }
  }, [open]);

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0 : 1,
  ]);

  return (
    <Wrapper open={open} isOpen={isOpen}>
      <Container
        style={{ ...rest, width: size, height: size }}
        onClick={() => set()}
      >
        {transition((style, item) => (
          <Item
            style={{
              ...style,
              background: `url(/images/certificates/1.png) center/cover no-repeat`,
            }}
          />
        ))}
      </Container>
    </Wrapper>
  );
}

const Wrapper = muiStyled(Box)(({ open, isOpen }) => ({
  position: "fixed",
  zIndex: open || isOpen ? "999" : "-1",
  top: 0,
  right: 0,
  transition: "all .3s ease",
  width: open ? "100vw" : "100vw",
  height: open ? "100vh" : "100vh",
  background: "transparent",
  backdropFilter:  open || isOpen ? "blur(10px)" : "blur(0)",
  display: " flex",
  alignItems: " center",
  justifyContent: " center",

}));

const Container = muiStyled(animated.div)({
  padding: "25px",
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  padding: "25px",
  background: "transparent !important",
  borderRadius: "5px",
  cursor: "pointer",
  boxShadow: "0px 10px 10px -5px rgba(0, 0, 0, 0.05)",
  willChange: "width, height",
  overflow: 'auto',
  scrollbarWidth: 'none',
});

const Item = muiStyled(animated.div)({
  width: "250px",
  height: '250px',
  borderRadius: "15px",
  willChange: " transform, opacity",
});
