import React from "react";

/**
 * Four-pointed decorative star (sparkle) component matching the top-right
 * accent in the design.
 */
export function SparkleGroup({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Lower / Left larger star */}
      <path
        d="M24 6 C24 16 16 24 6 24 C16 24 24 32 24 42 C24 32 32 24 42 24 C32 24 24 16 24 6Z"
        fill="#2B2D19"
      />
      {/* Upper / Right smaller star */}
      <path
        d="M58 2 C58 10 52 16 44 16 C52 16 58 22 58 30 C58 22 64 16 72 16 C64 16 58 10 58 2Z"
        fill="#2B2D19"
      />
    </svg>
  );
}

/**
 * Four diagonal accent hatch lines ("////") positioned at the lower-left
 * border of the hero circular portrait.
 */
export function HatchSlashes({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 70 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <line
        x1="12"
        y1="34"
        x2="24"
        y2="2"
        stroke="#2B2D19"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <line
        x1="26"
        y1="34"
        x2="38"
        y2="2"
        stroke="#2B2D19"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <line
        x1="40"
        y1="34"
        x2="52"
        y2="2"
        stroke="#2B2D19"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <line
        x1="54"
        y1="34"
        x2="66"
        y2="2"
        stroke="#2B2D19"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Accent orbit halo ring that subtly offsets the portrait circle.
 */
export function OrbitRing({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none select-none rounded-full border border-[#7C6C38]/70 ${className}`}
      aria-hidden="true"
    />
  );
}

/**
 * Handwritten calligraphy "ABOUT ME" matching the artisanal marker script
 * at the transition between the white hero and yellow section.
 */
export function AboutMeScript({ className = "" }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="About Me"
      className={`relative inline-block select-none ${className}`}
    >
      <svg
        viewBox="0 0 280 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
      >
        <g stroke="#080E38" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
          {/* 'A' */}
          <path d="M12 70 L26 12 L44 70" />
          <path d="M18 46 L38 46" />

          {/* 'B' */}
          <path d="M52 14 L52 70" />
          <path d="M52 14 C66 14 74 22 74 30 C74 38 64 42 52 42" />
          <path d="M52 42 C68 42 78 48 78 58 C78 68 66 70 52 70" />

          {/* 'O' */}
          <path d="M102 14 C88 14 84 30 84 42 C84 56 90 70 104 70 C118 70 122 54 122 42 C122 28 116 14 102 14 Z" />

          {/* 'U' */}
          <path d="M132 16 L132 52 C132 64 140 70 150 70 C160 70 166 62 166 50 L166 16" />

          {/* 'T' */}
          <path d="M172 16 L204 16" />
          <path d="M188 16 L188 70" />

          {/* 'M' */}
          <path d="M214 70 L214 16 L228 54 L242 16 L242 70" />

          {/* 'E' */}
          <path d="M256 16 L256 70" />
          <path d="M256 16 L280 16" />
          <path d="M256 42 L274 42" />
          <path d="M256 70 L280 70" />
        </g>
      </svg>
    </div>
  );
}

