import React from "react";
import { useParams, Link } from "react-router-dom";
import { services } from "../Data/info";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id.toString() === id);

  if (!service) {
    return <div className="p-8 text-red-500">Service not found.</div>;
  }

  return (
    <div className="bg-gray-50">
      {/* Parallax Hero Section */}
      <div
        className="relative h-[80vh] md:h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${service.img})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold text-center drop-shadow-2xl leading-tight">
            {service.title}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-16 bg-white shadow-xl -mt-28 md:-mt-32 relative z-10 rounded-xl">
        <Link
          to="/"
          className="text-sm text-blue-500 hover:underline inline-block mb-6"
        >
          ← Back to Services
        </Link>

        <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
          {service.description}
        </p>

        {/* What We Offer Section */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <ul className="list-disc pl-5 space-y-3 text-gray-800 text-base leading-relaxed">
            {service.details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
