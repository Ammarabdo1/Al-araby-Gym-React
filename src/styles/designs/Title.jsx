import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { colors, media } from "libs/themes";

export const Text = styled(Typography)`
  //! font style
  font-size: 5vw;
  font-family: "Cairo", "Arial", sans-serif;
  font-weight: 900;
  color: ${colors.title};

  //! media
  @media (max-width: ${media.mobile}) {
    font-size: 15vw;
  }

  @media (min-width: ${media.mobile}) and (max-width: ${media.tablet}) {
    font-size: 13vw;
  }
`;

export const HeaderTitleText = styled(Typography)`
  //! font style
  font-size: 8vw;
  font-family: "Cairo", "Arial", sans-serif;
  font-weight: 900;
  color: ${colors.title};
  //! 3d theme
  text-shadow: 1px 1px 0px ${colors.title}, 3px 3px 0px ${colors.btn},
    5px 5px 5px ${colors.btn}, 4px 5px 5px ${colors.title};

  //! media
  @media (max-width: ${media.mobile}) {
    font-size: 19vw;
  }

  @media (min-width: ${media.mobile}) and (max-width: ${media.tablet}) {
    font-size: 13vw;
  }
`;

export const SubHeaderTitleText = styled(Typography)`
  font-size: 3vw;
  margin: 20px 0;
  font-weight: 400;
  color: ${colors.title};
  position: relative;
  text-align: center;
  backdrop-filter: blur(10px);

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

