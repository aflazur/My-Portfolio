import portfolioData from "../data/portfolioData";
import { SectionHeading } from "./About";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-[var(--border)] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="05 · Projects" title="Things I've Built" />
        <p className="mt-3 max-w-2xl text-[var(--text-dim)]">
          A selection of projects spanning the database layer, backend APIs, and full-stack apps.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
