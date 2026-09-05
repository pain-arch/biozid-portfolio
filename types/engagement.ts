export interface PieData {
  label: string;
  percentage: number;
  color: string;
}

export interface OverviewItem {
  label: string;
  value: string;
}

export interface EngagementOverview {
  id: string;
  summary: OverviewItem[];
  viewsTotal: string;
  viewsBreakdown: OverviewItem[];
  interactionsTotal: string;
  interactionsBreakdown: OverviewItem[];
  profileActivityTotal: string;
  profileActivityBreakdown: OverviewItem[];
}

export interface EngagementData {
  title: string;
  badge: string;
  interactions: {
    total: string;
    label: string;
    adsText: string;
    pieData: PieData[];
    footerLabel: string;
    footerValue: string;
    footerGrowth?: string;
  };
  views: {
    total: string;
    label: string;
    adsText: string;
    pieData: PieData[];
    footerLabel: string;
    footerValue: string;
    footerGrowth?: string;
  };
  quote: string;
  followers: {
    total: string;
    label: string;
    growth: string;
  };
  overviews: EngagementOverview[];
  galleryImages: { src: string; alt: string }[];
}
