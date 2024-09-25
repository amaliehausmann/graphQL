import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../navlinks";
import style from './NavBar.module.scss'

export const NavBar = () => {
  return (
    <nav>
      {navLinks.map((item) => (
        <NavLink
          key={item.title}
          className={({ isActive }) =>
            isActive ? `${style.activeNavlink}` : style.navLink
          }
          to={item.link}
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
};
