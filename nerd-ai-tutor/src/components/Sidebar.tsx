import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-900 text-gray-200 p-4 flex flex-col border-r border-gray-700">
      <h2 className="text-sm font-semibold text-gray-400 mb-4">Recent Chats</h2>
      <nav className="flex flex-col gap-2">
        <button className="text-left px-3 py-2 rounded hover:bg-gray-700">
          🧮 Math Q&A
        </button>
        <button className="text-left px-3 py-2 rounded hover:bg-gray-700">
          🧬 Science Concepts
        </button>
        <button className="text-left px-3 py-2 rounded hover:bg-gray-700">
          📚 English Grammar
        </button>
      </nav>
      <div className="mt-auto pt-4 border-t border-gray-700 text-sm text-gray-500">
        © 2025 Nerd AI
      </div>
    </aside>
  );
};

export default Sidebar;
