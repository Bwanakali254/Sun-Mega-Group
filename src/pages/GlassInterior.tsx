import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { glassPage } from "../data/glass";
import { site } from "../data/site";
import ButtonLink from "../components/ButtonLink";
import FigureImage from "../components/FigureImage";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";

const serviceHighlights = glassPage.services.slice(0, 6);
const keyBenefits = [
  {
    title: "Quality workmanship",
    body: "Precise fabrication and finishing that keeps the final result looking clean and considered.",
  },
  {
    title: "Professional installation",
    body: "Our installations are planned around site conditions, access, and a clear handover process.",
  },
  {
    title: "Reliable service",
    body: "Clear communication, practical timelines, and a straightforward approach from start to finish.",
  },
  {
    title: "Attention to detail",
    body: "The small decisions matter, from sightlines to hardware, edge quality, and final alignment.",
  },
];

const processSteps = ["Consultation", "Design", "Installation", "Completion"];

export default function GlassInterior() {
  const featuredProjects = glassPage.images.gallery.slice(0, 3);

  return (
    <>
      <Seo
        title={glassPage.seo.title}
        description={glassPage.seo.description}
        path="/glass-interior"
      />

      <main id="main">
        <section className="bg-paper px-6 pb-16 pt-28">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <div className="border-l-2 border-gold pl-6 md:pl-10">
              <p className="font-display text-sm text-orange-deep">{glassPage.eyebrow}</p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.15] sm:text-5xl">
                Glass & Interior Solutions
              </h1>
              <p className="mt-6 max-w-xl text-slate">
                Professional glass, aluminium and interior solutions for residential and commercial spaces.
              </p>
              <div className="mt-10">
                <ButtonLink to="#services">View services</ButtonLink>
              </div>
            </div>

            <FigureImage
              src={glassPage.images.hero.src}
              alt={glassPage.images.hero.alt}
              caption={glassPage.images.caption}
              priority
              className="aspect-[16/10] overflow-hidden rounded-sm"
            />
          </div>
        </section>

        <section id="services" className="scroll-mt-16 bg-navy px-6 py-24 text-paper">
          <div className="mx-auto max-w-6xl">
            <SectionHeading title="Services" light>
              Glass systems for architecture and interiors, with practical solutions across residential and commercial spaces.
            </SectionHeading>

            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {serviceHighlights.map((service) => (
                <li key={service.title} className="border-t border-paper/15 pt-5">
                  <h3 className="font-display text-lg font-medium">{service.title}</h3>
                  <p className="mt-2 text-sm text-paper/70">{service.body}</p>
                </li>
              ))}
            </ul>

            <p className="mt-10 max-w-3xl text-sm text-paper/70">{glassPage.serviceAreas}</p>
          </div>
        </section>

        <section id="why-us" className="scroll-mt-16 bg-paper px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading title="Why Choose Us">
              Thoughtful design, clean execution, and a process that keeps the project moving without unnecessary friction.
            </SectionHeading>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {keyBenefits.map((item) => (
                <div key={item.title} className="rounded-[1.25rem] border border-navy-deep/10 bg-white p-6 shadow-[0_18px_40px_rgba(20,27,33,0.04)]">
                  <h3 className="font-display text-xl font-semibold text-navy-deep">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 border-t border-navy-deep/10 pt-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-orange-deep">Our Process</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {processSteps.map((step) => (
                  <span
                    key={step}
                    className="inline-flex items-center rounded-full border border-navy-deep/10 bg-cream px-4 py-2 text-sm font-medium text-navy-deep"
                  >
                    {step}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-16 border-t border-navy-deep/10 bg-paper px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading title="Featured Projects">
              A selection of recent glass and interior work designed to show the quality and versatility of the completed installations.
            </SectionHeading>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((image) => (
                <article key={image.src} className="overflow-hidden rounded-[1.5rem] border border-navy-deep/10 bg-white p-3 shadow-[0_18px_40px_rgba(20,27,33,0.04)]">
                  <FigureImage src={image.src} alt={image.alt} className="aspect-[4/3]" />
                  <div className="mt-4 px-2 pb-2">
                    <h3 className="font-display text-xl font-semibold text-navy-deep">{image.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate">{image.description}</p>
                    <Link
                      to="/projects"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy-deep hover:text-orange-deep"
                    >
                      View Project
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-16 bg-navy px-6 py-24 text-paper">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <p className="font-display text-sm uppercase tracking-[0.16em] text-gold">Contact</p>
                <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">
                  Have a glass or interior project in mind?
                </h2>
                <p className="mt-5 max-w-xl text-base text-paper/70">
                  Contact us to discuss your requirements and the best solution for your space.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <a
                    href={`tel:${site.contact.phone?.replace(/\s+/g, "") || "0182348454"}`}
                    className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-medium text-navy-deep hover:bg-orange"
                  >
                    Call {site.contact.phone || "0182348454"}
                  </a>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-paper hover:border-gold/40 hover:text-gold"
                  >
                    Email {site.contact.email}
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="space-y-5 text-sm text-paper/80">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-paper/50">Phone</p>
                    <p className="mt-2">{site.contact.phone || "0182348454"}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-paper/50">Email</p>
                    <a href={`mailto:${site.contact.email}`} className="mt-2 inline-block hover:text-gold">
                      {site.contact.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-paper/50">Location</p>
                    <p className="mt-2 whitespace-pre-line">{site.contact.location}</p>
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
