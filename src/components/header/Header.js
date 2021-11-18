import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderStyled } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <NavLink
        className="header__navlink"
        activeclassname="header__navlink--active"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="header__navlink"
        activeclassname="header__navlink--active"
        to="/new-user"
      >
        New user
      </NavLink>
    </HeaderStyled>
  );
};

export default Header;
