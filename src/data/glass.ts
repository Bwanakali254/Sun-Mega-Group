import glassHero from "../assets/glass-hero.png";
import glassPartitions from "../assets/glass-partitions.jpeg";
import glassRailings from "../assets/glass-railings.jpeg";
import glassShower from "../assets/glass-shower.png";

export const glassPage = {
  name: "Glass & Interior",
  eyebrow: "Sun Mega Limited",
  headline: "Architectural glass and interior systems, specified with care.",
  intro:
    "Glass & Interior Solutions is a Sun Mega Limited business focused on architectural glass, interior glass systems, and aluminium and glass works. We design and install solutions for residential, office, and commercial interiors.",
  seo: {
    title: "Glass & Interior | Sun Mega Limited",
    description:
      "Architectural glass, partitions, frameless systems, doors, shower enclosures, railings, and custom glass interiors from Sun Mega Limited.",
  },
  about:
    "The work is about light, proportion, and a clean finish. We specify glass systems that fit the building, then install them with a clear process from site measure through handover.",
  services: [
    {
      title: "Architectural glass",
      body: "Glazing specified for façades, openings, and interior architectural applications.",
    },
    {
      title: "Glass partitions",
      body: "Interior partitions that divide space while keeping light and sightlines.",
    },
    {
      title: "Frameless glass systems",
      body: "Minimal hardware systems for a continuous glass plane.",
    },
    {
      title: "Glass doors",
      body: "Hinged, sliding, and pivot glass doors for homes and workplaces.",
    },
    {
      title: "Shower enclosures",
      body: "Made-to-measure shower glass for bathrooms.",
    },
    {
      title: "Glass railings and balustrades",
      body: "Balustrade systems for stairs, landings, and terraces.",
    },
    {
      title: "Office glass partitions",
      body: "Meeting rooms, cellular offices, and open-plan glass walls.",
    },
    {
      title: "Interior glass solutions",
      body: "Screens, feature walls, and custom interior glass elements.",
    },
    {
      title: "Aluminium and glass works",
      body: "Aluminium frames and glass combined for windows, doors, and shopfronts.",
    },
    {
      title: "Custom glass solutions",
      body: "Bespoke sizes, finishes, and details where a standard system will not fit.",
    },
  ],
  approach: [
    {
      title: "Specified, not guessed",
      body: "Glass type, hardware, and finish are chosen against the space and how it will be used.",
    },
    {
      title: "Clean installation",
      body: "Site measure, fabrication, and fitting follow one sequence so edges, seals, and hardware align.",
    },
    {
      title: "Clear communication",
      body: "Scope, timing, and site requirements are agreed before work starts.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Brief and site measure",
      body: "We review the space, openings, and how the glass should perform.",
    },
    {
      step: "02",
      title: "Specification",
      body: "Glass, frames, hardware, and finishes are confirmed in writing.",
    },
    {
      step: "03",
      title: "Fabrication",
      body: "Panels and systems are prepared to the agreed sizes and details.",
    },
    {
      step: "04",
      title: "Install and handover",
      body: "Fitting, adjustment, and a walk-through of operation and care.",
    },
  ],
  serviceAreas:
    "We work with homeowners, interior designers, contractors, and businesses. Specific project locations can be confirmed when you get in touch.",
  projectsNote:
    "A selection of our completed Glass & Interior projects.",
  images: {
    hero: {
      src: glassHero,
      alt: "Modern office interior with floor-to-ceiling glass partitions",
    },
    gallery: [
      {
        src: glassPartitions,
        alt: "Aluminium and glass office partitions in daylight",
        title: "Aluminium and glass office partitions",
        description: "A clean office layout with full-height glazed partitions and a bright, open feel.",
      },
      {
        src: glassRailings,
        alt: "Staircase with a frameless glass balustrade",
        title: "Frameless glass staircase/railings",
        description: "Minimal glazing used to create a transparent staircase edge with an uninterrupted sightline.",
      },
      {
        src: glassShower,
        alt: "Frameless glass shower enclosure in a stone bathroom",
        title: "Frameless glass shower enclosure",
        description: "A compact shower installation defined by clear glass, clean lines, and a refined finish.",
      },
    ],
    caption: "Completed glass and interior installations.",
  },
  cta: {
    title: "Discuss a glass or interior project",
    body: "Share the space, drawings if you have them, and what you need the glass to do.",
  },
} as const;
