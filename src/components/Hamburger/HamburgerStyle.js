import styled from "styled-components";
import { ReactComponent as HamburgerIcon } from "../../assets/images/icon-hamburger.svg";
import { colors, breakpoints } from "../../lib/style/theme";

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

export const HamburgerUl = styled.ul``;

export const HamburgerLi = styled.li`
  list-style-type: none;
  margin: 20px;
  text-align: center;
`;

export const HamburgerWrapper = styled.div`
  background-color: ${colors.textPrimary};
  width: 100%;
  height: 100%;

  padding: 20px;
  padding-top: 80px;
`;
