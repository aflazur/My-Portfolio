import { Sparkles } from "lucide-react";
import portfolioData from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="border-b border-[var(--border)] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="01 · About" title="Who I Am" />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5">
            {portfolioData.about.journey.map((para, i) => (
              <p key={i} className="leading-relaxed text-[var(--text-dim)]">
                {para}
              </p>
            ))}
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="font-display text-lg font-semibold text-[var(--heading)]">
                Outside of Code
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-dim)]">
                {portfolioData.about.interests}
              </p>
            </div>
            <div className="rounded-xl border border-[var(--accent)]/40 bg-[var(--accent-soft)] p-6">
              <div className="flex items-center gap-2 font-mono text-sm text-[var(--accent)]">
                <Sparkles size={16} />
                Fun fact
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text)]">
                {portfolioData.about.funFact}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-sm text-[var(--accent)]">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-[var(--heading)] sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
