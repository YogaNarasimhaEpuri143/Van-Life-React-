import React from "react";
import ReactDOM from "react-dom/client";

import { NavLink } from "react-router-dom";

export default function Navbar() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <header className="header--container">
      <div className="header--title">
        <NavLink to=".">#VANLIFE</NavLink>
      </div>
      <nav className="header--navigation">
        <NavLink
          to="host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}

/**
 * Relative Links
 */
