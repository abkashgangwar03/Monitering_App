import React, { useState } from "react";
import Mood from "./Mood";
import Msg from "./Msg";
import HappyPage from "./HappyPage";
import NeutralPage from "./NeutralPage";
import SadPage from "./SadPage";
import HappySong from "./HappySong";
import Poetry from "./Poetry";
import ShortStory from "./ShortStory";

const Main = () => {
  const [mood, setMood] = useState(50);
  const [page, setPage] = useState("main"); // Track which page to render

  return (
    <div className=" bg-[#e3e3f3] text-[#1a1a2e] font-serif">
      <div className=" min-h-full overflow-auto  absolute inset-0 bg-[radial-gradient(circle_at_center,#ff5e78_0%,#e3e3f3_85%)] opacity-75">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className=" fixed top-0 w-full md:left-1/5 z-10 ">
            <Msg />
          </div>

          {page === "main" && (
            <>
              <Mood mood={mood} setMood={setMood} setPage={setPage} />
            </>
          )}
          {page === "happy" && <HappyPage setPage={setPage} mood={mood} />}
          {page === "neutral" && <NeutralPage setPage={setPage} mood={mood} />}
          {page === "sad" && <SadPage setPage={setPage} mood={mood} />}
          {page === "poetry" && (
            <Poetry setPage={setPage} />
          )}
          {page === "story" && (
            <ShortStory setPage={setPage} />
          )}
        </div>
        <span className="fixed bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2">
          <HappySong />
        </span>
      </div>
    </div>
  );
};

export default Main;
