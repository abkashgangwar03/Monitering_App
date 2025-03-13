import React from "react";

const HandwrittenNote = () => {
  return (
    <div className="relative flex flex-col items-center justify-center p-6">
      <div className="bg-white/50 p-5 rounded-xl shadow-lg border border-gray-300 max-w-xs transform rotate-[-3deg]">
        <p
          className="text-2xl text-[#ff4e6b] animate-fadeIn"
          style={{
            fontFamily: "'Caveat', cursive",
            fontWeight: 600,
            letterSpacing: "1px",
          }}
        >
          You're Loved, Navya! 💖
        </p>
      </div>
    </div>
  );
};

export default HandwrittenNote;
