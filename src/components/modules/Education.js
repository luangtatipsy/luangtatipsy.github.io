import React from "react";
import educationImage from "./../../images/education.svg";

const Education = () => {
  const educations = [
    {
      university: "Kasetsart University (Bangkhen)",
      degree: "Master of Computer Science, M.Sc",
      gradMonth: "Jun",
      gradYear: 2019,
      gpax: 3.66,
    },
    {
      university: "Kasetsart University (Bangkhen)",
      degree: "Bachelor of Computer Science, B.Sc",
      gradMonth: "May",
      gradYear: 2016,
      gpax: 2.82,
    },
  ];

  return (
    <div className="bg-gray-200 pt-8 pb-20 lg:pb-64">
      <div className="container mx-auto">
        <h1 className="font-bold text-4xl text-gray-700 text-center uppercase tracking-wider pt-8 pb-10">
          Education
        </h1>
        <div className="container mx-auto flex items-center flex-col lg:justify-between lg:flex-row py-7">
          <div className="grid grid-cols-4 gap-0">
            {educations.map((education, idx) => {
              return (
                <React.Fragment key={idx}>
                  <h4 className="flex items-center px-7 py-16 font-bold text-xl border-r-8 border-gray-300 text-gray-600">
                    {education.gradMonth}, {education.gradYear}
                  </h4>
                  <div className="col-span-3 py-16 px-4">
                    <h4 className="font-bold text-lg text-gray-600 md:text-2xl">
                      {education.degree}
                    </h4>
                    <p className="text-base italic leading-snug text-gray-500 text-opacity-100">
                      {education.university}, GPAX {education.gpax}
                    </p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <div className="w-4/12 sticky hidden lg:block">
            <img
              className="mx-auto"
              src={educationImage}
              alt="A man wearing suit stands in a front of a document background"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
