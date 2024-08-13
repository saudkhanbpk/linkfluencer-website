"use client"
import { ChangeEvent, useState } from "react";

export default function Bulkupload() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="p-8 bg-white shadow-md rounded-md max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Bulk Upload</h2>
      <div className="border-2 border-dashed border-gray-300 p-8 rounded-md flex flex-col items-center justify-center space-y-4">
        <svg
          className="w-12 h-12 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 15a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4H7a4 4 0 00-4 4v8zm3-3l3 3m0 0l3-3m-3 3V4"
          />
        </svg>
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer text-gray-600">
          Select a file or drag and drop here
        </label>
        <p className="text-sm text-gray-400">
          XLS, CSV or PDF, file size no more than 5MB
        </p>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-full"
          onClick={() => console.log(file)}
        >
          Import
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-6 rounded-full">
          Download Sample
        </button>
      </div>
      <ul className="text-sm text-gray-600 mt-4 list-disc pl-5 space-y-1">
        <li>Make sure there is no empty cell</li>
        <li>Do not colour fill any cell</li>
        <li>Recheck column headings and content in that</li>
      </ul>
    </div>
  );
}
