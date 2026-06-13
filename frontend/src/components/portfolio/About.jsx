import { ABOUT } from "@/constants/testIds";
import { PROFILE } from "@/lib/portfolioData";

export default function About() {
  return (
    <section
      id="about"
      data-testid={ABOUT.root}
      className="relative py-32 md:py-48"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-20">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]">
            01
          </span>
          <span className="h-px flex-1 bg-[var(--border)]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)]">
            Philosophy
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-10">
          {/* Floating glyph */}
          <div className="md:col-span-3 hidden md:flex items-start justify-center">
            <div className="font-display text-[140px] leading-none text-[var(--ink-3)] float-soft select-none">
              静
            </div>
          </div>

          {/* Pull quote */}
          <div className="md:col-span-9">
            <p
              data-testid={ABOUT.pullQuote}
              className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-[var(--ink)]"
            >
              <span className="text-[var(--accent)]">— </span>
              Exploring the intersection of{" "}
              <em className="italic">artificial intelligence,</em>{" "}
              <em className="italic">space systems,</em> backend engineering, and{" "}
              <em className="italic">quantitative finance</em> through research.
            </p>

            {/* Three-column dense paragraph */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)] mb-4">
                  ◇ Location
                </p>
                <p className="font-body text-base text-[var(--ink-2)] leading-relaxed">
                  Bangalore, India. Building from where monsoon meets monsoon —
                  remote-first, deep-work-aligned.
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)] mb-4">
                  ◇ Practice
                </p>
                <p
                  data-testid={ABOUT.paragraph}
                  className="font-body text-base text-[var(--ink-2)] leading-relaxed"
                >
                  {PROFILE.about}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)] mb-4">
                  ◇ Method
                </p>
                <p className="font-body text-base text-[var(--ink-2)] leading-relaxed">
                  Small modules. Sharp edges. Native scroll. Native math. No
                  ceremony. <em className="italic">Tune the string, then strike.</em>
                </p>
              </div>
            </div>

            {/* Resume CTA */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 hairline">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)]">
                ◇ Full Dossier
              </p>
              <a
                data-testid={ABOUT.resume}
                href={PROFILE.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 font-display text-2xl md:text-3xl italic text-[var(--ink)] link-underline"
              >
                Download CV
                <span className="text-[var(--accent)] transition-transform group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-3)]">
                PDF · 89 KB
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
