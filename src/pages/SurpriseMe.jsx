import React, { useState } from "react";

const SurpriseMe = () => {
  const [surprise, setSurprise] = useState(null);
  const [loading, setLoading] = useState(false);

  // Surprises categorized by type
  const surprises = {
    jokes: [
      "Why don’t skeletons fight each other? They don’t have the guts!",
      "Why don't scientists trust atoms? Because they make up everything!",
      "What did one ocean say to the other? Nothing, they just waved!"
    ],
    trivia: [
      "Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old!",
      "The first film ever made was by Thomas Edison in 1891! It was only 17 seconds long!",
      "In ancient Greece, throwing an apple at someone was considered a marriage proposal!"
    ],
    riddles: [
      "What has keys but can’t open locks? A piano!",
      "The more you take, the more you leave behind. What am I? Footsteps!",
      "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I? An echo!"
    ],
    challenges: [
      "Try to touch your toes for 30 seconds without bending your knees!",
      "Do 10 jumping jacks right now and share your time!",
      "Look around and find something that is blue. What's the first thing you see?"
    ],
    funFacts: [
      "Did you know? The Eiffel Tower can grow by 6 inches in the summer due to the expansion of the metal!",
      "A single strand of Spaghetti is called a ‘Spaghetto’!",
      "Bananas are berries, but strawberries aren’t!"
    ],
    randomCompliments: [
      "You're the kind of person everyone needs in their life!",
      "You're amazing, and don’t forget that!",
      "You have a heart of gold, always shining bright!"
    ]
  };

  const getRandomSurprise = () => {
    setLoading(true);
    setSurprise(null);

    // Randomly select a surprise type
    const types = Object.keys(surprises);
    const selectedType = types[Math.floor(Math.random() * types.length)];

    // Randomly select a surprise from the chosen type
    const selectedSurprise = surprises[selectedType][Math.floor(Math.random() * surprises[selectedType].length)];

    setTimeout(() => {
      setSurprise(selectedSurprise);
      setLoading(false);
    }, Math.random() * 2000 + 1000); // Simulate a random delay (1-3 seconds)
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <button
        onClick={getRandomSurprise}
        className="flex items-center gap-2 px-6 py-3 bg-[#ff4e6b] text-white font-semibold rounded-lg shadow-lg hover:bg-[#ff7a91] transition-all transform hover:scale-105"
      >
        Random!
      </button>

      {loading && (
        <div className="text-center text-gray-700 animate-pulse">
          <p>Loading...</p>
        </div>
      )}

      {surprise && !loading && (
        <div className="bg-white/70 p-4 rounded-xl shadow-md text-center max-w-xs transform transition-all animate__animated animate__fadeIn">
          <p className="text-gray-700 text-lg font-semibold">{surprise}</p>
        </div>
      )}
    </div>
  );
};

export default SurpriseMe;
