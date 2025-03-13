
import React, { useState } from "react";


const choices = ["Rock", "Paper", "Scissors"];

const getAIChoice = () => choices[Math.floor(Math.random() * choices.length)];

const getResult = (player, ai) => {
  if (player === ai) return "It's a Tie! 😐";
  if (
    (player === "Rock" && ai === "Scissors") ||
    (player === "Paper" && ai === "Rock") ||
    (player === "Scissors" && ai === "Paper")
  ) {
    return "You Win! 🎉";
  }
  return "You Lose! 😢";
};

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [aiChoice, setAIChoice] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ wins: 0, losses: 0, ties: 0 });

  const handleChoice = (choice) => {
    const aiPick = getAIChoice();
    const gameResult = getResult(choice, aiPick);

    setPlayerChoice(choice);
    setAIChoice(aiPick);
    setResult(gameResult);

    setScore((prev) => ({
      wins: gameResult.includes("Win") ? prev.wins + 1 : prev.wins,
      losses: gameResult.includes("Lose") ? prev.losses + 1 : prev.losses,
      ties: gameResult.includes("Tie") ? prev.ties + 1 : prev.ties,
    }));
  };

  return (
    <div className="flex flex-col items-center bg-white/50 p-6 rounded-xl shadow-lg text-center max-w-md">
      <h2 className="text-lg font-semibold text-[#ff4e6b]">✊ Rock Paper Scissors ✋</h2>

      <p className="text-gray-700 mt-2">Choose your move:</p>

      <div className="flex gap-4 mt-4">
        {choices.map((choice) => (
          <button
            key={choice}
            className="px-4 py-2 bg-[#ff4e6b] text-white rounded-lg shadow-md hover:bg-neutral-500 transition"
            onClick={() => handleChoice(choice)}
          >
            {choice}
          </button>
        ))}
      </div>

      {playerChoice && (
        <div className="mt-6 text-lg font-semibold">
          <p className=" text-neutral-500">You Picked: <span className="text-[#ff4e6b]">{playerChoice}</span></p>
          <p className=" text-neutral-500">Abkash Picked: <span className="text-[#ff4e6b]">{aiChoice}</span></p>
          <p  className="mt-2 text-[#ff4e6b]">{result}</p>
        </div>
      )}

      <p className="mt-4 text-gray-600">
        Wins: {score.wins} | Losses: {score.losses} | Ties: {score.ties}
      </p>

      <button 
        className="mt-4 px-5 py-2 bg-neutral-500 text-white font-semibold rounded-lg hover:bg-black transition"
        onClick={() => setPlayerChoice(null)}
      >
        Play Again 
      </button>
    </div>
  );
};

export default RockPaperScissors;
