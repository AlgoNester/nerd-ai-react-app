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

    const userMsg = { id: Date.now(), text, fromUser: true };
    setMessages((prev) => [...prev, userMsg]);

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const aiMsg = {
        id: Date.now() + 1,
        text: `AI: "${text}" received. Here's a thoughtful reply 🤖`,
        fromUser: false,
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#001F3F] via-[#003366] to-[#00FFB3] text-white">
      {/* Header */}
      <Header />

      <div className="flex flex-grow overflow-hidden flex-col md:flex-row">
        {/* Sidebar (hidden on small screens) */}
        <div className="hidden md:block md:w-1/4 lg:w-1/5 bg-[#002244]/80 border-r border-[#00FFB3]/40">
          <Sidebar />
        </div>

        {/* Chat Area */}
        <div className="flex flex-col flex-grow bg-gray-100 dark:bg-[#0d1117] text-gray-900 dark:text-gray-100">
          <div className="flex-1 overflow-y-auto px-2 md:px-6 py-4 md:py-6">
               <ChatBox {...({ messages, isTyping } as any)} />
          </div>

          {/* Footer fixed at bottom */}
          <div className="sticky bottom-0 bg-gray-900 border-t border-[#00FFB3]/50">
            <Footer {...({ onSend: sendMessage } as any)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
