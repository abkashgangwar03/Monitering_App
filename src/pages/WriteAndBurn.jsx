import React, { useState } from "react";

const WriteAndBurn = () => {
  const [message, setMessage] = useState("");
  const [burned, setBurned] = useState(false);

  const handleBurn = () => {
    if (message.trim() === "") return; // Don't burn an empty message
    setBurned(true);
    setTimeout(() => {
      setMessage(""); // Clear message after animation
      setBurned(false);
    }, 2000); // Matches animation time
  };

  return (
    <div className="flex flex-col items-center justify-center h-62 w-[90vw] md:w-[60vw] lg:w-[40vw] bg-white/50 p-4 md:p-6 rounded-xl shadow-xl">
      <h3 className="text-xl font-bold text-[#ff4e6b]">Write & Burn </h3>
      <textarea
        className={`w-full h-24 p-3 mt-4 border rounded-lg text-gray-700 focus:outline-none resize-none transition-all ${
          burned ? "opacity-0" : "opacity-100"
        }`}
        placeholder="Write down what's bothering you..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        disabled={burned} // Disable input when burning
      ></textarea>

      {!burned ? (
        <button
          onClick={handleBurn}
          className="mt-4 px-5 py-2 bg-[#ff4e6b] text-white font-bold rounded-lg shadow-md transition-all hover:scale-105 hover:bg-[#ff7a91]"
        >
          Burn It 
        </button>
      ) : (
        <p className="text-lg font-semibold text-[#ff4e6b] mt-4 fade-out">
          It's gone. You're free now! ✨
        </p>
      )}
    </div>
  );
};

export default WriteAndBurn;
