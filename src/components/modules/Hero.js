import React from "react";
import avatar from "./../../images/memoji.png";

const Avatar = () => {
  return (
    <div className="rounded-full flex items-center justify-center w-32 h-32 bg-gray-200">
      <img class="w-20" src={avatar} alt="My memoji avatar" />
    </div>
  );
};

const Hero = () => {
  const profile = {
    firstName: "Taechawat",
    lastName: "Konkaew",
    position: { full: "Machine Learning Engineer", short: "ML Engineer" },
    tagLine:
      "The purpose of building an AI is not to show off how smart you are.\nNonetheless, it is to help people living a lot easier.",
  };

  return (
    <div className="container mx-auto pt-16 pb-32 bg-transparent flex flex-col items-center justify-center">
      <Avatar />
      <div className="content-wrapper px-8 sm:px-auto mt-8 text-center">
        <h1 class="text-2xl font-medium capitalize">
          {profile.firstName} {profile.lastName}
        </h1>
        <h1 class="hidden sm:block text-4xl sm:text-5xl font-bold py-7 uppercase tracking-wider">
          {profile.position.full}
        </h1>
        <h1 class="block sm:hidden text-4xl sm:text-5xl font-bold py-7 uppercase tracking-wider">
          {profile.position.short}
        </h1>
        {profile.tagLine.split("\n").map((line) => {
          return <p class="text-xl font-extralight tracking-wider">{line}</p>;
        })}
      </div>
    </div>
  );
};

export default Hero;
