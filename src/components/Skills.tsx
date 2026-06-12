"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Terminal,
  Cpu,
  BrainCircuit,
  Network,
  Database,
  GitBranch,
  Code2,
  Smartphone,
  Flame,
  Zap,
} from "lucide-react";

const skills = [
  { name: "Python", icon: Terminal, color: "#3776AB" },
  { name: "Machine Learning", icon: Cpu, color: "#E11D48" },
  { name: "Artificial Intelligence", icon: BrainCircuit, color: "#FF6B6B" },
  { name: "Deep Learning", icon: Network, color: "#8B5CF6" },
  { name: "Data Science", icon: Database, color: "#06B6D4" },
  { name: "Git", icon: GitBranch, color: "#F05032" },
  { name: "GitHub", icon: Code2, color: "#FFFFFF" },
  { name: "Flutter", icon: Smartphone, color: "#02569B" },
  { name: "Firebase", icon: Flame, color: "#FFCA28" },
  { name: "FastAPI", icon: Zap, color: "#009688" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E11D48]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-block text-xs tracking-[0.3em] uppercase text-[#E11D48] mb-4"
          >
            Expertise
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tech <span className="text-gradient">Stack</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="w-16 h-[2px] bg-[#E11D48] mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.5, ease: "easeOut" }}
            >
              <div
                className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-4 group cursor-default min-h-[140px]"
                style={
                  {
                    "--skill-color": skill.color,
                  } as React.CSSProperties
                }
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[var(--skill-color)]/10 blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <skill.icon
                    className="w-8 h-8 relative z-10 transition-all duration-500 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                </div>
                <span className="text-sm font-medium text-white/70 text-center leading-tight group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
                <div className="w-0 h-[2px] bg-[var(--skill-color)] transition-all duration-500 group-hover:w-3/4 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
