"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, School, Brain, Target, ChevronRight } from "lucide-react";

const milestones = [
  {
    year: "2020",
    title: "School",
    subtitle: "Secondary Education",
    desc: "Built foundational knowledge in mathematics, science, and computer fundamentals that sparked my interest in technology.",
    icon: School,
  },
  {
    year: "2023",
    title: "Higher Secondary",
    subtitle: "Intermediate",
    desc: "Focused on science and mathematics while exploring programming concepts. Started building my first coding projects.",
    icon: GraduationCap,
  },
  {
    year: "2023",
    title: "AI Journey Begins",
    subtitle: "Self-Directed Learning",
    desc: "Deep-dived into Python, machine learning fundamentals, and began exploring how AI could solve real-world problems.",
    icon: Brain,
  },
  {
    year: "2024",
    title: "Deep Learning & Beyond",
    subtitle: "Advanced AI Studies",
    desc: "Mastered deep learning frameworks, built neural networks, worked on NLP and computer vision projects. Contributed to open source.",
    icon: Target,
  },
  {
    year: "2025",
    title: "Building for Tomorrow",
    subtitle: "Current Focus",
    desc: "Developing production-ready AI systems, exploring MLOps, and building intelligent applications that make a difference.",
    icon: ChevronRight,
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E11D48]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#E11D48] mb-4">
            Timeline
          </span>
          <h2
            className="text-4xl md:text-6xl font-black mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Education & <span className="text-gradient">Milestones</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#E11D48] mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#E11D48]/40 via-[#E11D48]/20 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block flex-1">
                  <div
                    className={`${
                      i % 2 === 0 ? "text-right pr-12" : "text-left pl-12"
                    }`}
                  >
                    <span className="text-[#E11D48] text-sm font-mono font-bold">
                      {m.year}
                    </span>
                  </div>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#050505] border-2 border-[#E11D48]/50 flex items-center justify-center shadow-[0_0_15px_rgba(225,29,72,0.3)]">
                    <m.icon className="w-4 h-4 text-[#E11D48]" />
                  </div>
                  <div className="absolute top-5 left-5 w-px h-8 bg-gradient-to-b from-[#E11D48]/30 to-transparent" />
                </div>

                <div className="flex-1">
                  <div className="glass-card rounded-xl p-5 md:p-6">
                    <div className="md:hidden mb-2">
                      <span className="text-[#E11D48] text-xs font-mono font-bold">
                        {m.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-0.5">
                      {m.title}
                    </h3>
                    <p className="text-xs text-[#E11D48]/80 mb-3 tracking-wide">
                      {m.subtitle}
                    </p>
                    <p className="text-white/40 text-sm leading-relaxed font-light">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-sm text-white/30">
            <span className="w-8 h-[1px] bg-white/20" />
            <span className="tracking-wider text-[10px] uppercase">Continuing the journey</span>
            <span className="w-8 h-[1px] bg-white/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
