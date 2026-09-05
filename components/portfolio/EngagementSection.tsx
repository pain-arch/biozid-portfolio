import React from "react";
import Image from "next/image";

const GALLERY_IMAGES = [
  { src: "/engagement/image.png", alt: "Engagement Highlight" },
  { src: "/engagement/Screenshot_20260904-220635.png", alt: "Analytics 1" },
  { src: "/engagement/Screenshot_20260904-220744.png", alt: "Analytics 2" },
  { src: "/engagement/Screenshot_20260904-220759.png", alt: "Analytics 3" },
  { src: "/engagement/Screenshot_20260904-220857.png", alt: "Analytics 4" },
  { src: "/engagement/Screenshot_20260904-220923.png", alt: "Analytics 5" },
  { src: "/engagement/Screenshot_20260904-221009.png", alt: "Analytics 6" },
  { src: "/engagement/Screenshot_20260905-223444.png", alt: "Analytics 7" },
  { src: "/engagement/Screenshot_20260905-223525.png", alt: "Analytics 8" },
  { src: "/engagement/Screenshot_20260905-223623.png", alt: "Analytics 9" },
];

export function EngagementSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-16 2xl:px-20 py-16 sm:py-24 relative">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-12">
        
        {/* Header Title & Badge */}
        <div className="flex flex-col items-center sm:items-start gap-8 mb-4">
          <h2 style={{ fontFamily: "var(--font-architects-daughter), 'Architects Daughter', cursive" }} className="text-[#080E38] text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-center sm:text-left leading-tight">
            HOW'S THE ENGAGEMENT?
          </h2>
          <div className="inline-block bg-[#FDF48F] border-2 border-[#080E38] rounded-md px-8 py-3 text-[#080E38] font-bold text-xl sm:text-2xl shadow-[4px_4px_0px_0px_rgba(8,14,56,1)]">
            Achievements
          </div>
        </div>

        {/* Highlight Image (Full Width) */}
        <div className="w-full mb-6">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-neutral-200/50 bg-white">
            <Image
              src={GALLERY_IMAGES[0].src}
              alt={GALLERY_IMAGES[0].alt}
              width={945}
              height={544}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </div>
        </div>

        {/* Analytics Image Gallery (Bento Masonry) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {GALLERY_IMAGES.slice(1).map((img, idx) => (
            <div key={idx} className="break-inside-avoid relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-neutral-200/50 bg-white">
              <Image
                src={img.src}
                alt={img.alt}
                width={864}
                height={1920}
                className="w-full h-auto object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
