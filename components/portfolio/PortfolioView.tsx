import React from "react";
import { PortfolioProps } from "@/types/portfolio";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { ServicesSection } from "./ServicesSection";
import { AboutSection } from "./AboutSection";
import { ShowcaseSection } from "./ShowcaseSection";
import { WorkGallerySection } from "./WorkGallerySection";
import { VideoShowcaseSection } from "./VideoShowcaseSection";

import { EngagementSection } from "./EngagementSection";
import { BloombagsSection } from "./BloombagsSection";
import { SanFernandoSection } from "./SanFernandoSection";
import { FooterSection } from "./FooterSection";

export function PortfolioView({
  brandName,
  logoSrc,
  logoAlt,
  navItems,
  ctaText,
  ctaHref,
  hero,
  services,
  about,
  showcase,
  workGallery,
  videoShowcase,
  bloombags,
  sanfernando,
  footer,
}: PortfolioProps = {}) {
  return (
    <div className="w-full min-h-screen bg-white text-[#080E38] selection:bg-[#FDF184] selection:text-[#080E38] flex flex-col font-sans overflow-x-clip">
      {/* Navigation Bar */}
      <Navbar
        brandName={brandName}
        logoSrc={logoSrc}
        logoAlt={logoAlt}
        navItems={navItems}
        ctaText={ctaText}
        ctaHref={ctaHref}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full flex flex-col">
        {/* Hero Section */}
        <HeroSection data={hero} />

        {/* About Section */}
        <AboutSection data={about} />

        {/* Services Section */}
        <ServicesSection data={services} />

        {/* Showcase Section */}
        <ShowcaseSection data={showcase} />

        {/* Work Gallery Section */}
        <WorkGallerySection data={workGallery} />

        {/* Video & Reel Showcase Section */}
        <VideoShowcaseSection data={videoShowcase} />

        {/* Engagement Section */}
        <EngagementSection />

        {/* Bloombags Section */}
        <BloombagsSection data={bloombags} />

        {/* San Fernando Section */}
        <SanFernandoSection data={sanfernando} />
      </main>

      {/* Footer Section */}
      <FooterSection data={footer} />
    </div>
  );
}

