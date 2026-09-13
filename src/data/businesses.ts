export type PanelTone = "paper" | "navy" | "cream";

export interface Business {
  id: "solar" | "glass" | "real-estate";
  name: string;
  sector: string;
  description: string;
  href: string;
  cta: string;
  external: boolean;
  panelTone: PanelTone;
}

export const businesses: Business[] = [
  {
    id: "solar",
    name: "Sun Mega Solar",
    sector: "Solar energy",
    description:
      "Solar solutions delivered by Sun Mega Limited. Visit the existing Solar website for products, projects, and enquiries.",
    href: "https://sunmega.co.ke/",
    cta: "Visit Sun Mega Solar",
    external: true,
    panelTone: "paper",
  },
  {
    id: "glass",
    name: "Glass & Interior",
    sector: "Architectural glass",
    description:
      "Architectural glass, interior partitions, and aluminium and glass works for homes, offices, and commercial spaces.",
    href: "/glass-interior",
    cta: "Explore Glass & Interior",
    external: false,
    panelTone: "navy",
  },
  {
    id: "real-estate",
    name: "Real Estate & Property Services",
    sector: "Property",
    description:
      "Residential and commercial property services, including management, leasing, sales, and acquisition support.",
    href: "/real-estate",
    cta: "Explore Real Estate",
    external: false,
    panelTone: "cream",
  },
];
