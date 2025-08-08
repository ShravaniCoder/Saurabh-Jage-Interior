import {
  FaFacebook,
  FaInstagram,
  
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/90 text-white px-6 sm:px-10 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 - Building Location */}
        <div>
          <h3 className="uppercase font-semibold mb-7">Quick Links</h3>
          <div className="mb-4">
            <ul className=" text-sm gap-3 flex flex-col">
              <NavLink to="/">
                <p className="uppercase">Home</p>
              </NavLink>
              <NavLink to="/servies">
                <p className="uppercase">Services</p>
              </NavLink>
              <NavLink to="/process">
                <p className="uppercase">Our Process</p>
              </NavLink>
              <NavLink to="/blogs">
                <p className="uppercase">Blogs</p>
              </NavLink>
              <NavLink to="/contact">
                <p className="uppercase">Contact Us</p>
              </NavLink>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="uppercase font-semibold mb-7">Head Office</h3>
         
          <div className="text-sm">
            <p className="mb-2">
              <span className="font-semibold uppercase">Address: </span>
              1311, MARATHON MILLENIUM,
              <br />
             LBS ROAD, BESIDE NIRMAL LIFESTYLE MALL, MULUND WEST.
            </p>
            <p className="mb-2">
              <span className="font-semibold  uppercase">Phone:</span>{" "}
             +91 99873 57338 
            </p>
            <p>
              <span className="font-semibold  uppercase">E-mail:</span>{" "}
             contact@saurabhjagerealty.com
            </p>
          </div>
        </div>

      

      
        
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-sm text-center flex flex-col gap-6">
        <p className="text-gray-400">&copy; 2025. All rights reserved. </p>
        <div className="flex justify-center mt-4 md:mt-0 gap-4 text-gray-400 text-lg">
          <FaFacebook />
          <FaInstagram />
         <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
