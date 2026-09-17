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
    "Featured properties will appear here only when the owner supplies approved listings. The photographs on this page are reference imagery of residential and commercial spaces, not live inventory.",
  images: {
    hero: {
      src: "/images/estate-hero.png",
      alt: "Contemporary house exterior at sunset",
    },
    gallery: [
      {
        src: "/images/estate-residential.png",
        alt: "Bright modern residential living room",
      },
      {
        src: "/images/estate-commercial.png",
        alt: "Mid-rise commercial office building with a glass facade",
      },
    ],
    caption:
      "Reference imagery illustrating residential and commercial property. Not a live listing.",
  },
  cta: {
    title: "Talk about a property brief",
    body: "Tell us whether you need management, a lease, a sale, or acquisition support.",
  },
} as const;
