import { Route, Routes } from "react-router-dom";
import EnquiryPopup from "./components/Enquiry"

import Navbar from "./components/navbar"
import Hero from "./pages/Hero"
import Process from "./pages/Process";


import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import ScrollToTop from "./components/ScrollToTop";
import DigitalServices from "./pages/DigitalServices";
import ContactDigi from "./components/ContactDigi";





function App() {
 

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <EnquiryPopup />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/process" element={<Process />} />{" "}
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/digiservices" element={<DigitalServices />} />
            <Route path="/digicontact" element={<ContactDigi />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App
