import Image from "next/image";
import type { Venture as VentureType } from "@/lib/content";
import Flier from "../Flier/page";

export default function Venture({ venture }: { venture: VentureType }) {
  const { id, title, blurb, cta, items, band, accent, bar, images = [], flier } = venture;

  return (
    <section id={id} className={`${band} flex-1 py-12 sm:py-16 lg:py-20`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className={`mb-4 block h-1 w-12 rounded-full ${bar}`} />
            <h2
              className={`mb-4 font-[family-name:var(--font-display)] text-[clamp(2rem,7vw,4rem)] font-extrabold leading-none tracking-tight ${accent}`}
            >
              {title}
            </h2>
            <p className="mb-5 max-w-md text-base sm:text-lg">{blurb}</p>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center font-medium underline underline-offset-4"
            >
              {cta}
            </a>
            {flier && (
              <div className="mt-8">
                <Flier {...flier} />
              </div>
            )}
          </div>

          <ul className="border-t border-[var(--line)]">
            {items.map((item) => (
              <li key={item.title} className="border-b border-[var(--line)] py-4 font-medium">
                <span className="text-base sm:text-lg">{item.title}</span>
                <span className="mt-0.5 block text-sm font-normal text-[var(--muted)] sm:text-base">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {images.length > 0 && (
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {images.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-[var(--line)]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
