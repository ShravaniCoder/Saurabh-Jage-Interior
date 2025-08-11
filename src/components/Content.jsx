import React from "react";
import ContentImg from "../../public/content.jpeg";
import BgImage from "../../public/bgImg.jpg"; 

const Content = () => {
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
            src={ContentImg}
            alt="Content"
            className="w-full h-[300px] object-cover"
          />
        </div>

        {/* Title */}
        <h2 className="text-[#E5D8AD] text-2xl font-cormorant-text mt-4">
          Content Creation
        </h2>

        <ul className="text-white mt-4 list-disc list-inside space-y-1">
          <li>Reels & Video Production</li>
          <li>Product & Brand Photography</li>
          <li>Motion Graphics</li>
          <li>Creative Direction</li>
          <li>Meme Marketing</li>
        </ul>
        {/* Description */}
        <p className="text-white mt-4 leading-relaxed">
          At <span className="text-[#E5D8AD] font-semibold">LORINZAZENIX</span>,
          we transform content into powerful brand experiences. In a world
          overflowing with noise, we craft copy, visuals, and videos that cut
          through content that captivates, connects, and converts. From reels to
          web copy, every piece is designed to make your brand not just seen,
          but remembered. Let your story spark emotion, build trust, and drive
          action.
        </p>
      </div>
      </div>
      
    </>
  );
};

export default Content;
