import React, { useState, useRef } from "react";
import { FaPlay, FaPause, FaMusic } from "react-icons/fa";

const HappySong = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("https://res.cloudinary.com/doqvfsc67/video/upload/v1741717341/Aasman_Ko_Chukar_lqfqiz.mp3"));

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <button
        onClick={togglePlay}
        className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#ff4e6b] to-[#ff7a91] text-white font-semibold rounded-lg shadow-md hover:bg-[#ff7a91] transition-all"
      >
        <FaMusic />
        {isPlaying ? <><FaPause /> Pause Music</> : <><FaPlay /> Play Music</>}
      </button>
    </div>
  );
};

export default HappySong;
