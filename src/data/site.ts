export const site = {
  name: "Sun Mega Group",
  origin: "https://sunmegagroup.co.ke",
  logoSrc: "/logo.svg",
  logoAlt: "Sun Mega Group logo",
  tagline: "A group of three businesses. One direction.",
  description:
    "Sun Mega Group is the central gateway for Sun Mega Solar, Glass & Interior Solutions, and Real Estate & Property Services.",
  copyrightName: "Sun Mega Group",
  contact: {
    email: "info@sunmegagroup.co.ke",
    /**
     * Owner-supplied phone. Leave empty until a verified number is provided.
     * Do not publish placeholder numbers as if they were real.
     */
    phone: "" as string,
    location: "Kenya",
  },
} as const;

export const defaultSeo = {
  title: "Sun Mega Group",
  description: site.description,
  ogImage: site.logoSrc,
} as const;
