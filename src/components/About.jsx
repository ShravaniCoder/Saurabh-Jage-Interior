import React from "react";
import bgImage from "../assets/tilesbanner.png";

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
    <div className="relative bg-white py-20  overflow-hidden">
      {/* Architectural wireframe background */}
      <div className="absolute inset-0 bg-[url('/wireframe-bg.png')] bg-no-repeat bg-center bg-cover opacity-10 z-0" />

      <div className="relative z-10  text-center">
        <div className="mb-3 text-sm font-bold font-spectral-sc-regular text-[#E0C65A] tracking-wide uppercase">
          • Who we are •
        </div>
        <h2 className="text-3xl font-nata-sans md:text-5xl font-bold text-gray-900">
          “<span className="text-[#E0C65A]">Marbelling </span>Homes,
          <span className="text-[#E0C65A]"> Marvelling </span>Lives”
        </h2>
        <p className="mt-5 px-4 font-montserrat font-medium text-gray-600 max-w-2xl mx-auto">
          Saurabh Jage Interiors is a dynamic and rapidly expanding interior
          design firm known for creating elegant, personalized, and functional
          spaces throughout India. With a rapidly expanding presence in Mumbai,
          we combine refined aesthetics, meticulous planning, and exceptional
          execution.
        </p>

        {/* Services Section */}
       <div
  className="relative mt-20 py-16 px-4 md:px-10 lg:px-24 bg-cover bg-center"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
>


  {/* Content */}
  <div className="relative text-center mb-10 z-10">
    <h2 className="text-4xl font-spectral-sc-regular font-bold text-[#E0C65A] mb-4">
      Our Offerings
    </h2>
    <p className="text-[#E0C65A] font-montserrat font-semibold max-w-2xl mx-auto">
      Our objective is to precisely personalize designs to your specific lifestyle and interests.
    </p>
  </div>

  {/* Services Grid */}
  <div className="relative mt-14 grid gap-6 grid-cols-1 sm:grid-cols-2 cursor-pointer md:grid-cols-3 lg:grid-cols-4 text-left z-10">
    {services.map((service, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all transform hover:scale-105 duration-300 ease-out"
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
    </div>
  );
};

export default ExperienceSection;
