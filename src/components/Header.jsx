import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Header = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        return
      }
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <header
      className={`navigation fixed top-0 w-full z-50 transition-all duration-300 ease-in-out  ${
        isScrolled ? "bg-white text-black shadow-custom-light" : "bg-transparent text-black"
      } ${menuOpen ? "bg-gray-800 text-white" : ""}`}
    >
      <div className={`px-4 flex items-center justify-between py-4 m-auto lg:max-w-[1240px] ${menuOpen ? "bg-gray-800 text-white" : ""} `}>
        {/* Logo */}
        <div className={`text-2xl font-bold ${isScrolled ? "text-black" : "text-white"} ${menuOpen ? "text-white" : ""}`}>
          Logo
        </div>
        {/* Navigation */}
        <nav
          className={`cmp-navigation ${
            menuOpen ? "block bg-gray-800 text-white" : "hidden"
          } fixed top-16 left-0 w-full md:static md:w-auto md:flex`}
        >
          <ul className="cmp-navigation__group flex flex-col md:h-full h-screen lg:items-center md:flex-row lg:my-0 my-[-1px] bg-transparent">
            {links &&
              links.map((item, index) => (
                <li
                  key={index}
                  className={`cmp-navigation__item py-2 px-4 ml-0 md:py-0 ${
                    isScrolled ? "text-black hover:text-gray-300" : "text-white hover:text-gray-700"
                  } ${menuOpen ? " text-white" : ""}`}
                >
                  <a href="/" className="cmp-navigation__item-link">
                    {item}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
        {/* Hamburger Menu */}
        <div
          className={`cmp_toggle-menu cursor-pointer md:hidden ${
            isScrolled ? "text-black" : "text-white"
          } ${menuOpen ? " text-white" : ""}`}
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </div>
      </div>
    </header>
  );
};

// Define PropTypes
Header.propTypes = {
  links: PropTypes.array,
};

// Default props
Header.defaultProps = {
  links: ["Home1", "About1", "Services1", "Contact1"],
};

export default Header;
