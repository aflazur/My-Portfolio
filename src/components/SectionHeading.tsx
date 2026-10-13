export default function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-sm text-[var(--accent)]">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-[var(--heading)] sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
