import React from "react";
import { ServicesData } from "@/types/portfolio";
import { ServiceCard } from "./ServiceCard";

interface ServicesSectionProps {
  data?: ServicesData;
}

const DEFAULT_SERVICES_DATA: ServicesData = {
  sectionTitle: "Contents",
  items: [
    {
      id: "s1",
      title: "Social Media Management",
      description: "Boosting growth with smart content and consistent engagement.",
      iconName: "Share2",
    },
    {
      id: "s2",
      title: "Content Engagement",
      description: "Actively connecting with the audience to build lasting relationships.",
      iconName: "MessageCircleHeart",
    },
    {
      id: "s3",
      title: "Content Creation",
      description: "Planning content that aligns with the brand and keeps audiences engaged.",
      iconName: "PenTool",
    },
    {
      id: "s4",
      title: "Campaign Strategy",
      description: "Building a strong professional presence with meaningful content.",
      iconName: "Target",
    },
    {
      id: "s5",
      title: "Graphics & Copy",
      description: "Creating visuals that capture the brand's style. - email, brochure, posters",
      iconName: "Palette",
    },
    {
      id: "s6",
      title: "Leveraging AI",
      description: "Prompt generated posts for brands.",
      iconName: "Sparkles",
    },
  ],
};

export function ServicesSection({ data = DEFAULT_SERVICES_DATA }: ServicesSectionProps) {
  return (
    <section
      id="services"
      aria-label="Services and Contents"
      className="w-full bg-white pt-16 sm:pt-20 md:pt-28 pb-16 sm:pb-20 md:pb-28"
    >
      <div className="w-full max-w-7xl 2xl:max-w-[1750px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 2xl:px-20">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#080E38] tracking-tight mb-12 sm:mb-16 md:mb-20">
          {data.sectionTitle}
        </h2>

        {/* CSS Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {data.items.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

