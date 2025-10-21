import React from "react";
import { Plus } from "lucide-react"; // clean, modern icon

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onFileSelect(file);
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center justify-center w-10 h-10 rounded-full 
                   bg-gradient-to-r from-[#00FF9C] to-[#00C9A7] 
                   text-gray-900 font-bold text-xl 
                   shadow-md hover:scale-105 transition-transform duration-200"
        title="Attach file"
      >
        <Plus size={20} />
      </button>
    </div>
  );
};

export default FileUpload;
