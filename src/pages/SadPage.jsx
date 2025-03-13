import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";

import JokeBox from "./JokeBox";
import BreathingAnimation from "./BreathingAnimation";
import WriteAndBurn from "./WriteAndBurn";
import HugButton from "./HugButton";
import PersonalizedMessage from "./PersonalizedMessage";
import AreYouFineButton from "./AreYouFineButton";
import CheerUpGame from "./CheerUpGame";

import Mymsg from "./Mymsg1";
import HandwrittenNote from "./Handwritten";

const SadPage = ({ setPage, mood }) => {
  return (
    <>
      <button
        className="fixed z-10 top-20 left-4 md:top-9 md:left-9 text-4xl text-[#ff4e6b]"
        onClick={() => setPage("main")}
      >
        <IoArrowBackCircle />
      </button>
      <div className="absolute top-20 flex flex-col items-center text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e6b] via-[#ff7a91] to-[#ffb3c1] drop-shadow-lg bg-inherit min-h-screen w-full px-4 md:px-10 lg:px-20 space-y-8 md:space-y-12 lg:space-y-14">
        <div className="w-full max-w-[900px] flex flex-col items-center space-y-8">
          <HandwrittenNote/>
          <BreathingAnimation />
          <HugButton />
          <PersonalizedMessage mood={mood} />

          <Mymsg/>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <JokeBox />
            <WriteAndBurn />
          </div>
        </div>
        <div className=" mb-16 ">
          <CheerUpGame />
          <AreYouFineButton setPage={setPage} />
        </div>

       
      </div>
    </>
  );
};

export default SadPage;
