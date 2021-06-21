import React from "react";
import { Link } from "gatsby";
import Avatar from "./avatar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";

import "../styles/introduction.scss";

library.add(fab);

const Introduction = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div class="container">
      <div class="columns">
        <div class="column-wrapper">
          <div class="content-wrapper">
            <div class="block">
              <Avatar align="center" />
            </div>

            <div class="block">
              <h2 class="title full-name">Taechawat Konkaew</h2>
              <h4 class="title position">Machine Learning Engineer</h4>
              <div class="buttons is-centered">
                <Link
                  class="social-button"
                  to="https://facebook.com/luangtatipsyy"
                  target="blank"
                >
                  <FontAwesomeIcon icon={["fab", "facebook-f"]} size="lg" />
                </Link>
                <Link
                  class="social-button"
                  to="https://www.linkedin.com/in/taechawatk"
                  target="blank"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="lg" />
                </Link>
                <Link
                  class="social-button"
                  to="https://github.com/luangtatipsy"
                  target="blank"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
                </Link>
                <Link
                  class="social-button"
                  to="https://www.linkedin.com/in/taechawatk/"
                  target="blank"
                >
                  <FontAwesomeIcon icon={["fab", "medium-m"]} size="lg" />
                </Link>
              </div>
            </div>
            <div class="block" align="center">
              <Link class="download-button">Download CV</Link>
            </div>
          </div>
          <div class="footer-wrapper" align="center">
            <small class="copyright">© {currentYear} All rights reserved</small>
            <div class="bulma-badge">
              <Link to="https://bulma.io" target="blank">
                <StaticImage
                  alt="Made with Bulma"
                  src="https://bulma.io/images/made-with-bulma--white.png"
                  width="128"
                  placeholder="none"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
