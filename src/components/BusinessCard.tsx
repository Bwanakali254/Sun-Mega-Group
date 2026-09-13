import { ExternalLink as ExternalIcon } from "lucide-react";
import { Link } from "react-router-dom";
import type { Business } from "../data/businesses";
import ExternalLink from "./ExternalLink";

const toneStyles = {
  paper: {
    section: "bg-paper text-navy-deep",
    sub: "text-slate",
    tag: "border-navy-deep/15 text-navy-deep/70",
    link: "text-navy-deep hover:text-orange",
  },
  navy: {
    section: "bg-navy text-paper",
    sub: "text-paper/65",
    tag: "border-paper/20 text-paper/70",
    link: "text-paper hover:text-gold",
  },
  cream: {
    section: "bg-cream text-navy-deep",
    sub: "text-navy-deep/70",
    tag: "border-navy-deep/15 text-navy-deep/70",
    link: "text-navy-deep hover:text-orange-deep",
  },
} as const;

interface BusinessCardProps {
  business: Business;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  const tone = toneStyles[business.panelTone];
  const linkClass = `inline-flex items-center gap-1.5 text-sm font-medium ${tone.link}`;

  const cta = business.external ? (
    <ExternalLink href={business.href} className={linkClass}>
      {business.cta}
      <ExternalIcon size={14} aria-hidden="true" />
    </ExternalLink>
  ) : (
    <Link to={business.href} className={linkClass}>
      {business.cta}
      <span aria-hidden="true">→</span>
    </Link>
  );

  return (
    <article className={`flex flex-col justify-between gap-8 px-8 py-16 ${tone.section}`}>
      <div>
        <span className={`inline-block rounded-full border px-3 py-1 text-xs ${tone.tag}`}>
          {business.sector}
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold">{business.name}</h3>
        <p className={`mt-3 text-sm ${tone.sub}`}>{business.description}</p>
      </div>
      {cta}
    </article>
  );
}
