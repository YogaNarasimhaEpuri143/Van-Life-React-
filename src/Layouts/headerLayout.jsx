import React from "react";
import ReactDOM from "react-dom/client";

// css files
import "./../css/MainNav/headerLayout.css";

import Navbar from "../components/MainNav/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function HeaderLayout() {
  return (
    <div className="outer--container">
      <div className="inner--container">
        <Navbar />
        <div className="content--container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
