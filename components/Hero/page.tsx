import Image from "next/image";
import { site } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="grid items-center gap-8 pt-6 pb-12 sm:gap-10 sm:pt-12 sm:pb-16 md:min-h-[calc(100svh-8rem)] md:grid-cols-[1.3fr_1fr] lg:pb-24"
    >
      <div>
        <h1 className="rise mb-5 break-words font-[family-name:var(--font-display)] text-[clamp(2.5rem,9vw,5.5rem)] font-extrabold leading-[0.98] tracking-tight sm:mb-6">
          {site.tagline}
        </h1>
        <p className="rise rise-2 mb-7 max-w-xl text-lg text-[var(--muted)] sm:mb-8 sm:text-xl">
          {site.intro}
        </p>
        <div className="rise rise-3 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="rounded-lg bg-[var(--lime)] px-6 py-3.5 text-center font-medium text-[#0e3b2b] hover:brightness-95"
          >
            Get in touch
          </a>
          <a
            href="#estate"
            className="rounded-lg border-[1.5px] border-[var(--ink)] px-6 py-3.5 text-center font-medium hover:bg-white/5"
          >
            See what I do
          </a>
        </div>
      </div>

      {site.photo && (
        <div className="rise rise-2 relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl ring-1 ring-[var(--line)] sm:max-w-sm md:max-w-none">
          <Image
            src={site.photo.src}
            alt={site.photo.alt}
            fill
            priority
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover object-top"
          />
        </div>
      )}
    </section>
  );
}
