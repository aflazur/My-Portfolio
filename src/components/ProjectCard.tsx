import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card-hover flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
      <div className="relative h-48 w-full overflow-hidden bg-[var(--surface-2)]">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {project.featured && (
          <span className="absolute left-3 top-3 rounded-full border border-[var(--accent)]/50 bg-[var(--bg)]/80 px-3 py-1 font-mono text-xs text-[var(--accent)] backdrop-blur">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-[var(--heading)]">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-[var(--text-dim)]">{project.tagline}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--border)] px-2.5 py-0.5 font-mono text-xs text-[var(--text-dim)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="mt-5 flex items-center justify-center gap-1.5 rounded-md border border-[var(--accent)] py-2.5 font-mono text-sm text-[var(--accent)] transition-colors hover:bg-[var(--accent-soft)]"
        >
          View Details
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
