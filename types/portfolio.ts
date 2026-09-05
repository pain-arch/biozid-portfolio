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

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: "Instagram" | "MessageCircleHeart" | "PenTool" | "Target" | "Palette" | "Sparkles" | string;
}

export interface ServicesData {
  sectionTitle: string;
  items: ServiceItem[];
}

export interface ShowcaseData {
  title: string;
  description: string;
  quote: string;
  imageSrc: string;
  imageAlt: string;
}

export interface WorkGalleryData {
  title: string;
  images: {
    id: string;
    src: string;
    alt: string;
  }[];
}

export interface PortfolioProps {
  brandName?: string;
  logoSrc?: string;
  logoAlt?: string;
  navItems?: NavItem[];
  ctaText?: string;
  ctaHref?: string;
  hero?: HeroData;
  services?: ServicesData;
  about?: AboutData;
  showcase?: ShowcaseData;
  workGallery?: WorkGalleryData;
}

