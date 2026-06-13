import { useEffect, useState } from "react";

// Scrambles text into the final string over a short duration.
// Used for the hero headline and other accent reveals.
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*<>/?";

export default function ScrambleText({
  text,
  duration = 1200,
  className = "",
  start = true,
}) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!start) return;
    const chars = text.split("");
    const startTime = performance.now();
    let raf;

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const revealed = Math.floor(progress * chars.length);
      const next = chars
        .map((c, i) => {
          if (i < revealed || c === " ") return c;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");
      setDisplay(next);
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setDisplay(text);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, duration, start]);

  return <span className={className}>{display}</span>;
}
