import { useEffect, useState } from "react";
import { NAV } from "@/constants/testIds";
import { PROFILE } from "@/lib/portfolioData";

const links = [
  { id: "hero", label: "Index", testId: NAV.linkHero },
  { id: "about", label: "01 Philosophy", testId: NAV.linkAbout },
  { id: "skills", label: "02 Stack", testId: NAV.linkSkills },
  { id: "projects", label: "03 Archives", testId: NAV.linkProjects },
  { id: "experience", label: "04 Journey", testId: NAV.linkExperience },
  { id: "contact", label: "05 Signal", testId: NAV.linkContact },
];

export default function Nav() {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(window.scrollY / h, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const fmt = () => {
      const now = new Date();
      const opts = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", opts).format(now));
    };
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Top hairline + progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="h-px w-full bg-[var(--border)]" />
        <div
          className="h-px bg-[var(--accent)] origin-left"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <nav
        data-testid={NAV.root}
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm"
      >
        <div className="mx-auto flex items-center justify-between px-6 md:px-12 py-5">
          {/* Brand */}
          <button
            data-testid={NAV.brand}
            onClick={() => go("hero")}
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
          >
            <span className="text-[var(--accent)]">●</span>&nbsp; NKJ
            <span className="ml-2 text-[var(--ink-3)]">/ v_1.0.0</span>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.slice(1).map((l) => (
              <button
                key={l.id}
                data-testid={l.testId}
                onClick={() => go(l.id)}
                className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors link-underline"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Right meta */}
          <div className="hidden lg:flex items-center gap-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--ink-3)]">
              {PROFILE.location} · {time} IST
            </span>
            <a
              data-testid={NAV.resume}
              href={PROFILE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors"
            >
              CV ↓
            </a>
            <a
              data-testid={NAV.cta}
              href={`mailto:${PROFILE.email}`}
              className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
            >
              Initiate →
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--ink)]"
            aria-label="Toggle navigation"
            data-testid="nav-mobile-toggle"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="fixed inset-0 z-30 bg-[var(--bg)] lg:hidden">
          <div className="flex flex-col gap-6 px-6 pt-24">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                data-testid={`mobile-${l.testId}`}
                className="text-left font-display text-4xl text-[var(--ink)]"
              >
                {l.label}
              </button>
            ))}
            <a
              href={`mailto:${PROFILE.email}`}
              className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--accent)]"
            >
              {PROFILE.email}
            </a>
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`mobile-${NAV.resume}`}
              className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--ink-2)]"
            >
              Download CV ↓
            </a>
          </div>
        </div>
      )}
    </>
  );
}
