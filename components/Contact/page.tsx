import { site } from "@/lib/content";

const links = [
  { label: "WhatsApp", href: site.contact.whatsapp },
  { label: "Email", href: site.contact.email },
  { label: "Instagram", href: site.contact.instagram },
  { label: "X", href: site.contact.x },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-[var(--line)] pt-14 pb-12">
      <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] font-extrabold leading-[1.05] tracking-tight">
        Let’s talk
      </h2>
      <p className="my-4 max-w-md text-[var(--muted)]">
        Tell me which business you’re interested in and I’ll reply as soon as I can.
      </p>
      <div className="flex flex-wrap gap-3">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="rounded-lg border-[1.5px] border-[var(--line)] px-4 py-2.5 font-medium hover:border-[var(--ink)]"
          >
            {l.label}
          </a>
        ))}
      </div>
    </section>
  );
}
