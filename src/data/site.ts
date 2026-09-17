export const site = {
  name: "Sun Mega Limited",
  origin: "https://sun-mega-group.vercel.app",
  logoSrc: "/logo.svg",
  logoAlt: "Sun Mega Limited logo",
  tagline: "Building Sustainable Opportunities for the Future",
  description:
    "Sun Mega Limited is a diversified parent company connecting focused businesses across solar, glass and interior, and real estate with a shared vision for long-term value creation.",
  companyIntro:
    "Sun Mega Limited brings together complementary businesses under one strategic platform. The group model allows each venture to pursue its own focus while sharing a common vision for sustainable growth, quality, and strategic opportunity.",
  shorterIntro:
    "Placeholder introduction for official company information. Update this text with the approved group narrative once the client provides it.",
  copyrightName: "Sun Mega Limited",
  contact: {
    email: "support@sunmega.co.ke",
    phone: "0182348454",
    location: "Saramala Round, 2nd Floor\n2C, Mombasa, Kenya",
  },
} as const;

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/#about" },
  { label: "Our Companies", to: "/#companies" },
  { label: "Projects / What We Do", to: "/#projects" },
  { label: "News / Insights", to: "/#insights" },
  { label: "Contact", to: "/#contact" },
] as const;

export const groupValues = [
  {
    title: "Sustainable Development",
    description:
      "Placeholder value proposition for future brand messaging around responsible growth and long-term opportunity.",
  },
  {
    title: "Innovation",
    description:
      "A design principle that can evolve into stronger language around systems, products, and delivery excellence.",
  },
  {
    title: "Quality",
    description:
      "Conceptual messaging that highlights careful execution, durable solutions, and trusted delivery standards.",
  },
  {
    title: "Long-Term Growth",
    description:
      "A flexible placeholder for the group’s continuing investment in business development and strategic expansion.",
  },
] as const;

import estateHero from "../assets/estate-hero.png";
import estateCommercial from "../assets/estate-commercial.png";
import estateResidential from "../assets/estate-residential.png";
import glassHero from "../assets/glass-hero.png";
import glassPartitions from "../assets/glass-partitions.png";

export const businessAreas = [
  {
    title: "Solar & Renewable Energy",
    description:
      "Placeholder content for solar and renewable energy offerings within the broader group portfolio.",
    image: estateHero,
  },
  {
    title: "Glass & Interior",
    description:
      "Placeholder content for design-led glass, glazing, and interior solutions across commercial and residential spaces.",
    image: glassHero,
  },
  {
    title: "Real Estate & Property",
    description:
      "Placeholder content for property services, development, and strategic real-estate opportunities.",
    image: estateCommercial,
  },
] as const;

export const projectHighlights = [
  {
    name: "Commercial Solar Expansion",
    category: "Renewable Energy",
    description:
      "Sample project placeholder for a future solar deployment, designed to be replaced with official project information.",
    image: estateHero,
  },
  {
    name: "Executive Interior Fit-Out",
    category: "Glass & Interior",
    description:
      "Sample placeholder project for a premium interior or glazing installation concept within the group portfolio.",
    image: glassPartitions,
  },
  {
    name: "Urban Residential Development",
    category: "Property",
    description:
      "Sample placeholder project for a future residential or property concept until authentic project details are available.",
    image: estateResidential,
  },
] as const;

export const insights = [
  {
    title: "Sample insight: shaping the next chapter of the group",
    category: "Group Perspective",
    date: "January 2026",
    summary:
      "Placeholder article content for future company updates, thought leadership, and strategic insights.",
  },
  {
    title: "Sample article: opportunity, innovation, and long-term value",
    category: "Business Update",
    date: "February 2026",
    summary:
      "Placeholder feature for upcoming corporate stories and business updates across the group portfolio.",
  },
  {
    title: "Sample article: building a stronger platform for growth",
    category: "Market View",
    date: "March 2026",
    summary:
      "Placeholder content for planned company communications, market commentary, and business development updates.",
  },
] as const;

export const defaultSeo = {
  title: "Sun Mega Limited",
  description: site.description,
  ogImage: site.logoSrc,
} as const;
