import React from 'react';
import SocialImg from "../../public/social-media.jpeg";
import BgImage from "../../public/bgImg.jpg"; 

const Social = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat border border-[#E5D8AD] py-6  px-6"
        style={{
          backgroundImage: `url(${BgImage})`,
        }}
      >
        <div className="relative z-10   max-w-4xl mx-auto">
          <div className="py-2 w-full">
            <img
              src={SocialImg}
              alt="social"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* Title */}
          <h2 className="text-[#E5D8AD] text-2xl font-cormorant-text mt-4">
            Social Media Management
          </h2>

          <ul className="text-white mt-4 list-disc list-inside space-y-1">
            <li>Content Calendar Planning & Execution</li>
            <li>Instagram, Facebook, LinkedIn, Twitter Handle</li>
            <li>Post Design</li>
            <li>Influencer Collaboration Management</li>
            <li>Performance Tracking & Monthly Analytics</li>
          </ul>
          {/* Description */}
          <p className="text-white mt-4 leading-relaxed">
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

export default Social;