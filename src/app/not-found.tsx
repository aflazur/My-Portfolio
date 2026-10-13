import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="font-display text-3xl font-semibold text-[var(--heading)]">
        Project not found
      </h1>
      <p className="mt-3 text-[var(--text-dim)]">
        The project you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link
        href="/#projects"
        className="mt-6 inline-flex items-center gap-2 rounded-md border border-[var(--accent)] px-5 py-2.5 font-mono text-sm text-[var(--accent)] hover:bg-[var(--accent-soft)]"
      >
        <ArrowLeft size={16} />
        Back to projects
      </Link>
    </div>
  );
}
