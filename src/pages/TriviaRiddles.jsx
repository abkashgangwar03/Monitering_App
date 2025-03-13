import React, { useState, useEffect } from "react";

const TriviaRiddles = () => {
  const [showRiddle, setShowRiddle] = useState(false);
  const [riddle, setRiddle] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false); // New state for tracking loading

  const fetchRiddle = async () => {
    setLoading(true); // Start loading

    try {
      const res = await fetch("https://riddles-api.vercel.app/random");
      const data = await res.json();

      if (data && data.riddle) {
        setRiddle({
          question: data.riddle,
          answer: data.answer,
          hint: data.hint || "Think carefully!",
        });
        setFeedback(null);
        setUserAnswer("");
        setShowRiddle(true);
      } else {
        setFeedback("⚠️ Could not fetch a riddle. Try again.");
      }
    } catch (error) {
      console.error("Error fetching riddle:", error);
      setFeedback("⚠️ Error fetching riddle. Try again later.");
    }

    setLoading(false); // Stop loading
  };

  const checkAnswer = () => {
    if (userAnswer.toLowerCase().trim() === riddle.answer.toLowerCase().trim()) {
      setFeedback("🎉 Correct! You solved it!");
      setTimeout(fetchRiddle, 2000);
    } else {
      setFeedback("❌ Oops! Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center w-full px-4 md:px-10 lg:px-20 space-y-8">
      {!showRiddle ? (
        <button
          className="min-w-[80vw] md:min-w-[35vw] min-h-52 text-center text-xl font-serif md:text-2xl bg-white/50 text-[#ff4e6b] font-semibold rounded-xl shadow-lg hover:scale-105 transition-all flex items-center justify-center"
          onClick={fetchRiddle}
          disabled={loading} // Disable button while loading
        >
          {loading ? " Wait..." : "Tap to Solve the Riddle"} {/* Dynamic text */}
        </button>
      ) : (
        <div className="w-full max-w-lg p-6 bg-white/50 rounded-xl shadow-lg text-center">
          <h2 className="text-lg md:text-xl font-bold text-[#ff4e6b]"> Solve This Riddle!</h2>

          {riddle ? (
            <>
              <p className="mt-3 text-gray-700 text-lg">{riddle.question}</p>

              <input
                type="text"
                className="p-2 mt-4 rounded-lg w-full border border-[#ff4e6b] bg-[#FAD6DE]/10 text-[#1a1a2e] placeholder-[#444]/50 focus:outline-none focus:ring-1 focus:ring-[#ff7a9c] transition-all duration-200 shadow-lg"
                placeholder="Type your answer..."
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              <button
                className="mt-3 py-2 px-3 bg-[#ff4e6b] text-white rounded-lg hover:bg-[#ffb6c1] transition mr-2"
                onClick={checkAnswer}
              >
                Submit
              </button>

              {feedback && <p className="mt-2 text-lg font-semibold">{feedback}</p>}
              {riddle.hint && <p className="mt-2 text-sm text-gray-500">Hint: {riddle.hint}</p>}

              <button
                className="mt-4 text-sm text-gray-600 hover:underline"
                onClick={fetchRiddle}
              >
                🔄 New Riddle
              </button>
            </>
          ) : (
            <p className="mt-3 text-gray-700 text-lg">Loading a tricky riddle... </p>
          )}
        </div>
      )}
    </div>
  );
};

export default TriviaRiddles;
