import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiPhoneCall } from "react-icons/fi";
import { PiDotsNineBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import Logo from "../assets/logo-interior.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className={`px-4 sm:px-[3vw] md:px-[4vw] py-4 fixed w-full z-50 transition-all duration-300 
      ${scrolled ? "bg-white text-black shadow-md" : "text-white backdrop-blur-2xl"}`}>

      <div className='flex items-center justify-between'>
        {/* Left: Logo & Nav */}
        <div className='flex items-center gap-4'>
          <img src={Logo} alt="Logo"    className='w-60'     />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-7 font-montserrat items-center cursor-pointer">
          <NavLink to="/" className="uppercase font-semibold hover:text-[#d3b54a]">Home</NavLink>
           <NavLink to="/services" onClick={() => setMenuOpen(false)} className="uppercase font-semibold hover:text-[#d3b54a]">Services</NavLink>
         < NavLink to="/process" onClick={() => setMenuOpen(false)}  className="uppercase font-semibold hover:text-[#d3b54a]">Process</NavLink>
          <NavLink to="/blogs" className="uppercase font-semibold hover:text-[#d3b54a]">Blogs</NavLink>
          <NavLink to="/contact" className="uppercase font-semibold hover:text-[#d3b54a]">Contact Us</NavLink>
        </ul>

        {/* Right Side (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-6">
          <div className='flex items-center gap-3'>
            <FiPhoneCall className='text-2xl' />
            <div className='flex font-montserrat flex-col text-sm'>
              <h1 className="font-medium">Call Us</h1>
               <h2 className="font-semibold">(+91) 99873 57338</h2>
            </div>
          </div>
        
          
        </div>

        {/* Mobile Menu Button */}
        <div className='lg:hidden'>
          <button
            className='p-3 rounded-full bg-black/50 text-white hover:bg-[#d3b54a] text-2xl'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <RxCross2 /> : <PiDotsNineBold />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`lg:hidden mt-3 bg-white text-black rounded-lg shadow-md px-4 py-5 space-y-4 transition-all`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="block font-semibold uppercase">Home</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)} className="block font-semibold uppercase">Services</NavLink>
          <NavLink to="/process" onClick={() => setMenuOpen(false)} className="block font-semibold uppercase">Process</NavLink>
          <NavLink to="/blogs" onClick={() => setMenuOpen(false)} className="block font-semibold uppercase">Blogs</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="block font-semibold uppercase">Contact Us</NavLink>
          <div className='pt-4 border-t border-gray-300'>
            <div className='flex items-center gap-3 mb-3'>
              <FiPhoneCall className='text-2xl' />
              <div className='text-sm'>
                <h1 className="font-medium">Call Us</h1>
                <h2 className="font-semibold">(+91) 99873 57338</h2>
              </div>
            </div>
            <button className='w-full py-3 rounded-full font-semibold bg-[#d3b54a] hover:bg-black hover:text-white transition'>
              Get A Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
