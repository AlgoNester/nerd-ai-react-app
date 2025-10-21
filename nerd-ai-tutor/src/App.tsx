import React, { useState } from "react";
import ChatBox from "./components/ChatBox";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg = { id: Date.now(), text, fromUser: true };
    setMessages((prev) => [...prev, userMsg]);

    // Show typing indicator for 2 seconds
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);

      // Add AI response
      const aiMsg = {
        id: Date.now() + 1,
        text: `AI: "${text}" received. Here's a thoughtful reply 🤖`,
        fromUser: false,
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <Header />
      <div className="flex flex-grow overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-grow bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
         <ChatBox {...({ messages, isTyping } as any)} />

          <Footer {...({ onSend: sendMessage } as any)} />
        </div>
      </div>
    </div>
  );
};

export default App;
