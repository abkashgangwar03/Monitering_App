import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Typewriter from "../components/Typewriter";

const Msg = () => {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef(null);
  
  // Email Sending Function
  const sendEmail = (e) => {
    e.preventDefault();

    
    if (!input.trim()) {
      alert("Message cannot be empty!");
      return;
    }

    const templateParams = {
      message: input,  // The message input
    };

    emailjs
      .send(
        "service_g642hg2",  // Replace with your EmailJS Service ID
        "template_us22wvb", // Replace with your EmailJS Template ID
        templateParams,
        "qDmJ5kwSLP5DbnTZK"   // Replace with your EmailJS Public Key
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Message sent! Just call krta hoon mai tumhe Chill!");
        setInput(""); // Clear input after sending
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        alert("Failed to send message.");
      });
  };

  // Auto-expanding Textarea
  const handleChange = (e) => {
    setInput(e.target.value);
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    <form
      onSubmit={sendEmail}
      className="flex flex-row items-center gap-3 md:gap-10 justify-between w-full md:w-[60vw] bg-white/50 bg-gradient-to-r px-3 py-2 rounded-3xl shadow-lg "
    >
      {/* Input Box */}
      <div className="relative w-full">
        {!isFocused && input === "" && (
          <div className="absolute left-2 md:left-8 top-2 md:top-1 text-md md:text-lg text-[#444]/50 pointer-events-none">
            <Typewriter />
          </div>
        )}

        <textarea
          ref={textareaRef}
          className="  resize-none overflow-hidden text-md md:text-lg font-medium md:ml-5 px-3 py-2 w-full rounded-2xl border border-[#ff4e6b] bg-[#FAD6DE] text-[#1a1a2e] placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#ff7a9c] transition-all duration-200 shadow-lg"
          value={input}
          rows={1}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => input === "" && setIsFocused(false)}
        ></textarea>
      </div>

      {/* Send Button */}
      <button
        type="submit"
        className="bg-gradient-to-r from-[#ff4e6b] to-[#ff7a91] text-white px-4 md:px-6 py-2 md:py-3 rounded-2xl md:rounded-3xl font-bold text-md md:text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 mb-2"
      >
        Send
      </button>
    </form>
  );
};

export default Msg;
