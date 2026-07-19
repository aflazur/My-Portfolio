import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, AlertTriangle, Rocket } from "lucide-react";
import portfolioData from "../data/portfolioData";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = portfolioData.projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="font-display text-3xl font-semibold text-[var(--heading)]">
          Project not found
        </h1>
        <p className="mt-3 text-[var(--text-dim)]">
          The project you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/#projects"
          className="mt-6 inline-flex items-center gap-2 rounded-md border border-[var(--accent)] px-5 py-2.5 font-mono text-sm text-[var(--accent)] hover:bg-[var(--accent-soft)]"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="px-5 py-14 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 font-mono text-sm text-[var(--text-dim)] hover:text-[var(--accent)]"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="mt-6 overflow-hidden rounded-xl border border-[var(--border)]">
          <img src={project.image} alt={project.name} className="h-72 w-full object-cover" />
        </div>

        <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-semibold text-[var(--heading)] sm:text-4xl">
              {project.name}
            </h1>
            <p className="mt-2 text-[var(--text-dim)]">{project.tagline}</p>
          </div>
          <div className="flex gap-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2.5 font-mono text-sm font-semibold text-[#06110e]"
              >
                <ExternalLink size={16} />
                Live Site
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2.5 font-mono text-sm text-[var(--heading)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Github size={16} />
                Client Code
              </a>
            )}
          </div>
        </div>

        {/* Tech stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--accent)]/40 bg-[var(--accent-soft)] px-3 py-1 font-mono text-xs text-[var(--accent)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-[var(--heading)]">Overview</h2>
          <p className="mt-3 leading-relaxed text-[var(--text-dim)]">{project.longDescription}</p>
        </section>

        {/* Challenges */}
        <section className="mt-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <div className="flex items-center gap-2 font-display text-lg font-semibold text-[var(--heading)]">
            <AlertTriangle size={18} className="text-[var(--accent-2)]" />
            Challenges Faced
          </div>
          <ul className="mt-4 space-y-2">
            {project.challenges.map((c, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-[var(--text-dim)]">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-2)]" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* Improvements */}
        <section className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <div className="flex items-center gap-2 font-display text-lg font-semibold text-[var(--heading)]">
            <Rocket size={18} className="text-[var(--accent)]" />
            Future Improvements
          </div>
          <ul className="mt-4 space-y-2">
            {project.improvements.map((imp, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-[var(--text-dim)]">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                {imp}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
