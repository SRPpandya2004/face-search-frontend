"use client";

import FileUpload from "@/components/FileUpload";

export default function UploadPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-400">
          📤 Admin Photo Upload
        </h2>

        <FileUpload />
      </div>
    </main>
  );
}
