import { useEffect, useRef } from "react";

// Cursor that uses CSS difference blending so it inverts whatever it sits on.
// Hidden on touch devices via CSS.
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const frame = useRef(0);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (dot) {
        dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (ring) {
        ring.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);

    const expandTargets = "a, button, [data-cursor='hover'], [role='button']";
    const onOver = (e) => {
      if (e.target.closest && e.target.closest(expandTargets)) {
        ring?.classList.add("expanded");
      }
    };
    const onOut = (e) => {
      if (e.target.closest && e.target.closest(expandTargets)) {
        ring?.classList.remove("expanded");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
