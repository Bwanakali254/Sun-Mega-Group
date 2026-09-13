import { glassPage } from "../data/glass";
import ButtonLink from "../components/ButtonLink";
import Contact from "../components/Contact";
import FigureImage from "../components/FigureImage";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";

export default function GlassInterior() {
  return (
    <>
      <Seo
        title={glassPage.seo.title}
        description={glassPage.seo.description}
        path="/glass-interior"
      />
      <main id="main">
        <section className="bg-paper px-6 pt-28 pb-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <div className="border-l-2 border-gold pl-6 md:pl-10">
              <p className="font-display text-sm text-orange-deep">{glassPage.eyebrow}</p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.15] sm:text-5xl">
                {glassPage.headline}
              </h1>
              <p className="mt-6 max-w-xl text-slate">{glassPage.intro}</p>
              <div className="mt-10">
                <ButtonLink to="#services">View services</ButtonLink>
              </div>
            </div>
            <FigureImage
              src={glassPage.images.hero.src}
              alt={glassPage.images.hero.alt}
              caption={glassPage.images.caption}
              priority
              className="overflow-hidden rounded-sm aspect-[16/10]"
            />
          </div>
        </section>

        <section id="about" className="scroll-mt-16 border-t border-navy-deep/10 bg-paper px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading title="About">{glassPage.about}</SectionHeading>
          </div>
        </section>

        <section id="services" className="scroll-mt-16 bg-navy px-6 py-24 text-paper">
          <div className="mx-auto max-w-6xl">
            <SectionHeading title="Services" light>
              Glass systems for architecture and interiors. Scope is confirmed on each brief.
            </SectionHeading>
            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {glassPage.services.map((service) => (
                <li key={service.title} className="border-t border-paper/15 pt-5">
                  <h3 className="font-display text-lg font-medium">{service.title}</h3>
                  <p className="mt-2 text-sm text-paper/70">{service.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="approach" className="scroll-mt-16 bg-paper px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading title="Why work with us">
              Process and finish, not unverified claims.
            </SectionHeading>
            <ul className="mt-12 grid gap-10 md:grid-cols-3">
              {glassPage.approach.map((item) => (
                <li key={item.title}>
                  <h3 className="font-display text-lg font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="process" className="scroll-mt-16 bg-cream px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading title="Our process" />
            <ol className="mt-12 grid gap-8 md:grid-cols-4">
              {glassPage.process.map((item) => (
                <li key={item.step}>
                  <p className="font-display text-sm text-orange-deep">{item.step}</p>
                  <h3 className="mt-2 font-display font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="areas" className="scroll-mt-16 bg-paper px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading title="Service areas">{glassPage.serviceAreas}</SectionHeading>
          </div>
        </section>

        <section id="projects" className="scroll-mt-16 border-t border-navy-deep/10 bg-paper px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading title="Projects">{glassPage.projectsNote}</SectionHeading>
            <ul className="mt-10 grid gap-6 sm:grid-cols-3">
              {glassPage.images.gallery.map((image) => (
                <li key={image.src} className="overflow-hidden rounded-sm">
                  <FigureImage
                    src={image.src}
                    alt={image.alt}
                    caption={glassPage.images.caption}
                    className="aspect-[4/3]"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-navy px-6 py-20 text-paper">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading title={glassPage.cta.title} light>
              {glassPage.cta.body}
            </SectionHeading>
            <ButtonLink to="#contact">Get in touch</ButtonLink>
          </div>
        </section>

        <Contact heading="Contact Glass & Interior" />
      </main>
    </>
  );
}
