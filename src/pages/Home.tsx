import { ArrowRight, BadgeCheck, BriefcaseBusiness, Building2, Leaf, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { businesses } from "../data/businesses";
import { businessAreas, defaultSeo, groupValues, insights, projectHighlights, site } from "../data/site";
import ButtonLink from "../components/ButtonLink";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";

const companyImages: Record<string, string> = {
  solar: "/images/estate-hero.png",
  glass: "/images/glass-hero.png",
  "real-estate": "/images/estate-residential.png",
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
                  src="/images/glass-hero.png"
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

        <section id="about" className="scroll-mt-24 bg-paper px-6 py-24 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-navy/10 bg-cream p-3 shadow-[0_30px_80px_rgba(20,27,33,0.08)]">
                <img
                  src="/images/estate-commercial.png"
                  alt="Commercial property and business environment"
                  className="h-[480px] w-full rounded-[1.5rem] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-6 rounded-full border border-navy/10 bg-paper px-4 py-2 text-sm font-medium text-navy-deep shadow-sm">
                Placeholder imagery
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="About Sun Mega Limited"
                title="A diversified platform built for long-term opportunity."
              >
                <p>{site.companyIntro}</p>
                <p className="mt-4">{site.shorterIntro}</p>
              </SectionHeading>

              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink to="#companies">Explore the group</ButtonLink>
                <ButtonLink to="#contact" className="border border-navy/15 bg-transparent text-navy-deep hover:border-orange-deep hover:text-orange-deep" variant="secondary">
                  Get in touch
                </ButtonLink>
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

        <section className="bg-navy px-6 py-20 text-paper md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-10 md:px-10 md:py-14">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="font-display text-sm uppercase tracking-[0.22em] text-gold">Group Positioning</p>
                  <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-5xl">
                    One Group. Multiple Businesses. Shared Vision.
                  </h2>
                </div>
                <p className="max-w-md text-base text-paper/70">
                  Placeholder corporate statement to define the parent-company relationship between Sun Mega Limited and its business units.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper px-6 py-24 md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Business Areas" title="Flexible, scalable businesses for a growing corporate group." />

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {businessAreas.map((area) => (
                <article key={area.title} className="overflow-hidden rounded-[1.75rem] border border-navy/10 bg-white shadow-[0_20px_50px_rgba(20,27,33,0.04)]">
                  <img src={area.image} alt={`${area.title} placeholder`} className="h-64 w-full object-cover" />
                  <div className="p-7">
                    <h3 className="font-display text-2xl font-semibold text-navy-deep">{area.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-slate">{area.description}</p>
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
              title="A parent company built around sustainable growth and long-term potential."
              align="center"
            >
              <p>
                The value points below are presented as placeholders for the official company narrative and positioning.
              </p>
            </SectionHeading>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {groupValues.map((value, index) => {
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

        <section id="insights" className="scroll-mt-24 bg-navy px-6 py-24 text-paper md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="News & Insights"
              title="Corporate updates and future storylines for the group."
              light
            >
              <p>
                Sample content is included here to demonstrate the structure for future company articles, thought leadership, and business updates.
              </p>
            </SectionHeading>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                <img
                  src="/images/estate-residential.png"
                  alt="Placeholder featured article"
                  className="h-80 w-full object-cover"
                />
                <div className="p-7">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-gold">
                    <span>Featured</span>
                    <span className="text-paper/60">•</span>
                    <span>{insights[0].category}</span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-semibold leading-tight">{insights[0].title}</h3>
                  <p className="mt-4 text-sm leading-6 text-paper/70">{insights[0].summary}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-sm text-paper/60">
                    <span>{insights[0].date}</span>
                    <a href="#contact" className="inline-flex items-center gap-2 text-gold hover:text-gold/80">
                      Read More
                      <ArrowRight size={15} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>

              <div className="space-y-6">
                {insights.slice(1).map((story) => (
                  <article key={story.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.16em] text-gold">
                      <span>{story.category}</span>
                      <span className="text-paper/50">{story.date}</span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-paper">{story.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-paper/70">{story.summary}</p>
                    <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold/80">
                      Read More
                      <ArrowRight size={15} aria-hidden="true" />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper px-6 py-24 md:py-28">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-navy/10 bg-cream px-6 py-12 md:px-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="font-display text-sm uppercase tracking-[0.18em] text-orange-deep">Careers</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-navy-deep sm:text-5xl">
                  Build Your Future With Us
                </h2>
                <p className="mt-4 text-base text-slate">
                  Placeholder career messaging for future recruitment opportunities within the broader Sun Mega Limited platform.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-paper">
                  <BriefcaseBusiness size={20} aria-hidden="true" />
                </div>
                <ButtonLink to="#contact">View Opportunities</ButtonLink>
              </div>
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
