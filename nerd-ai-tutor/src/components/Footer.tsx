import React, { useState } from "react";
import FileUpload from "./FileUpload";

interface FooterProps {
  onSend: (text: string, file?: File | null) => void;
}

const Footer: React.FC<FooterProps> = ({ onSend }) => {
  const [input, setInput] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input && !file) return;
    onSend(input, file);
    setInput("");
    setFile(null);
  };

  return (
    <footer className="p-4 border-t border-[#00FF9C]/30 bg-[#001A33]/90 backdrop-blur-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        {file && (
          <div className="text-gray-200 text-sm">
            Selected file: {file.name}{" "}
            <button
              type="button"
              onClick={() => setFile(null)}
              className="underline text-[#00FF9C]"
            >
              Remove
            </button>
          </div>
        )}

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask anything or attach homework..."
            className="flex-grow bg-[#002B5B] text-white rounded-lg px-4 py-2 
                       focus:outline-none focus:ring-2 focus:ring-[#00FF9C]/50"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <FileUpload onFileSelect={setFile} />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#00FF9C] to-[#00C9A7] text-gray-900 
                       px-4 py-2 rounded-lg font-semibold hover:opacity-90"
          >
            Send
          </button>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
