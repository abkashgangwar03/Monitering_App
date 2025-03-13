import React, { useState, useEffect } from "react";
import { IoArrowBackCircle } from "react-icons/io5";

const Poetry = ({ setPage }) => {
  const [poetry, setPoetry] = useState({ text: "Loading...", author: "" });
  const [isLoading, setIsLoading] = useState(false); // Prevents unnecessary UI flickers

  const fetchPoetry = async () => {
    setIsLoading(true); 

    try {

      const response = await fetch("https://poetrydb.org/random");
      const data = await response.json();
      const poem = data[0];

      
      const translatedText = poem.lines.join("\n");

      setPoetry({ text: translatedText, author: poem.author });
    } catch (error) {
      console.error("Error fetching poetry:", error);
      setPoetry({ text: "Poetry not available.", author: "Unknown" });
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchPoetry();
  }, []);

  return (
    <>
      {/* Back Button */}
      <button
        className="fixed z-10 top-20 left-4 md:top-9 md:left-9 text-4xl text-[#ff4e6b]/90 hover:scale-105 transition-all mb-16"
        onClick={() => setPage("neutral")}
      >
        <IoArrowBackCircle />
      </button>

      {/* Poetry Display */}
      <div className="absolute top-24 flex flex-col items-center justify-center min-h-screen p-6">
        <h2 className="text-2xl font-bold text-[#ff4e6b] mb-4"> Poetry</h2>

        {/* Show loading animation while fetching new poetry */}
        <p className="text-gray-700 whitespace-pre-line text-lg italic text-center">
          {isLoading ? "⏳ Fetching a beautiful poem..." : poetry.text}
        </p>
        <p className="mt-2 font-semibold text-[#ff4e6b]">
          {poetry.author && `— ${poetry.author}`}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6 pb-20">
          <button
            onClick={(e) => {
              e.preventDefault(); // Prevent any unexpected reloads
              fetchPoetry();
            }}
            disabled={isLoading}
            className={`px-6 py-2 rounded-lg shadow-md transition-all ${
              isLoading ? "bg-gray-300 cursor-not-allowed" : "bg-[#ff4e6b] text-white hover:scale-105"
            }`}
          >
            {isLoading ? " Loading..." : " New Poem"}
          </button>

          <button
            onClick={(e) => {
              e.preventDefault(); // Block default behavior
              setPage("neutral");
            }}
            className="px-6 py-2 bg-gray-400 text-white rounded-lg shadow-md hover:scale-105 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Poetry;
