import { site, ventures } from "@/lib/content";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-5">
      <a href="#top" className="font-[family-name:var(--font-display)] text-lg font-extrabold">
        {site.name}
      </a>
      <nav aria-label="Sections" className="flex gap-4 sm:gap-5 font-medium text-[var(--muted)]">
        {ventures.map((v) => (
          <a key={v.id} href={`#${v.id}`} className="hover:text-[var(--ink)]">
            {v.title}
          </a>
        ))}
        <a href="#contact" className="hover:text-[var(--ink)]">Contact</a>
      </nav>
    </header>
  );
}
