import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./redux/themeSlice";
import { FaSun, FaMoon, FaReact } from "react-icons/fa";
import "./navbar.css";

export default function NavigationBar() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <nav className="navbar navbar-expand-lg navBar">
      <div className="container">
        <a className="navbar-brand" href="/">
          <FaReact
            style={{
              color: isDark ? "#61dafb" : "#282c34",
              fontSize: "60px",
            }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#basic-navbar-nav"
          aria-controls="basic-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="basic-navbar-nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
          </ul>
          <div
            className="theme-toggle"
            onClick={() => dispatch(toggleTheme())}
            style={{ cursor: "pointer", fontSize: "1.5rem", marginLeft: "1rem" }}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </div>
        </div>
      </div>
    </nav>
  );
}
