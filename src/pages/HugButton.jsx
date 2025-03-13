import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHandHoldingHeart } from "react-icons/fa";

const HugButton = () => {
  const [hugged, setHugged] = useState(false);

  const handleHug = () => {
    setHugged(true);
    setTimeout(() => {
      setHugged(false); // Reset hug after animation
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={handleHug}
        className="px-6 py-3 flex items-center gap-2 bg-[#ff4e6b] text-white text-lg font-bold rounded-full shadow-lg transition-all hover:scale-105"
      >
        <FaHandHoldingHeart /> Hug Me 
      </motion.button>

      {hugged && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mt-4 p-4 text-center bg-white/50 rounded-xl shadow-md"
        >
          <p className="text-lg font-semibold text-[#ff4e6b]">Sending you some BIGGEST virtual hug! 🤗💖</p>
          <p className="text-sm text-gray-600">Everything will be okay, Navya! 💕</p>
        </motion.div>
      )}
    </div>
  );
};

export default HugButton;
