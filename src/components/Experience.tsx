import { Briefcase } from "lucide-react";
import portfolioData from "../data/portfolioData";
import { SectionHeading } from "./About";

export default function Experience() {
  const hasExperience = portfolioData.experience.length > 0;

  return (
    <section id="experience" className="border-b border-[var(--border)] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="04 · Experience" title="Where I've Worked" />

        {hasExperience ? (
          <div className="mt-10 space-y-6 border-l border-[var(--border)] pl-8">
            {portfolioData.experience.map((exp, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-[var(--heading)]">
                    {exp.role} · {exp.organization}
                  </h3>
                  <span className="font-mono text-xs text-[var(--accent-2)]">{exp.duration}</span>
                </div>
                <p className="mt-1 text-sm text-[var(--text-dim)]">{exp.location}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--text-dim)]">
                  {exp.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10 flex flex-col items-center gap-3 rounded-xl border border-dashed border-[var(--border)] py-14 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
              <Briefcase size={22} />
            </div>
            <h3 className="font-display text-lg font-semibold text-[var(--heading)]">
              Early in my career — and open to opportunities
            </h3>
            <p className="max-w-md text-sm text-[var(--text-dim)]">
              I'm currently focused on academic projects and independent full-stack builds while
              I look for my first professional role. Check out the projects below for what I can
              build.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
