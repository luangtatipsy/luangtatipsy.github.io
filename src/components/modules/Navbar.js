import React, { useState } from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const navItems = [
    {
      id: "education",
      displayText: "Education",
    },
    {
      id: "experience",
      displayText: "Skills & Experience",
    },
    {
      id: "certificates",
      displayText: "Certificates",
    },
    {
      id: "contact",
      displayText: "Contact",
    },
  ];

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-transparent md:flex md:justify-between md:px-20 md:py-6">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="logo-wrapper">
            <Logo className="h-14 w-14" />
          </div>
          <div className="md:hidden">
            <button type="button" className="block" onClick={handleClick}>
              <FontAwesomeIcon
                className="text-gray-500"
                size="lg"
                icon={!isOpen ? faBars : faTimes}
              />
            </button>
          </div>
        </div>
        <div
          className={`px-2 pt-2 pb-4 ${
            isOpen ? "block" : "hidden"
          } text-center md:opacity-100 md:flex md:py-0 md:items-center`}
        >
          {navItems.map((item) => {
            const offset = item.id === "experience" ? -75 : 0;
            return (
              <Link
                key={item.id}
                className="block font-semibold text-gray-400 hover:text-gray-900 rounded px-2 py-1 mt-1 md:mt-0 md:ml-2 cursor-pointer"
                activeClass="active"
                to={item.id}
                spy={true}
                smooth={true}
                offset={offset}
                duration={750}
              >
                {item.displayText}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
