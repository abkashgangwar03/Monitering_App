import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const messages = {
  sad: [
    "Hey Navya, I’m here for you always. You’re not alone! 💖",
    "Take a deep breath. You are stronger than you think. 🌸",
    "Even the darkest nights end with a sunrise. Keep shining! 🌅",
    "Cry if you need to, but never forget – you're loved & cherished. 🤗",
    "It’s okay to not be okay sometimes. I’ve got you! 🫂",
    "Sending you the biggest virtual hug right now! 🤍",
    "You don’t have to carry everything alone. I’m here. 💞",
    "You're so loved, more than you even realize. 💕",
    "Storms don’t last forever. The sun will shine again! ☀️",
    "Just take it one step at a time. You got this. 💪",
    "The world is brighter with you in it. Never forget that! 🌏💖",
    "Every single tear means you're feeling, healing, and growing. 💛",
  ],
  neutral: [
    "You're doing great, Navya! Keep going, and success will follow. 🌟",
    "Every day is a new chance to shine. Stay awesome! ✨",
    "You are enough, just as you are. Keep believing in yourself! 💪",
    "Life is a journey, not a race. Enjoy every step! 🌿",
    "Little wins matter just as much as big ones. Celebrate yourself! 🎉",
    "Your potential is endless. Keep moving forward. 🚀",
    "You bring warmth and kindness wherever you go! ☀️",
    "You have the power to create the life you love! ❤️",
    "Pause, breathe, and remind yourself how strong you are! 🌈",
    "Every moment is a fresh beginning. Embrace it! 🌸",
    "You are a work in progress, and that’s perfectly okay! 🎨",
    "Just smile, and watch how the world changes around you! 😊",
  ],
  happy: [
    "Woohoo! Keep spreading your joy, Navya! 🎉",
    "Happiness looks so good on you! Keep smiling. 😊",
    "Your energy is contagious! Stay this amazing forever. 💖",
    "Your joy is like sunshine, warming up everyone around you! ☀️",
    "Your smile has the power to brighten anyone’s day! 😍",
    "You radiate positivity like a star! ✨",
    "May this happiness last forever! Keep it going! 🎶",
    "Love the energy! Keep dancing through life! 💃",
    "You deserve every bit of this happiness! Enjoy it! 🎊",
    "You are a bundle of joy, and the world is lucky to have you! 🌍💗",
    "Good vibes only! Keep shining! 🌟",
    "Stay happy, stay blessed, and keep being awesome! 🌈",
  ],
};

const PersonalizedMessage = ({ mood }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const updateMessage = () => {
      let newMessage = "";
      if (mood < 50) {
        newMessage = messages.sad[Math.floor(Math.random() * messages.sad.length)];
      } else if (mood <= 80) {
        newMessage = messages.neutral[Math.floor(Math.random() * messages.neutral.length)];
      } else {
        newMessage = messages.happy[Math.floor(Math.random() * messages.happy.length)];
      }
      setMessage(newMessage);
    };

    updateMessage();
    const interval = setInterval(updateMessage, 3000 + Math.random() * 1000); // Updates every 3-4 sec

    return () => clearInterval(interval);
  }, [mood]);

  return (
    <motion.div
      key={message}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="p-4 text-center bg-white/50 rounded-xl shadow-lg w-fit"
    >
      <p className="text-lg font-semibold text-[#ff4e6b]">{message}</p>
    </motion.div>
  );
};

export default PersonalizedMessage;
