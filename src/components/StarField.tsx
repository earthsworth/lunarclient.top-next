"use client";

import { useEffect, useRef } from "react";

export type StarFieldProps = {
  scrollY: number;
};

export function StarField({ scrollY }: StarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<
    Array<{ x: number; y: number; size: number; opacity: number }>
  >([]);

  // Initialize stars once
  useEffect(() => {
    const stars = [];
    // Generate 100 stars with random positions and sizes
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }
    starsRef.current = stars;
  }, []);

  // Draw stars on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to match window size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 2; // Make canvas taller to cover scroll area
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        ctx.beginPath();
        ctx.arc(
          (star.x / 100) * canvas.width,
          (star.y / 100) * canvas.height + scrollY * (star.size / 2), // Parallax effect based on star size
          star.size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, [scrollY]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
