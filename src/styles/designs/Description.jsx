import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { colors, media, themes } from "libs/themes";

export const Des = styled(Typography)`
  font-size: ${({ isSub }) => (isSub ? "1vw" : "1.7vw")};
  ${({isSub}) => !isSub && `background: ${colors.bg_hover};`}
  margin: 10px 0;
  font-weight: 400;
  color: ${colors.title};
  ${({ isSub }) =>
    isSub ? `color: ${colors.des};` : `color: ${colors.subTitle};`}
  position: relative;
  ${({card}) => card && 'text-align: center;'}
  font-family: ${themes.fontFamily};
  @media (min-width: ${media.mobile}) and (max-width: ${media.tablet}) {
    font-size: ${({ isSub }) => (isSub ? "2vw" : "5vw")};
  }

  @media (max-width: ${media.mobile}) {
    font-size: ${({ isSub }) => (isSub ? "5vw" : "8vw")};
  }
`;
