import { GraduationCap } from "lucide-react";
import portfolioData from "../data/portfolioData";
import { SectionHeading } from "./About";

export default function Education() {
  return (
    <section id="education" className="border-b border-[var(--border)] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="03 · Education" title="Academic Background" />

        <div className="mt-10 space-y-5">
          {portfolioData.education.map((edu, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:flex-row sm:items-start"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                <GraduationCap size={22} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-[var(--heading)]">
                    {edu.degree}
                  </h3>
                  <span className="font-mono text-xs text-[var(--accent-2)]">{edu.duration}</span>
                </div>
                <p className="mt-1 text-sm text-[var(--text-dim)]">
                  {edu.institution} · {edu.location}
                </p>
                {edu.details && (
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-dim)]">
                    {edu.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
