import React from "react";
import Image from "next/image";
import { CopywritingData } from "@/types/portfolio";

const DEFAULT_COPYWRITING_DATA: CopywritingData = {
  items: [
    {
      id: "brand-voice",
      title: "Brand Voice + Pre-Launch Hype",
      imageSrc: "/copywritings/copywritings.png",
      width: 499,
      height: 430,
    },
    {
      id: "campaign",
      title: "Campaign Announcements+ Promotions",
      imageSrc: "/copywritings/copywritings1.png",
      width: 499,
      height: 466,
    },
    {
      id: "conversion",
      title: "Conversion-Focused Copy",
      imageSrc: "/copywritings/copywritings2.png",
      width: 664,
      height: 193,
    },
    {
      id: "intro",
      title: "Brand Messaging or App Introductory Copy",
      imageSrc: "/copywritings/copywritings3.png",
      width: 677,
      height: 185,
    },
  ],
};

export function CopywritingSection({ data = DEFAULT_COPYWRITING_DATA }: { data?: CopywritingData }) {
  // Use a fallback if images don't perfectly align to 4
  const items = data.items.slice(0, 4);

  return (
    <section className="w-full bg-[#FDF48F] px-4 sm:px-6 md:px-10 lg:px-16 2xl:px-20 py-16 sm:py-24 relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        
        {/* Title & Top Border */}
        <div className="mb-8">
          <h2 className="text-[#080E38] text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-4">
            COPYWRITINGS
          </h2>
          <div className="w-full h-1 bg-white"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {items.map((item) => (
            <div key={item.id} className="w-full flex items-start">
              <Image 
                src={item.imageSrc} 
                alt={item.title} 
                width={item.width || 1000}
                height={item.height || 1000}
                className="w-full h-auto object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
