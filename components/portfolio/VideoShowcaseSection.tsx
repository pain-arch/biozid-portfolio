"use client";

import React from "react";
import { VideoShowcaseData } from "@/types/portfolio";

interface VideoShowcaseSectionProps {
  data?: VideoShowcaseData;
}

const DEFAULT_VIDEO_DATA: VideoShowcaseData = {
  sectionTitle: "Reels & Video Production",
  embedUrl: "https://www.instagram.com/reel/DYFixHHo4TZ/",
  reels: [
    {
      id: "reel-1",
      title: "Coffee & Matcha",
      instagramUrl: "https://www.instagram.com/reel/DYFixHHo4TZ/",
    },
    {
      id: "reel-2",
      title: "The Witch's Cottage",
      instagramUrl: "https://www.instagram.com/reel/DRiTZ69kpDj/",
    },
    {
      id: "reel-3",
      title: "Architecture & Aesthetics",
      instagramUrl: "https://www.instagram.com/reel/DSnccC7kW0_/",
    },
    {
      id: "reel-4",
      title: "Match Day Atmosphere",
      instagramUrl: "https://www.instagram.com/reel/DHrUD0zymG6/",
    },
    {
      id: "reel-5",
      title: "POV: World Cup Match",
      instagramUrl: "https://www.instagram.com/reel/DDLVKtHyIU7/",
    },
    {
      id: "reel-6",
      title: "FIFA World Cup 2026",
      instagramUrl: "https://www.instagram.com/reel/DMJkHvDPayK/",
    },
  ],
};

export function VideoShowcaseSection({ data = DEFAULT_VIDEO_DATA }: VideoShowcaseSectionProps) {
  const reels = data.reels && data.reels.length > 0 ? data.reels : DEFAULT_VIDEO_DATA.reels;

  // Helper to extract clean embed URL for Instagram iframe
  const getEmbedUrl = (url?: string) => {
    if (!url) return "https://www.instagram.com/reel/DYFixHHo4TZ/embed/";
    const cleanUrl = url.split("?")[0].replace(/\/$/, "");
    return `${cleanUrl}/embed/`;
  };

  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-16 2xl:px-20 py-12 sm:py-16 md:py-24 relative overflow-hidden">
      <div className="w-full max-w-[1750px] mx-auto">
        {/* 6-Video Live Embedded Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-start">
          {reels.map((reel) => {
            const embedUrl = getEmbedUrl(reel.instagramUrl);
            return (
              <div
                key={reel.id}
                className="group relative w-full aspect-[9/14] sm:aspect-[9/15] md:aspect-[9/15.5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-neutral-200/40 bg-black"
              >
                {/* Pure playable video area: perfectly cropped so only the video is visible */}
                <div className="absolute inset-0 w-full h-[155%] -top-[48px] overflow-hidden pointer-events-auto">
                  <iframe
                    src={embedUrl}
                    className="w-full h-full border-0"
                    allowTransparency={true}
                    allow="encrypted-media; autoplay; clipboard-write; picture-in-picture"
                    scrolling="no"
                    title={reel.title || "Instagram Reel"}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
