import React, { useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import TriviaRiddles from "./TriviaRiddles";
import Mymsg2 from "./Mymsg2";
import PoetryStoryButtons from "../pages/PoetryStoryButtons";
import DailyCompliment from "./DailyCompliment";
import HugButton from "./HugButton";
import HandwrittenNote from "./Handwritten";
import SurpriseMe from '../pages/SurpriseMe'
import JokeBox from "./JokeBox";
import RockPaperScissors from "./RockPaperScissors";
import AreYouFine from "./AreYouFineButton";

const NeutralPage = ({ setPage }) => {
  return (
    <>
      {/* Back Button */}
      <button
        className="fixed z-10 top-20 left-4 md:top-9 md:left-9 text-4xl text-[#ff4e6b]/90  hover:scale-105 transition-all"
        onClick={() => setPage("main")}
      >
        <IoArrowBackCircle />
      </button>
      <div className="absolute top-32 md:top-24 flex flex-col items-center text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e6b] via-[#ff7a91] to-[#ffb3c1] drop-shadow-lg bg-inherit w-full px-4 md:px-10 lg:px-20 space-y-8 md:space-y-12 lg:space-y-14">
        <div className="w-full max-w-[900px] flex flex-col items-center space-y-8 mb-16">
          <HandwrittenNote/>
          <Mymsg2 />
          <HugButton/>
          <SurpriseMe/>
          <DailyCompliment/>
          <PoetryStoryButtons setPage={setPage} />
          <TriviaRiddles />
          <JokeBox/>
          <RockPaperScissors/>
          <AreYouFine setPage={setPage}/>
        </div>
      </div>
    </>
  );
};

export default NeutralPage;
