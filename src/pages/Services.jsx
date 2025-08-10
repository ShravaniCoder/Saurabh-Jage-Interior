import React from "react";
import { motion } from "framer-motion"; // <-- Import Framer Motion
import Banner from "../assets/services/banner.jpg";
import img1 from "../assets/services/1.jpg";
import img2 from "../assets/services/2.jpg";
import img3 from "../assets/services/3.jpg";
import img4 from "../assets/services/4.jpg";
import img6 from "../assets/services/6.jpg";
import img7 from "../assets/services/img7.jpg";

const Services = () => {
  const services = [
    {
      image: img1,
      name: "Luxury Residential Projects",
      points: [
        "Vastu-compliant layouts",
        "Bedroom designs",
        "Dining room designs",
        "Entryways and balconies",
        "Living room layouts",
        "Space-saving designs",
      ],
      content:
        "We offer our clients Concept to Completion design services. Our turnkey solutions cover full homes. We take the time to understand your preferences, lifestyle, and space requirements before creating an interior experience that radiates sophistication.",
    },
    {
      image: img2,
      name: "Modular Kitchen Projects",
      points: [
        "Customized Layouts: L-shaped, U-Shaped, Island or Parallel designs",
        "Premium Materials: Laminate, acrylic, & more",
        "Smart Storage: Pull-out shelves & pantry units",
        "Durable & low-maintenance designs",
        "Ergonomic layouts for ease of movement",
        "Built to last with high-quality finishes",
      ],
      content:
        "The kitchen is the center of every home, and we specialize in modular kitchen designs that combine style, durability, and functionality. We design layouts based on your cooking preferences, family size, and storage needs, keeping ergonomics and ease of movement in mind.",
    },
    {
      image: img3,
      name: "Bedroom Interior Design",
      points: [
        "Customized wardrobes: Sliding, hinged, walk-in, floor to floor",
        "Smart Layouts: Maximize comfort & functionality",
        "Mood Lighting for relaxation",
        "Multi-functional furniture",
        "Personal Touch for unique style",
        "Elegant Wall Treatments",
      ],
      content:
        `We believe that one's bedroom is more than simply a place to sleep; it also serves as a place to rejuvenate. It should be a tranquil refuge that expresses your personality, complements your lifestyle, and encourages genuine relaxation. We create bedrooms for you that integrate comfort, style, and functionality in perfect harmony.`,
    },
    {
      image: img4,
      name: "Living Room",
      points: [
        "Custom Layouts: Thoughtful space planning for your needs & lifestyle",
        "Color & Material Consultation: Palettes & textures to reflect your personality",
        "Décor & Accessories: Timeless signature décor & accessories",
        "Ambient Lighting for a warm and welcoming feel",
        "Furniture Selection for comfort & style",
        "Artwork & Accent Walls to elevate the space",
      ],
      content:
        `Your living room is the space that gives your life vitality and color. It's where life happens,
from casual evenings and entertaining friends to peaceful mornings with coffee. We create 
your living area with a touch of elegance and peace. We believe that expressive homes are
visually appealing.`,
    },
    {
      image: img6,
      name: "Commercial Interior Design",
      points: [
        "Strategic space planning for efficiency & workflow",
        "Brand-consistent design elements & finishes",
        "Durable materials for long-lasting performance",
        "Smart storage & functional furniture solutions",
        "Custom layouts for offices, retail, & hospitality",
        "Lighting & décor that inspires productivity",
      ],
      content:
        "We at Saurabh Jage Interiors understand that every square foot counts. Our commercial interior design services combine strategy, style, and functionality. From modern co-working spaces to retail outlets and corporate offices, our designs enhance productivity, reflect your brand identity, and create a memorable experience for clients and visitors.",
    },
    {
      image: img7,
      name: "Home Transformation Modules",
      points: [
        "Complete home makeover solutions",
        "Room-by-room design & upgrade plans",
        "Space optimization for functionality & flow",
        "Custom furniture & décor integration",
        "Lighting, color, and material revamp",
        "Turnkey project management from start to finish",
      ],
      content:
        "Our Home Transformation Modules are designed to breathe new life into your living spaces. Whether you're refreshing a single room or reimagining your entire home, we create cohesive designs that enhance both style and functionality. From smart space utilization to elegant décor, we ensure every element works together to reflect your personality while elevating the comfort and charm of your home.",
    },
  ];

  return (
    <>
      <div className="relative h-[55vh] w-full">
        <img
          src={Banner}
          alt=""
          className="absolute inset-0 object-cover object-center blur-xs h-full w-full"
        />
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl md:text-5xl font-spectral-sc-regular font-bold text-white mb-4">
            Our Services
          </h2>
        </div>
      </div>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 px-6 my-20 md:px-10 lg:px-20 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-carme-regular font-semibold text-[#4a3f35] mb-4">
                  {service.name}
                </h3>
                <ul className="list-disc font-montserrat list-inside text-[#4a3f35] mb-4 space-y-1">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <p className="text-[#6b5e53] font-montserrat leading-relaxed">
                  {service.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
