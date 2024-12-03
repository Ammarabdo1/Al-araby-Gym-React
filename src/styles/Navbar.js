import styled from "@emotion/styled";
import { colors, media } from "libs/themes";

import { AfterLayout } from "utils/GeneralStyles";
import FireBg from "assets/images/Fire.png";

export const NavbarContainer = styled.div`
  .navbar {
    position: relative;
    z-index: 1;
    &::before {
      ${AfterLayout("#a33f3a37")}
      background-image: url(${FireBg});
      opacity: 0.2;
    }
    position: absolute;
    width: 100%;
    background: ${colors.bg};
    z-index: 999;
  }
  .navbar-toggler {
    border: none;
    background: transparent;
    padding: 2px 6px;
    border-radius: 0;
    .list-icon {
      color: white;
      font-size: 2rem;
    }
    &:focus {
      box-shadow: none;
    }
  }

  img {
    height: 40px;
  }

  .link {
    color: ${colors.link};

    &:hover {
      color: ${colors.link_hover};
    }

    @media (min-width: ${media.desktop}) {
      margin-right: 10px;
    }

    @media (max-width: ${media.tablet}) {
      box-shadow: 0 3px 2px 0px silver;
    }
  }

  @media (max-width: ${media.tablet}) {
    &::after {
      content: "";
      position: absolute;
      top: 65px;
      left: 50%;
      transform: translateX(-50%);
      width: 97vw;
      height: 1px;
      border-radius: 50%;
      border: 1px solid gray;
      z-index: 1000;
      box-shadow: 0 10px 15px 1px gray;
    }
  }

  .link.active {
    color: ${colors.title} !important;
  }

  .social-buttons {
    display: flex;
    justify-content: space-around;
    button {
      background: transparent;
      margin-top: 20px;
    }
    img {
      width: 30px;
      height: 30px;
    }
  }
`;
