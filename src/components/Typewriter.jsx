import { useState, useEffect } from "react";

export default function Typewriter() {
  const words = [
    "Kyaa Huaa?",
    "Koi Problem?",
    "Kuch Batana hai?",
    "Koi Gossip?",
    "Chalo bata do idhar..."
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 60;
  const deletingSpeed = 40;
  const pauseTime = 500;

  useEffect(() => {
    const currentWord = words[index];

    let timeout = setTimeout(() => {
      if (isDeleting) {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <h1 className="font-extrabold pb-3 w-[90vw] lg:w-[70vw] md:w-[80vw] text-lg md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e6b] via-[#ff7a91] to-[#ffb3c1] via-90% drop-shadow-lg">
      {text}
      <span className="animate-blink text-[#ff7a91] font-medium">|</span>
    </h1>
  );
}
