import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const compliments = [
  "You're like sunshine on a rainy day. ☀️",
  "Your smile could light up an entire city. 😊",
  "I swear, even the stars are jealous of your sparkle. ✨",
  "You're the reason someone believes in love. 💖",
  "You make the world a better place just by being in it. 🌍",
  "Your laughter is like a beautiful melody. 🎶",
  "If beauty were time, you’d be an eternity. ⏳",
  "You have a heart that shines brighter than a thousand suns. 🌞",
  "You're more mesmerizing than a sunset over the ocean. 🌅",
  "You make kindness look effortless. 💕",
  
  
];

const getRandomCompliment = () => {
  return compliments[Math.floor(Math.random() * compliments.length)];
};

const DailyCompliment = () => {
  const [compliment, setCompliment] = useState(getRandomCompliment());

  useEffect(() => {
    const interval = setInterval(() => {
      setCompliment(getRandomCompliment());
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={compliment} // Ensures re-rendering
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white/50 text-[#ff4e6b] text-lg font-semibold text-center p-6 rounded-xl shadow-lg w-[90vw] md:w-[50vw] mx-auto"
    >
      {compliment}
    </motion.div>
  );
};

export default DailyCompliment;
