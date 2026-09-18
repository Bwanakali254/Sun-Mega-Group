import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { realEstatePage } from "../data/realEstate";
import ButtonLink from "../components/ButtonLink";
import Contact from "../components/Contact";
import FigureImage from "../components/FigureImage";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";

export default function RealEstate() {
  return (
    <>
      <Seo
        title={realEstatePage.seo.title}
        description={realEstatePage.seo.description}
        path="/real-estate"
      />
      <main id="main">
        <section className="relative isolate overflow-hidden bg-navy px-6 pt-28 pb-20 text-paper">
          <img
            src={realEstatePage.images.hero.src}
            alt=""
            width={1600}
            height={900}
            loading="eager"
            decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-navy/75" aria-hidden="true" />
          <div className="mx-auto max-w-6xl">
            <p className="font-display text-sm text-gold">{realEstatePage.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.15] sm:text-5xl">
              {realEstatePage.headline}
            </h1>
            <p className="mt-6 max-w-xl text-paper/70">{realEstatePage.intro}</p>
            <div className="mt-10">
              <ButtonLink to="#services">View services</ButtonLink>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-16 bg-paper px-6 py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <SectionHeading title="About">{realEstatePage.about}</SectionHeading>
            <FigureImage
              src={realEstatePage.images.gallery[0].src}
              alt={realEstatePage.images.gallery[0].alt}
              caption={realEstatePage.images.caption}
              className="overflow-hidden rounded-sm aspect-[4/3]"
            />
          </div>
        </section>

        <section id="services" className="scroll-mt-16 bg-cream px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading title="Property services">
              Services we can take on. Listings and prices are not published unless the owner supplies them.
            </SectionHeading>
            <ul className="mt-12 grid gap-8 sm:grid-cols-2">
              {realEstatePage.serviceGroups.map((group) => (
                <li
                  key={group.id}
                  id={group.id}
                  className="scroll-mt-20 border-l-2 border-navy bg-paper p-6"
                >
                  <h3 className="font-display text-lg font-medium">{group.title}</h3>
                  <p className="mt-2 text-sm text-slate">{group.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="approach" className="scroll-mt-16 bg-paper px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading title="Why work with us" />
            <ul className="mt-12 grid gap-10 md:grid-cols-3">
              {realEstatePage.approach.map((item) => (
                <li key={item.title}>
                  <h3 className="font-display text-lg font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="listings" className="scroll-mt-16 border-t border-navy-deep/10 bg-paper px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading title="Featured properties">
              {realEstatePage.listingsNote}
            </SectionHeading>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2">
              {realEstatePage.images.gallery.map((image) => (
                <li key={image.src} className="overflow-hidden rounded-sm">
                  <FigureImage
                    src={image.src}
                    alt={image.alt}
                    className="aspect-[4/3]"
                  />
                  <div className="mt-4">
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
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-navy px-6 py-20 text-paper">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading title={realEstatePage.cta.title} light>
              {realEstatePage.cta.body}
            </SectionHeading>
            <ButtonLink to="#contact">Get in touch</ButtonLink>
          </div>
        </section>

        <Contact heading="Contact Real Estate & Property Services" />
      </main>
    </>
  );
}
