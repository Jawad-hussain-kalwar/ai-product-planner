"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedBubbleBackgroundProps {
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Whether to enable reduced motion for accessibility
   * @default true
   */
  respectReducedMotion?: boolean;
  /**
   * Intensity of the bubble effect (0-1)
   * @default 0.6
   */
  intensity?: number;
}

export function AnimatedBubbleBackground({
  className,
  respectReducedMotion = true,
  intensity = 0.6,
}: AnimatedBubbleBackgroundProps) {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check for reduced motion preference
    if (respectReducedMotion && typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [respectReducedMotion]);

  // Don't render on server or if reduced motion is preferred
  if (!mounted || (respectReducedMotion && prefersReducedMotion)) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed inset-0 overflow-hidden pointer-events-none z-0",
        "opacity-40", // Subtle visibility for full page
        className
      )}
      style={{
        opacity: intensity,
      }}
    >
      {/* SVG Filter for Goo Effect */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-0 h-0"
        aria-hidden="true"
      >
        <defs>
          <filter id="bubble-goo" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="25"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Bubbles Container */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          filter: "url(#bubble-goo) blur(45px)",
        }}
      >
        {/* Bubble 1 - Blue, vertical movement */}
        <div
          className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen will-change-transform"
          style={{
            background: `radial-gradient(circle at center, var(--bubble-color-1) 0%, transparent 70%)`,
            width: "60vw",
            height: "60vh",
            top: "10vh",
            left: "20vw",
            transformOrigin: "center center",
            animation: "bubble-float-vertical 35s ease-in-out infinite",
          }}
        />

        {/* Bubble 2 - Teal, circular movement */}
        <div
          className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen will-change-transform"
          style={{
            background: `radial-gradient(circle at center, var(--bubble-color-2) 0%, transparent 70%)`,
            width: "50vw",
            height: "50vh",
            top: "30vh",
            left: "60vw",
            transformOrigin: "calc(50vw - 30vw)",
            animation: "bubble-float-circular 25s reverse infinite",
          }}
        />

        {/* Bubble 3 - Violet, circular movement */}
        <div
          className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen will-change-transform"
          style={{
            background: `radial-gradient(circle at center, var(--bubble-color-3) 0%, transparent 70%)`,
            width: "45vw",
            height: "45vh",
            top: "60vh",
            left: "10vw",
            transformOrigin: "calc(50vw + 20vw)",
            animation: "bubble-float-circular 45s linear infinite",
          }}
        />

        {/* Bubble 4 - Magenta, horizontal movement */}
        <div
          className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen will-change-transform"
          style={{
            background: `radial-gradient(circle at center, var(--bubble-color-4) 0%, transparent 70%)`,
            width: "40vw",
            height: "40vh",
            top: "5vh",
            left: "70vw",
            transformOrigin: "calc(50vw - 10vw)",
            animation: "bubble-float-horizontal 40s ease-in-out infinite",
          }}
        />

        {/* Bubble 5 - Cyan, large background bubble */}
        <div
          className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen will-change-transform"
          style={{
            background: `radial-gradient(circle at center, var(--bubble-color-5) 0%, transparent 75%)`,
            width: "80vw",
            height: "80vh",
            top: "40vh",
            left: "-10vw",
            transformOrigin: "calc(50vw - 40vw) calc(50vh + 10vh)",
            animation: "bubble-float-circular 30s ease-in-out infinite",
          }}
        />

        {/* Bubble 6 - Purple, additional movement */}
        <div
          className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen will-change-transform"
          style={{
            background: `radial-gradient(circle at center, var(--bubble-color-6) 0%, transparent 70%)`,
            width: "35vw",
            height: "35vh",
            top: "80vh",
            left: "50vw",
            transformOrigin: "calc(50vw + 15vw)",
            animation: "bubble-float-vertical 50s ease-in-out infinite reverse",
          }}
        />

        {/* Interactive bubble - very subtle */}
        <div
          className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen"
          style={{
            background: `radial-gradient(circle at center, var(--bubble-interactive) 0%, transparent 70%)`,
            width: "100vw",
            height: "100vh",
            top: "-25vh",
            left: "-25vw",
            opacity: 0.3,
          }}
        />
      </div>
    </div>
  );
}
