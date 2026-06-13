import { SKILLS } from "@/constants/testIds";
import { SKILLS_BAND_1, SKILLS_BAND_2, SKILL_PILLARS } from "@/lib/portfolioData";
import Marquee from "./Marquee";

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid={SKILLS.root}
      className="relative py-24 md:py-36 hairline"
    >
      {/* Section label row */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 mb-10">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]">
            02
          </span>
          <span className="h-px flex-1 bg-[var(--border)]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)]">
            Stack · Tools · Tongues
          </span>
        </div>
        <p className="mt-8 font-display text-2xl md:text-4xl italic text-[var(--ink-2)] max-w-3xl leading-snug">
          Modular by nature. Build small, scale sharp.
        </p>
      </div>

      {/* Two opposing marquees */}
      <div data-testid={SKILLS.band1} className="py-6">
        <Marquee items={SKILLS_BAND_1} direction="left" />
      </div>
      <div data-testid={SKILLS.band2} className="py-6 mt-2">
        <Marquee items={SKILLS_BAND_2} direction="right" />
      </div>

      {/* Capability grid */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
        {SKILL_PILLARS.map((b) => (
          <div key={b.n}>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)] mb-3">
              {b.n}
            </p>
            <h4 className="font-display text-xl md:text-2xl text-[var(--ink)] mb-3">
              {b.t}
            </h4>
            <p className="font-body text-sm text-[var(--ink-2)] leading-relaxed">
              {b.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
