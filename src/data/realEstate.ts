import estateHero from "../assets/estate-hero.png";
import estateResidential from "../assets/estate-residential.png";
import estateCommercial from "../assets/estate-commercial.png";

export const realEstatePage = {
  name: "Real Estate & Property Services",
  eyebrow: "Sun Mega Limited",
  headline: "Property services handled with care and professional judgement.",
  intro:
    "Real Estate & Property Services is a Sun Mega Limited business covering residential and commercial property work: management, leasing, sales, acquisition support, and investment-focused advice.",
  seo: {
    title: "Real Estate & Property Services | Sun Mega Limited",
    description:
      "Residential and commercial property services from Sun Mega Limited, including management, leasing, sales, and acquisition support.",
  },
  about:
    "The aim is reliable handling of property decisions and day-to-day management. Advice is based on the brief you give us, not on invented listings or advertised yields.",
  serviceGroups: [
    {
      id: "residential",
      title: "Residential properties",
      body: "Support for homes and residential portfolios, from occupancy through sale or lease.",
    },
    {
      id: "commercial",
      title: "Commercial properties",
      body: "Offices, retail, and other commercial space, handled with the same process discipline as residential work.",
    },
    {
      id: "management",
      title: "Property management",
      body: "Day-to-day management of properties under an agreed scope with the owner.",
    },
    {
      id: "investment",
      title: "Property investment",
      body: "Structured discussion of acquisition, hold, or disposal decisions. We do not publish forecasted returns.",
    },
    {
      id: "sales",
      title: "Sales and acquisition",
      body: "Support for buying or selling property, including coordination around inspection and handover.",
    },
    {
      id: "leasing",
      title: "Leasing and rentals",
      body: "Letting and rental arrangements for residential and commercial space.",
    },
    {
      id: "cleaning",
      title: "Cleaning services",
      body: "Cleaning services for residential and commercial properties.",
    },
  ],
  approach: [
    {
      title: "Clear scope",
      body: "What we will do, and what remains with the owner or occupier, is agreed up front.",
    },
    {
      title: "Documented steps",
      body: "Viewings, offers, tenancies, and management tasks follow a written sequence.",
    },
    {
      title: "No inflated claims",
      body: "We do not list properties, prices, or occupancy figures that have not been supplied for publication.",
    },
  ],
  listingsNote:
    "A selection of our featured properties.",
  images: {
    hero: {
      src: estateHero,
      alt: "Contemporary house exterior at sunset",
    },
    gallery: [
      {
        src: estateResidential,
        alt: "Bright modern residential living room",
        title: "Modern Residential Property",
        description: "A light-filled residential interior with contemporary finishes and a warm, open plan layout.",
      },
      {
        src: estateCommercial,
        alt: "Mid-rise commercial office building with a glass facade",
        title: "Commercial Office Property",
        description: "A multi-storey commercial building with a clean glass façade and a professional office presence.",
      },
    ],
    caption: "Featured property showcases.",
  },
  cta: {
    title: "Talk about a property brief",
    body: "Tell us whether you need management, a lease, a sale, or acquisition support.",
  },
} as const;
