import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const CustomPatternLock = ({ size = 3, onPatternFinish, disabled }) => {
  const [pattern, setPattern] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [pointerPosition, setPointerPosition] = useState(null);
  const svgRef = useRef(null);

  const circleSize = 16; // Dot size
  const circleSpacing = 80; // Space between dots
  const containerSize = 240; // Size of the container
  const grid = Array.from({ length: size * size }, (_, index) => index);

  // Calculate the position of each dot (centered within the container)
  const getCirclePosition = (index) => {
    const row = Math.floor(index / size);
    const col = index % size;
    const offsetX = (containerSize - (size - 1) * circleSpacing) / 2; // Center the grid horizontally
    const offsetY = (containerSize - (size - 1) * circleSpacing) / 2; // Center the grid vertically
    return {
      x: col * circleSpacing + offsetX,
      y: row * circleSpacing + offsetY,
    };
  };

  // Handle start of drawing
  const handleStart = (x, y) => {
    if (disabled) return;
    setIsDrawing(true);
    setPattern([]);
    setPointerPosition({ x, y });
  };

  // Handle movement during drawing
  const handleMove = (x, y) => {
    if (!isDrawing || disabled) return;
    setPointerPosition({ x, y });

    // Check if the pointer is near a dot
    const index = getClosestCircleIndex(x, y);
    if (index !== null && !pattern.includes(index)) {
      setPattern((prev) => [...prev, index]);
    }
  };

  // Handle end of drawing
  const handleEnd = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    setPointerPosition(null);
    onPatternFinish(pattern);
    setTimeout(() => setPattern([]), 500); // Delay reset for visibility
  };

  // Find the closest dot to the pointer
  const getClosestCircleIndex = (x, y) => {
    let closestIndex = null;
    let minDistance = circleSize;

    for (let i = 0; i < size * size; i++) {
      const { x: cx, y: cy } = getCirclePosition(i);
      const distance = Math.hypot(cx - x, cy - y);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }
    return closestIndex;
  };

  // Handle pointer movement (mouse/touch)
  const handlePointerMove = (e) => {
    if (!isDrawing) return;
    const { clientX, clientY } = e.touches ? e.touches[0] : e;
    const svgRect = svgRef.current.getBoundingClientRect();
    const x = clientX - svgRect.left;
    const y = clientY - svgRect.top;
    handleMove(x, y);
  };

  return (
    <motion.div
      className="relative w-[240px] h-[240px] bg-[#fad6de]/20 rounded-2xl flex justify-center items-center border border-[#ff4e6b] shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        ref={svgRef}
        width="240"
        height="240"
        viewBox="0 0 240 240" // Fixed viewBox to match container size
        className="absolute"
        onMouseDown={(e) => {
          const svgRect = svgRef.current.getBoundingClientRect();
          const x = e.clientX - svgRect.left;
          const y = e.clientY - svgRect.top;
          handleStart(x, y);
        }}
        onMouseMove={handlePointerMove}
        onMouseUp={handleEnd}
        onTouchStart={(e) => {
          const svgRect = svgRef.current.getBoundingClientRect();
          const x = e.touches[0].clientX - svgRect.left;
          const y = e.touches[0].clientY - svgRect.top;
          handleStart(x, y);
        }}
        onTouchMove={handlePointerMove}
        onTouchEnd={handleEnd}
        style={{ touchAction: "none", userSelect: "none" }}
      >
        {/* Render the dots */}
        {grid.map((_, index) => {
          const { x, y } = getCirclePosition(index);
          return (
            <circle
              key={index}
              cx={x}
              cy={y}
              r={pattern.includes(index) ? circleSize / 1.5 : circleSize / 2}
              fill={pattern.includes(index) ? "#ff3b6f" : "#ffffff"}
              stroke="#ff3b6f"
              strokeWidth="2"
            />
          );
        })}

        {/* Draw connecting path */}
        {pattern.length > 1 && (
          <polyline
            points={pattern.map((index) => {
              const { x, y } = getCirclePosition(index);
              return `${x},${y}`;
            }).join(" ")}
            stroke="#ff3b6f"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}

        {/* Draw active line to the pointer */}
        {isDrawing && pointerPosition && pattern.length > 0 && (
          <line
            x1={getCirclePosition(pattern[pattern.length - 1]).x}
            y1={getCirclePosition(pattern[pattern.length - 1]).y}
            x2={pointerPosition.x}
            y2={pointerPosition.y}
            stroke="#ff3b6f"
            strokeWidth="4"
            strokeLinecap="round"
          />
        )}
      </svg>
    </motion.div>
  );
};

export default CustomPatternLock;