"use client";

import { useState } from "react";
import { searchFace } from "@/lib/api";
import FaceResultsGrid from "./FaceResultsGrid";
import Loader from "./Loader";
import { motion } from "framer-motion";

export default function CameraCapture() {
  const [file, setFile] = useState<File | null>(null);
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async () => {
    if (!file) return;
    setLoading(true);
    setNotFound(false);

    const res = await searchFace(file);

    setResults(res.matches);
    if (res.matches.length === 0) setNotFound(true);

    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="w-full text-white rounded-lg p-2"
      />

      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={handleSearch}
        className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold"
      >
        Search Face
      </motion.button>

      {loading && <Loader />}

      {notFound && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-400 text-center font-semibold"
        >
          ❌ Photo not found
        </motion.p>
      )}

      <FaceResultsGrid results={results} />
    </div>
  );
}
