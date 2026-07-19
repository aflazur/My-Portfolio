import { useEffect, useState } from "react";
import { Download, Mail, Github, Linkedin, Twitter, Facebook } from "lucide-react";
import portfolioData from "../data/portfolioData";

const ICONS: Record<string, React.ReactNode> = {
  github: <Github size={19} />,
  linkedin: <Linkedin size={19} />,
  twitter: <Twitter size={19} />,
  facebook: <Facebook size={19} />,
  email: <Mail size={19} />,
  whatsapp: <Mail size={19} />,
};

function useTypedRole(roles: string[]) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const speed = deleting ? 40 : 70;
    const pause = 1400;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return text;
}

export default function Hero() {
  const typedRole = useTypedRole(portfolioData.designation);

  return (
    <section
      id="home"
      className="node-grid relative overflow-hidden border-b border-[var(--border)] px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* Text column */}
        <div className="text-center lg:text-left">
          <p className="mb-4 font-mono text-sm text-[var(--accent)]">
            {"// welcome to my portfolio"}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I'm {portfolioData.name}
          </h1>
          <p className="mt-3 h-8 font-mono text-lg text-[var(--accent-2)] sm:text-xl">
            {typedRole}
            <span className="animate-pulse">_</span>
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--text-dim)] lg:mx-0">
            {portfolioData.heroIntro}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href={portfolioData.resumeUrl}
              download
              className="flex items-center gap-2 rounded-md bg-[var(--accent)] px-6 py-3 font-mono text-sm font-semibold text-[#06110e] transition-transform hover:-translate-y-0.5"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-md border border-[var(--border)] px-6 py-3 font-mono text-sm text-[var(--heading)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-3 lg:justify-start">
            {portfolioData.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-dim)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {ICONS[s.icon]}
              </a>
            ))}
          </div>
        </div>

        {/* Photo column */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl border border-dashed border-[var(--border)]" />
            <div className="absolute -right-3 -top-3 h-3 w-3 rounded-full bg-[var(--accent)]" />
            <div className="absolute -bottom-3 -left-3 h-3 w-3 rounded-full bg-[var(--accent-2)]" />
            <div className="h-56 w-56 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_60px_-20px_rgba(94,234,212,0.35)] sm:h-72 sm:w-72">
              <img
                src={portfolioData.photo}
                alt={portfolioData.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
