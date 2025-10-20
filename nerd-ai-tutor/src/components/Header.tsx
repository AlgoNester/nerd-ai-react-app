import React from "react";
import logo from "../assets/NerdAi_logo.png";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-gray-900 text-white px-4 py-3 border-b border-gray-700">
      <div className="flex items-center space-x-3">
        <img src={logo} alt="App Logo" className="w-8 h-8 rounded" />
        <h1 className="text-lg font-semibold">Nerd AI Tutor</h1>
      </div>
    </header>
  );
};

export default Header;
