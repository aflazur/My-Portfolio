import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, AlertTriangle, Rocket } from "lucide-react";
import portfolioData from "@/data/portfolioData";

type Props = { params: Promise<{ id: string }> };

// Pre-build one static page per project in portfolioData.ts
export function generateStaticParams() {
  return portfolioData.projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} | ${portfolioData.name}`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <div className="px-5 py-14 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-sm text-[var(--text-dim)] hover:text-[var(--accent)]"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="relative mt-6 h-72 w-full overflow-hidden rounded-xl border border-[var(--border)]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(min-width: 896px) 896px, 100vw"
            className="object-cover"
            priority
          />
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
            {project.backendLink && (
              <a
                href={project.backendLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-md border border-[var(--border)] px-4 py-2.5 font-mono text-sm text-[var(--heading)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Github size={16} />
                Server Code
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
