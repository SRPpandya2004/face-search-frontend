"use client";

import { uploadPhoto } from "@/lib/api";
import { useState } from "react";

export default function FileUpload() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [done, setDone] = useState(false);

  const handleUpload = async () => {
    if (!files) return;

    for (let i = 0; i < files.length; i++) {
      await uploadPhoto(files[i]);
    }

    setDone(true);
  };

  return (
    <div className="space-y-6">
      <input
        type="file"
        multiple
        onChange={(e) => setFiles(e.target.files)}
        className="w-full text-white p-2 rounded"
      />

      <button
        onClick={handleUpload}
        className="w-full bg-pink-500 hover:bg-pink-600 py-3 rounded-lg font-semibold"
      >
        Upload Photos
      </button>

      {done && (
        <p className="text-green-400 text-center">
          ✅ Photos uploaded successfully
        </p>
      )}
    </div>
  );
}
