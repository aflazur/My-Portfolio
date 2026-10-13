import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowUp,
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import portfolioData from "@/data/portfolioData";

const ICONS: Record<string, ReactNode> = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  twitter: <Twitter size={18} />,
  facebook: <Facebook size={18} />,
  email: <Mail size={18} />,
};

const QUICK_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const { name, tagline, email, phone, location, socials } = portfolioData;

  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--surface)]">
      {/* accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-60" />

      <div className="mx-auto max-w-6xl px-5 pb-8 pt-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="font-mono text-lg font-semibold text-[var(--heading)]">
              <span className="text-[var(--accent)]">&lt;</span>
              {name}
              <span className="text-[var(--accent)]"> /&gt;</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--text-dim)]">
              {tagline}
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-dim)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
                >
                  {ICONS[s.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-1 lg:grid-cols-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-dim)] transition-colors hover:text-[var(--accent)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-[var(--text-dim)] transition-colors hover:text-[var(--accent)]"
                >
                  <Mail size={16} className="shrink-0 text-[var(--accent)]" />
                  <span className="break-all">{email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-[var(--text-dim)] transition-colors hover:text-[var(--accent)]"
                >
                  <Phone size={16} className="shrink-0 text-[var(--accent)]" />
                  {phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[var(--text-dim)]">
                <MapPin size={16} className="shrink-0 text-[var(--accent)]" />
                {location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-6 sm:flex-row">
          <p className="text-center font-mono text-xs text-[var(--text-dim)] sm:text-left">
            © {new Date().getFullYear()} {name}. All rights reserved.
            <span className="mx-2 hidden sm:inline">·</span>
            
          </p>

          <Link
            href="/#home"
            aria-label="Back to top"
            className="group flex items-center gap-2 rounded-md border border-[var(--border)] px-3.5 py-2 font-mono text-xs text-[var(--text-dim)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Back to top
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}