import React from "react";

const services = [
  {
    title: "Architectural Design",
    desc: "Dream it, we’ll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        className="w-7 h-7 text-[#d3b54a]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21V3h18v18H3zm6-11h6M9 17h6M9 7V3m6 4V3"
        />
      </svg>
    ),
  },
  {
    title: "Interior Design & Planning",
    desc: "Make your space shine! Our team creates inviting, beautiful interiors that reflect your style and make every room a favorite place to be.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        className="w-7 h-7 text-[#d3b54a]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 3h16v6H4V3zm0 12h16v6H4v-6zM4 9h16M4 15h16"
        />
      </svg>
    ),
  },
  {
  title: "Consulting Services",
  desc: "Consider us your design whisperers! We provide expert advice to help your project sparkle with creativity, efficiency, and spot-on solutions.",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="w-7 h-7 text-[#c5a253]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2a7 7 0 00-7 7c0 2.5 1.5 4.5 3.5 5.4V17a1 1 0 001 1h5a1 1 0 001-1v-2.6c2-1 3.5-2.9 3.5-5.4a7 7 0 00-7-7z"
      />
    </svg>
  ),
},

  {
  title: "Project Management",
  desc: "We handle the hustle! From start to finish, we keep your project on track, on budget, and stress-free — so you can sit back and watch the magic happen.",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      className="w-7 h-7 text-[#c5a253]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3M4 11h16M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 15l2 2 4-4"
      />
    </svg>
  ),
}
,
];

const ExperienceSection = () => {
  return (
    <div className="relative bg-white py-20 px-4 md:px-10 lg:px-24 overflow-hidden">
      {/* Architectural wireframe background */}
      <div className="absolute inset-0 bg-[url('/wireframe-bg.png')] bg-no-repeat bg-center bg-cover opacity-10 z-0" />

      <div className="relative z-10  text-center">
        <div className="mb-3 text-sm font-medium text-[#d3b54a] tracking-wide uppercase">
          • Who we are
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Experience <span className="text-[#d3b54a]">The Art Of Interior</span> Design
        </h2>
        <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
          We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision.
        </p>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-center gap-3 mb-16">
                <h3 className="text-4xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <div>{service.icon}</div>
              </div>
              <hr className="text-gray-300" />
              <p className="text-sm text-gray-600 leading-relaxed text-left mt-5">
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
