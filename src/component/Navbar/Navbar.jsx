
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaHeartbeat } from "react-icons/fa";



const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

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
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[65px] bg-white text-black z-50 shadow-md flex justify-between items-center px-6">
        {/* Brand */}

        <div className="flex items-center text-2xl font-bold text-red-600">
          LifeLink  <FaHeartbeat className="mr-3 ml-3" />

        </div>

        {/* Menu links */}
        <div
          className={`md:flex items-center space-x-6 transition-transform duration-300 ease-in-out 
    ${menuOpen
              ? "fixed top-[65px] right-0 w-52 bg-white shadow-lg flex flex-col space-y-4 p-6 z-40 h-auto"
              : "hidden md:flex"
            }`}
        >
          <Link
            to=""
            onClick={() => handleLinkClick("home")}
            className={`relative font-medium transition-colors duration-300 ${activeLink === "home" ? "text-red-700" : "hover:text-red-700"
              }`}
          >
            Home
          </Link>
          <Link
            to="about"
            onClick={() => handleLinkClick("about")}
            className={`relative font-medium transition-colors duration-300 ${activeLink === "about" ? "text-red-700" : "hover:text-red-700"
              }`}
          >
            About Us
          </Link>
          <Link
            to="contact"
            onClick={() => handleLinkClick("contact")}
            className={`relative font-medium transition-colors duration-300 ${activeLink === "contact" ? "text-red-700" : "hover:text-red-700"
              }`}
          >
            Contact Us
          </Link>

          {/* Dropdown */}
          <div className="relative dropdown">
            <button
              onClick={(e) => {
                handleLinkClick("");
                e.stopPropagation();
                setDropdownOpen(!dropdownOpen);
              }}
              className="font-medium cursor-pointer hover:text-red-700 flex items-center"
            >
              Register Now <IoMdArrowDropdown />
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg border z-50">
                <Link
                  to="#donor"
                  onClick={() => handleLinkClick("donor")}
                  className="block px-4 py-2 text-red-600 hover:bg-red-100"
                >
                  Register as Donor
                </Link>
                <Link
                  to="#recipient"
                  onClick={() => handleLinkClick("recipient")}
                  className="block px-4 py-2 text-red-600 hover:bg-red-100"
                >
                  Register as Recipient
                </Link>
              </div>
            )}
          </div>

          {/* Login button */}
          <NavLink
            to="/login"
            onClick={() => handleLinkClick("login")}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition-colors duration-300 ${isActive
                ? "bg-red-600 text-white"
                : "bg-red-600 hover:bg-red-700 text-white"
              }`
            }
          >
            Login
          </NavLink>
        </div>



        {/* Hamburger (mobile) */}
        <div
          className="md:hidden flex flex-col cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="h-[3px] w-6 bg-red-600 mb-1"></div>
          <div className="h-[3px] w-6 bg-red-600 mb-1"></div>
          <div className="h-[3px] w-6 bg-red-600"></div>
        </div>
      </nav>




    </>
  );
};


export default Navbar;
