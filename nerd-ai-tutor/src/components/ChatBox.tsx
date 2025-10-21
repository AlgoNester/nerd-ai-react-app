import React, { useState } from "react";
import FileUpload from "./FileUpload";

interface Message {
  id: number;
  text?: string;
  imageUrl?: string;
  fromUser: boolean;
}

interface ChatBoxProps {
  placeholder?: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ placeholder }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSend = () => {
    if (!input && !file) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: input || undefined,
      imageUrl: file ? URL.createObjectURL(file) : undefined,
      fromUser: true,
    };

    setMessages([newMessage, ...messages]);
    setInput("");
    setFile(null);
  };

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen 
      bg-gradient-to-b from-[#001F3F] via-[#0074D9] to-[#00C9A7] p-4"
    >
      {/* Header */}
      <div className="text-center mb-4 w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
          Ask anything <span className="text-[#00FF9C]">🧠</span> Nerd AI
        </h1>
        <p className="text-gray-200 text-lg md:text-xl">
          Be smart. Be proud. Be nerd by chatting with Nerd AI
        </p>
      </div>

      {/* Messages */}
      <div className="w-full max-w-2xl flex flex-col-reverse space-y-2 space-y-reverse mb-4 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-3 rounded-xl max-w-[80%] ${
              msg.fromUser
                ? "bg-gradient-to-r from-[#00FF9C] to-[#00C9A7] text-gray-900 ml-auto"
                : "bg-[#002B5B] text-gray-100"
            } shadow-md`}
          >
            {msg.text}
            {msg.imageUrl && (
              <img
                src={msg.imageUrl}
                alt="uploaded"
                className="mt-2 max-h-60 rounded-lg"
              />
            )}
          </div>
        ))}
      </div>

      {/* Input + FileUpload */}
      <div className="w-full max-w-2xl">
        <div className="bg-[#001A33]/90 backdrop-blur-md rounded-2xl p-4 flex items-center space-x-4 shadow-xl">
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-gray-100 placeholder-[#00FF9C]/70 text-lg"
            placeholder={placeholder || "Ask anything or attach homework..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <FileUpload onFileSelect={setFile} />
          <button
            className="bg-gradient-to-r from-[#00FF9C] to-[#00C9A7] hover:opacity-90 text-gray-900 rounded-full px-4 py-2 font-semibold shadow-md transition"
            onClick={handleSend}
          >
            ➤
          </button>
        </div>

        {/* File Preview */}
        {file && (
          <div className="text-gray-200 mt-2 text-sm">
            Selected file: {file.name}{" "}
            <button
              onClick={() => setFile(null)}
              className="underline ml-2 text-[#00FF9C]"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
