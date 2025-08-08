import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../Data/info";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Bannerimage.jpg";


const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <>
     <div
                    className="h-[70vh] w-full bg-center bg-cover bg-fixed flex items-center justify-center"
                    style={{ backgroundImage: `url(${BannerImage})` }}
                  >
                  
                  </div>
    <div id="services" className="bg-[#f7f7f7] px-10 py-20">
       
      <div className=" px-4 lg:px-20 mx-auto mb-10">
        <p className="text-sm text-[#d3b54a] font-semibold my-10">• OUR SERVICES</p>
        <h2 className="text-4xl font-bold leading-snug text-black">
          Explore Our <span className="text-[#d3b54a]">Comprehensive<br />Interior Design</span> Services
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl">
          We specialize in transforming visions into reality.
        </p>
      </div>

      <div className=" px-4 lg:px-20 mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Animated Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-video sm:aspect-[4/3] lg:h-[500px]">
  <AnimatePresence mode="wait">
    <motion.img
      key={activeIndex}
      src={services[activeIndex].img}
      alt="Interior"
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
    />
  </AnimatePresence>

  {/* Overlay Text */}
  <div className="absolute bottom-4 left-4 bg-black/70 text-white text-sm p-4 rounded-xl max-w-xs z-10">
    {services[activeIndex].title}
  </div>
</div>


        {/* Right: Services List */}
        <div className="space-y-6 z-20">
          {services.map((service, index) => (
            <Link
            to={`/services/${service.id}`}
            key={service.id}
           
              onMouseEnter={() => setActiveIndex(index)}
              className={`flex justify-between items-center border-b pb-6 cursor-pointer transition duration-300 ${
                index === activeIndex ? "text-[#d3b54a]" : ""
              }`}
            >
              <div className="text-lg font-semibold">
                {index + 1} {service.title}
              </div>
              <ArrowRight size={20} />
            </Link>
            
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;
