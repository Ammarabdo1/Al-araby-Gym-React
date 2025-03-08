import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { colors, media, themes } from "libs/themes";

export const Text = styled(Typography)`
  //! font style
  font-size: 5vw;
  font-family: "Cairo", sans-serif;
  font-weight: 500;
  color: ${colors.title};
  text-align: center;
  margin-bottom: 2rem;
  svg {
    font-size: 3vw;
    @media (max-width: ${media.tablet}) {
      font-size: 10vw;
    }
  }

  //! media
  @media (max-width: ${media.mobile}) {
    font-size: 13vw;
  }

  @media (min-width: ${media.mobile}) and (max-width: ${media.tablet}) {
    font-size: 13vw;
  }
`;

export const HeaderTitleText = styled(Typography)`
  //! font style
  font-size: 8vw;
  font-weight: 900;
  letter-spacing: 5px;
  color: ${colors.title};
  font-family: ${themes.titleFontFamily};
  line-height: 250px;
  //! 3d theme
  text-shadow: 1px 1px 0px ${colors.title}, 3px 3px 0px ${colors.btn},
    5px 5px 5px ${colors.btn}, 4px 5px 5px ${colors.title};

  //! media
  @media (max-width: ${media.mobile}) {
    font-size: 19vw;
    line-height: 80px;
    letter-spacing: 3px;
  }

  @media (min-width: ${media.mobile}) and (max-width: ${media.tablet}) {
    font-size: 13vw;
  }
`;

export const SubHeaderTitleText = styled(Typography)`
  font-size: 3vw;
  margin: 20px 0;
  font-weight: 400;
  letter-spacing: 1px;
  color: ${colors.title};
  position: relative;
  text-align: center;
  backdrop-filter: blur(10px);
  font-family: ${themes.fontFamily};
  width: 90%;
  text-shadow: 1px 2px 2px ${colors.subTitle};

  &::after {
    content: "";
    position: absolute;
    top: -7px;
    left: 50%;
    transform: translate(-50%);
    border: 1px solid ${colors.btn};
    width: 60vw;
    box-shadow: 0 -10px 20px 5px ${colors.title};
    @media (max-width: ${media.mobile}) {
      top: -5px;
      width: 80vw;
    }
  }

  @media (min-width: ${media.mobile}) and (max-width: ${media.tablet}) {
    font-size: 5vw;
    width: 80%;
  }

  @media (max-width: ${media.mobile}) {
    font-size: 5vw;
    width: 80%;
  }
`;
