import { useEffect, useState } from "react";
import { HERO } from "@/constants/testIds";
import { PROFILE } from "@/lib/portfolioData";
import ScrambleText from "./ScrambleText";

const SCATTERED = [
  { text: "v_ 1.0.0", className: "top-32 left-6 md:left-12" },
  { text: "BLR · IND · 12.97°N 77.59°E", className: "top-32 right-6 md:right-12" },
  { text: "/ index", className: "bottom-28 left-6 md:left-12" },
  { text: "scroll ↓", className: "bottom-10 left-1/2 -translate-x-1/2" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      data-testid={HERO.root}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Scattered mono labels */}
      {SCATTERED.map((s, i) => (
        <span
          key={i}
          className={`absolute font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)] ${s.className}`}
        >
          {s.text}
        </span>
      ))}

      {/* Center floating glyph */}
      <div className="absolute top-1/2 right-6 md:right-16 -translate-y-1/2 hidden md:block">
        <div className="float-soft font-display text-[180px] leading-none text-[var(--ink-3)] opacity-50 select-none">
          刃
        </div>
      </div>

      {/* Headline cluster */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 pt-44 md:pt-56 pb-32">
        <h1
          data-testid={HERO.headline}
          className="font-display font-light tracking-tighter leading-[0.95] text-[var(--ink)] text-5xl md:text-7xl lg:text-[7.5rem]"
        >
          <span className="reveal-mask block">
            <span style={{ animationDelay: "0.05s" }}>To master the&nbsp;</span>
          </span>
          <span className="reveal-mask block">
            <span style={{ animationDelay: "0.18s" }}>
              <em className="font-display italic text-[var(--accent)]">model</em>
              <span className="text-[var(--ink-3)]"> —</span>
            </span>
          </span>
          <span className="reveal-mask block">
            <span style={{ animationDelay: "0.32s" }}>is to master the</span>
          </span>
          <span className="reveal-mask block">
            <span style={{ animationDelay: "0.46s" }}>
              <em className="font-display italic">unknown.</em>
            </span>
          </span>
        </h1>

        {/* Lower-left meta block */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)] mb-3">
              ◇ Author
            </p>
            <h2
              data-testid={HERO.name}
              className="font-display text-3xl md:text-4xl text-[var(--ink)] leading-none"
            >
              <ScrambleText text={PROFILE.name} duration={1400} start={mounted} />
            </h2>
            <p
              data-testid={HERO.tagline}
              className="mt-3 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-2)]"
            >
              {PROFILE.roles.join("  ·  ")}
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)] mb-3">
              ◇ Discipline
            </p>
            <p className="font-display text-xl md:text-2xl text-[var(--ink-2)] leading-snug italic">
              AI for aerospace · CubeSat &amp; drone systems · reinforcement
              learning · algorithmic trading · creative engineering.
            </p>
          </div>
        </div>
      </div>

      {/* Hairline separator */}
      <div className="absolute bottom-0 left-0 right-0 hairline" />
    </section>
  );
}
