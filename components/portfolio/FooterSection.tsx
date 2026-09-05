import React from "react";
import { Phone, Mail } from "lucide-react";
import { FooterData } from "@/types/portfolio";

const DEFAULT_FOOTER_DATA: FooterData = {
  topText: "Well, that's the end!",
  heading: "Thanks for taking the time to review my portfolio!",
  handwrittenWord: "BYE",
  handwrittenSlashes: "/////",
  contact: {
    phone: "+8801814503122",
    email: "biozidalmahmud@gmail.com",
  },
};

export function FooterSection({ data = DEFAULT_FOOTER_DATA }: { data?: FooterData }) {
  return (
    <footer className="w-full flex flex-col">
      {/* Dark Blue Main Section */}
      <div className="w-full bg-[#080E38] px-4 sm:px-8 md:px-12 lg:px-20 py-20 md:py-32 relative overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col relative z-10">
          <p className="text-white/90 text-sm md:text-lg font-medium tracking-wide mb-8">
            {data.topText}
          </p>
          <h2 className="text-[#FDF48F] font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[110px] leading-[1.05] tracking-tight max-w-[1200px]">
            {data.heading}
          </h2>
        </div>

        {/* Handwritten 'BYE /////' decoration */}
        <div 
          className="absolute right-4 sm:right-12 md:right-24 bottom-12 md:bottom-20 rotate-[-8deg] flex items-end gap-2 sm:gap-4 select-none pointer-events-none"
          style={{ fontFamily: "var(--font-architects-daughter), 'Architects Daughter', cursive" }}
        >
          <span className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-[120px] leading-none">
            {data.handwrittenWord}
          </span>
          <span className="text-[#FDF48F] text-4xl sm:text-6xl md:text-7xl lg:text-[100px] leading-none mb-1 sm:mb-2 md:mb-4 lg:mb-6">
            {data.handwrittenSlashes}
          </span>
        </div>
      </div>

      {/* Bottom White Contact Bar */}
      <div className="w-full bg-white px-4 sm:px-8 py-6 md:py-8 border-t border-neutral-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-6 sm:gap-12">
          
          <a href={`tel:${data.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-[#080E38] hover:text-blue-700 transition-colors group">
            <div className="bg-[#080E38] text-white p-2 md:p-2.5 rounded-full group-hover:bg-blue-700 transition-colors">
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="font-bold text-sm md:text-base lg:text-lg tracking-wide">
              {data.contact.phone}
            </span>
          </a>

          <a href={`mailto:${data.contact.email}`} className="flex items-center gap-3 text-[#080E38] hover:text-blue-700 transition-colors group">
            <div className="bg-[#080E38] text-white p-2 md:p-2.5 rounded-full group-hover:bg-blue-700 transition-colors">
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="font-bold text-sm md:text-base lg:text-lg tracking-wide">
              {data.contact.email}
            </span>
          </a>

        </div>
      </div>
    </footer>
  );
}
