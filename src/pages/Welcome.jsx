import React from "react";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
  <>
    <motion.div
      key="success-page"
      className="relative max-w-5xl bg-white/60 backdrop-blur-xl rounded-3xl shadow-lg p-8 md:p-16 border border-white/30 flex flex-col items-center space-y-8 md:space-y-12"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e6b] via-[#ff7a91] to-[#ffb3c1] drop-shadow-lg p-5"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        Yay! Welcome, Navya! 💖
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-[#2a2a3d] max-w-3xl mx-auto font-light leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        You have unlocked a special surprise. Let's continue the journey together! 🌸✨<br />
        Wait for 3 seconds...
      </motion.p>
    </motion.div>
    </>
  );
};

export default Welcome;