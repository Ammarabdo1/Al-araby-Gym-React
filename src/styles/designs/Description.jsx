import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { colors, media } from "libs/themes";

export const Des = styled(Typography)`
  font-size: ${({ isSub }) => (isSub ? "1vw" : "2vw")};
  margin: 10px 0;
  font-weight: 400;
  color: ${colors.title};
  ${({ isSub }) =>
    isSub ? `color: ${colors.des};` : `color: ${colors.subTitle};`}
  position: relative;
  ${({card}) => card && 'text-align: center;'}

  @media (min-width: ${media.mobile}) and (max-width: ${media.tablet}) {
    font-size: ${({ isSub }) => (isSub ? "2vw" : "5vw")};
  }

  @media (max-width: ${media.mobile}) {
    font-size: ${({ isSub }) => (isSub ? "5vw" : "10vw")};
  }
`;
