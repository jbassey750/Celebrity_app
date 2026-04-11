import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Nav = () => {
  const { theme } = useContext(ThemeContext);

  // Use the specific dark color from your previous designs (#050517)
  const navStyles = {
    backgroundColor: theme === "dark" ? "#050517" : "#ffffff",
    transition: "background-color 0.3s ease",
    borderBottom: theme === "dark" ? "none" : "1px solid #eef0f2",
  };

  return (
    <nav
      className={`navbar navbar-expand-lg px-3 ${
        theme === "dark" ? "navbar-dark" : "navbar-light"
      }`}
      style={navStyles}
    >
      {/* LOGO */}
      <Link
        className="navbar-brand d-flex align-items-center gap-2 shadow-none"
        to="/"
      >
        <div
          className="text-white d-flex justify-content-center align-items-center"
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #9d00ff, #ff00ea)", // Matches your purple accents
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          CF
        </div>
        <span
          className={`fw-bold ${theme === "dark" ? "text-white" : "text-dark"}`}
        >
          Celebrity Connect
        </span>
      </Link>

      {/* MOBILE TOGGLE */}
      <button
        className="navbar-toggler shadow-none border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* NAV LINKS */}
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarContent"
      >
        <ul className="navbar-nav align-items-center gap-2 gap-md-3 mt-3 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link fw-medium" to="/browse">
              Celebrity
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link fw-medium" to="/">
              Dashboard
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link fw-medium" to="/book">
              Book Session
            </Link>
          </li>

          {/* THEME TOGGLE */}
          {/* <li className="nav-item mx-lg-2"> */}
            {/* <ThemeToggle /> */}
          {/* </li> */}

          {/* USER */}
          <li className="nav-item">
            <div
              className={`btn px-3 py-1 fw-semibold rounded-3 ${
                theme === "dark" ? "btn-outline-light" : "btn-light border"
              }`}
              style={{ fontSize: "14px" }}
            >
              John Doe
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
