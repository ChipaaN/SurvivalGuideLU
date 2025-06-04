// src/components/Header.js
import React, { useState, useEffect } from "react";
import logoDark from "../assets/EZTF_dark.png";
import logoLight from "../assets/EZTF_light.png";

import "./globals.css";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const logoSrc = isDarkMode ? logoLight : logoDark;

  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          {/* Logo */}
          <div>
            <a href="#intro">
              <img
                src={logoSrc}
                alt="EZTF Logo"
                className="logo"
                style={{ height: "70px" }}
              />
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="nav-list">
            <li>
              <a href="#intro">Ievads</a>
            </li>
            <li>
              <a href="#tools">Rīki</a>
            </li>
            <li>
              <a href="#programming">Programmēšana</a>
            </li>
            <li>
              <a href="#productivity">Produktivitāte</a>
            </li>
            <li>
              <a href="#online-learning">Mācīšanās</a>
            </li>
            <li>
              <a href="#conclusion">Kopsavilkums</a>
            </li>
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`theme-toggle-switch ${isDarkMode ? "dark" : "light"}`}
            aria-label="Toggle light/dark mode"
          >
            <div className="icon">{isDarkMode ? "🌙" : "☀️"}</div>
          </button>
        </div>
      </nav>

      {/* Hero Section is now separate in App.js */}
    </>
  );
};

export default Header;
