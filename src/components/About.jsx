import React from "react";

const services = [
  {
    title: "Consulting Services",
    desc: "Your vision, our wisdom. We listen, understand, and craft inspired, practical design solutions that blend creativity with functionality turning your ideas into spaces you’ll love to live in.",
  },
  {
    title: "Project Management",
    desc: "From blueprint to bliss, we take care of every detail. Our team keeps your project on track, on budget, and stress-free, so you can relax and watch your dream space come to life effortlessly.",
  },
  {
    title: "Interior Design & Planning",
    desc: "Where style meets soul. Our interiors are crafted to reflect your personality, combining comfort, beauty, and functionality making every corner your favorite place to be.",
  },
  {
    title: "Architectural Design",
    desc: "Big dreams, flawless details. From grand layouts to the smallest touches, we design spaces that reflect your style with precision, creativity, and timeless elegance.",
  },

  ,
];

const ExperienceSection = () => {
  return (
    <div className="relative bg-white py-20 px-4 md:px-10 lg:px-24 overflow-hidden">
      {/* Architectural wireframe background */}
      <div className="absolute inset-0 bg-[url('/wireframe-bg.png')] bg-no-repeat bg-center bg-cover opacity-10 z-0" />

      <div className="relative z-10  text-center">
        <div className="mb-3 text-sm font-bold font-spectral-sc-regular text-[#d3b54a] tracking-wide uppercase">
          • Who we are •
        </div>
        <h2 className="text-4xl font-anton-text md:text-5xl font-bold text-gray-900">
          Experience <span className="text-[#d3b54a]">The Art Of Interior</span>{" "}
          Design
        </h2>
        <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
          We specialize in transforming visions into reality. Explore our
          portfolio of innovative architectural and interior design projects
          crafted with precision.
        </p>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-center gap-3 mb-16">
                <h3 className="text-3xl font-carme-regular font-bold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <hr className="text-gray-300" />
              <p className="text-sm font-inter text-gray-600 leading-relaxed text-left mt-5">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
