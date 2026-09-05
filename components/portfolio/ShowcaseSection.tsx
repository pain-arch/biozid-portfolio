import React from "react";
import Image from "next/image";
import { ShowcaseData } from "@/types/portfolio";

interface ShowcaseSectionProps {
  data?: ShowcaseData;
}

const DEFAULT_SHOWCASE_DATA: ShowcaseData = {
  title: "Instagram management",
  description:
    "At Corner to Crossbar, I work across the entire content process, from finding the story to getting it in front of the right audience. From planning editorial calendars and developing story ideas to researching, writing, editing, and publishing, I help turn football shirts into stories people actually want to read.\n\nI’ve worked across stories covering football culture, shirt design, heritage, technology, business, and opinion, while adapting each idea for different platforms and audiences. The goal isn’t just to post about a shirt, it’s to find the story hidden inside the shirt and build content around it.",
  quote: "\"A football shirt is never just a shirt.\n There’s always a story behind it,\n my job is to find it, shape it,\n and make people care.\"",
  imageSrc: "/c2c.png",
  imageAlt: "Corner to Crossbar Instagram Profile Mockup",
};

export function ShowcaseSection({ data = DEFAULT_SHOWCASE_DATA }: ShowcaseSectionProps) {
  return (
    <section id="work" className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-16 2xl:px-20 py-16 sm:py-20 md:py-28 relative overflow-hidden">
      <div className="w-full max-w-[1750px] mx-auto bg-[#FDF48F] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] px-6 sm:px-12 md:px-16 lg:px-24 py-16 sm:py-24 lg:py-32 relative">
        
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Column: Title & Phone Mockup */}
          <div className="flex flex-col w-full max-w-[624px] mx-auto lg:mx-0">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#080E38] leading-none tracking-tight mb-8 sm:mb-12 text-center lg:text-left lg:pl-12 xl:pl-16 2xl:pl-20">
              {data.title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h2>

            {/* Image Wrapper */}
            <div className="relative w-full">
              <Image
                src={data.imageSrc}
                alt={data.imageAlt}
                width={800}
                height={1600}
                className="w-full h-auto object-contain"
                unoptimized
              />
            </div>
          </div>

          {/* Right Column: Text & Quote */}
          <div className="flex flex-col justify-center pt-8 lg:pt-32">
            <p className="text-[#080E38] text-[20px] leading-relaxed lg:leading-[1.8] font-medium mb-12 sm:mb-16 whitespace-pre-line">
              {data.description}
            </p>

            <div className="relative ml-0 sm:ml-12 lg:ml-24">
               {/* Handwritten style quote */}
              <p
                style={{ fontFamily: "var(--font-architects-daughter), 'Architects Daughter', cursive" }}
                className="text-[#080E38] text-2xl sm:text-3xl lg:text-4xl leading-snug sm:whitespace-pre-line -rotate-2"
              >
                {data.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



