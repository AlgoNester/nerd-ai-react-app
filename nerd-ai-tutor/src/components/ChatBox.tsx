import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text?: string;
  imageUrl?: string;
  fromUser: boolean;
}

interface ChatBoxProps {
  messages: Message[];
  isTyping?: boolean; // new prop for typing indicator
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages, isTyping }) => {
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to the bottom whenever messages change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div
      className="
        flex flex-col 
        h-[70vh] sm:h-[75vh] md:h-[80vh]
        overflow-y-auto p-3 sm:p-4 gap-3 
        bg-gray-900 rounded-lg border border-gray-700
        scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800
      "
    >
      <AnimatePresence initial={false}>
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className={`flex flex-col max-w-[85%] sm:max-w-sm md:max-w-md lg:max-w-lg ${
              msg.fromUser ? "items-end ml-auto" : "items-start mr-auto"
            }`}
          >
            {msg.text && (
              <div
                className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg break-words ${
                  msg.fromUser
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-100"
                }`}
              >
                {msg.text}
              </div>
            )}
            {msg.imageUrl && (
              <img
                src={msg.imageUrl}
                alt="uploaded"
                className="
                  mt-2 max-w-[90%] sm:max-w-xs md:max-w-sm
                  rounded-lg border border-gray-600
                  object-contain
                "
              />
            )}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Typing indicator */}
      {isTyping && (
        <div className="flex items-center gap-2 mt-2 ml-3">
          <div className="flex space-x-1">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.2s]" />
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.1s]" />
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
          </div>
          <span className="text-gray-400 text-sm">AI is thinking...</span>
        </div>
      )}

      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatBox;
