import { FOOTER } from "@/constants/testIds";
import { PROFILE } from "@/lib/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid={FOOTER.root}
      className="relative pt-20 pb-12 hairline"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Signature line */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 items-end">
          <div className="md:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-3)]">
              ◇ End of Transmission
            </p>
            <p className="mt-4 font-display text-3xl md:text-5xl text-[var(--ink)] leading-tight">
              Tune the string.
              <span className="text-[var(--ink-3)]"> Then </span>
              <em className="italic text-[var(--accent)]">strike.</em>
            </p>
          </div>
          <div className="md:col-span-5 md:text-right space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-3)]">
              © {year} {PROFILE.name}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-3)]">
              Built solo in Bangalore. No cookies. No clutter.
            </p>
          </div>
        </div>

        {/* Giant signature */}
        <div className="mt-16 select-none">
          <p className="font-display font-light leading-none tracking-tighter text-[var(--ink-3)] text-[16vw] md:text-[14vw] -mb-4">
            NEERAJ
            <span className="text-[var(--accent)]">.</span>
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between text-[var(--ink-3)] font-mono text-[10px] uppercase tracking-[0.3em]">
          <span>v_1.0.0 · static build</span>
          <span>BLR · 12.97°N 77.59°E</span>
        </div>
      </div>
    </footer>
  );
}
