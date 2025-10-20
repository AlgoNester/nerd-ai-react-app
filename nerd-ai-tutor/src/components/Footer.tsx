import React, { useState } from "react";
import FileUpload from "./FileUpload";
import ChatBox from "./ChatBox";

interface Message {
  id: number;
  text?: string;
  imageUrl?: string;
  fromUser: boolean;
}

const Footer: React.FC = () => {
  const [input, setInput] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!input && !file) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: input || undefined,
      imageUrl: file ? URL.createObjectURL(file) : undefined,
      fromUser: true,
    };

    setMessages([newMessage, ...messages]); // newest message at top
    setInput("");
    setFile(null);
  };

  return (
    <div className="flex flex-col h-full">
      <ChatBox messages={messages} />
      <footer className="p-4 border-t border-gray-700 bg-gray-800">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <FileUpload onFileSelect={setFile} />
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ask anything or submit homework..."
              className="flex-grow bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
            >
              Send
            </button>
          </div>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
