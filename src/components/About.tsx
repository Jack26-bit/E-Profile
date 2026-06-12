"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Code2, Cpu, Rocket } from "lucide-react";

const traits = [
  {
    icon: Cpu,
    title: "Student",
    desc: "Passionate learner exploring the frontiers of AI and computer science.",
  },
  {
    icon: Code2,
    title: "AI/ML Enthusiast",
    desc: "Building intelligent systems with deep learning and neural networks.",
  },
  {
    icon: Rocket,
    title: "Builder",
    desc: "Creating real-world solutions from concept to deployment.",
  },
  {
    icon: Award,
    title: "Problem Solver",
    desc: "Turning complex challenges into elegant, scalable solutions.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E11D48]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block text-xs tracking-[0.3em] uppercase text-[#E11D48] mb-4"
          >
            About
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-black mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The <span className="text-gradient">Journey</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-16 h-[2px] bg-[#E11D48] mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-white/50 text-lg leading-relaxed max-w-3xl mx-auto font-light"
          >
            My journey into technology began with curiosity&mdash;the desire to understand
            how things work and the vision to imagine how they could work better. Today,
            that curiosity drives me to explore the limitless possibilities of artificial
            intelligence and machine learning. Every line of code I write is a step toward
            building systems that don&apos;t just compute, but understand, adapt, and
            augment human potential. From Python scripts to neural networks, from data
            pipelines to deployed models&mdash;I am on a mission to shape tomorrow,
            one intelligent system at a time.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {traits.map((trait, i) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
            >
              <div className="glass-card rounded-2xl p-8 h-full group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-[#E11D48]/10 flex items-center justify-center mb-5 group-hover:bg-[#E11D48]/20 transition-all duration-300">
                  <trait.icon className="w-6 h-6 text-[#E11D48]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#E11D48] transition-colors">
                  {trait.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">
                  {trait.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
