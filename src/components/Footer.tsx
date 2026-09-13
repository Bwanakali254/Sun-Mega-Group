import { Link } from "react-router-dom";
import { businesses } from "../data/businesses";
import { site } from "../data/site";
import ExternalLink from "./ExternalLink";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy px-6 py-12 text-paper/60">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm">{site.description}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-paper">Businesses</p>
          <ul className="mt-3 space-y-2 text-sm">
            {businesses.map((business) => (
              <li key={business.id}>
                {business.external ? (
                  <ExternalLink href={business.href} className="hover:text-gold">
                    {business.name}
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
          <p className="text-sm font-medium text-paper">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/#contact" className="hover:text-gold">
                Get in touch
              </Link>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="hover:text-gold">
                {site.contact.email}
              </a>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-gold">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-gold">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-xs">
        © {year} {site.copyrightName}. All rights reserved.
      </div>
    </footer>
  );
}
