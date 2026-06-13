// Infinite horizontal marquee. Direction "left" or "right".
export default function Marquee({ items, direction = "left", className = "" }) {
  const cls = direction === "left" ? "marquee-left" : "marquee-right";
  const dup = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`marquee-track ${cls}`}>
        {dup.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="px-8 md:px-12 text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tighter text-[var(--ink)]"
            style={{ WebkitTextStroke: i % 3 === 0 ? "1px var(--ink)" : undefined, color: i % 3 === 0 ? "transparent" : undefined }}
          >
            {item}
            <span className="mx-6 md:mx-10 text-[var(--accent)] align-middle">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
