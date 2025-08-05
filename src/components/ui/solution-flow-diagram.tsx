"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Folder, HeartHandshakeIcon, SparklesIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SolutionFlowProps {
  className?: string;
  circleText?: string;
  badgeTexts?: { first: string; second: string; third: string; fourth: string };
  buttonTexts?: { first: string; second: string };
  title?: string;
  lightColor?: string;
}

const SolutionFlow = ({
  className,
  circleText,
  badgeTexts,
  buttonTexts,
  title,
  lightColor,
}: SolutionFlowProps) => {
  const groupRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    if (!groupRef.current) return;
    const paths = groupRef.current.querySelectorAll("path");
    paths.forEach((path) => {
      const length = (path as SVGPathElement).getTotalLength();
      (path as SVGPathElement).style.strokeDasharray = `${length}`;
      (path as SVGPathElement).style.strokeDashoffset = `${length}`;
      path.classList.add("draw-path");
    });
  }, []);

  return (
    <div
      className={cn(
        "solution-flow-diagram relative flex h-[450px] w-full max-w-5xl flex-col items-center",
        className
      )}
    >
      <style jsx>{`
        .solution-flow-diagram .database {
          offset-anchor: 10px 0px;
          animation: database-animation-path 4s cubic-bezier(0, 0, 0.2, 1) 1s
            infinite;
        }
        .solution-flow-diagram .db-light-1 {
          offset-path: path("M 18 10 v 20 q 0 5 5 5 h 72 q 5 0 5 5 v 25");
        }
        .solution-flow-diagram .db-light-2 {
          offset-path: path("M 68 10 v 15 q 0 5 5 5 h 22 q 5 0 5 5 v 25");
        }
        .solution-flow-diagram .db-light-3 {
          offset-path: path("M 132 10 v 15 q 0 5 -5 5 h -22 q -5 0 -5 5 v 25");
        }
        .solution-flow-diagram .db-light-4 {
          offset-path: path("M 182 10 v 20 q 0 5 -5 5 h -72 q -5 0 -5 5 v 25");
        }
        @keyframes database-animation-path {
          0% {
            offset-distance: 0%;
          }
          100% {
            offset-distance: 100%;
          }
        }
        .solution-flow-diagram .draw-path {
          animation: dash-animation 1.2s ease forwards;
        }
        @keyframes dash-animation {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
      {/* SVG Paths  */}
      <svg
        className="h-full sm:w-full text-muted"
        width="100%"
        height="100%"
        viewBox="0 0 200 120"
      >
        <g ref={groupRef} stroke="currentColor" fill="none" strokeWidth="0.4">
          <path d="M 18 10 v 20 q 0 5 5 5 h 72 q 5 0 5 5 v 25" />
          <path d="M 68 10 v 15 q 0 5 5 5 h 22 q 5 0 5 5 v 25" />
          <path d="M 132 10 v 15 q 0 5 -5 5 h -22 q -5 0 -5 5 v 25" />
          <path d="M 182 10 v 20 q 0 5 -5 5 h -72 q -5 0 -5 5 v 25" />
        </g>
        {/* Blue Lights */}
        <g mask="url(#db-mask-1)">
          <circle
            className="database db-light-1"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)"
          />
        </g>
        <g mask="url(#db-mask-2)">
          <circle
            className="database db-light-2"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)"
          />
        </g>
        <g mask="url(#db-mask-3)">
          <circle
            className="database db-light-3"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)"
          />
        </g>
        <g mask="url(#db-mask-4)">
          <circle
            className="database db-light-4"
            cx="0"
            cy="0"
            r="12"
            fill="url(#db-blue-grad)"
          />
        </g>
        {/* Buttons */}
        <g stroke="currentColor" fill="none" strokeWidth="0.4">
          {/* First Button */}
          <g>
            <rect
              fill="#18181B"
              x="0"
              y="5"
              width="36"
              height="10"
              rx="5"
            ></rect>
            <DatabaseIcon x="4" y="7.5"></DatabaseIcon>
            <text
              x="15"
              y="12"
              fill="white"
              stroke="none"
              fontSize="5"
              fontWeight="500"
            >
              {badgeTexts?.first || "GET"}
            </text>
          </g>
          {/* Second Button */}
          <g>
            <rect
              fill="#18181B"
              x="50"
              y="5"
              width="36"
              height="10"
              rx="5"
            ></rect>
            <DatabaseIcon x="54" y="7.5"></DatabaseIcon>
            <text
              x="65"
              y="12"
              fill="white"
              stroke="none"
              fontSize="5"
              fontWeight="500"
            >
              {badgeTexts?.second || "POST"}
            </text>
          </g>
          {/* Third Button */}
          <g>
            <rect
              fill="#18181B"
              x="114"
              y="5"
              width="36"
              height="10"
              rx="5"
            ></rect>
            <DatabaseIcon x="118" y="7.5"></DatabaseIcon>
            <text
              x="129"
              y="12"
              fill="white"
              stroke="none"
              fontSize="5"
              fontWeight="500"
            >
              {badgeTexts?.third || "PUT"}
            </text>
          </g>
          {/* Fourth Button */}
          <g>
            <rect
              fill="#18181B"
              x="164"
              y="5"
              width="36"
              height="10"
              rx="5"
            ></rect>
            <DatabaseIcon x="168" y="7.5"></DatabaseIcon>
            <text
              x="179"
              y="12"
              fill="white"
              stroke="none"
              fontSize="5"
              fontWeight="500"
            >
              {badgeTexts?.fourth || "DELETE"}
            </text>
          </g>
        </g>
        <defs>
          {/* 1 -  user list */}
          <mask id="db-mask-1">
            <path
              d="M 18 10 v 20 q 0 5 5 5 h 72 q 5 0 5 5 v 25"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 2 - task list */}
          <mask id="db-mask-2">
            <path
              d="M 68 10 v 15 q 0 5 5 5 h 22 q 5 0 5 5 v 25"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 3 - backlogs */}
          <mask id="db-mask-3">
            <path
              d="M 132 10 v 15 q 0 5 -5 5 h -22 q -5 0 -5 5 v 25"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* 4 - misc */}
          <mask id="db-mask-4">
            <path
              d="M 182 10 v 20 q 0 5 -5 5 h -72 q -5 0 -5 5 v 25"
              strokeWidth="0.5"
              stroke="white"
            />
          </mask>
          {/* Blue Grad */}
          <radialGradient id="db-blue-grad" fx="1">
            <stop offset="0%" stopColor={lightColor || "#00A6F5"} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
      {/* Main Box */}
      <div className="absolute bottom-6 flex w-full flex-col items-center">
        {/* bottom shadow */}
        <div className="absolute -bottom-6 h-[150px] w-[62%] rounded-lg bg-accent/30" />
        {/* box title */}
        <div className="absolute -top-3 z-20 flex items-center justify-center rounded-lg border bg-[#101112] px-2 py-1 sm:-top-4 sm:py-1.5">
          <SparklesIcon className="size-3" />
          <span className="ml-2 text-[10px]">
            {title ? title : "Data exchange using a customized REST API"}
          </span>
        </div>
        {/* box outter circle */}
        <div className="absolute -bottom-12 z-30 grid h-[60px] w-[60px] place-items-center rounded-full border-t bg-[#141516] font-semibold text-xs">
          {circleText ? circleText : "SVG"}
        </div>
        {/* box content */}
        <div className="relative z-10 flex h-[225px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background shadow-md">
          {/* Badges */}
          <div className="absolute bottom-12 left-12 z-10 h-7 rounded-full bg-[#101112] px-3 text-xs border flex items-center gap-2 ">
            <HeartHandshakeIcon className="size-4" />
            <span>{buttonTexts?.first || "LegionDev"}</span>
          </div>
          <div className="absolute right-16 z-10 hidden h-7 rounded-full bg-[#101112] px-3 text-xs sm:flex border items-center gap-2">
            <Folder className="size-4" />
            <span>{buttonTexts?.second || "v2_updates"}</span>
          </div>
          {/* Circles - Adjusted for 50% taller box (150px -> 225px) */}
          <motion.div
            className="absolute -bottom-20 h-[130px] w-[130px] rounded-full border-t bg-accent/5"
            animate={{
              scale: [0.98, 1.02, 0.98, 1, 1, 1, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-32 h-[175px] w-[175px] rounded-full border-t bg-accent/5"
            animate={{
              scale: [1, 1, 1, 0.98, 1.02, 0.98, 1, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-[140px] h-[220px] w-[220px] rounded-full border-t bg-accent/5"
            animate={{
              scale: [1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-[160px] h-[265px] w-[265px] rounded-full border-t bg-accent/5"
            animate={{
              scale: [1, 1, 1, 1, 1, 1, 0.98, 1.02, 0.98, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
};

export default SolutionFlow;
const DatabaseIcon = ({ x = "0", y = "0" }: { x: string; y: string }) => (
  <svg
    x={x}
    y={y}
    xmlns="http://www.w3.org/2000/svg"
    width="5"
    height="5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
    <path d="M3 12A9 3 0 0 0 21 12" />
  </svg>
);
