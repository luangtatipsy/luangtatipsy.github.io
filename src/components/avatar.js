import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Avatar = ({ align }) => {
  return (
    <div>
      <figure class="image" align={align}>
        <StaticImage
          class="is-rounded"
          alt="My avatar"
          src="../images/avatar.jpg"
          width="180"
          placeholder="none"
        />
      </figure>
    </div>
  );
};

export default Avatar;
