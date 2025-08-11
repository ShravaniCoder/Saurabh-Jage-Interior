import React from 'react'
import BgImage from "../../public/bgImg.jpg"; 

const ContactDigi = () => {
    return (
      <section className="my-20">
        <div
          className="relative bg-cover bg-center bg-no-repeat  py-6 px-6 flex justify-center items-start"
          style={{
            backgroundImage: `url(${BgImage})`,
            height: "90vh", // optional, for full height look
          }}
        >
          <div className='pt-10'>
            <p className="text-white text-4xl md:text-5xl text-center font-bold">
              Contact Us
            </p>
          </div>
        </div>
      </section>
    );
}

export default ContactDigi;