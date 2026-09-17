import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems } from "../data/site";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = scrolled
    ? "border-navy/10 bg-paper/90 text-navy-deep shadow-[0_10px_30px_rgba(20,27,33,0.08)]"
    : "border-white/10 bg-navy/85 text-paper";

  const linkClass = (linkTo: string) =>
    `text-sm font-medium transition-colors ${
      scrolled
        ? "text-navy-deep/70 hover:text-orange-deep"
        : "text-paper/75 hover:text-gold"
    } ${pathname === "/" && linkTo === "/" ? (scrolled ? "text-orange-deep" : "text-gold") : ""}`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${headerClass}`}>
      <nav
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6"
        aria-label="Primary"
      >
        <Logo className={scrolled ? "h-8 w-auto max-w-[180px]" : "h-8 w-auto max-w-[180px]"} />

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className={linkClass(link.to)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to="/#companies"
            className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              scrolled
                ? "bg-navy text-paper hover:bg-navy-deep"
                : "bg-gold text-navy-deep hover:bg-orange"
            }`}
          >
            Explore Our Companies
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-full border border-current/20 p-2 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-navy px-6 py-3 lg:hidden">
          <ul id="mobile-menu" className="space-y-1">
            {navItems.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block rounded px-2 py-2.5 text-base text-paper/80 hover:bg-white/5 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/#companies"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gold px-4 py-3 text-sm font-medium text-navy-deep"
          >
            Explore Our Companies
          </Link>
        </div>
      ) : null}
    </header>
  );
}
