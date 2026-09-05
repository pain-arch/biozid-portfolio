import React from "react";
import { AboutData } from "@/types/portfolio";
import { AboutMeScript } from "./DecorativeGraphics";

interface AboutSectionProps {
  data?: AboutData;
}

const DEFAULT_ABOUT_DATA: AboutData = {
  title: "Hi, I'm Biozid Al Mahmud.",
  bio: [
    "I don't just build the strategy, I bring it to life. With a background in Public Relations and an obsession with visual storytelling, I specialize in turning digital identities into scroll-stopping experiences.",
    "From quirky memes to cinematic reels, I craft content that not only looks good but feels right, and most importantly, drives tangible growth. Whether I am mapping out user journeys, analyzing platform algorithms, or actually filming the content to launch a new campaign, I partner with founders and marketing teams to bring strategy and style together. Let's make your online presence unmissable.",
    "When I am not digging into analytics dashboards or editing reels, you can find me in the mountains or researching which perfume I should buy next.",
  ],
};

export function AboutSection({ data = DEFAULT_ABOUT_DATA }: AboutSectionProps) {
  return (
    <section
      id="about"
      aria-label="About Section"
      className="w-full bg-[#FCF48D] relative pt-14 sm:pt-16 md:pt-24 lg:pt-28 pb-16 sm:pb-20 md:pb-28 lg:pb-36 overflow-x-clip"
    >
      {/* Decorative "ABOUT ME" Calligraphic Overlay straddling the top seam */}
      <div className="absolute top-0 right-4 sm:right-8 md:right-16 lg:right-24 xl:right-32 -translate-y-1/2 z-20 pointer-events-none select-none">
        <div className="transform -rotate-[6deg] w-48 sm:w-60 md:w-72 lg:w-84 xl:w-96 transition-transform">
          <AboutMeScript className="w-full h-auto drop-shadow-sm" />
        </div>
      </div>

      <div className="w-full max-w-7xl 2xl:max-w-[1750px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 2xl:px-20">
        <div className="max-w-5xl 2xl:max-w-6xl">
          {/* Greeting / Name Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-[#080E38] tracking-tight mb-6 sm:mb-8 md:mb-10">
            {data.title}
          </h2>

          {/* Narrative Bio */}
          <div className="space-y-6">
            {data.bio.map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg md:text-xl lg:text-[1.32rem] leading-relaxed sm:leading-relaxed md:leading-[1.75] lg:leading-[1.8] text-[#161C3D] font-normal"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

