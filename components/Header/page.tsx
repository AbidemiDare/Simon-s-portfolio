import { site, ventures } from "@/lib/content";

export default function Header({ active }: { active: string }) {
  const links = [
    ...ventures.map((v) => ({ id: v.id, label: v.title })),
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-5">
      <a href="#top" className="font-[family-name:var(--font-display)] text-lg font-extrabold">
        {site.name}
      </a>
      <nav
        aria-label="Sections"
        className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium sm:text-base"
      >
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            aria-current={active === l.id ? "page" : undefined}
            className={`border-b-2 py-1 ${
              active === l.id
                ? "border-[var(--lime)] text-[var(--ink)]"
                : "border-transparent text-[var(--muted)] hover:text-[var(--ink)]"
            }`}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
