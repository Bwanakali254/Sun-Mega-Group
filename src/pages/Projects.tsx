import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ButtonLink from "../components/ButtonLink";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";
import { projectCategories, projects, type ProjectFilter } from "../data/projects";

const normalizeLabel = (value: ProjectFilter) => {
  if (value === "all") return "All";
  if (value === "glass") return "Glass & Interior";
  if (value === "solar") return "Solar";
  return "Real Estate";
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.business === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <Seo
        title="Projects | Sun Mega Limited"
        description="Browse project highlights from Solar, Glass & Interior, and Real Estate services."
        path="/projects"
      />

      <main id="main" className="bg-paper text-navy-deep">
        <section className="bg-navy px-6 pb-20 pt-28 text-paper">
          <div className="mx-auto max-w-6xl">
            <p className="font-display text-sm uppercase tracking-[0.18em] text-gold">Portfolio</p>
            <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Our Projects</h1>
            <p className="mt-5 max-w-2xl text-paper/75">
              A selection of work across the Sun Mega Group, organized by business area for easier browsing and review.
            </p>
          </div>
        </section>

        <section className="px-6 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-3">
              {projectCategories.map((category) => {
                const isActive = activeFilter === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveFilter(category.id as ProjectFilter)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "border-navy bg-navy text-paper"
                        : "border-navy/15 bg-white text-navy-deep hover:border-navy/30"
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex items-center justify-between gap-4">
              <SectionHeading title={`${normalizeLabel(activeFilter)} Projects`} />
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-navy-deep hover:text-orange-deep">
                Back home
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <article key={project.id} className="overflow-hidden rounded-[1.5rem] border border-navy/10 bg-white shadow-[0_18px_40px_rgba(20,27,33,0.04)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-orange-deep">
                      {project.category}
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-semibold text-navy-deep">{project.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate">{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy px-6 py-20 text-paper">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading title="Need a project discussed?" light>
                Tell us about your requirements and we will review the best fit for your brief.
              </SectionHeading>
              <ButtonLink to="/#contact" variant="secondary" className="!rounded-full">
                Contact us
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
