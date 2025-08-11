import React from "react";
import BrandingImg from "../../public/branding.jpeg";
import BgImage from "../../public/bgImg.jpg"; 

const Branding = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat border border-[#E5D8AD] py-6  px-6"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}
    >
     

      {/* Content */}
      <div className="relative z-10   max-w-4xl mx-auto">
        {/* Image */}
        <div className="py-2 w-full">
          <img
            src={BrandingImg}
            alt="Branding"
            className="w-full h-[300px] object-cover"
          />
        </div>

        {/* Title */}
        <h2 className="text-[#E5D8AD] text-2xl font-cormorant-text mt-4">
          Branding
        </h2>

        {/* Services List */}
        <ul className="text-white mt-4 list-disc list-inside space-y-1">
          <li>Logo Design & Brand Identity</li>
          <li>Color Palette Selection</li>
          <li>Brand Voice & Tone Selection</li>
          <li>Tagline & Brand Story</li>
          <li>Stationery Design</li>
          <li>Packaging & Label Design</li>
        </ul>

        {/* Description */}
        <p className="text-white mt-4 leading-relaxed">
          At <span className="text-[#E5D8AD] font-semibold">LORINZAZENIX</span>,
          we see branding as the soul of your business, not just how it looks,
          but how it lives. We craft identities that speak your values, tell
          your story, and build emotional connections. In a world full of
          choices, we make sure your brand stands out, feels authentic, and
          keeps people coming back. Because great branding doesn’t just attract
          customers, it creates a community.
        </p>
      </div>
    </div>
  );
};

export default Branding;
