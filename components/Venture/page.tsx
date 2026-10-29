import type { Venture as VentureType } from "@/lib/content";

export default function Venture({ venture }: { venture: VentureType }) {
  const { id, title, blurb, cta, items, theme, focus } = venture;
  return (
    <section id={id} className={`py-16 ${theme}`}>
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[1.1fr_1fr] md:gap-12">
        <div>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-[clamp(2.2rem,6vw,4rem)] font-extrabold leading-none tracking-tight">
            {title}
          </h2>
          <p className="mb-5 max-w-md text-lg">{blurb}</p>
          <a href="#contact" className={`font-medium underline underline-offset-4 ${focus}`}>
            {cta}
          </a>
        </div>
        <ul className="border-t-[1.5px] border-current">
          {items.map((item) => (
            <li key={item.title} className="border-b-[1.5px] border-current py-3.5 font-medium">
              {item.title}
              <span className="block text-base font-normal opacity-85">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
