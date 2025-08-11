import React from "react";
import Branding from "../components/Branding";
import Website from "../components/Website";
import Content from "../components/Content";
import Seo from "../components/Seo";
import Social from "../components/Social";

const DigitalServices = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="my-40 bg-black py-20">
        {/* Page Title */}
        <div className="flex items-center justify-center">
          <h1 className="font-cormorant-text text-center text-[#E5D8AD] py-10 text-3xl md:text-5xl">
            Services
          </h1>
        </div>

        {/* Two-column Layout with sidebar LEFT */}
        <div className="lg:px-20 md:px-10 px-4 w-full flex flex-col md:flex-row md:flex gap-8">
          {/* LEFT: Sticky Sidebar */}
          <div className="hidden md:flex flex-col md:flex-col md:w-[30%] w-full gap-4 sticky top-24 self-start overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal">
            <h2 className="text-[#E5D8AD] text-2xl font-cormorant-text mb-2 md:w-full inline-block">
              Our Services
            </h2>
            <button
              onClick={() => handleScroll("branding")}
              className="bg-[#E5D8AD] text-black py-2 px-4 rounded hover:bg-[#d4c690] transition inline-block md:block"
            >
              Branding
            </button>
            <button
              onClick={() => handleScroll("website")}
              className="bg-[#E5D8AD] text-black py-2 px-4 rounded hover:bg-[#d4c690] transition inline-block md:block"
            >
              Website Development Services
            </button>
            <button
              onClick={() => handleScroll("content")}
              className="bg-[#E5D8AD] text-black py-2 px-4 rounded hover:bg-[#d4c690] transition inline-block md:block"
            >
              Content Creation
            </button>
            <button
              onClick={() => handleScroll("seo")}
              className="bg-[#E5D8AD] text-black py-2 px-4 rounded hover:bg-[#d4c690] transition inline-block md:block"
            >
              SEO Services
            </button>
            <button
              onClick={() => handleScroll("social")}
              className="bg-[#E5D8AD] text-black py-2 px-4 rounded hover:bg-[#d4c690] transition inline-block md:block"
            >
              Social Media Management
            </button>
          </div>

          {/* RIGHT: Scrollable Content */}
          <div className="w-full md:w-[70%] flex flex-col gap-10">
            <div id="branding">
              <Branding />
            </div>
            <div id="website">
              <Website />
            </div>
            <div id="content">
              <Content />
            </div>
            <div id="seo">
              <Seo />
            </div>
            <div id="social">
              <Social />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalServices;
