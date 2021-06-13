import React from "react";
import PersonalCard from "../components/personal-card";

const MasterLayout = ({ title }) => {
  document.body.addEventListener("mousemove", (e) => {
    var moveX = (e.pageX * -1) / 50;
    var moveY = (e.pageY * -1) / 50;

    document.body.style.backgroundPosition = moveX + "px " + moveY + "px";
  });

  return (
    <master>
      <title>{title}</title>
      <PersonalCard />
    </master>
  );
};

export default MasterLayout;
