import workCompany from "./../../images/working-company.svg";

const PositionCard = () => {
  return (
    <div className="relative -mt-14 md:-mt-24 lg:-mt-32 py-3">
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-tr from-gray-800 to-red-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative py-16 px-8 bg-white shadow-lg lg:rounded-3xl lg:p-20">
        <div className="max-w-md mx-auto">
          <div>
            <h1 className="text-2xl text-center uppercase font-bold tracking-wider">
              machine learning engineer
            </h1>
            <h4 className="text-center font-semibold uppercase pt-4 text-gray-500">
              2019 - Present
            </h4>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base tracking-widest leading-6 space-y-6 text-gray-700 sm:text-lg sm:leading-7">
              <p>
                My responsibility is building end to end ML/AI to make company's
                applications being more intelligent, in the fields of
              </p>
              <ul className="list-disc space-y-2">
                <li className="flex items-start">
                  <span className="h-6 flex items-center sm:h-7">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p className="ml-2">Natural Language Processing</p>
                </li>
                <li className="flex items-start">
                  <span className="h-6 flex items-center sm:h-7">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p className="ml-2">Computer Vision</p>
                </li>
              </ul>
              <p>including data manipulation, EDA, and visualization. </p>
            </div>
            <div className="pt-8 flex justify-center items-center">
              <a
                href="https://www.wisesight.com"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="h-12"
                  src={workCompany}
                  alt="WISESIGHT's logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const skillsArray = [
    {
      type: "programming languages",
      skills: ["Python", "SQL", "NoSQL", "Javascript (ES6)", "Shell"],
    },
    {
      type: "technical frameworks",
      skills: [
        "Pandas",
        "Scikit-learn",
        "Tensorflow",
        "TensorFlow Serving",
        "RabbitMQ",
        "MongoDB",
        "Docker",
        "React",
        "Linux",
        "Amazon Web Service",
        "Digital Ocean",
        "Kubernetes",
      ],
    },
    {
      type: "soft skills",
      skills: [
        "Adaptability",
        "Compromise",
        "Emotional Intelligence",
        "Self-Directed",
        "Time Management",
      ],
    },
  ];

  return (
    <div className="bg-gray-400">
      <div className="container mx-auto py-10 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-1">
        <PositionCard />
        <div className="flex flex-col space-y-10 lg:space-y-0 lg:justify-around lg:pl-20 h-full">
          {skillsArray.map((obj) => {
            return (
              <div key={obj.type} className="">
                <h1 className="font-bold text-lg text-gray-100 text-center lg:text-left pb-1 uppercase tracking-wider">
                  {obj.type}
                </h1>
                <div className="text-center lg:text-left">
                  {obj.skills.map((skill, idx) => {
                    return (
                      <span
                        key={idx}
                        className="inline-block transition ease-in-out duration-300 rounded-md text-gray-100 bg-gray-500 hover:bg-gray-700 px-2 py-1 text-sm font-semibold m-1"
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
