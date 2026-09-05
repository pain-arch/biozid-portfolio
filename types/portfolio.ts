export interface NavItem {
  label: string;
  href: string;
}

export interface HeroData {
  greeting: string;
  roleLine1: string;
  roleLine2: string;
  resumeButtonText: string;
  resumeUrl: string;
  portraitSrc: string;
  portraitAlt: string;
}

export interface AboutData {
  title: string;
  bio: string[];
  handwrittenScriptText?: string;
}

export interface PortfolioProps {
  brandName?: string;
  logoSrc?: string;
  logoAlt?: string;
  navItems?: NavItem[];
  ctaText?: string;
  ctaHref?: string;
  hero?: HeroData;
  about?: AboutData;
}

