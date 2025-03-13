import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CustomPatternLock from "./CustomPatternLock"; // Import the custom pattern lock
import Welcome from "../pages/Welcome";
import MainPage from "../pages/Main";

const correctPattern = [6, 3, 1, 5, 8]; // Correct pattern
const questions = [
  { question: "Who was/is your crush in the class?", answer: "Nikhil" },
  { question: "What is your favorite dessert?", answer: "Ice Cream" },
  { question: "Who do I call Fattu in your friends?", answer: "Juhi" },
];

const VerificationPage = () => {
  const [pattern, setPattern] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showMainPage, setShowMainPage] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[Math.floor(Math.random() * questions.length)]
  );
  const [answer, setAnswer] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setShowMainPage(true);
      }, 3000); // Show Welcome page for 3 seconds
    }
  }, [isSuccess]);

  // Check if the pattern is correct
  const isPatternCorrect = (inputPattern) => {
    return (
      inputPattern.length === correctPattern.length &&
      inputPattern.every((num, index) => num === correctPattern[index])
    );
  };

  // Handle pattern submission
  const handleSubmit = (inputPattern) => {
    if (isProcessing) return;
    setIsProcessing(true);

    const patternMatches = isPatternCorrect(inputPattern);
    const answerMatches =
      answer.trim().toLowerCase() === currentQuestion.answer.trim().toLowerCase();

    if (patternMatches && answerMatches) {
      setTimeout(() => {
        setIsSuccess(true);
        setIsProcessing(false);
      }, 500);
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 600);
      setIsProcessing(false);
    }
  };

  if (showMainPage) {
    return <MainPage />; // Redirect to the main functionality page
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#e3e3f3] text-[#1a1a2e] text-center p-4 md:p-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff5e78_0%,#e3e3f3_85%)] opacity-70"></div>

      {isSuccess ? (
        <Welcome />
      ) : (
        <motion.div
          key="verification-page"
          className="relative w-full max-w-3xl bg-white/50 backdrop-blur-lg rounded-3xl shadow-2xl px-6 py-8 md:p-14 border border-white/30 flex flex-col items-center space-y-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl md:p-2 md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e6b] via-[#ff7a91] to-[#ffb3c1] drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hey Navya! Unlock the Magic 💖
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#2a2a3d] max-w-2xl mx-auto font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {currentQuestion.question}
          </motion.p>

          <motion.input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Your answer..."
            className="text-center text-lg p-3 w-64 rounded-lg border-1 border-[#ff4e6b] bg-[#FAD6DE]/10 text-[#1a1a2e] placeholder-[#444]/50 focus:outline-none focus:ring-1 focus:ring-[#ff7a9c] transition-all duration-200 shadow-lg"
            whileFocus={{ scale: 1.05 }}
          />

          <motion.div
            className="h-60 w-60 flex justify-center items-center touch-none border-[1px] border-[#ff4e6b] rounded-2xl bg-[#FAD6DE]/10 shadow-lg"
            animate={isError ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}
          >
            <CustomPatternLock
              size={3}
              onPatternChange={setPattern}
              onPatternFinish={handleSubmit}
              disabled={isProcessing}
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default VerificationPage;