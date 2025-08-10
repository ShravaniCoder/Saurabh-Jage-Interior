import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// Your background images
import Img1 from "../assets/Home3.jpg";
import Img2 from "../assets/home2.jpg";
import Img3 from "../assets/home.jpg";
import Img4 from "../assets/home4.jpg";
import Img5 from "../assets/Home5.jpg";

const Footer = () => {
  const [popupImage, setPopupImage] = useState(null);

  const galleryImages = [Img1, Img2, Img3, Img4, Img5]
  return (
    <footer className="bg-black text-white px-6 sm:px-10 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="uppercase font-semibold mb-6 text-lg tracking-wide font-spectral-sc-regular">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm font-inter">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Our Process", path: "/process" },
              { name: "Blogs", path: "/blogs" },
              { name: "Contact Us", path: "/contact" },
            ].map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className="uppercase hover:text-gray-300 transition-colors duration-200"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Head Office */}
        <div>
          <h3 className="uppercase font-semibold mb-6 text-lg tracking-wide font-spectral-sc-regular">
            Head Office
          </h3>
          <div className="text-sm space-y-3 font-inter">
            <p>
              <span className="font-semibold uppercase">Address: </span>
              1311, Marathon Millenium,
              <br />
              LBS Road, Beside Nirmal Lifestyle Mall, Mulund West.
            </p>
            <p>
              <span className="font-semibold uppercase">Phone: </span>
              +91 99873 57338
            </p>
            <p>
              <span className="font-semibold uppercase">E-mail: </span>
              contact@saurabhjagerealty.com
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-start">
          {/* Heading */}
          <h3 className="uppercase font-semibold mb-6 text-lg tracking-wide font-spectral-sc-regular">
            Connect With Us
          </h3>

          {/* Gallery Images */}
          <div className="flex gap-3 mt-4 flex-wrap">
            {galleryImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-16 h-16 object-cover rounded cursor-pointer hover:opacity-80 transition"
                onClick={() => setPopupImage(src)}
              />
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4 my-6 text-2xl">
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 font-spectral-sc-regular mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Saurabh Jage Interiors. All rights
        reserved.
      </div>
      {/* Popup */}
      {popupImage && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={() => setPopupImage(null)}
        >
          <img
            src={popupImage}
            alt="Popup"
            className="max-w-[90%] max-h-[80%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </footer>
  );
};

export default Footer;
