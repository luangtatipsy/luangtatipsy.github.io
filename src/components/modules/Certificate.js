import React from "react";
import udemy from "./../../images/udemy.svg";
import deeplearningAi from "./../../images/deeplearningai.svg";
import aws from "./../../images/aws.svg";
import googleCloud from "./../../images/google-cloud.svg";
import ibm from "./../../images/ibm.svg";
import "../../stylesheets/scrollbar.css";

import Carousel, {
  arrowsPlugin,
  slidesToShowPlugin,
} from "@brainhubeu/react-carousel";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@brainhubeu/react-carousel/lib/style.css";

const Certificate = () => {
  const certificates = [
    {
      name: "Master the Coding Interview: Data Structures + Algorithms",
      issuer: udemy,
      issueMonth: "May",
      issueYear: 2021,
      credential:
        "https://www.udemy.com/certificate/UC-f8b81218-049c-4452-8fc4-e2be7f6079f8/",
    },
    {
      name: "Deep Learning",
      issuer: deeplearningAi,
      issueMonth: "May",
      issueYear: 2021,
      credential:
        "https://www.coursera.org/account/accomplishments/specialization/4QA2X3YRKER7",
    },
    {
      name: "AWS Fundamentals: Going Cloud-Native",
      issuer: aws,
      issueMonth: "Aug",
      issueYear: 2019,
      credential:
        "https://www.coursera.org/account/accomplishments/certificate/RN8E2USRGWJE",
    },
    {
      name: "API Design and Fundamentals of Google Cloud's Apigee API Platform",
      issuer: googleCloud,
      issueMonth: "Jul",
      issueYear: 2019,
      credential:
        "https://www.coursera.org/account/accomplishments/certificate/JRUDCTEDNMRC",
    },
    {
      name: "IBM Data Science Professional Certificate Specialization",
      issuer: ibm,
      issueMonth: "Feb",
      issueYear: 2019,
      credential:
        "https://www.coursera.org/account/accomplishments/specialization/ZD79WQ8WYGKE",
    },
  ];

  return (
    <div className="flex flex-col bg-gray-200 m-auto py-8">
      <div className="px-10">
        <h1 className="font-bold text-4xl text-gray-700 text-center uppercase tracking-wider py-10">
          Certificates
        </h1>
        <Carousel
          plugins={[
            "infinite",
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: (
                  <button type="button" className="block">
                    <FontAwesomeIcon
                      className="text-gray-500"
                      size="lg"
                      icon={faChevronLeft}
                    />
                  </button>
                ),
                arrowRight: (
                  <button type="button" className="block">
                    <FontAwesomeIcon
                      className="text-gray-500"
                      size="lg"
                      icon={faChevronRight}
                    />
                  </button>
                ),
                arrowRightDisabled: (
                  <button type="button" className="block">
                    <FontAwesomeIcon
                      className="text-gray-100"
                      size="lg"
                      icon={faChevronRight}
                    />
                  </button>
                ),
                addArrowClickHandler: true,
              },
            },
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 4,
              },
            },
          ]}
          breakpoints={{
            425: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            768: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
            1024: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
            1440: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 3,
                  },
                },
              ],
            },
          }}
        >
          {certificates.map((certificate, idx) => {
            return (
              <div key={idx} className="mx-0">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={certificate.credential}
                >
                  <div
                    className="px-3 py-5 text-center h-52 overflow-hidden rounded-lg shadow-md bg-gray-50 hover:shadow-xl transition-shadow duration-200 ease-in-out"
                    style={{ width: "350px" }}
                  >
                    <div className="h-1/2 flex flex-col items-center justify-center mb-4">
                      <img
                        className="h-full w-40"
                        src={certificate.issuer}
                        alt=""
                      />
                    </div>
                    <div className="h-1/2 flex flex-col justify-items-start">
                      <h1 className="text-sm text-gray-600 tracking-wider font-bold uppercase">
                        {certificate.name}
                      </h1>
                      <h1 className="text-sm text-gray-500 font-medium capitalize mt-1">
                        Issued {certificate.issueMonth} {certificate.issueYear}
                      </h1>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Certificate;
