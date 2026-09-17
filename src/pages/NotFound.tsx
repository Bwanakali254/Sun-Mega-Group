import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found | Sun Mega Limited"
        description="This page does not exist."
        path="/404"
      />
      <main id="main" className="mx-auto max-w-3xl px-6 pt-28 pb-24">
        <h1 className="font-display text-3xl font-semibold">Page not found</h1>
        <p className="mt-4 text-slate">
          The address you opened is not a page on this site.
        </p>
        <p className="mt-8">
          <Link to="/" className="text-navy underline-offset-4 hover:underline">
            Return to Sun Mega Limited
          </Link>
        </p>
      </main>
    </>
  );
}
