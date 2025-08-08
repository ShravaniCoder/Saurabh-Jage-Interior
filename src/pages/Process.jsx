import React from "react";
import { Link } from "react-router-dom";
import { steps } from "../Data/info"; 
import BannerImage from "../assets/Bannerimage.jpg";
const Process = () => {
  return (
    <div>
       <div
      className="h-[70vh] w-full bg-center bg-cover bg-fixed flex items-center justify-center"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
    
    </div>
    <section className="mx-auto max-w-7xl">
      <h1 className="text-4xl font-bold my-10 text-center">Our Process</h1>
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
            <h2 className="text-base font-bold my-3">{step.title}</h2>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </Link>
        ))}
      </div>
      </section>
    </div>
  );
};

export default Process;
