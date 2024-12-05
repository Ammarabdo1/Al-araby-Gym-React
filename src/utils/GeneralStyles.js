import { css } from "@emotion/react";
import { flashRightToLeft } from "libs/frames";
import { colors, media } from "libs/themes";

export const centerStyles = (direction = "column", row = 'center', column = 'center') => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${column};
  align-items: ${row};
`;

export const AfterLayout = (background = colors.bg_hover) => css`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, ${background} 10%, transparent 60%);
  z-index: -1;
`;
