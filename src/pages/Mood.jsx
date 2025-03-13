import React, { useState } from "react";
import emailjs from "emailjs-com";

const Mood = ({ mood, setMood, setPage }) => {
  const [showButton, setShowButton] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    setMood(Number(e.target.value));
    setShowButton(false);
    setEmailSent(false);
  };

  const handleMouseUp = () => {
    setShowButton(true);
  };

  const handleInteractionEnd = () => {
    setShowButton(true);
  };

  const sendMoodEmail = () => {
    if (emailSent) return;

    const currentMood = mood;
    setEmailSent(true);

   
    if (currentMood < 50) {
      setPage("sad");
    } else if (currentMood <= 80) {
      setPage("neutral");
    } else {
      setPage("happy");
    }

    setTimeout(() => {
      emailjs
        .send(
          "service_qv7tddc",
          "template_p76dwgl",
          { mood_level: `${currentMood}` },
          "qDmJ5kwSLP5DbnTZK"
        )
        .then((response) => {
          console.log("✅ Mood email sent successfully!", response);
        })
        .catch((error) => {
          console.error("❌ Error sending mood email:", error);
        });
    }, 0);
  };

  return (
    <div className="flex justify-center items-center h-screen">
    <div className="flex flex-col items-center justify-center min-h-60 md:min-h-70 w-[90vw] lg:w-[50vw] bg-white/50 bg-gradient-to-r p-9 md:p-10 rounded-3xl shadow-xl">
      <h1 className="text-2xl md:text-3xl font-extrabold text-[#ff4e6b] mb-6 drop-shadow-lg">
        How's your Mood? <span className="text-white">😊</span>
      </h1>

      <div className="relative w-full flex flex-col items-center">
        <div className="relative w-full h-[6px] bg-white rounded-full"></div>
        <div
          className="absolute top-1/2 left-0 h-[6px] rounded-full -translate-y-1/2"
          style={{
            width: `${mood}%`,
            background: "linear-gradient(to right, #ff4e6b, #ff7a91)",
          }}
        ></div>

        <input
          type="range"
          min="0"
          max="100"
          value={mood}
          onChange={handleChange}
          onMouseUp={handleMouseUp}
          onTouchEnd={handleInteractionEnd}
          className="relative w-full appearance-none cursor-pointer z-10"
          style={{
            WebkitAppearance: "none",
            background: "transparent",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
      </div>

      <p className="text-md text-neutral-700 mt-6 font-semibold text-center">
        Mood Level: {mood}%
      </p>

      {showButton && (
        <button
          type="button"
          onClick={sendMoodEmail}
          className=" mt-7 relative bg-gradient-to-r from-[#ff4e6b] to-[#ff7a91] text-white px-6 md:px-8 py-3 md:py-3 rounded-full font-bold text-md md:text-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-110"
        >
          Yes
        </button>
      )}
    </div>
    </div>
  );
};

export default Mood;
