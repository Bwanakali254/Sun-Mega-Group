import { ArrowRight, BadgeCheck, Building2, Leaf, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import estateResidential from "../assets/estate-residential.png";
import glassHero from "../assets/glass-hero.png";
import solar from "../assets/solar.png";
import { businesses } from "../data/businesses";
import { defaultSeo, groupValues, projectHighlights, site } from "../data/site";
import ButtonLink from "../components/ButtonLink";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";

const companyImages: Record<string, string> = {
  solar,
  glass: glassHero,
  "real-estate": estateResidential,
};

const valueIcons = [Leaf, Sparkles, BadgeCheck, TrendingUp];

export default function Home() {
  return (
    <>
      <Seo title={defaultSeo.title} description={defaultSeo.description} path="/" />
      <main id="main" className="overflow-x-hidden bg-paper text-navy-deep">
        <section className="relative overflow-hidden bg-navy px-6 pt-28 text-paper">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,192,3,0.18),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(255,156,8,0.18),_transparent_32%)]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 pb-20 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28">
            <div>
              <p className="inline-flex rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-gold">
                {site.name}
              </p>
              <h1 className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                {site.tagline}
              </h1>
              <p className="mt-6 max-w-lg text-base text-paper/75 md:text-lg">
                {site.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink to="#companies">Explore Our Companies</ButtonLink>
                <ButtonLink to="#about" variant="secondary">
                  Learn More
                </ButtonLink>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-paper/70">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-gold" aria-hidden="true" />
                  Solar
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-gold" aria-hidden="true" />
                  Glass & Interior
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-gold" aria-hidden="true" />
                  Real Estate
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_30px_80px_rgba(20,27,33,0.25)] backdrop-blur-sm">
                <img
                  src={glassHero}
                  alt="Modern glass and architecture concept"
                  className="h-[540px] w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 left-6 max-w-xs rounded-2xl border border-gold/25 bg-navy/95 px-5 py-4 shadow-[0_20px_50px_rgba(20,27,33,0.45)] backdrop-blur">
                <p className="font-display text-lg font-semibold text-paper">One Group. Multiple Businesses. Shared Vision.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="companies" className="scroll-mt-24 bg-[#f1efe9] px-6 py-24 md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Our Companies"
              title="Three focused businesses, united under one group strategy."
              align="center"
            >
              <p>
                Sun Mega Limited is designed to support multiple business lines while preserving the distinct identity of each venture.
              </p>
            </SectionHeading>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {businesses.map((business) => (
                <article key={business.id} className="group overflow-hidden rounded-[1.75rem] border border-navy/10 bg-paper shadow-[0_20px_50px_rgba(20,27,33,0.05)] transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={companyImages[business.id]}
                      alt={`${business.name} placeholder image`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                    <span className="absolute left-5 top-5 inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                      {business.sector}
                    </span>
                  </div>

                  <div className="p-7">
                    <h3 className="font-display text-2xl font-semibold text-navy-deep">{business.name}</h3>
                    <p className="mt-4 text-sm leading-6 text-slate">{business.description}</p>

                    <div className="mt-7 flex items-center justify-between border-t border-navy/10 pt-5">
                      {business.external ? (
                        <a
                          href={business.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-navy-deep hover:text-orange-deep"
                        >
                          {business.cta}
                          <ArrowRight size={15} aria-hidden="true" />
                        </a>
                      ) : (
                        <Link to={business.href} className="inline-flex items-center gap-2 text-sm font-medium text-navy-deep hover:text-orange-deep">
                          {business.cta}
                          <ArrowRight size={15} aria-hidden="true" />
                        </Link>
                      )}

                      <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate">
                        Sun Mega Limited
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 bg-[#f1efe9] px-6 py-24 md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Projects / What We Do"
              title="A portfolio approach designed for future project storytelling."
            >
              <p>
                The structure below is intentionally placeholder-driven so real project information can be added without redesigning the page.
              </p>
            </SectionHeading>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {projectHighlights.map((project) => (
                <article key={project.name} className="group overflow-hidden rounded-[1.75rem] border border-navy/10 bg-paper shadow-[0_20px_50px_rgba(20,27,33,0.04)] transition-transform duration-300 hover:-translate-y-1">
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.name} placeholder project image`}
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-orange-deep">{project.category}</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-navy-deep">{project.name}</h3>
                    <p className="mt-4 text-sm leading-6 text-slate">{project.description}</p>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy-deep hover:text-orange-deep"
                    >
                      View Project
                      <ArrowRight size={15} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-paper px-6 py-24 md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Why Sun Mega"
              title="A group built around focused execution and long-term value."
              align="center"
            >
              <p>
                The Sun Mega Group brings together distinct businesses under one strategic platform, with a clear focus on practical delivery and sustainable growth.
              </p>
            </SectionHeading>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {groupValues.slice(0, 3).map((value, index) => {
                const Icon = valueIcons[index] ?? Sparkles;
                return (
                  <div key={value.title} className="rounded-[1.5rem] border border-navy/10 bg-white p-7 shadow-[0_16px_40px_rgba(20,27,33,0.04)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-navy-deep">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-navy-deep">{value.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-navy px-6 py-24 text-paper md:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.18em] text-gold">Contact</p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
                Let&apos;s Build the Future Together
              </h2>
              <p className="mt-5 max-w-xl text-base text-paper/70">
                Placeholder contact statement for future client, partnership, and business enquiries. Update this section once official contact details are supplied.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={`mailto:${site.contact.email}`} className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy-deep hover:bg-orange">
                  Contact Us
                </a>
                <ButtonLink to="/#companies" variant="secondary" className="!rounded-full">
                  Explore Companies
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="space-y-6 text-sm text-paper/80">
                <div className="flex items-start gap-3">
                  <Building2 className="mt-0.5 text-gold" size={18} aria-hidden="true" />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-paper/50">Location</p>
                    <p className="mt-1">{site.contact.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-gold">@</span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-paper/50">Email</p>
                    <a href={`mailto:${site.contact.email}`} className="mt-1 inline-block hover:text-gold">
                      {site.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-gold">☎</span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-paper/50">Phone</p>
                    <p className="mt-1">{site.contact.phone || "Phone placeholder to be confirmed"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
