import React, { useState, useEffect, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hey! I'm here for you. What’s on your mind? ❤️", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getBotResponse = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();

    // Responses based on detected keywords
    if (lowerCaseInput.includes("exam") || lowerCaseInput.includes("study")) {
      return "Exams can be stressful, but I believe in you! Take short breaks and trust yourself. 📚✨";
    }
    if (lowerCaseInput.includes("alone") || lowerCaseInput.includes("lonely")) {
      return "You're never alone! I'm here for you, and there are people who care about you. ❤️";
    }
    if (lowerCaseInput.includes("tired") || lowerCaseInput.includes("exhausted")) {
      return "Sounds like you need some rest! Make sure to take care of yourself. 💤💙";
    }
    if (lowerCaseInput.includes("friend") || lowerCaseInput.includes("friends")) {
      return "Good friends make everything better! Maybe you can reach out to someone and chat. 😊";
    }
    if (lowerCaseInput.includes("anxious") || lowerCaseInput.includes("nervous")) {
      return "Deep breaths! Inhale... Exhale... You're stronger than your anxiety. 🌿💖";
    }
    if (lowerCaseInput.includes("angry") || lowerCaseInput.includes("frustrated")) {
      return "It's okay to feel this way. Try listening to music or taking a walk to clear your mind. 🎶🚶‍♂️";
    }
    if (lowerCaseInput.includes("love") || lowerCaseInput.includes("care")) {
      return "You are deeply loved and cared for! Never forget that. 💖";
    }

    // If no specific keyword is found, give a general caring response
    const randomReplies = [
      "I'm here for you, always. Want to talk about it? 🫂",
      "You're stronger than you think. 💪",
      "Life has its ups and downs, but you'll get through this. 🌟",
      "I believe in you! Keep going. ✨",
      "You deserve happiness and peace. 🕊️",
    ];

    return randomReplies[Math.floor(Math.random() * randomReplies.length)];
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = { text: getBotResponse(input), sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col w-[95] md:w-[80%] lg:w-[60%] mx-auto bg-white/60 backdrop-blur-lg shadow-lg rounded-2xl border border-gray-300 overflow-hidden">
    
      <div className="px-6 py-3 bg-gradient-to-r from-[#ff4e6b] to-[#ff7a91] text-white font-semibold text-center text-lg rounded-t-2xl">
        Chatbot no If-Else-bot
      </div>

   
      <div className="h-[50vh] p-4 overflow-y-auto flex flex-col space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-[75%] md:max-w-[60%] shadow-md ${
              msg.sender === "user"
                ? "bg-[#ff4e6b] text-white self-end"
                : "bg-white text-gray-800 self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <div className="self-start p-3 bg-white text-gray-500 rounded-lg shadow-md">
            Typing...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

    
      <div className="p-3 border-t bg-white rounded-b-2xl flex items-center">
        <input
          type="text"
          className="flex-1 p-3 border rounded-xl focus:outline-none shadow-md text-gray-700"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-3 p-3 bg-[#ff4e6b] text-white rounded-xl shadow-md hover:bg-[#ff7a91] transition-all"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
