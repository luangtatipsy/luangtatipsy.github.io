import React from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faGithub,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookF);
library.add(faInstagram);
library.add(faLinkedinIn);
library.add(faGithub);
library.add(faMediumM);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    {
      faIcon: "facebook-f",
      externalUrl: "",
    },
    {
      faIcon: "instagram",
      externalUrl: "",
    },
    {
      faIcon: "linkedin-in",
      externalUrl: "",
    },
    {
      faIcon: "github",
      externalUrl: "",
    },
    {
      faIcon: "medium-m",
      externalUrl: "",
    },
  ];

  return (
    <div className="flex flex-col justify-around items-center py-24 space-y-10">
      <Logo className="h-14 w-14" />
      <h1 className="px-5 text-center md:px-auto text-base font-semibold tracking-widest text-gray-600 uppercase italic">
        Never stop learning, because life never stops teaching
      </h1>
      <div className="flex flex-row items-center md:space-x-5">
        {socialIcons.map((icon, idx) => {
          return (
            <div
              key={idx}
              className="flex items-center justify-center bg-transparent rounded-full h-12 w-12 hover:bg-gray-100 transition duration-500 ease-in-out"
            >
              <a target="_blank" href={icon.externalUrl}>
                <FontAwesomeIcon
                  className="text-gray-500 text-2xl"
                  // size="lg"
                  swapOpacity
                  icon={["fab", `${icon.faIcon}`]}
                />
              </a>
            </div>
          );
        })}
      </div>
      <h3 className="text-gray-400 font-medium">
        Handcrafted by me © {currentYear}
      </h3>
    </div>
  );
};

export default Footer;
