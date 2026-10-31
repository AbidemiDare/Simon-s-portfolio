import { site } from "@/lib/content";
import ContactForm from "../ContactForm/page";

const links = [
  { label: "WhatsApp", href: site.contact.whatsapp },
  { label: "Email", href: site.contact.email },
  { label: "Instagram", href: site.contact.instagram },
  { label: "X", href: site.contact.x },
];

export default function Contact() {
  return (
    <section id="contact" className="pt-6 pb-10 sm:pt-10 sm:pb-12">
      <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.9rem,6vw,3rem)] font-extrabold leading-[1.05] tracking-tight">
        Let’s talk
      </h2>
      <p className="my-4 max-w-md text-[var(--muted)]">
        Send me a message here, or reach out on social media. Whichever is easier for you.
      </p>

      <div className="mt-8 grid gap-10 md:grid-cols-[1.3fr_1fr] md:gap-14">
        <div>
          <h3 className="mb-4 font-[family-name:var(--font-display)] text-xl font-extrabold">
            Send me a message
          </h3>
          <ContactForm />
        </div>

        <div>
          <h3 className="mb-4 font-[family-name:var(--font-display)] text-xl font-extrabold">
            Or find me on
          </h3>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`rounded-lg border-[1.5px] px-5 py-3 text-center font-medium md:text-left ${
                  i === 0
                    ? "border-[var(--lime)] bg-[var(--lime)] text-[#0e3b2b] hover:brightness-95"
                    : "border-[var(--line)] hover:border-[var(--ink)]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}