"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-black/30 backdrop-blur-md">
      <h1 className="text-xl font-bold text-cyan-400">
        Photo Extractor
      </h1>

      <div className="space-x-6">
        <Link href="/" className="hover:text-cyan-400">
          Search
        </Link>
        <Link href="/upload" className="hover:text-pink-400">
          Admin Upload
        </Link>
      </div>
    </nav>
  );
}
