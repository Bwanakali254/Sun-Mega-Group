export const site = {
  name: "Sun Mega Limited",
  origin: "https://sun-mega-group.vercel.app",
  logoSrc: "/logo.svg",
  logoAlt: "Sun Mega Limited logo",
  tagline: "Powering spaces. Perfecting places.",
  description:
    "Sun Mega Limited brings together clean energy, architectural glasswork, and real estate services under one company — delivering practical solutions for the spaces you live, work, and invest in.",
  companyIntro:
    "From a rooftop solar system to a complete office fit-out or a property transaction, our teams manage design, supply and installation from start to finish.",
  shorterIntro:
    "Sun Mega Limited brings together clean energy, architectural glasswork, and real estate services under one company — delivering practical solutions for the spaces you live, work, and invest in.",
  copyrightName: "Sun Mega Limited",
  contact: {
    email: "support@sunmega.co.ke",
    phone: "+254 182 348454",
    location: "8th Floor Westpark Towers, Westlands, Nairobi, Kenya",
  },
} as const;

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Our Companies", to: "/#companies" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/#contact" },
] as const;

export const groupValues = [
  {
    title: "Certified installers",
    description: "Across all solution areas.",
  },
  {
    title: "One point of contact",
    description: "For multi-service projects.",
  },
  {
    title: "Local expertise",
    description: "Nationwide reach.",
  },
  {
    title: "After-sales support",
    description: "And maintenance.",
  },
] as const;

import estateHero from "../assets/estate-hero.png";
import estateCommercial from "../assets/estate-commercial.png";
import glassHero from "../assets/glass-hero.png";
import glassPartitions from "../assets/glass-partitions.jpeg";
import solarPanel from "../assets/solar-panel.jpg";

export const businessAreas = [
  {
    title: "Solar & Renewable Energy",
    description:
      "Clean energy solutions designed to improve efficiency, reduce operating costs, and support long-term performance.",
    image: estateHero,
  },
  {
    title: "Glass & Interior",
    description:
      "Architectural glass, interior partitions, and aluminium and glass works for homes, offices, and commercial spaces.",
    image: glassHero,
  },
  {
    title: "Real Estate & Property",
    description:
      "Residential and commercial property services, including management, leasing, sales, and acquisition support.",
    image: estateCommercial,
  },
] as const;

export const projectHighlights = [
  {
    name: "Commercial Solar Expansion",
    category: "Renewable Energy",
    description:
      "Large-scale rooftop installation designed to improve energy resilience and reduce operating costs.",
    image: solarPanel,
  },
  {
    name: "Executive Interior Fit-Out",
    category: "Glass & Interior",
    description:
      "Premium interior and glazing solutions for modern commercial and residential environments.",
    image: glassPartitions,
  },
  {
    name: "Urban Residential Development",
    category: "Property",
    description:
      "Contemporary residential concept designed for modern living, practical layout, and long-term value.",
    image: estateHero,
  },
] as const;

export const insights = [
  {
    title: "Sun Mega: building practical solutions across energy, glass and property",
    category: "Group Perspective",
    date: "January 2026",
    summary:
      "A practical approach to sustainable growth, design-led execution, and service delivery across the group’s core sectors.",
  },
  {
    title: "Opportunity, innovation, and long-term value",
    category: "Business Update",
    date: "February 2026",
    summary:
      "A forward-looking view on how integrated service delivery creates stronger outcomes for clients and communities.",
  },
  {
    title: "Building a stronger platform for growth",
    category: "Market View",
    date: "March 2026",
    summary:
      "A strategic look at how Sun Mega continues to shape a stronger platform for long-term business development.",
  },
] as const;

export const defaultSeo = {
  title: "Sun Mega Limited",
  description: site.description,
  ogImage: site.logoSrc,
} as const;
