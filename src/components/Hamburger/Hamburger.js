import React, { useState } from "react";
import {
  Hamburger,
  HamburgerLi,
  HamburgerUl,
  HamburgerWrapper,
} from "./HamburgerStyle";
import { Nav, HeaderNavLink, ButtonLink } from "../Header/HeaderStyle";
import { Button } from "../Button/ButtonStyle";

const Dropdown = ({ isActive, isProfile }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <>
      <HamburgerWrapper>
        <HamburgerUl>
          <HamburgerLi>
            <HeaderNavLink isProfile={isProfile} to="/Profile">
              Profile
            </HeaderNavLink>
          </HamburgerLi>
          <HamburgerLi>
            <HeaderNavLink isActive={isActive} to="/Courses">
              Courses
            </HeaderNavLink>
          </HamburgerLi>
          <HamburgerLi>
            <ButtonLink to="/SignIn">
              <Button isNav={true}>Sign in</Button>
            </ButtonLink>
          </HamburgerLi>
          <HamburgerLi>
            <ButtonLink to="/Register">
              <Button isNav={true} isSecondaryButton={true}>
                Register
              </Button>
            </ButtonLink>
          </HamburgerLi>
        </HamburgerUl>
      </HamburgerWrapper>
    </>
  );
};

export default Dropdown;
