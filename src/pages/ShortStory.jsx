import React, { useState, useEffect } from "react";
import { IoArrowBackCircle } from "react-icons/io5";

// Fallback Stories (when API fails)
const fallbackStories = [
  {
    text: "एक समय की बात है, एक छोटे से गाँव में एक बुद्धिमान वृद्ध रहता था...",
    author: "पंचतंत्र",
  },
  {
    text: "एक किसान के पास एक बहुत ही मेहनती बैल था, जिसे वह बहुत प्यार करता था...",
    author: "लोककथा",
  },
  {
    text: "बहुत समय पहले, एक जंगल में एक चालाक लोमड़ी और भोला खरगोश रहते थे...",
    author: "अज्ञात लेखक",
  },
];

const ShortStory = ({ setPage }) => {
  const [story, setStory] = useState({ text: "Loading...", author: "" });

  const fetchStory = async () => {
    try {
      const response = await fetch("https://shortstories-api.onrender.com/");
      if (!response.ok) throw new Error("API not responding");

      const data = await response.json();
      setStory({ text: data.story, author: data.author || "Anonymous" });
    } catch (error) {
      console.error("Error fetching story:", error);

      // Use a random fallback story if the API is down
      const randomFallback = fallbackStories[Math.floor(Math.random() * fallbackStories.length)];
      setStory(randomFallback);
    }
  };

  useEffect(() => {
    fetchStory();
  }, []);

  return (
    <>
      <button
        className="fixed z-10 top-20 left-4 md:top-9 md:left-9 text-4xl text-[#ff4e6b]/90 hover:scale-105 transition-all"
        onClick={() => setPage("neutral")}
      >
        <IoArrowBackCircle />
      </button>

      <div className=" absolute top-24 md:top-20 flex flex-col items-center justify-center min-h-screen max-w-4xl p-6">
        <h2 className="text-2xl font-bold text-[#ff4e6b] mb-4">Short Story</h2>

        <p className="text-gray-700 whitespace-pre-line text-lg italic text-center">
          {story.text}
        </p>
        <p className="mt-2 font-semibold text-[#ff4e6b]">
          {story.author && `— ${story.author}`}
        </p>

        <div className="flex gap-4 mt-6 max-w-2xl pb-26">
          <button
            onClick={fetchStory}
            className="px-6 py-2 bg-[#ff4e6b] text-white rounded-lg shadow-md hover:scale-105 transition-all"
          >
            🔄 New Story
          </button>
          <button
            onClick={() => setPage("neutral")}
            className="px-6 py-2 bg-gray-400 text-white rounded-lg shadow-md hover:scale-105 transition-all"
          >
            ⬅️ Close
          </button>
        </div>
      </div>
    </>
  );
};

export default ShortStory;
