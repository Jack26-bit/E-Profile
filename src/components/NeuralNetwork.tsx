"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Node {
  x: number;
  y: number;
  layer: number;
  vy: number;
}

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  progress: number;
  speed: number;
  from: Node;
  to: Node;
}

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isInView) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: Node[] = [];
    let particles: Particle[] = [];
    const layers = [4, 6, 8, 6, 4];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    const init = () => {
      resize();
      nodes = [];
      particles = [];

      const w = canvas.width;
      const h = canvas.height;
      const layerGap = w / (layers.length + 1);

      layers.forEach((count, layerIdx) => {
        const nodeGap = h / (count + 1);
        for (let i = 0; i < count; i++) {
          nodes.push({
            x: layerGap * (layerIdx + 1),
            y: nodeGap * (i + 1),
            layer: layerIdx,
            vy: (Math.random() - 0.5) * 0.2,
          });
        }
      });

      for (let i = 0; i < 30; i++) {
        spawnParticle();
      }
    };

    const spawnParticle = () => {
      const fromLayer = Math.floor(Math.random() * (layers.length - 1));
      const fromNodes = nodes.filter((n) => n.layer === fromLayer);
      const toNodes = nodes.filter((n) => n.layer === fromLayer + 1);

      if (fromNodes.length === 0 || toNodes.length === 0) return;

      const from = fromNodes[Math.floor(Math.random() * fromNodes.length)];
      const to = toNodes[Math.floor(Math.random() * toNodes.length)];

      particles.push({
        x: from.x,
        y: from.y,
        targetX: to.x,
        targetY: to.y,
        progress: 0,
        speed: 0.005 + Math.random() * 0.015,
        from,
        to,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node) => {
        node.y += node.vy;
        const h = canvas.height;
        if (node.y < 20) node.y = 20;
        if (node.y > h - 20) node.y = h - 20;
      });

      const w = canvas.width;
      const h = canvas.height;
      const layerGap = w / (layers.length + 1);

      layers.forEach((count, layerIdx) => {
        const nodeGap = h / (count + 1);
        const layerNodes = nodes.filter((n) => n.layer === layerIdx);

        layerNodes.forEach((node, i) => {
          const targetY = nodeGap * (i + 1);
          node.y += (targetY - node.y) * 0.01;
        });
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = 0; j < nodes.length; j++) {
          if (nodes[j].layer === nodes[i].layer + 1) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = "rgba(225, 29, 72, 0.06)";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, 8
        );
        gradient.addColorStop(0, "rgba(225, 29, 72, 0.4)");
        gradient.addColorStop(1, "rgba(225, 29, 72, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(225, 29, 72, 0.6)";
        ctx.fill();
      });

      particles = particles.filter((p) => p.progress < 1);
      if (particles.length < 30 && Math.random() < 0.1) {
        spawnParticle();
      }

      particles.forEach((p) => {
        p.progress += p.speed;
        p.x = p.from.x + (p.to.x - p.from.x) * p.progress;
        p.y = p.from.y + (p.to.y - p.from.y) * p.progress;

        const opacity = Math.sin(p.progress * Math.PI) * 0.8;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 107, ${opacity})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 107, ${opacity * 0.2})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="ai-viz"
      className="relative py-32 px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E11D48]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#E11D48] mb-4">
            Intelligence
          </span>
          <h2
            className="text-4xl md:text-6xl font-black mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Neural <span className="text-gradient">Network</span>
          </h2>
          <p className="text-white/40 font-light max-w-xl mx-auto">
            Visualizing the architecture of artificial intelligence &mdash; interconnected
            nodes processing information in layers.
          </p>
          <div className="w-16 h-[2px] bg-[#E11D48] mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-white/5"
          style={{ minHeight: "400px", height: "60vh", maxHeight: "600px" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#050505]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#E11D48]/3 via-transparent to-[#FF6B6B]/3" />
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[10px] text-white/20 tracking-wider uppercase pointer-events-none">
            <span>Input Layer</span>
            <span>Hidden Layers</span>
            <span>Output Layer</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
