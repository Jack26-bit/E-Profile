"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.2,
    },
  },
};

const buttonItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const buildings = [
  { h: 35, w: 3, left: 2 },
  { h: 50, w: 4, left: 8 },
  { h: 25, w: 3.5, left: 14 },
  { h: 60, w: 5, left: 19 },
  { h: 40, w: 3, left: 26 },
  { h: 70, w: 4.5, left: 31 },
  { h: 30, w: 3.5, left: 37 },
  { h: 55, w: 4, left: 42 },
  { h: 45, w: 3, left: 48 },
  { h: 65, w: 5, left: 53 },
  { h: 35, w: 3.5, left: 60 },
  { h: 50, w: 4, left: 65 },
  { h: 28, w: 3, left: 71 },
  { h: 58, w: 4.5, left: 75 },
  { h: 42, w: 3, left: 81 },
  { h: 68, w: 5, left: 86 },
  { h: 38, w: 3.5, left: 92 },
  { h: 48, w: 4, left: 96 },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrolled = window.scrollY;
      const maxScroll = window.innerHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      containerRef.current.style.transform = `translateY(${progress * 30}px)`;
      containerRef.current.style.opacity = `${1 - progress}`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E11D48]/5 via-transparent to-[#FF6B6B]/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E11D48]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#FF6B6B]/5 rounded-full blur-[100px]" />
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-32 h-[1px] bg-gradient-to-r from-transparent via-[#E11D48]/30 to-transparent animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-[20%] right-[10%] w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B6B]/20 to-transparent animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[40%] left-[15%] w-20 h-[1px] bg-gradient-to-r from-transparent via-[#E11D48]/20 to-transparent animate-float" style={{ animationDelay: "4s" }} />
        <div className="absolute top-[60%] right-[5%] w-40 h-[1px] bg-gradient-to-r from-transparent via-[#FF6B6B]/15 to-transparent animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[40vh] z-[2] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-[3]" />
        {buildings.map((b, i) => (
          <div
            key={i}
            className="absolute bottom-0 bg-gradient-to-t from-[#0a0a0a] to-[#1a1a1a] border-t border-[#E11D48]/10"
            style={{
              height: `${b.h}%`,
              width: `${b.w}%`,
              left: `${b.left}%`,
            }}
          >
            {Array.from({ length: Math.floor(b.h / 8) }).map((_, fi) =>
              Array.from({ length: Math.floor(b.w / 1.2) }).map((_, fj) => (
                <div
                  key={`${fi}-${fj}`}
                  className="absolute w-[2px] h-[2px] bg-[#E11D48]/30"
                  style={{
                    left: `${15 + fj * 25}%`,
                    top: `${15 + fi * 20}%`,
                    animation: `pulse-glow ${2 + Math.random() * 3}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 3}s`,
                  }}
                />
              ))
            )}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div
          className="absolute top-[5%] -left-[10%] w-[120%] h-[60%] bg-gradient-to-r from-transparent via-[#E11D48]/3 to-transparent rounded-full blur-[60px] animate-fog"
        />
        <div
          className="absolute top-[30%] -left-[10%] w-[120%] h-[40%] bg-gradient-to-r from-transparent via-[#FF6B6B]/2 to-transparent rounded-full blur-[40px] animate-fog"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <motion.div
        ref={containerRef}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-1.5 text-xs tracking-[0.3em] uppercase text-[#E11D48] border border-[#E11D48]/30 rounded-full glass">
            Portfolio 2026
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-6"
        >
          <span className="text-gradient-white">NEERAJ KIRAN</span>
          <br />
          <span className="text-gradient">JANAKULA</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/60 font-light tracking-wide max-w-2xl mx-auto mb-4"
        >
          AI Engineer &bull; Machine Learning Enthusiast &bull; Future Builder
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base text-white/40 font-light tracking-wider mb-12 max-w-xl mx-auto"
        >
          &ldquo;Building intelligent systems that shape tomorrow.&rdquo;
        </motion.p>

        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            variants={buttonItemVariants}
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-[#E11D48] text-white rounded-full font-medium overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(225,29,72,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects <ExternalLink size={16} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#E11D48] to-[#FF6B6B] opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          <motion.a
            variants={buttonItemVariants}
            href="https://github.com/Jack26-bit"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white/80 rounded-full font-medium hover:border-[#E11D48]/50 hover:text-white hover:shadow-[0_0_20px_rgba(225,29,72,0.2)] transition-all"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </motion.a>

          <motion.a
            variants={buttonItemVariants}
            href="https://www.linkedin.com/in/neeraj-kiran-janakula-904643384"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white/80 rounded-full font-medium hover:border-[#E11D48]/50 hover:text-white hover:shadow-[0_0_20px_rgba(225,29,72,0.2)] transition-all"
          >
            <ExternalLink size={16} />
            LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
