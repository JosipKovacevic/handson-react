import React, { useState } from "react";
import LogoImg from "../../assets/images/logo.svg";
import Button from "../Button/Button";
// import { Link, NavLink } from "react-router-dom";
import {
  Header as HeaderWrapper,
  HeaderInner,
  LogoLink,
  LogoImg as LogoElement,
  Nav,
  HeaderNavLink,
  ButtonLink,
} from "./HeaderStyle";
import { Hamburger } from "../Hamburger/HamburgerStyle";
import Dropdown from "../Hamburger/Hamburger.js";

const Header = ({ isSecondary, isActive, isProfile }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <>
      <HeaderWrapper isSecondary={isSecondary}>
        <HeaderInner>
          <LogoLink to="/">
            <LogoElement src={LogoImg} alt="Logo" />
          </LogoLink>
          <Hamburger onClick={() => toggle(!open)} role="button" />
          <Nav>
            <HeaderNavLink to="/Profile" isProfile={isProfile}>
              Profile
            </HeaderNavLink>
            <HeaderNavLink to="/Courses" isActive={isActive}>
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
      {open && <Dropdown />}
    </>
  );
};

export default Header;
