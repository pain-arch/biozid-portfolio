"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NavItem } from "@/types/portfolio";

interface NavbarProps {
  brandName?: string;
  logoSrc?: string;
  logoAlt?: string;
  navItems?: NavItem[];
  ctaText?: string;
  ctaHref?: string;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
];

export function Navbar({
  brandName,
  logoSrc = "/biozid_logo.png",
  logoAlt = "Biozid Logo",
  navItems = DEFAULT_NAV_ITEMS,
  ctaText = "Let's connect!",
  ctaHref = "mailto:biozidalmahmud@gmail.com",
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white relative z-40 border-b border-transparent">
      <nav
        aria-label="Main Navigation"
        className="w-full max-w-7xl 2xl:max-w-[1750px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 2xl:px-20 py-5 sm:py-6 flex items-center justify-between"
      >
        {/* Brand / Logo: Display only the logo image */}
        <Link
          href="#home"
          className="inline-flex items-center justify-center hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#080E38] rounded-sm"
          aria-label={brandName || logoAlt}
        >
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={64}
              height={64}
              priority
              className="h-[53px] w-[53px] sm:h-16 sm:w-16 object-contain hover:scale-105 transition-transform"
            />
          ) : (
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#080E38]">
              {brandName}
            </span>
          )}
        </Link>

        {/* Desktop & Tablet Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[#1E293B] hover:text-[#080E38] font-medium text-base transition-colors relative py-1 focus-visible:outline-2 focus-visible:outline-[#080E38] rounded-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#080E38] hover:after:w-full after:transition-all after:duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden md:block">
          <a
            href={ctaHref}
            className="text-base font-bold text-[#080E38] hover:text-[#18205C] transition-colors py-2 px-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#080E38] rounded-sm inline-flex items-center gap-1 group"
          >
            <span>{ctaText}</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="md:hidden inline-flex items-center justify-center p-2.5 min-w-[44px] min-h-[44px] rounded-lg text-[#080E38] hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-[#080E38] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-white/95 backdrop-blur-md border-b border-neutral-200 px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[#1E293B] hover:text-[#080E38] py-2 px-3 rounded-md hover:bg-neutral-50 min-h-[44px] flex items-center transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-neutral-100">
              <a
                href={ctaHref}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-[#080E38] hover:text-[#18205C] py-2 px-3 rounded-md hover:bg-neutral-50 min-h-[44px] flex items-center transition-colors"
              >
                {ctaText}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

