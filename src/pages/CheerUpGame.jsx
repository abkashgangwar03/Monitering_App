import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// 🎈 Cheer-Up Game
const CheerUpGame = ({ onClose }) => {
  const [balloons, setBalloons] = useState([]);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);
  const [target, setTarget] = useState(25);
  const [speedMultiplier, setSpeedMultiplier] = useState(1); // Speed increases over time
  const [spawnInterval, setSpawnInterval] = useState(500); // Balloon spawn interval
  const poppedBalloons = useRef(new Set());

  useEffect(() => {
    const interval = setInterval(spawnBalloon, spawnInterval);
    return () => clearInterval(interval);
  }, [spawnInterval]);

  // 🎈 Increase Speed Over Time
  useEffect(() => {
    const speedIncrease = setInterval(() => {
      setSpeedMultiplier((prev) => Math.min(prev + 0.2, 5)); // Max 5x speed
      setSpawnInterval((prev) => Math.max(prev - 30, 150)); // Faster spawns
    }, 5000); // Speed up every 5 seconds
    return () => clearInterval(speedIncrease);
  }, []);

  // 🎈 Spawn Balloons Randomly
  const spawnBalloon = () => {
    if (balloons.length >= 7) return; // Limit max balloons

    const newBalloon = {
      id: Date.now(),
      left: `${Math.random() * 85}%`,
      delay: Math.random() * 1.2,
      duration: Math.max(3 - speedMultiplier * 0.4, 1), // Balloons rise faster
    };

    setBalloons((prev) => [...prev, newBalloon]);

    setTimeout(() => {
      if (!poppedBalloons.current.has(newBalloon.id)) {
        setBalloons((prev) => prev.filter((b) => b.id !== newBalloon.id));
        setMissed((prev) => prev + 1);
      }
    }, newBalloon.duration * 1000);
  };

  // 🎈 Pop Balloon
  const popBalloon = (id) => {
    poppedBalloons.current.add(id);
    setBalloons((prev) => prev.filter((b) => b.id !== id));
    setScore((prev) => prev + 1);

    if (score + 1 >= target) {
      setTarget((prev) => prev + 25);
    }
  };

  // Reset Game State on Close
  const handleClose = () => {
    setScore(0);
    setMissed(0);
    setTarget(25);
    setSpeedMultiplier(1);
    setSpawnInterval(500);
    setBalloons([]);
    poppedBalloons.current.clear();
    onClose();
  };

  return (
    <div className="w-full max-w-[95vw] md:max-w-[600px] bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
      <h2 className="text-xl font-bold text-[#ff4e6b]">🎈 Pop the Balloons!</h2>
      <p className="text-gray-700">Score: {score} | Target: {target} | Missed: {missed}</p>
      <p className="text-sm text-gray-600">Speed: {speedMultiplier.toFixed(1)}x</p>

      {/* Game Area */}
      <div className="relative w-full h-[400px] bg-blue-200 overflow-hidden rounded-lg mt-4">
        {balloons.map((balloon) => (
          <motion.div
            key={balloon.id}
            className="absolute w-12 h-16 bg-red-400 rounded-full shadow-lg cursor-pointer"
            style={{ left: balloon.left }}
            initial={{ top: "100%" }}
            animate={{ top: "-10%" }}
            transition={{ duration: balloon.duration, ease: "linear", delay: balloon.delay }}
            onClick={() => popBalloon(balloon.id)}
          />
        ))}
      </div>

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="mt-4 px-5 py-2 bg-[#ff4e6b] text-white font-semibold rounded-lg shadow-md hover:bg-[#ff7a91]"
      >
        Close Game
      </button>
    </div>
  );
};

// 🎮 Game Preview Box
const CheerUpGamePreview = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const gameRef = useRef(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setTimeout(() => {
      gameRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 50);
  };

  return (
    <div className="flex justify-center">
      <div ref={gameRef} className="w-full max-w-[95vw] md:max-w-[600px]">
        {!isPlaying ? (
          <div
            className="h-36 w-full bg-white/60 p-6 rounded-2xl md:text-lg font-bold text-neutral-700 shadow-md cursor-pointer hover:bg-white/70 transition-all flex flex-col items-center justify-center"
            onClick={handlePlayClick}
          >
            <h3 className="text-2xl font-semibold text-[#ff4e6b]">🎮 Cheer-Up Game</h3>
            <p className="text-gray-600">Click to Play!</p>
          </div>
        ) : (
          <CheerUpGame onClose={() => setIsPlaying(false)} />
        )}
      </div>
    </div>
  );
};

export default CheerUpGamePreview;
