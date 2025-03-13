import React, { useState } from "react";
import emailjs from "emailjs-com";

const AreYouFine = ({ setPage }) => {
  const [showThanks, setShowThanks] = useState(false);

  const handleNoResponse = () => {
    emailjs
      .send(
        "service_g642hg2", // Replace with your EmailJS service ID
        "template_us22wvb", // Replace with your EmailJS template ID
        { message: "Hey! Navya is still feeling sad. Please check in on her! 💖" },
        "qDmJ5kwSLP5DbnTZK" // Replace with your EmailJS user ID
      )
      .then(() => {
        alert("I got the message! I'm here for you. ❤️");
      })
      .catch((error) => console.error("Error sending email:", error));
  };

  const handleYesResponse = () => {
    setShowThanks(true);
    setTimeout(() => setPage("main"), 1500); // ⏳ Waits 1.5s before going to main page
  };

  return (
    <div className="mt-6 md:mt-8 flex flex-col items-center justify-center bg-white/60 p-6 rounded-xl shadow-lg text-center max-w-md mx-auto">
      {showThanks ? (
        <h2 className="text-xl font-bold text-[#ff4e6b]">Yay! I'm so happy you're feeling better! 💖😊</h2>
      ) : (
        <>
          <h2 className="text-xl font-bold text-[#ff4e6b]">Are You Feeling Better Now? 🥰</h2>
          <p className="text-gray-600 text-sm mt-2">Your happiness means the world! 💖</p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              className="px-3 py-2 md:px-6 md:py-3 bg-gradient-to-r bg-[#ff4e6b] text-white rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all"
              onClick={handleYesResponse} // ✅ Shows thank-you msg before going to main page
            >
              😊 Yes, I'm Happy!
            </button>

            <button
              className="px-3 py-2 md:px-6 md:py-3 bg-gradient-to-r bg-[#ffa07a] text-white rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all"
              onClick={handleNoResponse} // ✅ Sends an email + alert
            >
              😞 No, Not Yet
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AreYouFine;
