import { useState } from "react";
import { PROJECTS as TID } from "@/constants/testIds";
import { PROJECTS } from "@/lib/portfolioData";

function ProjectRow({ p, align = "left" }) {
  const [hover, setHover] = useState(false);
  const isLeft = align === "left";

  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={TID.link(p.slug)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="project-card group block py-12 md:py-16 hairline"
    >
      <div
        data-testid={TID.card(p.slug)}
        className={`grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-10 items-start ${
          isLeft ? "" : "md:[direction:rtl]"
        }`}
      >
        {/* Meta column */}
        <div className="md:col-span-3 [direction:ltr]">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-display text-3xl italic text-[var(--accent)]">
              {p.index}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)]">
              · {p.year}
            </span>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)]">
            {p.discipline}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--ink-2)] border border-[var(--border)] px-2 py-1"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Image column */}
        <div className="md:col-span-5 [direction:ltr] overflow-hidden">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              className="project-img absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-[var(--border)]" />
          </div>
        </div>

        {/* Copy column */}
        <div className="md:col-span-4 [direction:ltr]">
          <h3 className="font-display text-3xl md:text-5xl text-[var(--ink)] leading-[1.0] tracking-tight">
            {p.title}
          </h3>
          <p className="mt-2 font-display italic text-lg md:text-xl text-[var(--ink-2)]">
            {p.subtitle}
          </p>
          <p className="mt-6 font-body text-sm md:text-base text-[var(--ink-2)] leading-relaxed">
            {p.description}
          </p>
          <span
            className={`mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] transition-colors ${
              hover ? "text-[var(--accent)]" : "text-[var(--ink)]"
            }`}
          >
            View Repository
            <span aria-hidden="true">↗</span>
          </span>
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      data-testid={TID.root}
      className="relative py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 mb-16">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]">
            03
          </span>
          <span className="h-px flex-1 bg-[var(--border)]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)]">
            Archives · Selected Works
          </span>
        </div>
        <h2 className="mt-10 font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter text-[var(--ink)] leading-[0.95]">
          Six expeditions across{" "}
          <em className="italic text-[var(--ink-2)]">code, sky &amp; capital.</em>
        </h2>
      </div>

      <div data-testid={TID.list} className="mx-auto max-w-7xl px-6 md:px-12 hairline">
        {PROJECTS.map((p, i) => (
          <ProjectRow key={p.slug} p={p} align={i % 2 === 0 ? "left" : "right"} />
        ))}
      </div>
    </section>
  );
}
