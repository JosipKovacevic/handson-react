import React from "react";
import "./Header.scss";
import LogoImg from "../../assets/images/logo.svg";
import { Button } from "../Button/ButtonStyle";
// import { Link, NavLink } from "react-router-dom";
import {
  Header as HeaderWrapper,
  HeaderInner,
  LogoLink,
  LogoImg as LogoElement,
  Hamburger,
  Nav,
  HeaderNavLink,
  ButtonLink,
} from "./HeaderStyle";
import Dropdown from "./Hamburger.js";

const Header = ({ isSecondary, isActive }) => {
  return (
    <HeaderWrapper isSecondary={isSecondary}>
      <HeaderInner>
        <LogoLink to="/">
          <LogoElement src={LogoImg} alt="Logo" />
        </LogoLink>
        <Dropdown />
        <Nav>
          <HeaderNavLink isActive={isActive} to="/Courses">
            Courses
          </HeaderNavLink>
          <ButtonLink to="/SignIn">
            <Button isNav={true}>Sign in</Button>
          </ButtonLink>
          <ButtonLink to="/Register">
            <Button isNav={true} isSecondaryButton={true}>
              Register
            </Button>
          </ButtonLink>
        </Nav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
