import React from "react";
import styled from "@emotion/styled";
import { desc } from "utils/description-text";
import { colors, media } from "libs/themes";
import { Typography } from "@mui/material";

const Copyright = () => {
  return (
    <Container>
      <Text>{desc.Footer.copyright}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 22px 10px;
  background: ${colors.bg_hover};
`;

const Text = styled(Typography)`
  color: ${colors.des};
  text-align: center;
  @media (max-width: ${media.mobile}) {
    font-size: 4.4vw;
  }
`;

export default Copyright;
