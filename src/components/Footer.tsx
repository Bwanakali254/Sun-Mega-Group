import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { businesses } from "../data/businesses";
import { site } from "../data/site";
import ExternalLink from "./ExternalLink";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/10 bg-navy px-6 py-16 text-paper/70">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr_0.8fr_0.8fr]">
          <div>
            <Logo className="h-10 w-auto max-w-[200px]" />
            <p className="mt-4 max-w-sm text-sm leading-6">{site.description}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-paper">Quick Links</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/#about" className="hover:text-gold">About Us</Link>
              </li>
              <li>
                <Link to="/#companies" className="hover:text-gold">Our Companies</Link>
              </li>
              <li>
                <Link to="/#projects" className="hover:text-gold">Projects</Link>
              </li>
              <li>
                <Link to="/#insights" className="hover:text-gold">News & Insights</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-paper">Our Companies</p>
            <ul className="mt-4 space-y-3 text-sm">
              {businesses.map((business) => (
                <li key={business.id}>
                  {business.external ? (
                    <ExternalLink href={business.href} className="inline-flex items-center gap-1.5 hover:text-gold">
                      {business.name}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </ExternalLink>
                  ) : (
                    <Link to={business.href} className="hover:text-gold">
                      {business.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-paper">Contact</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${site.contact.email}`} className="hover:text-gold">
                  {site.contact.email}
                </a>
              </li>
              <li>
                <span>{site.contact.location}</span>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-gold">Terms</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.copyrightName}. All rights reserved.</p>
          <div className="flex items-center gap-5 text-paper/60">
            <span>Sun Mega Limited</span>
            <span>Solar Solutions</span>
            <span>Glass &amp; Interior</span>
            <span>Real Estate</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
