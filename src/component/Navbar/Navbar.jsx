// Navbar.jsx
import React, { useState, useEffect } from "react";


import "../Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // close mobile menu on click
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">LifeLink</div>

      <div className={`navbar-right ${menuOpen ? "active" : ""}`}>
        <a
          href="#home"
          className={activeLink === "home" ? "active" : ""}
          onClick={() => handleLinkClick("home")}
        >
          Home
        </a>
        <a
          href="about"
          className={activeLink === "about" ? "active" : ""}
          onClick={() => handleLinkClick("about")}
        >
          About Us
        </a>
        <a
          href="#contact"
          className={activeLink === "contact" ? "active" : ""}
          onClick={() => handleLinkClick("contact")}
        >
          Contact Us
        </a>

        <div className="dropdown">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setDropdownOpen(!dropdownOpen);
            }}
            className="dropbtn"
          >
            Register Now ▼
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#donor" onClick={() => handleLinkClick("donor")}>
                Register as Donor
              </a>
              <a href="#recipient" onClick={() => handleLinkClick("recipient")}>
                Register as Recipient
              </a>
            </div>
          )}
        </div>

        <button className="login-btn" onClick={() => handleLinkClick("login")}>
          Login
        </button>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
