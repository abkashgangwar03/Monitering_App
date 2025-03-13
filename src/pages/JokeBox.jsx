import React, { useState, useEffect } from "react";
import { FaRedo } from "react-icons/fa";

const JokeBox = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true); // Track loading state

  // Function to fetch a new joke
  const fetchJoke = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
      const data = await response.json();
      setJoke(data.joke); // Set the joke
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Failed to load joke. Try again!");
    }
    setLoading(false); // Stop loading
  };

  // Fetch a joke when the component mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-white/50 p-6 rounded-xl shadow-md w-80 min-h-62">
      <h3 className="text-lg font-bold text-gray-800"> Random Joke</h3>

      <p className="text-center text-gray-700 mt-4 min-h-[50px]">
        {loading ? "Loading joke..." : joke}
      </p>

      {/* Refresh button */}
      <button
        onClick={fetchJoke}
        disabled={loading} // Disable button while loading
        className={`mt-4 flex items-center gap-2 px-4 py-2 font-semibold rounded-lg shadow-md transition ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#ff4e6b] text-white hover:bg-[#ff7a91]"
        }`}
      >
        
        <FaRedo className={loading ? "animate-spin" : ""} /> Refresh Joke
      </button>
    </div>
  );
};

export default JokeBox;
