import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroData } from "@/types/portfolio";
import {
  SparkleGroup,
  HatchSlashes,
  OrbitRing,
} from "./DecorativeGraphics";

interface HeroSectionProps {
  data?: HeroData;
}

const DEFAULT_HERO_DATA: HeroData = {
  greeting: "Biozid Al Mahmud",
  roleLine1: "Digital Content",
  roleLine2: "Strategist",
  resumeButtonText: "Resume",
  resumeUrl: "#resume",
  portraitSrc: "/BIL81042.jpg",
  portraitAlt: "Portrait of Biozid",
};

export function HeroSection({ data = DEFAULT_HERO_DATA }: HeroSectionProps) {
  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="w-full bg-white pt-6 sm:pt-10 md:pt-14 lg:pt-20 pb-16 sm:pb-20 md:pb-24 lg:pb-32 overflow-x-clip"
    >
      <div className="w-full max-w-7xl 2xl:max-w-[1750px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 2xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 lg:gap-12 items-center">
          {/* Left Column: Intro text, large headline, Resume CTA */}
          <div className="md:col-span-7 flex flex-col items-start justify-center order-2 md:order-1 text-left">
            {/* Greeting */}
            <p className="text-lg sm:text-xl md:text-3xl font-semibold text-[#080E38] tracking-tight mb-2 sm:mb-3">
              {data.greeting}
            </p>

            {/* Display Headline: 2 lines with refined text scale */}
            <h1 className="font-black text-[#080E38] tracking-tight leading-[0.98] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5.25rem] 2xl:text-[clamp(4.25rem,5.8vw,6.5rem)] mb-8 sm:mb-10 lg:mb-12">
              <span className="block">{data.roleLine1}</span>
              <span className="block">{data.roleLine2}</span>
            </h1>

            {/* Resume Button with subtle neo-brutalist shadow & interactive lift */}
            {/* <div className="pt-1">
              <Link
                href={data.resumeUrl}
                className="inline-flex items-center justify-center min-h-[44px] min-w-[140px] px-8 py-3 rounded-xl bg-[#FDF184] hover:bg-[#FEEF72] text-[#282A15] font-medium text-base sm:text-lg border-[1.5px] border-[#3D3E29] shadow-[3px_3px_0px_0px_rgba(61,62,41,0.4)] hover:shadow-[1px_1px_0px_0px_rgba(61,62,41,0.4)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#080E38]"
              >
                {data.resumeButtonText}
              </Link>
            </div> */}
          </div>

          {/* Right Column: Circular portrait asset with sparkles, orbit ring, and hatch slashes */}
          <div className="md:col-span-5 flex items-center justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[390px] lg:h-[390px] xl:w-[460px] xl:h-[460px] 2xl:w-[510px] 2xl:h-[510px] select-none">
              {/* Offset Orbit Ring (intertwining decorative circle) */}
              <div
                className="absolute w-[105%] h-[105%] -top-[3%] -right-[4%] rounded-full border border-[#7C6C38]/70 pointer-events-none"
                aria-hidden="true"
              />

              {/* Sparkle Group (Top-Right Stars) */}
              <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 z-20 pointer-events-none">
                <SparkleGroup className="w-full h-full" />
              </div>

              {/* Diagonal Hatch Slashes (Bottom-Left "////") */}
              <div className="absolute bottom-[22%] -left-5 sm:-left-7 md:-left-8 w-14 sm:w-16 md:w-20 z-20 pointer-events-none">
                <HatchSlashes className="w-full h-auto" />
              </div>

              {/* Circular Photo Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-2 border-white/60 bg-neutral-100">
                <Image
                  src={data.portraitSrc}
                  alt={data.portraitAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 390px, (max-width: 1440px) 460px, 510px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

