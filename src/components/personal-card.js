import React from "react";
import { Link } from "gatsby";
import Introduction from "./introduction";

import "../styles/personal-card.scss";

const PersonalCard = () => {
  return (
    <div class="wrapper">
      <div class="column">
        <div class="personal-card">
          <div class="introduction-wrapper">
            <div class="introduction">
              <Introduction />
            </div>
          </div>
          <div class="information-wrapper">
            <div id="home" class="information">
              Data 1
            </div>
          </div>
          <div
            class="column is-1 is-centered is-flex is-flex-wrap-wrap is-align-content-space-between"
            style={{ height: "75vh" }}
          >
            <ul class="main-menu">
              <li>
                <Link class="menu-item">
                  <span class="material-icons-outlined active">home</span>
                </Link>
                <span class="hovercard">
                  <div class="tooltiptext">Home</div>
                </span>
              </li>
              <li>
                <Link class="menu-item">
                  <span class="material-icons-outlined">person</span>
                </Link>
                <span class="hovercard">
                  <div class="tooltiptext">About Me</div>
                </span>
              </li>
              <li>
                <Link class="menu-item active">
                  <span class="material-icons-outlined">school</span>
                  <span class="hovercard">
                    <div class="tooltiptext">Resume</div>
                  </span>
                </Link>
              </li>
              <li>
                <Link class="menu-item">
                  <span class="material-icons-outlined">work_outline</span>
                  <span class="hovercard">
                    <div class="tooltiptext">Portfolio</div>
                  </span>
                </Link>
              </li>
              <li>
                <Link class="menu-item">
                  <span class="material-icons-outlined">emoji_events</span>
                  <span class="hovercard">
                    <div class="tooltiptext">Certificates</div>
                  </span>
                </Link>
              </li>
              <li>
                <Link class="menu-item">
                  <span class="material-icons-outlined">call</span>
                </Link>
                <span class="hovercard">
                  <div class="tooltiptext">Contact</div>
                </span>
              </li>
            </ul>

            <ul class="main-menu">
              <li>
                <Link class="menu-item">
                  <span class="material-icons-outlined active">light_mode</span>
                </Link>
              </li>
              <li>
                <Link class="menu-item">
                  <span class="material-icons-outlined">dark_mode</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
