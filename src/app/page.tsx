"use client";

import CameraCapture from "@/components/CameraCapture";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-2">
          🔍 Face Search
        </h2>

        <p className="text-center text-gray-300 mb-6">
          Upload or capture a photo to find all matching images
        </p>

        <CameraCapture />
      </div>
    </main>
  );
}
