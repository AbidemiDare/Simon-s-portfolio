import { site, ventures } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20">
      <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:gap-12">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.9rem,6vw,3rem)] font-extrabold leading-[1.05] tracking-tight">
            About me
          </h2>
          <p className="mt-4 max-w-xs text-lg text-[var(--muted)]">{site.aboutLead}</p>
        </div>

        <div className="max-w-xl">
          <div className="space-y-4">
            {site.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-6">
            <p className="mb-3 text-sm font-medium text-[var(--muted)]">What I do</p>
            <div className="flex flex-wrap gap-2.5">
              {ventures.map((v) => (
                <a
                  key={v.id}
                  href={`#${v.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 font-medium hover:border-[var(--ink)]"
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${v.bar}`} />
                  {v.title}
                </a>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-block w-full rounded-lg bg-[var(--lime)] px-6 py-3.5 text-center font-medium text-[#0e3b2b] hover:brightness-95 sm:w-auto"
          >
            Work with me
          </a>
        </div>
      </div>

      <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
        {site.values.map((v) => (
          <div key={v.title} className="bg-[var(--bg)] p-5 sm:p-6">
            <dt className="font-[family-name:var(--font-display)] text-xl font-extrabold">
              {v.title}
            </dt>
            <dd className="mt-1 text-[var(--muted)]">{v.text}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}