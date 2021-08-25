import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarItems';

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza House</NavLink>
        <NavIcon onClick={toggle}>
          {/* <p>Menu</p> */}
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
}

export default Navbar;
