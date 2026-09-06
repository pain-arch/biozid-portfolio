import React from "react";
import Image from "next/image";
import { SanFernandoData } from "@/types/portfolio";

const DEFAULT_SANFERNANDO_DATA: SanFernandoData = {
  title: "SANFARNANDO VALLY: CROSS PLATFORM GROWTH (2024-2026)",
  strategicPlanning: {
    title: "STRATEGIC PLANNING",
    description: "DEVELOPED AND EXECUTED CONTENT CALENDARS ALIGNED WITH BRAND GOALS",
    imageSrc: "/sanfarnando1.jpg",
  },
  contentEditing: {
    title: "CONTENT EDITNG",
    description: "CURATED AND EDITED THE CONTENTS OF THE BRAND",
    imageSrc: "/sanfarnando4.jpg",
  },
  communityBuilding: {
    title: "",
    images: ["/sanfarnando5.jpg", "/sanfarnando6.jpg", "/sanfarnando7.jpg"],
  },
  analytics: {
    title: "ANALYTICS",
    description: "MONITORED PERFOMANCE METRICS TO REFINE STRATEGIES",
    imageSrc: "/sanfarnando2.jpg",
    imageSrc2: "/sanfarnando3.jpg",
  },
  keyNumbers: {
    title: "KEY NUMBERS",
    stats: [
      { value: "18K → 29K", label: "INSTAGRAM FOLLOWERS" },
      { value: "60,000+", label: "VIEWS ON STANDOUT VIDEOS" },
      { value: "1,300+", label: "TIKTOK FOLLOWERS" },
      { value: "5,000+", label: "TIKTOK LIKES" },
      { value: "MILLIONS OF", label: "TIKTOK VIEWS" },
    ],
  },
};

export function SanFernandoSection({ data = DEFAULT_SANFERNANDO_DATA }: { data?: SanFernandoData }) {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-16 2xl:px-20 py-16 sm:py-24 relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto">
        
        {/* Title & Top Border */}
        <div className="mb-8">
          <h2 className="text-[#080E38] text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-4">
            {data.title}
          </h2>
          <div className="w-full h-1 bg-[#FDF48F]"></div>
        </div>

        {/* Grid Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          
          {/* Left Two Columns Wrapper (2x2 Grid) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2">
            
            {/* Strategic Planning */}
            <div className="p-6 lg:p-10 border-b-2 md:border-r-2 border-[#FDF48F]">
              <h3 className="text-[#080E38] text-lg lg:text-xl font-bold text-center mb-8">{data.strategicPlanning.title}</h3>
              <div className="flex flex-col sm:flex-row xl:flex-row gap-6 items-center xl:items-start">
                <div className="w-full sm:w-[55%] relative aspect-video">
                  {data.strategicPlanning.imageSrc && (
                    <Image src={data.strategicPlanning.imageSrc} alt="" fill className="object-cover" />
                  )}
                </div>
                <div className="w-full sm:w-[45%] text-[#080E38] font-bold text-xs md:text-sm lg:text-base leading-snug uppercase">
                  {data.strategicPlanning.description}
                </div>
              </div>
            </div>

            {/* Content Editing */}
            <div className="p-6 lg:p-10 border-b-2 border-[#FDF48F]">
              <h3 className="text-[#080E38] text-lg lg:text-xl font-bold text-center mb-8">{data.contentEditing.title}</h3>
              <div className="flex flex-col sm:flex-row xl:flex-row gap-6 items-center xl:items-start">
                <div className="w-full sm:w-[55%] relative aspect-[4/3] md:aspect-video">
                  {data.contentEditing.imageSrc && (
                    <Image src={data.contentEditing.imageSrc} alt="" fill className="object-cover" />
                  )}
                </div>
                <div className="w-full sm:w-[45%] text-[#080E38] font-bold text-xs md:text-sm lg:text-base leading-snug uppercase">
                  {data.contentEditing.description}
                </div>
              </div>
            </div>

            {/* Community Building (No title in the mockup block itself except the image text, but we'll include it if it exists or we just show images) */}
            <div className="p-6 lg:p-10 border-b-2 lg:border-b-0 md:border-r-2 border-[#FDF48F]">
               {/* Actually the mockup shows no title here, just 3 images */}
              <h3 className="text-[#080E38] text-lg lg:text-xl font-bold text-center mb-8">{data.communityBuilding.title}</h3>
              <div className="flex flex-row gap-2 w-full h-[200px] sm:h-[250px] lg:h-[300px]">
                {data.communityBuilding.images?.map((src, i) => (
                  <div key={i} className="flex-1 relative">
                    <Image src={src} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Analytics */}
            <div className="p-6 lg:p-10 border-b-2 lg:border-b-0 border-[#FDF48F]">
              <h3 className="text-[#080E38] text-lg lg:text-xl font-bold text-center mb-8">{data.analytics.title}</h3>
              <div className="flex flex-col sm:flex-row xl:flex-row gap-6 items-center xl:items-start">
                <div className="w-full sm:w-[55%] flex gap-2">
                  <div className="w-1/2 relative aspect-[3/5]">
                    {data.analytics.imageSrc && <Image src={data.analytics.imageSrc} alt="" fill className="object-cover" />}
                  </div>
                  {data.analytics.imageSrc2 && (
                    <div className="w-1/2 relative aspect-[3/5]">
                      <Image src={data.analytics.imageSrc2} alt="" fill className="object-cover" />
                    </div>
                  )}
                </div>
                <div className="w-full sm:w-[45%] text-[#080E38] font-bold text-xs md:text-sm lg:text-base leading-snug uppercase">
                  {data.analytics.description}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Spans full height on desktop) */}
          <div className="p-6 lg:p-10 flex flex-col items-center lg:border-l-2 border-[#FDF48F]">
            <h3 className="text-[#080E38] text-lg lg:text-xl font-bold text-center mb-10 w-3/4">{data.keyNumbers.title}</h3>
            
            <div className="w-full flex flex-col gap-10 text-[#080E38] text-center mt-4">
              {data.keyNumbers.stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="font-bold text-2xl lg:text-3xl">{stat.value}</div>
                  <div className="font-bold text-xs sm:text-sm uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
