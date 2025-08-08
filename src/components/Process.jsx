"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { steps } from "../Data/info";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";


const ProcessSection = () => {
  
  
  return (
    <>
    <div className="bg-[#f5f5f5] py-20">
    <section className=" px-4 md:px-20  relative overflow-hidden">
      {/* Section Header */}
       <div className=" px-4 mx-auto mb-10">
        <p className="text-base text-[#d3b54a] font-semibold mb-2">• OUR PROCESS</p>
        <h2 className="text-5xl font-bold leading-snug text-black">
         Description <span className="text-[#d3b54a]">Architecture <br />Process For Exceptional</span> Results.
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl">
          We specialize in transforming visions into reality.
        </p>
      </div>
      

      {/* Step-by-step staggered cards horizontally */}
     <div className="flex flex-col lg:flex-row items-start gap-6">
  {steps.slice(0, 4).map((step, index) => (
    <motion.div
      key={step.id}
      className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all w-full lg:w-1/4
        ${index === 1 ? "mt-20" : index === 2 ? "mt-40" : index === 3 ? "mt-60" : "mt-0"}
      `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <img
        src={step.img}
        alt={step.title}
        className="w-full h-50 object-cover rounded-lg mb-5"
      />
      <div>
        <h4 className={`text-base font-bold ${step.color}`}>
          {step.number}. <span className="text-black">{step.title}</span>
        </h4>
        <p className="text-gray-500 text-sm mt-2">{step.description}</p>
      </div>
      <div className="mt-6 text-4xl text-gray-200 font-extrabold text-right">
        {step.number}
      </div>
      
    </motion.div>
  ))}
</div>

    </section>
    <div className="mt-7 flex justify-start lg:justify-end ml-20">
      
          <NavLink
            to="/process"
            className="bg-[#d3b54a] shadow-2xl flex items-center justify-center gap-2 text-white py-3 px-6 rounded-2xl hover:bg-[#b99a39] transition "
          >
            View All <FaArrowRightLong />
          </NavLink>
      
      </div>

    </div>
    </>
  );
};

export default ProcessSection;
