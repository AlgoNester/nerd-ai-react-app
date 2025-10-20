import React, { useState } from "react";

type FileUploadProps = {
  onFileSelect: (file: File | null) => void;
};

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files && e.target.files[0] ? e.target.files[0] : null;
    onFileSelect(f);
  };

  return (
    <div className="flex items-center gap-2">
      <label className="bg-gray-700 text-white px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-600">
        Upload
        <input type="file" className="hidden" onChange={handleChange} />
      </label>
      <span className="text-sm text-gray-300">Choose a file to upload</span>
    </div>
  );
};

const Footer: React.FC = () => {
  const [input, setInput] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message:", input);
    if (file) console.log("Uploaded file:", file.name);
    setInput("");
    setFile(null);
  };

  return (
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
  );
};

export default Footer;
