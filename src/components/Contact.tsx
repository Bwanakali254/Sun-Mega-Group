import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "../data/site";

interface ContactProps {
  heading?: string;
  intro?: string;
}

export default function Contact({
  heading = "Get in touch",
  intro = "Use the details below. A contact form is not used on this site so that nothing is stored on a server.",
}: ContactProps) {
  const { email, phone, location } = site.contact;

  return (
    <section id="contact" className="scroll-mt-16 bg-navy px-6 py-24 text-paper">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">{heading}</h2>
        <p className="mt-4 max-w-lg text-paper/70">{intro}</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-10">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-paper/85 hover:text-gold"
          >
            <Mail size={18} className="text-gold" aria-hidden="true" />
            {email}
          </a>
          {phone ? (
            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 text-paper/85 hover:text-gold"
            >
              <Phone size={18} className="text-gold" aria-hidden="true" />
              {phone}
            </a>
          ) : null}
          <span className="flex items-center gap-2 text-paper/85">
            <MapPin size={18} className="text-gold" aria-hidden="true" />
            {location}
          </span>
        </div>
      </div>
    </section>
  );
}
