import React from "react";
import BannerImage from "../assets/Bannerimage.jpg";
import { BsTelephone } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
  return (
    <section>
      <img src={BannerImage} alt="" className="object-cover w-full h-[55vh] " />
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Phone */}
          <div className="flex flex-col items-center space-y-4">
            <BsTelephone className="text-7xl text-[#E2C14A]" />
            <h3 className="text-sm text-gray-500 uppercase font-carme-regular">
              Phone :
            </h3>
            <p className="text-gray-700 font-inter">
              +91 22-45199483 <br />
            </p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center space-y-4">
            <GrLocation className="text-7xl text-[#E2C14A]" />
            <h3 className="text-sm text-gray-500 uppercase font-carme-regular">
              Address:
            </h3>
            <p className="text-gray-700 font-inter">
              1311, MARATHON MILLENIUM, <br />
              LBS ROAD, BESIDE NIRMAL LIFESTYLE MALL, MULUND WEST, Mumbai(400080).
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center space-y-4">
            <TfiEmail className="text-7xl text-[#E2C14A]" />
            <h3 className="text-sm text-gray-500 uppercase font-carme-regular">
              E-Mail :
            </h3>
            <p className="text-gray-700 font-inter">
              contact@saurabhjageinterior.com
            </p>
          </div>
        </div>
      </section>
      <div className="mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.643062961967!2d72.9382842!3d19.1670954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b95393ca9d37%3A0x42654bf89712cee7!2sMarathon%20Millennium!5e0!3m2!1sen!2sin!4v1752042281967!5m2!1sen!2sin"
          width="100%"
          height="450"
          className="rounded-2xl shadow-lg border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Marathon Millennium Location"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
