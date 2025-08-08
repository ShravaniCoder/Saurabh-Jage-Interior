import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EnquiryPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFillingForm, setIsFillingForm] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // NEW STATE
  const intervalRef = useRef(null);
  const formRef = useRef();

  useEffect(() => {
    if (!isFormSubmitted) {
      startInterval();
    }

    return () => clearInterval(intervalRef.current);
  }, [isFormSubmitted]);

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isFillingForm) {
        setIsVisible(true);
      }
    }, 20000); // UPDATED TO 20 SECONDS
  };

  const handleClose = () => {
    setIsVisible(false);
    setIsFillingForm(false);
  };

  const handleFocus = () => {
    setIsFillingForm(true);
    clearInterval(intervalRef.current);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFillingForm(false);
      if (!isFormSubmitted) startInterval();
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://sheetdb.io/api/v1/o7h2wp7mebhek", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const name = formData.get("data[Name]");
        alert("Submitted !! Thank You " + name);
        form.reset();
        setIsFormSubmitted(true); // 🔒 prevent showing again
        handleClose();
        clearInterval(intervalRef.current); // stop interval forever
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <AnimatePresence>
      {isVisible && !isFormSubmitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white/10 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-[90%] max-w-md bg-white rounded-2xl shadow-2xl p-8 relative"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Start Your Project
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                name="data[Name]"
                type="text"
                placeholder="Name"
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                required
              />
              <input
                name="data[Email]"
                type="email"
                placeholder="Email"
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                required
              />
              <input
                name="data[Phone]"
                type="tel"
                placeholder="Phone Number"
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                required
              />
              <input
                name="data[Location]"
                type="text"
                placeholder="Location"
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                required
              />
              <textarea
                name="data[Enquiry]"
                placeholder="Enquiry"
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="border border-gray-300 rounded-lg px-4 py-2 min-h-[100px] focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                required
              />
              <button
                type="submit"
                className="bg-[#081f22] text-white py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryPopup;
