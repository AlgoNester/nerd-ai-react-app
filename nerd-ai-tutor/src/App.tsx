import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <Header />
      <div className="flex flex-grow overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-grow bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <ChatBox />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
