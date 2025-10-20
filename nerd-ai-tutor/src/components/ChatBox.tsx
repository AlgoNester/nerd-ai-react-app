import React from "react";

interface Message {
  id: number;
  text?: string;
  imageUrl?: string;
  fromUser: boolean;
}

interface ChatBoxProps {
  messages: Message[];
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages }) => {
  return (
    <div className="flex flex-col-reverse h-[70vh] overflow-y-auto p-4 gap-3 bg-gray-900 rounded-lg border border-gray-700">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex flex-col max-w-xs ${
            msg.fromUser ? "items-end ml-auto" : "items-start mr-auto"
          }`}
        >
          {msg.text && (
            <div
              className={`px-4 py-2 rounded-lg break-words ${
                msg.fromUser ? "bg-blue-600 text-white" : "bg-gray-700 text-white"
              }`}
            >
              {msg.text}
            </div>
          )}
          {msg.imageUrl && (
            <img
              src={msg.imageUrl}
              alt="uploaded"
              className="mt-1 max-w-full rounded-lg border border-gray-600"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
