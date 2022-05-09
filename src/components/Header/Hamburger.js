import React, { useState } from "react";
import { Hamburger } from "./HeaderStyle";
import { Nav, HeaderNavLink, ButtonLink } from "./HeaderStyle";
import { Button } from "../Button/ButtonStyle";

const Dropdown = ({ isActive }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <>
      <Hamburger onClick={() => toggle(!open)} role="button" />
      {open && (
        <>
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
        </>
      )}
    </>
  );
};

export default Dropdown;
