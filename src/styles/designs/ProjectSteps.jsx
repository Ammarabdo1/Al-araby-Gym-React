import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { MoveTOLeft } from "libs/frames";
import { colors, media } from "libs/themes";
import { AfterLayout, centerStyles } from "utils/GeneralStyles";

export const Step = styled.div`
  border-radius: 30px;
  margin-left: 30px;
  padding: 0;
  ${centerStyles("row", "center", "start")}
  button {
    border-radius: 30px;
    box-shadow: none;
    font-size: 1.6vw;
    background-image: linear-gradient(
      to left,
      ${colors.after_hover},
      transparent
    );
  }
  svg {
    color: ${colors.title};
    font-size: 1.8vw;
    box-shadow: 7px 0 5px 1px ${colors.after_hover};
    margin-right: 25px;
  }

  @media (max-width: ${media.tablet}) {

    margin-left: 10px;

    button {
      font-size: 5vw;
    }

    svg {
      font-size: 6vw;
      box-shadow: 7px 0 5px 2px ${colors.after_hover};
      margin-right: 10px;
    }
  }
`;
