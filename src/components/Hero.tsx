"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { StarField } from "./StarField";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={parallaxRef} className="relative min-h-screen">
      {/* Stars Background - Canvas based for better performance */}
      <StarField scrollY={scrollY} />

      {/* A few decorative stars with Lucide icons for visual interest */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={`star-lg-${i}`}
          className="absolute will-change-transform"
          style={{
            left: `${15 + i * 20}%`,
            top: `${10 + i * 15}%`,
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <Star className="h-4 w-4 text-white opacity-90" />
        </div>
      ))}

      {/* Moon */}
      <div
        className="absolute w-32 h-32 rounded-full bg-gray-200 shadow-[inset_-15px_-15px_40px_rgba(0,0,0,0.5)]"
        style={{
          right: "10%",
          top: "15%",
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />

      {/* Planet 1 - Mars-like */}
      <div
        className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-800 opacity-0 transition-opacity duration-1000 overflow-hidden"
        style={{
          left: "15%",
          top: "60%",
          transform: `translateY(${scrollY * 0.4}px)`,
          opacity: scrollY > 200 ? 0.9 : 0,
          boxShadow:
            "inset -4px -4px 15px rgba(0,0,0,0.6), 0 0 10px rgba(255,100,50,0.3)",
        }}
      >
        {/* Surface details */}
        <div className="absolute w-4 h-3 rounded-full bg-red-900/40 top-3 left-2"></div>
        <div className="absolute w-5 h-2 rounded-full bg-red-900/30 bottom-4 right-3"></div>
        <div className="absolute w-3 h-3 rounded-full bg-red-700/20 top-8 right-2"></div>
      </div>

      {/* Planet 2 - Saturn-like with rings */}
      <div
        className="absolute opacity-0 transition-opacity duration-1000"
        style={{
          right: "25%",
          top: "70%",
          transform: `translateY(${scrollY * 0.5}px) rotate(-10deg)`,
          opacity: scrollY > 400 ? 0.9 : 0,
        }}
      >
        {/* Saturn rings */}
        <div className="absolute w-40 h-10 bg-gradient-to-r from-transparent via-yellow-100/30 to-transparent rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12"></div>

        {/* Planet body */}
        <div
          className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-700 relative z-10"
          style={{
            boxShadow:
              "inset -8px -8px 25px rgba(0,0,0,0.5), 0 0 15px rgba(255,200,100,0.3)",
          }}
        >
          {/* Surface bands */}
          <div className="absolute w-full h-3 bg-yellow-600/30 top-4 left-0"></div>
          <div className="absolute w-full h-2 bg-yellow-800/20 top-10 left-0"></div>
          <div className="absolute w-full h-4 bg-yellow-700/30 top-16 left-0"></div>
        </div>
      </div>

      {/* Planet 3 - Neptune-like */}
      <div
        className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-800 opacity-0 transition-opacity duration-1000"
        style={{
          left: "65%",
          top: "40%",
          transform: `translateY(${scrollY * 0.35}px)`,
          opacity: scrollY > 300 ? 0.85 : 0,
          boxShadow:
            "inset -6px -6px 20px rgba(0,0,0,0.5), 0 0 12px rgba(100,200,255,0.4)",
        }}
      >
        {/* Cloud swirls */}
        <div className="absolute w-12 h-3 rounded-full bg-blue-300/20 top-4 left-4 rotate-12"></div>
        <div className="absolute w-10 h-2 rounded-full bg-blue-200/30 bottom-5 right-3 -rotate-12"></div>
        <div className="absolute w-8 h-2 rounded-full bg-blue-300/20 top-10 right-5 rotate-45"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          <span className="text-purple-400">Celestial</span> Project
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl mb-12 text-gray-300">
          It's free and opensource!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button>
            <Link href="/download">Tweak My Browser Today!</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
