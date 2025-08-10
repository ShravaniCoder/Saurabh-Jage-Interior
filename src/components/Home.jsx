import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


// Your background images
import Img1 from "../assets/Home3.jpg";
import Img2 from "../assets/home2.jpg";
import Img3 from "../assets/home.jpg";
import Img4 from "../assets/home4.jpg";
import Img5 from "../assets/Home5.jpg";

const images = [Img1, Img2, Img3, Img4, Img5];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[72vh] md:h-[98vh] overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={index}
            src={images[index]}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-[4vw] md:pt-36 text-white">
        <h1 className="text-3xl md:mt-0 mt-5 font-marcellus-sc-regular md:text-8xl font-extrabold leading-tight mb-6">
          Luxury Interiors,
          <br />
          Tailored for You
        </h1>

        <div className="md:px-[14vw] px-4">
          <p className="max-w-md font-spectral-sc-regular text-base  md:text-lg font-semibold mb-8">
            We specialize in delivering turnkey solutions for apartments,
            villas, and commercial spaces, backed by a team of expert designers
            and artisans.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
