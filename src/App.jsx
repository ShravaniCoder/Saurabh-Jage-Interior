import { Route, Routes } from "react-router-dom";
import EnquiryPopup from "./components/Enquiry"

import Navbar from "./components/navbar"
import Hero from "./pages/Hero"
import Process from "./pages/Process";


import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import Services from "./pages/Services";





function App() {
 

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <EnquiryPopup />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/process" element={<Process />} />{" "}
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blog />} />
           
          </Routes>
        </div>
        <Footer />
      </div>
     
    </>
  );
}

export default App
