import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./../css/Host/hostlayout.css";

export default function HostLayout() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <div className="hostlayout--container">
        <div className="hostlayout--navbar">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="income"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Income
          </NavLink>
          <NavLink
            to="hostvans"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Vans
          </NavLink>
          <NavLink
            to="reviews"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Reviews
          </NavLink>
        </div>
        <Outlet />
      </div>
    </>
  );
}
