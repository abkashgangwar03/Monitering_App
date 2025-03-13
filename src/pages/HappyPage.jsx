import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import HandwrittenNote from "./Handwritten";
import MyMsgHappy from "./MyMsgHappy";
import SurpriseMe from "./SurpriseMe";
import PoetryStoryButtons from "./PoetryStoryButtons";
import Chatbot from "./ChatBot";
import TriviaRiddles from "./TriviaRiddles";

const HappyPage = ({ setPage }) => {
  return (
    <>
      <button
        className="fixed z-10 top-20 left-4 md:top-9 md:left-9 text-4xl text-[#ff4e6b]"
        onClick={() => setPage("main")}
      >
        <IoArrowBackCircle />
      </button>
      <div className="absolute top-20 flex flex-col items-center text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e6b] via-[#ff7a91] to-[#ffb3c1] drop-shadow-lg bg-inherit min-h-screen w-full px-4 md:px-10 lg:px-20 space-y-8 md:space-y-12 lg:space-y-14">
        <div className="w-full max-w-[900px] flex flex-col items-center space-y-8 mb-16">
          <HandwrittenNote />
          <MyMsgHappy />
          <SurpriseMe />
          <div className=" h-hull w-fit p-3 bg-[#ff4e6b] rounded-xl text-white flex justify-center items-center mb-3">
            <a href="public/Wings of Fire.pdf" download>
              {" "}
              Download the Biggest Changer
            </a>
          </div>
          <PoetryStoryButtons setPage={setPage} />
          <TriviaRiddles />
          <Chatbot />
        </div>
      </div>
    </>
  );
};

export default HappyPage;
