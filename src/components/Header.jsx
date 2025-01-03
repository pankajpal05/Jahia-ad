import React, { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ menuItems }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  };

  const handleSubDropdownToggle = (index) => {
    setOpenSubDropdown(openSubDropdown === index ? null : index);
  };

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold">Brand</div>
        <ul className="flex space-x-6">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              tabIndex={0}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onBlur={() => setOpenDropdown(null)}
            >
              <button
                className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                onClick={() => handleDropdownToggle(index)}
                aria-expanded={openDropdown === index ? "true" : "false"}
              >
                {item.label}
              </button>
              {item.children && (
                <ul
                  className={`absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg transition-opacity duration-300 ${
                    openDropdown === index ? "opacity-100" : "opacity-0 invisible"
                  }`}
                  role="menu"
                  aria-label={item.label}
                >
                  {item.children.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="relative px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                      role="menuitem"
                      onMouseEnter={() => setOpenSubDropdown(subIndex)}
                      onMouseLeave={() => setOpenSubDropdown(null)}
                    >
                      {subItem.children ? (
                        <button
                          className="w-full text-left"
                          onClick={() => handleSubDropdownToggle(subIndex)}
                          aria-haspopup="true"
                          aria-expanded={openSubDropdown === subIndex ? "true" : "false"}
                        >
                          {subItem.label}
                        </button>
                      ) : (
                        <a href={subItem.link}>{subItem.label}</a>
                      )}
                      {subItem.children && (
                        <ul
                          className={`absolute left-full top-0 mt-0 w-48 bg-white text-black rounded-md shadow-lg transition-opacity duration-300 ${
                            openSubDropdown === subIndex ? "opacity-100" : "opacity-0 invisible"
                          }`}
                          role="menu"
                          aria-label={subItem.label}
                        >
                          {subItem.children.map((nestedItem, nestedIndex) => (
                            <li
                              key={nestedIndex}
                              className="px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                              role="menuitem"
                            >
                              <a href={nestedItem.link}>{nestedItem.label}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div>
          profile
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          link: PropTypes.string,
        })
      ),
    })
  ),
};

Header.defaultProps = {
  menuItems: [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Services",
      children: [
        { label: "Web Development", link: "/web-development" },
        { label: "SEO", link: "/seo" },
        {
          label: "More",
          children: [
            { label: "Consulting", link: "/consulting" },
            { label: "Support", link: "/support" },
          ],
        },
      ],
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ],
};

export default Header;
