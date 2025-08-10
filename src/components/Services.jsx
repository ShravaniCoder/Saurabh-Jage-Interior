import bgImg from "../assets/bg-imag.jpg";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import img1 from "../assets/services/1.jpg";
import img2 from "../assets/services/2.jpg";
import img3 from "../assets/services/3.jpg";
import img4 from "../assets/services/4.jpg";
import img6 from "../assets/services/6.jpg";
import img7 from "../assets/services/img7.jpg";

import "swiper/css";
import "swiper/css/navigation";

const Services = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: img1, alt: "Residential Projects" },
    { src: img3, alt: "Bedroom Luxury Projects" },
    { src: img2, alt: "Luxury Modular Kitchen Designs" },
    { src: img4, alt: "Living Room / Lounge Room Designs" },
    { src: img6, alt: "Commercial Designs (Offices & Shops)" },
    { src: img7, alt: "Home Transformation Modules" },
  ];

  return (
    <>
      <div className="relative">
        {/* Background Image */}
        <img
          src={bgImg}
          alt=""
          className="md:h-screen h-[55vh] w-full object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 lg:px-20 mx-auto text-left">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-spectral-sc-regular font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-white font-montserrat font-semibold max-w-2xl mx-auto">
              Every project we undertake speaks luxury & functionality which is
              uniquely yours.
            </p>
          </div>

          <div className="relative px-6 sm:px-8 lg:px-12 py-8 max-w-[1400px] mx-auto overflow-hidden flex items-center">
            <Swiper
              modules={[Navigation, Autoplay]}
              loop={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              spaceBetween={30}
              ref={swiperRef}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
              className="!overflow-visible"
            >
              {images.map((image, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    width: index === activeIndex ? "80%" : "75%",
                    maxWidth: "700px",
                    flexShrink: 0,
                  }}
                  className={`transition-all duration-300 ${
                    index === activeIndex
                      ? "z-20 scale-105"
                      : "z-10 opacity-60 mt-4 mb-4 md:mt-8 md:mb-8"
                  }`}
                >
                  <motion.div
                    className="relative rounded-lg overflow-hidden shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Image */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full object-cover transition-all duration-300 rounded-lg
                        ${
                          index === activeIndex
                            ? "h-[220px] sm:h-[300px] md:h-[350px] lg:h-[450px]"
                            : "h-[200px] sm:h-[270px] md:h-[320px] lg:h-[400px]"
                        }`}
                    />

                    {/* Service Name Overlay */}
                    <motion.div
                      className="absolute bottom-0 text-center font-cinzel-text w-full bg-black/60 text-white py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-lg font-semibold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      {image.alt}
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
