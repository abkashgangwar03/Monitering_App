import React, { useState } from "react";


const PoetryStoryButtons = ({ setPage }) => {
  return (
    <div className="flex flex-col items-center justify-center h-48 rounded-2xl p-6 bg-white/50 gap-3">
      {/* If no type is selected, show buttons */}(
      <>
        <h2 className="text-2xl font-bold text-[#ff4e6b] mb-6">
           Poetry & Stories
        </h2>
        <div className="flex gap-4">
          <button
            onClick={() => setPage("poetry")}
            className="px-2 py-2 md:px-3 md:py-2 bg-[#ff4e6b] text-white rounded-lg shadow-md hover:scale-105 transition-all"
          >
            Read Poetry
          </button>
          <button
            onClick={() => setPage("story")}
            className="px-2 py-2 md:px-3 md:py-2 bg-[#ffa07a] text-white rounded-lg shadow-md hover:scale-105 transition-all"
          >
             Read Story
          </button>
        </div>
      </>
    </div>
  );
};

export default PoetryStoryButtons;
