import styled from "styled-components";

import { NavLink, Link } from "react-router-dom";

import { colors, breakpoints } from "../../lib/style/theme";

import { ReactComponent as HamburgerIcon } from "../../assets/images/icon-hamburger.svg";

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  padding: 24px;

  ${(props) =>
    props.isSecondary &&
    `background-color: ${colors.textPrimary};
    
    z-index: 0;`}

  @media (${breakpoints.desktop}) {
    padding: 32px 0;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${breakpoints.desktop}) {
    width: 960px;
    margin: 0 auto;
  }

  @media (${breakpoints.desktopLarge}) {
    width: 1260px;
  }
`;

export const LogoLink = styled(Link)``;

export const LogoImg = styled.img`
  width: 140px;
`;

export const Hamburger = styled(HamburgerIcon)`
  width: 30px;
  height: auto;

  path {
    fill: ${colors.bgPrimary};
  }

  @media (${breakpoints.desktop}) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: none;

  @media (${breakpoints.desktop}) {
    display: block;
  }
`;

export const HeaderNavLink = styled(NavLink)`
  color: ${colors.colorSecondary};
  letter-spacing: 1px;
  margin-right: 48px;
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    background-color: ${colors.secondary};
    height: 3px;
    width: 0;
    left: 0;
    bottom: -8px;
    transition: 0.4s ease-in-out;
  }

  &:hover:after {
    width: 100%;
  }

  &:hover:active {
    width: 100%;
  }
`;

export const ButtonLink = styled(Link)`
  margin-right: 24px;
  display: inline-block;

  &:last-child {
    margin-right: 0px;
  }
`;
// .Header {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     z-index: 1;

//     &-Courses {
//       background-color: $colorTextPrimary;
//       padding: 0px;
//       z-index: 0;
//     }

//     &-Inner {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       padding: 24px;

//       @media (min-width: 1024px) {
//         width: 960px;
//         margin: 0 auto;
//         padding: 32px 0;
//       }

//       @media (min-width: 1300px) {
//         width: 1260px;
//       }
//     }

// &-Hamburger {
//   width: 30px;
//   height: auto;

//   path {
//     fill: $colorSecondary;
//   }

//   @media (min-width: 1024px) {
//     display: none;
//   }
//     }
//     &-Nav {
//   display: none;

//   @media (min-width: 1024px) {
//     display: block;
//   }
//     }

//     &-Logo {
//       width: 140px;
//     }

//     &-NavLink {
//       color: $colorSecondary;
//       letter-spacing: 1px;
//       margin-right: 48px;
//     }

//     &-NavButton {
//       margin-right: 24px;
//       display: inline-block;

//       &:last-child {
//         margin-right: 0px;
//       }
//     }

//     &-active {
//       text-decoration: underline;
//       text-underline-offset: 5px;
//     }
//     &-inactive {
//       font-style: normal;
//     }
//   }
