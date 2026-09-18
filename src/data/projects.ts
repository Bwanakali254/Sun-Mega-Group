import estateCommercial from "../assets/estate-commercial.png";
import estateHero from "../assets/estate-hero.png";
import project1 from "../assets/glass Interior/Project-1 (1).jpeg";
import project2 from "../assets/glass Interior/Project-1 (2).jpeg";
import project3 from "../assets/glass Interior/Project-1 (3).jpeg";
import project4 from "../assets/glass Interior/Project-1 (4).jpeg";
import project5 from "../assets/glass Interior/Project-1 (5).jpeg";
import project6 from "../assets/glass Interior/Project-1 (6).jpeg";
import project7 from "../assets/glass Interior/Project-1 (7).jpeg";
import project8 from "../assets/glass Interior/Project-1 (8).jpeg";
import project9 from "../assets/glass Interior/Project-1 (9).jpeg";
import project10 from "../assets/glass Interior/Project-1 (10).jpeg";
import project11 from "../assets/glass Interior/Project-1 (11).jpeg";
import project12 from "../assets/glass Interior/Project-1 (12).jpeg";
import project13 from "../assets/glass Interior/Project-1 (13).jpeg";
import project14 from "../assets/glass Interior/Project-1 (14).jpeg";
import project15 from "../assets/glass Interior/Project-1 (15).jpeg";
import project16 from "../assets/glass Interior/Project-1 (16).jpeg";
import project17 from "../assets/glass Interior/Project-1 (17).jpeg";
import project18 from "../assets/glass Interior/Project-1 (18).jpeg";
import project19 from "../assets/glass Interior/Project-1 (19).jpeg";
import project20 from "../assets/glass Interior/Project-1 (20).jpeg";
import solarPanel from "../assets/solar-panel.jpg";

export type ProjectBusiness = "solar" | "glass" | "real-estate";
export type ProjectFilter = "all" | ProjectBusiness;

export interface Project {
  id: string;
  title: string;
  business: ProjectBusiness;
  category: string;
  description: string;
  image: string;
}

const glassImages = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
  project16,
  project17,
  project18,
  project19,
  project20,
];

const solarProjects: Project[] = [
  {
    id: "solar-1",
    title: "Commercial Solar Expansion",
    business: "solar",
    category: "Solar",
    description: "Large-scale rooftop installation designed to improve energy resilience and reduce operating costs.",
    image: solarPanel,
  },
  {
    id: "solar-2",
    title: "Hybrid Energy System",
    business: "solar",
    category: "Solar",
    description: "A planned hybrid energy solution combining solar generation with practical site efficiency improvements.",
    image: solarPanel,
  },
];

const realEstateProjects: Project[] = [
  {
    id: "real-estate-1",
    title: "Urban Lifestyle Residence",
    business: "real-estate",
    category: "Real Estate",
    description: "Contemporary residential concept designed for modern living and efficient use of space.",
    image: estateHero,
  },
  {
    id: "real-estate-2",
    title: "Commercial Property Concept",
    business: "real-estate",
    category: "Real Estate",
    description: "A property development concept focused on premium use, visibility, and long-term value.",
    image: estateCommercial,
  },
];

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "solar", label: "Solar" },
  { id: "glass", label: "Glass & Interior" },
  { id: "real-estate", label: "Real Estate" },
] as const;

export const projects: Project[] = [
  ...glassImages.map((image, index) => ({
    id: `glass-${index + 1}`,
    title: `Glass Project ${index + 1}`,
    business: "glass" as const,
    category: "Glass & Interior",
    description: "Project showcase for glazing, partitions, and interior glass systems tailored to modern spaces.",
    image,
  })),
  ...solarProjects,
  ...realEstateProjects,
];

export const glassProjects = projects.filter((project) => project.business === "glass");
