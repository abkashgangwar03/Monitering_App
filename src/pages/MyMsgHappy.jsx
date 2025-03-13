import React from "react";

const MyMsgHappy = () => {
  return (
    <div>
      <div className=" flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full justify-center">
        <div className="text-neutral-700 w-full md:w-[60%] bg-white/50 p-6 md:p-8 rounded-2xl text-lg md:text-xl font-bold shadow-md">
          <p className="text-center leading-relaxed">
            Toh aap itni khush kyu hain koi aise Special Reason hai kya?
            Mtlb aap mujhe bta sakti hain yaa bs aise hi masti maarne 
            aayi hain yanha pe chalo dekh lo kyuki aap jyda khush hai to kuch accha karo
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyMsgHappy;
