import React from "react";
import { Link } from "react-router-dom";
import { steps } from "../Data/info"; 
import Banner from "../assets/processbanner.jpg";
const Process = () => {
  return (
    <>
      <div className="relative h-[55vh] w-full">
        <img
          src={Banner}
          alt=""
          className="absolute inset-0 object-cover object-center blur-xs h-full w-full"
        />
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl md:text-5xl font-spectral-sc-regular font-bold text-white mb-4">
            Our Process
          </h2>
        </div>
      </div>
      <section className="mx-auto my-20 max-w-7xl">
       
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <Link
              to={`/steps/${step.id}`}
              key={step.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-50 object-cover rounded-lg mb-5"
              />
              <h2 className="text-base font-bold my-3 font-carme-regular">
                {step.title}
              </h2>
              <p className="text-gray-600 text-sm font-inter">
                {step.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Process;
