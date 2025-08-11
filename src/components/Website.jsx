import React from "react";
import WebsiteImg from "../../public/website.jpeg";
import BgImage from "../../public/bgImg.jpg"; 

const Website = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat border border-[#E5D8AD] py-6  px-6"
        style={{
          backgroundImage: `url(${BgImage})`,
        }}
      >
        {/* Image */}
        <div className="relative z-10   max-w-4xl mx-auto">
          <div className="py-2 w-full">
            <img
              src={WebsiteImg}
              alt="website"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* Title */}
          <h2 className="text-[#E5D8AD] text-2xl font-cormorant-text mt-4">
            Website Development Services
          </h2>

          <ul className="text-white mt-4 list-disc list-inside space-y-1">
            <li>Business Website</li>
            <li>E-commerce Website</li>
            <li>Portfolio Website</li>
            <li>Blog or Personal Website</li>
            <li>Landing Page</li>
            <li>Educational Website</li>
            <li>Nonprofit or Charity Website</li>
            <li>News or Magazine Website</li>
            <li>Web Application</li>
          </ul>
          {/* Description */}
          <p className="text-white mt-4 leading-relaxed">
            At{" "}
            <span className="text-[#E5D8AD] font-semibold">LORINZAZENIX</span>,
            we build bold, high-performance websites that don’t just sit pretty;
            they speak with purpose. Your website should be more than a page; it
            should be your stage. Whether you’re launching fresh or leveling up,
            we design digital platforms that echo your brand’s voice, reflect
            your values, and ignite action. From sleek UI/UX and SEOsmart
            content to blazing speed, smooth shopping, and long-term support, we
            craft every click to count. Every site we create is custom-fit,
            conversion-ready, and built to leave a lasting hit. With
            LORINZAZENIX, your website becomes more than a space online; it
            becomes a story, a strategy, and a sales engine, all in one. Always
            on. Always engaging. Always elevating.
          </p>
        </div>
      </div>
    </>
  );
};

export default Website;
