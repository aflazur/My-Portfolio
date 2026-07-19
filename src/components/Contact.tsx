import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import portfolioData from "../data/portfolioData";
import { SectionHeading } from "./About";

export default function Contact() {
  const items = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: portfolioData.email,
      href: `mailto:${portfolioData.email}`,
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: portfolioData.phone,
      href: `tel:${portfolioData.phone.replace(/\s/g, "")}`,
    },
    ...(portfolioData.whatsapp
      ? [
          {
            icon: <MessageCircle size={20} />,
            label: "WhatsApp",
            value: portfolioData.whatsapp,
            href: `https://wa.me/${portfolioData.whatsapp.replace(/[^\d]/g, "")}`,
          },
        ]
      : []),
  ];

  return (
    <section id="contact" className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="06 · Contact" title="Let's Build Something" />
        <p className="mt-3 max-w-2xl text-[var(--text-dim)]">
          Have a project, an opportunity, or just want to talk databases? My inbox is open.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "WhatsApp" ? "_blank" : undefined}
                rel="noreferrer"
                className="card-hover flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs text-[var(--text-dim)]">{item.label}</p>
                  <p className="truncate text-sm text-[var(--heading)]">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                <MapPin size={20} />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-xs text-[var(--text-dim)]">Location</p>
                <p className="truncate text-sm text-[var(--heading)]">{portfolioData.location}</p>
              </div>
            </div>
          </div>

          <form
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6"
            onSubmit={(e) => {
              e.preventDefault();
              const formEl = e.currentTarget;
              const data = new FormData(formEl);
              const subject = encodeURIComponent(`Portfolio contact from ${data.get("name")}`);
              const body = encodeURIComponent(String(data.get("message") ?? ""));
              window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`;
            }}
          >
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block font-mono text-xs text-[var(--text-dim)]">
                  Name
                </label>
                <input
                  name="name"
                  required
                  className="w-full rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2.5 text-sm text-[var(--heading)] outline-none focus:border-[var(--accent)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-xs text-[var(--text-dim)]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2.5 text-sm text-[var(--heading)] outline-none focus:border-[var(--accent)]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-mono text-xs text-[var(--text-dim)]">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2.5 text-sm text-[var(--heading)] outline-none focus:border-[var(--accent)]"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-[var(--accent)] py-3 font-mono text-sm font-semibold text-[#06110e] transition-transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
