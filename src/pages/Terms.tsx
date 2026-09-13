import { Link } from "react-router-dom";
import ExternalLink from "../components/ExternalLink";
import Seo from "../components/Seo";
import { site } from "../data/site";

export default function Terms() {
  return (
    <>
      <Seo
        title={`Terms | ${site.name}`}
        description="Terms of use for the Sun Mega Group website."
        path="/terms"
      />
      <main id="main" className="mx-auto max-w-3xl px-6 pt-28 pb-24">
        <h1 className="font-display text-3xl font-semibold">Terms of use</h1>
        <p className="mt-6 text-slate">
          This website provides general information about {site.name} and links
          to group businesses. It is not an offer, valuation, or contract.
        </p>
        <p className="mt-4 text-slate">
          The Solar business is operated on a separate website at{" "}
          <ExternalLink href="https://sunmega.co.ke/" className="underline underline-offset-4">
            sunmega.co.ke
          </ExternalLink>
          . Content on that site is not part of this project.
        </p>
        <p className="mt-4 text-slate">
          Glass &amp; Interior and Real Estate pages describe services. They do
          not list live property inventory or guaranteed project outcomes.
        </p>
        <p className="mt-8">
          <Link to="/" className="text-navy underline-offset-4 hover:underline">
            Back to home
          </Link>
        </p>
      </main>
    </>
  );
}
