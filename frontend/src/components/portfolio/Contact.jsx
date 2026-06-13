import { CONTACT } from "@/constants/testIds";
import { PROFILE } from "@/lib/portfolioData";

export default function Contact() {
  return (
    <section
      id="contact"
      data-testid={CONTACT.root}
      className="relative py-32 md:py-48 hairline"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent)]">
            05
          </span>
          <span className="h-px flex-1 bg-[var(--border)]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)]">
            Signal · Initiate Protocol
          </span>
        </div>

        {/* Massive line */}
        <h2 className="font-display font-light tracking-tighter leading-[0.9] text-[var(--ink)] text-6xl md:text-8xl lg:text-[9rem]">
          Let&apos;s build
          <br />
          something
          <br />
          <em className="italic text-[var(--accent)]">precise.</em>
        </h2>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)] mb-4">
              ◇ Direct Channel
            </p>
            <a
              data-testid={CONTACT.email}
              href={`mailto:${PROFILE.email}`}
              className="font-display text-3xl md:text-5xl text-[var(--ink)] italic link-underline break-all"
            >
              {PROFILE.email}
            </a>
            <p className="mt-6 font-body text-base text-[var(--ink-2)] max-w-md leading-relaxed">
              Open to ML research collaborations, aerospace systems, quant
              tooling, and unusually ambitious creative engineering briefs.
            </p>

            <a
              data-testid={CONTACT.resume}
              href={PROFILE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 border border-[var(--border)] px-5 py-3 hover:border-[var(--accent)] transition-colors"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink)]">
                Download CV
              </span>
              <span className="font-mono text-[11px] text-[var(--accent)]">
                ↓ PDF
              </span>
            </a>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)] mb-4">
                ◇ Code
              </p>
              <a
                data-testid={CONTACT.github}
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-2xl md:text-3xl text-[var(--ink)] link-underline"
              >
                GitHub<span className="text-[var(--accent)]">↗</span>
              </a>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)]">
                @{PROFILE.handle}
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)] mb-4">
                ◇ Network
              </p>
              <a
                data-testid={CONTACT.linkedin}
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-2xl md:text-3xl text-[var(--ink)] link-underline"
              >
                LinkedIn<span className="text-[var(--accent)]">↗</span>
              </a>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)]">
                /in/neeraj-kiran-janakula
              </p>
            </div>
            <div className="col-span-2 mt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-3)] mb-3">
                ◇ Voice
              </p>
              <a
                href={`tel:${PROFILE.phone.replace(/\s+/g, "")}`}
                className="font-display text-xl md:text-2xl text-[var(--ink-2)] italic link-underline"
              >
                {PROFILE.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
