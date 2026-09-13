import { businesses } from "../data/businesses";
import { defaultSeo, site } from "../data/site";
import BusinessCard from "../components/BusinessCard";
import ButtonLink from "../components/ButtonLink";
import Contact from "../components/Contact";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo title={defaultSeo.title} description={defaultSeo.description} path="/" />
      <main id="main">
        <section className="flex min-h-screen items-center bg-navy px-6 pt-16 text-paper">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="font-display text-sm text-gold">{site.name}</p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl md:text-6xl">
                {site.tagline}
              </h1>
              <p className="mt-6 max-w-md text-paper/70">{site.description}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink to="#businesses">See our businesses</ButtonLink>
                <ButtonLink to="#about" variant="secondary">
                  About the group
                </ButtonLink>
              </div>
            </div>

            <svg
              viewBox="0 0 360 360"
              className="hidden w-full max-w-sm justify-self-center lg:block"
              role="img"
              aria-label="Diagram showing Sun Mega Group connected to Solar, Glass and Interior, and Real Estate"
            >
              <line x1="180" y1="180" x2="180" y2="50" stroke="var(--color-gold)" strokeWidth="1.5" opacity="0.6" />
              <line x1="180" y1="180" x2="293" y2="245" stroke="var(--color-gold)" strokeWidth="1.5" opacity="0.6" />
              <line x1="180" y1="180" x2="67" y2="245" stroke="var(--color-gold)" strokeWidth="1.5" opacity="0.6" />
              <circle cx="180" cy="50" r="11" fill="var(--color-gold)" />
              <circle cx="293" cy="245" r="11" fill="var(--color-orange)" />
              <circle cx="67" cy="245" r="11" fill="var(--color-orange)" />
              <circle cx="180" cy="180" r="18" fill="var(--color-orange-deep)" />
            </svg>
          </div>
        </section>

        <section id="about" className="scroll-mt-16 bg-paper px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              About Sun Mega Group
            </h2>
            <p className="mt-5 max-w-2xl text-slate">
              Sun Mega Group is the parent brand and central entry point for three
              businesses: Sun Mega Solar, Glass &amp; Interior Solutions, and Real
              Estate &amp; Property Services. Each business operates with its own
              focus. Solar continues on its existing website; Glass and Real Estate
              are introduced on this site.
            </p>
          </div>
        </section>

        <section id="businesses" className="scroll-mt-16">
          <div className="border-b border-navy-deep/10 bg-paper px-6 pt-24 pb-12 text-center">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Our businesses
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate">
              Three businesses, one group. Choose a card to continue.
            </p>
          </div>
          <div className="grid lg:grid-cols-3">
            {businesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}
