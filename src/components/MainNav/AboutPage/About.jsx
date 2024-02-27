import React from "react";

import { NavLink } from "react-router-dom";

import "./../../../css/MainNav/about.css";

export default function About() {
  return (
    <div className="about--outer--container">
      <div className="about--image"></div>
      <div className="about--text--content">
        <p className="main--text">
          Don’t squeeze in a sedan when you could relax in a van.
        </p>
        <p className="middle--text">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="bottom--text">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="about--to--van--navigate">
        <div className="navigate--inner--container">
          <p>Your destination is waiting. Your van is ready.</p>
          <NavLink to="/vans">Explore our vans</NavLink>
        </div>
      </div>
    </div>
  );
}
