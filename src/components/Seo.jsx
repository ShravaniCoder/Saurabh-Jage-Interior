import React from 'react';
import SeoImg from "../../public/seo.jpeg";
import BgImage from "../../public/bgImg.jpg"; 

const Seo = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat border border-[#E5D8AD]  px-6"
        style={{
          backgroundImage: `url(${BgImage})`,
        }}
      >
        {/* Image */}

        <div className="relative z-10   max-w-4xl mx-auto">
          \
          <div className="py-2 w-full">
            <img
              src={SeoImg}
              alt="website"
              className="w-full h-[300px] object-cover"
            />
          </div>
          {/* Title */}
          <h2 className="text-[#E5D8AD] text-2xl font-cormorant-text mt-4">
            Search Engine Optimization
          </h2>
          <ul className="text-white mt-4 list-disc list-inside space-y-1">
            <li>Website SEO Consultation</li>
            <li>Keyword Research & Strategy</li>
            <li>On-Page SEO</li>
            <li>Local SEO</li>
            <li>Blog Writing with SEO</li>
            <li>Monthly SEO Performance Reporting</li>
          </ul>
          {/* Description */}
          <p className="text-white my-4 pb-2 leading-relaxed">
            At{" "}
            <span className="text-[#E5D8AD] font-semibold">LORINZAZENIX</span>,
            we turn SEO into a strategic advantage, boosting your visibility,
            credibility, and conversions. By optimizing your website’s
            structure, content, and performance, we help your brand rise in
            search results and reach the right audience organically. No constant
            ad spend, just sustained, high-intent trac. With a blend of
            technical precision and creative strategy, we make sure your brand
            isn’t just found, it’s trusted, chosen, and remembered.
          </p>
        </div>
      </div>
    </>
  );
}

export default Seo;