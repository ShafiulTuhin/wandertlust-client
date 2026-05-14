"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white">
      {/* Emoji */}
      <div className="text-7xl mb-4">😕</div>

      {/* Title */}
      <h1 className="text-5xl font-extrabold text-gray-800 mb-2">404</h1>

      {/* Subtitle */}
      <p className="text-xl font-semibold text-gray-600 mb-2">Page Not Found</p>

      {/* Description */}
      <p className="text-gray-500 mb-6 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="px-6 py-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
