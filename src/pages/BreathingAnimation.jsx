import React, { useState, useEffect } from "react";

const BreathingAnimation = () => {
  const [phase, setPhase] = useState("Inhale"); // Inhale → Hold → Exhale
  const [size, setSize] = useState(10); // Size for animation

  useEffect(() => {
    const cycle = [
      { phase: "Inhale", size: 20, duration: 4000 }, // Expand for 4 sec
      { phase: "Hold", size: 20, duration: 2000 },   // Hold for 2 sec
      { phase: "Exhale", size: 10, duration: 4000 }, // Shrink for 4 sec
    ];

    let i = 0;
    const interval = setInterval(() => {
      setPhase(cycle[i].phase);
      setSize(cycle[i].size);
      i = (i + 1) % cycle.length;
    }, cycle[i].duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-60 w-60">
      <div
        className="transition-all duration-[4s] ease-in-out bg-[#ff4e6b] shadow-xl rounded-full"
        style={{
          width: `${size}vh`,
          height: `${size}vh`,
          opacity: phase === "Hold" ? 0.8 : 1,
        }}
      ></div>
      <p className="mt-3 text-lg font-semibold text-white">{phase}...</p>
    </div>
  );
};

export default BreathingAnimation;
