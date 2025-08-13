import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import img1 from "../assets/services/1.jpg";
import img2 from "../assets/services/2.jpg";
import img3 from "../assets/services/3.jpg";
import img4 from "../assets/services/4.jpg";
import img6 from "../assets/services/6.jpg";
import img7 from "../assets/services/img7.jpg";

import "swiper/css";
import "swiper/css/navigation";
import { NavLink } from "react-router-dom";

const Services = () => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const images = [
    { src: img1, alt: "Residential Projects" },
    { src: img3, alt: "Bedroom Luxury Projects" },
    { src: img2, alt: "Luxury Modular Kitchen Designs" },
    { src: img4, alt: "Living Room " },
    { src: img6, alt: "Commercial Designs " },
    { src: img7, alt: "Home Transformation Modules" },
  ];

  return (
    <section className="h-auto">
      <div className="flex flex-col justify-center px-4 lg:px-20 mx-auto text-left">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-spectral-sc-regular font-bold text-[#E0C65A] mb-4">
            Our Services
          </h2>
          <p className="text-[#E0C65A] font-montserrat font-semibold max-w-2xl mx-auto">
            Every project we undertake speaks luxury & functionality which is
            uniquely yours.
          </p>
        </div>

       {/* Slider */}
<div className="relative w-full px-0 sm:px-6 lg:px-12 py-4 sm:py-8 flex items-center">
  {/* Left Arrow */}
  <button
    ref={prevRef}
    className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black transition"
  >
    <MdKeyboardArrowLeft size={22} className="sm:size-[30px]" />
  </button>

  <NavLink to="/services" className="w-full">
    <Swiper
      modules={[Navigation, Autoplay]}
      loop={true}
      ref={swiperRef}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={700}
      slidesPerView={1}
      spaceBetween={0}
      className="w-full"
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      {images.map((image, idx) => (
        <SwiperSlide key={idx}>
          <motion.div
            className="relative rounded-lg overflow-hidden shadow-lg w-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="
                w-full block
                h-[200px] xs:h-[250px] sm:h-[350px] md:h-[450px]
                lg:h-[600px] xl:h-[700px]
                object-cover rounded-lg 
              "
            />
            <div
              className="
                absolute bottom-0 left-0 right-0
                bg-black/60 text-white
                py-2 sm:py-3 md:py-4
                text-xs sm:text-base md:text-xl lg:text-2xl
                font-semibold text-center font-carme-regular
              "
            >
              {image.alt}
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </NavLink>

  {/* Right Arrow */}
  <button
    ref={nextRef}
    className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black transition"
  >
    <MdKeyboardArrowRight size={22} className="sm:size-[30px]" />
  </button>
</div>

      </div>
    </section>
  );
};

export default Services;
