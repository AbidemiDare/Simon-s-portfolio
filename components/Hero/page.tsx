import { site } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="pt-10 pb-14 sm:pt-16 sm:pb-20">
      <h1 className="rise mb-6 max-w-[12ch] font-[family-name:var(--font-display)] text-[clamp(3rem,10vw,7.5rem)] font-extrabold leading-[0.95] tracking-tight">
        {site.tagline}
      </h1>
      <p className="rise rise-2 mb-8 max-w-xl text-xl text-[var(--muted)]">{site.intro}</p>
      <div className="rise rise-3 flex flex-wrap gap-3">
        <a
          href="#contact"
          className="rounded-lg bg-[var(--ink)] px-5 py-3 font-medium text-[var(--bg)] hover:opacity-90"
        >
          Get in touch
        </a>
        <a
          href="#estate"
          className="rounded-lg border-[1.5px] border-[var(--ink)] px-5 py-3 font-medium"
        >
          See what I do
        </a>
      </div>
    </section>
  );
}
