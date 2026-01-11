"use client";
import { useEffect, useState } from "react";

export default function InitialLoader({ children }) {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2800);
    const loadTimer = setTimeout(() => setLoading(false), 3300);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  if (loading) {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"
          }`}
      >
        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Simple text */}
          <div className="mb-4">
            <h1 className="simple-text text-5xl md:text-7xl font-bold tracking-wider text-black">
              ADITI&apos;S
            </h1>
          </div>

          {/* Portfolio text with reveal animation */}
          <div className="overflow-hidden">
            <h2 className="portfolio-text text-3xl md:text-5xl font-light tracking-[0.5em] text-gray-700">
              Portfolio
            </h2>
          </div>

          {/* Loading bar */}
          <div className="mt-12 w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="loading-bar h-full bg-black rounded-full" />
          </div>

          {/* Status text */}
          <p className="mt-4 text-gray-500 text-sm tracking-widest animate-pulse">
            LOADING...
          </p>
        </div>

        {/* Corner decorations */}
        <div className="corner-decoration-bw top-8 left-8" />
        <div className="corner-decoration-bw top-8 right-8 rotate-90" />
        <div className="corner-decoration-bw bottom-8 left-8 -rotate-90" />
        <div className="corner-decoration-bw bottom-8 right-8 rotate-180" />
      </div>
    );
  }

  return <>{children}</>;
}
