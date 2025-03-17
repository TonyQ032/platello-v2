import { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import { FaMoon, FaSun } from "react-icons/fa";

export function Navbar() {
  // State for whether the hamburger menu is active
  const [isActive, setIsActive] = useState(false);
  const [isDarkMode, setDarkMode] = useState(
    localStorage?.getItem("darkMode") === "true"
  );

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <Link to={"/"} className="nav-branding">
        <img
          src={logo}
          className={`max-h-14 min-h-12 dark:brightness(10) dark:invert-100 light:brightness(0) light:invert-0`}
          alt="Platello"
        />
      </Link>

      <ul className={`nav-menu ${isActive ? "active" : ""} bg-amber-100`}>
        <li className="nav-item">
          <Link onClick={handleToggle} to="/find" className="nav-link">
            Find Recipes
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={handleToggle} to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={handleToggle} to="/contact" className="nav-link">
            Contact
          </Link>
        </li>

        <li className="nav-item">
          {/* TODO: If logged in, switch to Account */}
          <Link onClick={handleToggle} to="/login" className="nav-link">
            Login / Sign Up
          </Link>
        </li>

        {/* TODO: Add Dark Mode / Light Mode icon here */}
        <li className="nav-item">
          <button
            onClick={() => {
              setDarkMode(!isDarkMode);
              localStorage?.setItem("darkMode", String(!isDarkMode));
            }}
            className="nav-link flex align-center justify-center cursor-pointer"
          >
            {isDarkMode ? (
              <FaSun
                style={{
                  fontSize: "24px",
                }}
              />
            ) : (
              <FaMoon
                style={{
                  fontSize: "24px",
                }}
              />
            )}
          </button>
        </li>
      </ul>

      <div
        className={`hamburger ${isActive ? "active" : ""}`}
        onClick={handleToggle}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}
