import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { site } from "../data/site";

export default function Privacy() {
  return (
    <>
      <Seo
        title={`Privacy Policy | ${site.name}`}
        description="How this static website handles personal information."
        path="/privacy"
      />
      <main id="main" className="mx-auto max-w-3xl px-6 pt-28 pb-24">
        <h1 className="font-display text-3xl font-semibold">Privacy Policy</h1>
        <p className="mt-6 text-slate">
          This website is a static informational site for {site.name}. It does not
          use an account system, analytics scripts, or a contact form that stores
          submissions.
        </p>
        <p className="mt-4 text-slate">
          If you email {site.contact.email}, that message is handled in ordinary
          email, not in a database on this site. Do not send more personal
          information than you need to for an enquiry.
        </p>
        <p className="mt-4 text-slate">
          Pages may set a canonical URL and Open Graph tags for sharing. No
          advertising or tracking pixels are included.
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
