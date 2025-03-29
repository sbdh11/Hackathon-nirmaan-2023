import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../img/Logo.png";

let Navbar = () => {
  return (
    <>
      <header id="header" className=" py-2 d-flex align-items-center fixed-top">
        <div
          className="container-fluid container-xl d-flex align-items-center justify-content-between"
          style={{
            background: "#ffffff",
            borderRadius: "40px",
            boxShadow: "14px 15px 41px -5px rgba(0,0,0,0.75)",
          }}
        >
          <a href="index.html" className="logo d-flex align-items-center">
            <img className="d-flex align-items-center logo" src={Logo} />
          </a>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="index.html" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>

              <li>
                <a href="team.html">Team</a>
              </li>

              <li>
                <a href="contact.html">Contact</a>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </nav>
          {/* .navbar */}
        </div>
      </header>
    </>
  );
};

export default Navbar;
