import { site } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="grid gap-6 py-16 md:grid-cols-[1fr_1.4fr] md:gap-12 md:py-20">
      <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] font-extrabold leading-[1.05] tracking-tight">
        About me
      </h2>
      <div className="max-w-xl space-y-4">
        {site.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}
