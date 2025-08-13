import React from "react";
import BgImage from "../assets/chhose.jpg"; // Replace with your image path

const WhyChoose = () => {
  return (
    <section className="relative w-full h-[90vh] md:min-h-screen  overflow-hidden">
      {/* Background Image */}
      <img
        src={BgImage}
        alt="Why Choose Us Background"
        className="absolute inset-0 w-full h-[90vh]  md:h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-12">
        <div className="backdrop-blur-sm p-4 sm:p-6 md:p-8 max-w-xl sm:max-w-2xl text-center rounded-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white font-spectral-sc-regular">
            Why Choose Us
          </h1>
          <p className="text-white mb-3 sm:mb-4 text-sm sm:text-base font-montserrat">
            At <span className="font-semibold">Saurabh Jage Interiors</span>, we
            think that excellent design is more than just visual appeal; it is
            about creating spaces that reflect your unique style. What
            distinguishes us is our unwavering commitment to providing
            personalized interiors with a professional touch, executed to the
            highest quality and creative standards.
          </p>
          <p className="text-white mb-3 sm:mb-4 text-sm sm:text-base">
            We design homes which reflect your personal taste while maximising
            functionality. Every material, color scheme, furniture unit, and
            lighting fixture is chosen with the intention of elevating rather
            than decorating.
          </p>
          <p className="text-white mb-3 sm:mb-4 text-sm sm:text-base">
            Our expert team of designers and project managers collaborate to
            guarantee a flawless experience from beginning to end. We provide a
            one-stop solution under one roof, eliminating third-party hassles
            and communication gaps.
          </p>
          <p className="text-white text-sm sm:text-base">
            We provide excellent design, timely delivery, clear pricing, and a
            hassle-free approach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
