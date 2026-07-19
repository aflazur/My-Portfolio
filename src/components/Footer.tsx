import { Github, Linkedin, Twitter, Facebook, Mail } from "lucide-react";
import portfolioData from "../data/portfolioData";

const ICONS: Record<string, React.ReactNode> = {
  github: <Github size={17} />,
  linkedin: <Linkedin size={17} />,
  twitter: <Twitter size={17} />,
  facebook: <Facebook size={17} />,
  email: <Mail size={17} />,
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-[var(--text-dim)]">
          © {new Date().getFullYear()} {portfolioData.name}. Built with React &amp; Tailwind.
        </p>
        <div className="flex gap-3">
          {portfolioData.socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="text-[var(--text-dim)] transition-colors hover:text-[var(--accent)]"
            >
              {ICONS[s.icon]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
