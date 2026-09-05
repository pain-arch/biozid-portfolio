import React from "react";
import Image from "next/image";
import { BloombagsData } from "@/types/portfolio";

const DEFAULT_BLOOMBAGS_DATA: BloombagsData = {
  title: "BLOOMBAGS: STRATEGIC SOCIAL MEDIA MANAGEMENT (2023-2024)",
  strategicPlanning: {
    title: "STRATEGIC PLANNING",
    description: "DEVELOPED AND EXECUTED CONTENT CALENDARS ALIGNED WITH BRAND GOALS",
    imageSrc: "/blombags4.jpg",
  },
  contentCreation: {
    title: "CONTENT CREATION",
    description: "DESIGNED POSTS, WROTE CAPTION COPYS, DIRECTED 20+ REELS",
    imageSrc: "/blombags3.jpg",
  },
  communityBuilding: {
    title: "COMMUNITY BUILDING",
    description: "MONITORED PERFORMANCE METRICS TO REFINE STRATEGIES",
    imageSrc: "/blombags5.jpg",
    imageSrc2: "/blombags6.jpg",
  },
  analytics: {
    title: "ANALYTICS",
    description: "MONITORED PERFORMANCE METRICS TO REFINE STRATEGIES",
    imageSrc: "/blombags7.jpg",
    imageSrc2: "/blombags8.jpg",
  },
  contributions: {
    title: "ADDITIONAL CREATIVE CONTRIBUTIONS",
    skills: [
      "SCRIPT WRITING",
      "SHOOTING",
      "INFLUENCER COLLABORATIONS",
      "DIRECTION",
      "CINEMATOGRAPHY",
      "PHOTOGRAPHY",
    ],
    imageSrc1: "/blombags1.png",
    imageSrc2: "/blombags2.png",
  },
};

export function BloombagsSection({ data = DEFAULT_BLOOMBAGS_DATA }: { data?: BloombagsData }) {
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
                  <Image src={data.strategicPlanning.imageSrc} alt="" fill className="object-cover" />
                </div>
                <div className="w-full sm:w-[45%] text-[#080E38] font-bold text-xs md:text-sm lg:text-base leading-snug uppercase">
                  {data.strategicPlanning.description}
                </div>
              </div>
            </div>

            {/* Content Creation */}
            <div className="p-6 lg:p-10 border-b-2 border-[#FDF48F]">
              <h3 className="text-[#080E38] text-lg lg:text-xl font-bold text-center mb-8">{data.contentCreation.title}</h3>
              <div className="flex flex-col sm:flex-row xl:flex-row gap-6 items-center xl:items-start">
                <div className="w-full sm:w-[55%] relative aspect-[4/3] md:aspect-video">
                  <Image src={data.contentCreation.imageSrc} alt="" fill className="object-cover" />
                </div>
                <div className="w-full sm:w-[45%] text-[#080E38] font-bold text-xs md:text-sm lg:text-base leading-snug uppercase">
                  {data.contentCreation.description}
                </div>
              </div>
            </div>

            {/* Community Building */}
            <div className="p-6 lg:p-10 border-b-2 lg:border-b-0 md:border-r-2 border-[#FDF48F]">
              <h3 className="text-[#080E38] text-lg lg:text-xl font-bold text-center mb-8">{data.communityBuilding.title}</h3>
              <div className="flex flex-col sm:flex-row xl:flex-row gap-6 items-center xl:items-start">
                <div className="w-full sm:w-[55%] flex gap-2">
                  <div className="w-1/2 relative aspect-[3/4]">
                    <Image src={data.communityBuilding.imageSrc} alt="" fill className="object-cover" />
                  </div>
                  {data.communityBuilding.imageSrc2 && (
                    <div className="w-1/2 relative aspect-[3/4]">
                      <Image src={data.communityBuilding.imageSrc2} alt="" fill className="object-cover" />
                    </div>
                  )}
                </div>
                <div className="w-full sm:w-[45%] text-[#080E38] font-bold text-xs md:text-sm lg:text-base leading-snug uppercase">
                  {data.communityBuilding.description}
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div className="p-6 lg:p-10 border-b-2 lg:border-b-0 border-[#FDF48F]">
              <h3 className="text-[#080E38] text-lg lg:text-xl font-bold text-center mb-8">{data.analytics.title}</h3>
              <div className="flex flex-col sm:flex-row xl:flex-row gap-6 items-center xl:items-start">
                <div className="w-full sm:w-[55%] flex gap-2">
                  <div className="w-1/2 relative aspect-[3/5]">
                    <Image src={data.analytics.imageSrc} alt="" fill className="object-cover" />
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
            <h3 className="text-[#080E38] text-lg lg:text-xl font-bold text-center mb-10 w-3/4">{data.contributions.title}</h3>
            
            <div className="w-full flex flex-col gap-2 mb-10 text-[#080E38] font-bold text-xs md:text-sm lg:text-base pl-4 sm:pl-10 lg:pl-4 xl:pl-10">
              {data.contributions.skills.map((skill, i) => (
                <div key={i}>{skill}</div>
              ))}
            </div>

            <div className="w-full flex gap-4 justify-center px-4 sm:px-12 lg:px-4 xl:px-8 mt-auto">
              <div className="w-1/2 relative aspect-[9/18]">
                <Image src={data.contributions.imageSrc1} alt="" fill className="object-cover rounded-md overflow-hidden" />
              </div>
              <div className="w-1/2 relative aspect-[9/18]">
                <Image src={data.contributions.imageSrc2} alt="" fill className="object-cover rounded-md overflow-hidden" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
