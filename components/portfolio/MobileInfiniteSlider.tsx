"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

interface MobileInfiniteSliderProps {
  images: GalleryImage[];
}

export function MobileInfiniteSlider({ images }: MobileInfiniteSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll functionality (optional, but requested "infinite smooth loop")
  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds per slide
    
    return () => clearInterval(timer);
  }, [images.length, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div 
      className="w-full flex flex-col items-center pb-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Slider Viewport */}
      <div className="w-full overflow-hidden rounded-2xl bg-transparent mb-6 relative">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image) => (
            <div key={image.id} className="w-full shrink-0 flex items-start justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={1000}
                className="w-full h-auto object-contain rounded-2xl"
                sizes="100vw"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Arrows */}
      <div className="flex items-center justify-center space-x-6">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-white shadow-md hover:bg-[#080E38] hover:text-white transition-colors border-2 border-[#080E38]"
          aria-label="Previous image"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        
        {/* Pagination Dots */}
        <div className="flex space-x-2">
          {images.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-6 bg-[#080E38]" : "w-2 bg-black/20"
              }`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-white shadow-md hover:bg-[#080E38] hover:text-white transition-colors border-2 border-[#080E38]"
          aria-label="Next image"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

