import React from "react";

interface Message {
  sender: "user" | "ai";
  text: string;
}

const ChatBox: React.FC = () => {
  const messages: Message[] = [
    { sender: "ai", text: "Hello! I’m your AI tutor. What do you want to learn today?" },
    { sender: "user", text: "Explain Newton’s 3 Laws of Motion." },
    { sender: "ai", text: "Sure! Newton’s laws describe the relationship between motion and forces..." },
  ];

  return (
    <div className="flex flex-col flex-grow overflow-y-auto p-6 bg-gray-50 dark:bg-gray-800">
      {messages.map((msg, idx) => (
        <div key={idx} className={`flex mb-4 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
          <div
            className={`px-4 py-2 rounded-xl max-w-md ${
              msg.sender === "user"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
