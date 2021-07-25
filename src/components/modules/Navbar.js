import React, { useState } from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

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
          <a
            href="#"
            className="block font-semibold text-gray-400 hover:text-gray-900 rounded px-2 py-1"
          >
            About
          </a>
          <a
            href="#"
            className="block font-semibold text-gray-400 hover:text-gray-900 rounded px-2 py-1 mt-1 md:mt-0 md:ml-2"
          >
            Education
          </a>
          <a
            href="#"
            className="block font-semibold text-gray-400 hover:text-gray-900 rounded px-2 py-1 mt-1 md:mt-0 md:ml-2"
          >
            Work Experience
          </a>
          <a
            href="#"
            className="block font-semibold text-gray-400 hover:text-gray-900 rounded px-2 py-1 mt-1 md:mt-0 md:ml-2"
          >
            Blog
          </a>
          <a
            href="#"
            className="block font-semibold text-gray-400 hover:text-gray-900 rounded px-2 py-1 mt-1 md:mt-0 md:ml-2"
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
