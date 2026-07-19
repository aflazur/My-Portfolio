import portfolioData from "../data/portfolioData";
import { SectionHeading } from "./About";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-[var(--border)] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="02 · Skills" title="What I Work With" />
        <p className="mt-3 max-w-2xl text-[var(--text-dim)]">
          Organized the way I think about a system — as connected tables, each one a category of
          tools that talk to the others.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {portfolioData.skills.map((cat) => (
            <div
              key={cat.category}
              className="card-hover overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]"
            >
              {/* "table header" bar */}
              <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface-2)] px-5 py-3">
                <h3 className="font-display text-base font-semibold text-[var(--heading)]">
                  {cat.category}
                </h3>
                <span className="rounded border border-[var(--accent)]/40 px-2 py-0.5 font-mono text-xs text-[var(--accent)]">
                  {cat.icon}
                </span>
              </div>

              <div className="space-y-4 p-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between font-mono text-xs">
                      <span className="text-[var(--text)]">{skill.name}</span>
                      <span className="text-[var(--text-dim)]">{skill.level}%</span>
                    </div>
                    <div className="skill-bar h-2 w-full overflow-hidden rounded-full">
                      <div
                        className="skill-bar-fill h-full rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
