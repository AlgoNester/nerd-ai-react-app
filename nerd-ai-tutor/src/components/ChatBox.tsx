import React from "react";

interface Message {
  id: number;
  text?: string;
  imageUrl?: string;
  fromUser: boolean;
}

interface ChatBoxProps {
  messages: Message[];
  isTyping?: boolean;
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages, isTyping }) => {
  return (
    <div className="flex flex-col-reverse w-full h-full overflow-y-auto px-4 py-6 bg-gradient-to-b from-[#001F3F] via-[#0074D9] to-[#00C9A7]">
      {isTyping && (
        <div className="bg-[#002B5B] text-gray-100 rounded-xl p-3 mb-2 w-fit shadow-md">
          Nerd AI is typing<span className="animate-pulse">...</span>
        </div>
      )}
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`p-3 rounded-xl max-w-[80%] mb-2 ${
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
  );
};

export default ChatBox;
