import { EXPERIENCE as TID } from "@/constants/testIds";
import { EXPERIENCE, EDUCATION, ACHIEVEMENTS } from "@/lib/portfolioData";

export default function Experience() {
  return (
    <section
      id="experience"
      data-testid={TID.root}
      className="relative py-24 md:py-36 hairline"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]">
            04
          </span>
          <span className="h-px flex-1 bg-[var(--border)]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)]">
            Journey · sys.log
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <h2 className="md:col-span-5 font-display text-4xl md:text-6xl font-light tracking-tighter text-[var(--ink)] leading-[0.95]">
            A field log of <em className="italic">small strikes</em> and long lines of code.
          </h2>

          <ol className="md:col-span-7 space-y-0">
            {EXPERIENCE.map((e) => (
              <li
                key={e.slug}
                data-testid={TID.item(e.slug)}
                className="grid grid-cols-12 gap-4 md:gap-6 py-8 hairline group"
              >
                <div className="col-span-3 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-2)] pt-2">
                  {e.year}
                </div>
                <div className="col-span-9">
                  <h4 className="font-display text-2xl md:text-3xl text-[var(--ink)] leading-tight">
                    {e.role}
                    <span className="text-[var(--accent)]"> · </span>
                    <span className="text-[var(--ink-2)] italic">{e.org}</span>
                  </h4>
                  <p className="mt-3 font-body text-sm md:text-base text-[var(--ink-2)] leading-relaxed max-w-2xl">
                    {e.summary}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Education + Achievements */}
        <div className="mt-28 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Education */}
          <div className="md:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent)] mb-6">
              ◇ Education
            </p>
            <ol className="space-y-0">
              {EDUCATION.map((e) => (
                <li
                  key={e.slug}
                  data-testid={TID.educationItem(e.slug)}
                  className="py-6 hairline grid grid-cols-12 gap-4"
                >
                  <div className="col-span-4 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-2)] pt-1">
                    {e.year}
                  </div>
                  <div className="col-span-8">
                    <h5 className="font-display text-xl md:text-2xl text-[var(--ink)] leading-snug">
                      {e.degree}
                    </h5>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--ink-3)]">
                      {e.school}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Achievements */}
          <div className="md:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent)] mb-6">
              ◇ Recognition
            </p>
            <ol className="space-y-0">
              {ACHIEVEMENTS.map((a) => (
                <li
                  key={a.slug}
                  data-testid={TID.achievementItem(a.slug)}
                  className="py-6 hairline"
                >
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="font-display italic text-[var(--accent)] text-xl">
                      {a.label}
                    </span>
                    <h5 className="font-display text-xl md:text-2xl text-[var(--ink)] leading-snug">
                      {a.title}
                    </h5>
                  </div>
                  <p className="mt-2 font-body text-sm text-[var(--ink-2)] leading-relaxed max-w-md">
                    {a.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
