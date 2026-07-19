import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import portfolioData from "../data/portfolioData";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (href: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled ? "bg-[var(--bg)]/90 backdrop-blur border-[var(--border)]" : "bg-transparent border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <Link
          to="/"
          className="font-mono text-lg font-semibold text-[var(--heading)]"
          onClick={() => setOpen(false)}
        >
          <span className="text-[var(--accent)]">&lt;</span>
          {portfolioData.name}
          <span className="text-[var(--accent)]"> /&gt;</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => goToSection(link.href)}
                className="rounded-md px-3 py-2 font-mono text-sm text-[var(--text-dim)] transition-colors hover:text-[var(--accent)]"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href={portfolioData.resumeUrl}
          download
          className="hidden items-center gap-2 rounded-md border border-[var(--accent)] px-4 py-2 font-mono text-sm text-[var(--accent)] transition-colors hover:bg-[var(--accent-soft)] lg:flex"
        >
          <Download size={16} />
          Resume
        </a>

        {/* Mobile toggle */}
        <button
          className="text-[var(--heading)] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--bg)] px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => goToSection(link.href)}
                  className="block w-full rounded-md px-3 py-3 text-left font-mono text-sm text-[var(--text-dim)] hover:bg-[var(--surface-2)] hover:text-[var(--accent)]"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href={portfolioData.resumeUrl}
            download
            className="mt-3 flex items-center justify-center gap-2 rounded-md border border-[var(--accent)] px-4 py-3 font-mono text-sm text-[var(--accent)] hover:bg-[var(--accent-soft)]"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
