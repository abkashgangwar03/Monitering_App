import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Hero = ({ setSuccess }) => {
  const exploreMore = () => {
    setSuccess(true);
  };

  const textRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const textElement = textRef.current;
      if (!textElement) return;
      
      const rect = textElement.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;

      controls.start({
        x: x * 15,
        y: y * 15,
        rotateX: -y * 15,
        rotateY: x * 15,
        transition: { type: "spring", stiffness: 200, damping: 15 },
      });
    };

    if (textRef.current) {
      textRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      textRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [controls]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#e3e3f3] text-[#1a1a2e] text-center p-4 md:p-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff5e78_0%,#e3e3f3_85%)] opacity-75"></div>

      <motion.div 
        className="relative md:max-w-4xl bg-white/50 backdrop-blur-xl rounded-3xl shadow-2xl px-5 py-8 md:p-16 border border-white/20 flex flex-col items-center space-y-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1 
          ref={textRef}
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e6b] via-[#ff7a91] to-[#ffb3c1] drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          Hey Navya, This is for You!
        </motion.h1>

        <motion.p 
          className="text-xl text-[#2a2a3d] max-w-2xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          A world of love, memories, and endless surprises. Dive into this magical journey made just for you.
        </motion.p>

        <motion.button 
          onClick={exploreMore} 
          className="relative bg-gradient-to-r from-[#ff4e6b] to-[#ff7a91] text-white px-5 md:px-8 py-3 md:py-4 rounded-full font-bold text-md md:text-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Explore the Magic
        </motion.button>
        <p className=" text-neutral-500">*Reloading the site once will bring you to this page</p>
      </motion.div>
    </div>
  );
};

export default Hero;
