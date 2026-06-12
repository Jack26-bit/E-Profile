"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronRight, Code2, Bot, Cloud, Gamepad2, Smartphone, Globe } from "lucide-react";

const projects = [
  {
    title: "IKO",
    tagline: "Gamified Productivity RPG",
    description:
      "A mobile productivity app that transforms real-life habits and tasks into a role-playing game. Complete quests, earn XP and achievement badges, and watch your character grow.",
    longDesc:
      "IKO reimagines productivity through gamification. Built with Flutter and powered by a Python backend, it features quest-based task management, an RPG character system, achievement badges, and a beautiful dark-themed UI. Users earn XP and coins for completing tasks, making productivity feel like an adventure.",
    tech: ["Flutter", "Dart", "Python", "SQLite", "Docker"],
    icon: Smartphone,
    github: "https://github.com/Jack26-bit/IKO",
    color: "#00B4AB",
  },
  {
    title: "AI Weather Assistant",
    tagline: "Drone Flight Safety AI",
    description:
      "A comprehensive weather analysis system for drone operators and small aircraft pilots with real-time monitoring and intelligent flight recommendations.",
    longDesc:
      "This AI-powered weather assistant provides real-time weather monitoring, flight safety analysis, and intelligent recommendations for drone operators. It integrates multiple weather APIs, analyzes flight conditions, and suggests optimal flight windows based on weather patterns and safety thresholds.",
    tech: ["Python", "AI/ML", "Weather APIs", "Data Analysis"],
    icon: Cloud,
    github: "https://github.com/Jack26-bit/AI_weather_Assistant_for_Drones_and_Small_Aircrafts",
    color: "#3776AB",
  },
  {
    title: "CanSat Platform",
    tagline: "Aerospace Telemetry System",
    description:
      "Flight-ready CanSat platform with real-time telemetry, GPS tracking, environmental monitoring, and wireless dashboard on Raspberry Pi Pico.",
    longDesc:
      "A complete CanSat (satellite-in-a-can) platform featuring real-time telemetry transmission, GPS coordinate tracking, temperature/humidity/pressure monitoring, and a wireless ground station dashboard. Built for educational aerospace projects with MicroPython on Raspberry Pi Pico W.",
    tech: ["Python", "MicroPython", "Raspberry Pi Pico", "Telemetry", "Aerospace"],
    icon: Globe,
    github: "https://github.com/Jack26-bit/How-to-build-a-Cansat",
    color: "#06B6D4",
  },
  {
    title: "2D Graphics Editor",
    tagline: "Computer Graphics Algorithms",
    description:
      "A menu-driven 2D Graphics Editor in C featuring line drawing, shapes, transformations, and classic computer graphics algorithms on a character canvas.",
    longDesc:
      "An educational 2D graphics editor that demonstrates classic computer graphics algorithms including Bresenham's line algorithm, circle drawing, polygon filling, and geometric transformations. Features a clean menu-driven interface on a character-based canvas.",
    tech: ["C", "Computer Graphics", "Algorithms"],
    icon: Code2,
    github: "https://github.com/Jack26-bit/2D-Graphics-Editor",
    color: "#555555",
  },
  {
    title: "Multiplayer Chess",
    tagline: "Offline Chess with Pygame",
    description:
      "A two-player offline chess game with interactive board, piece movement with highlights, pawn promotion, and win detection.",
    longDesc:
      "A fully-featured offline multiplayer chess game built with Python and Pygame. Features an interactive chess board with legal move highlighting, piece movement validation, pawn promotion dialog, check/checkmate detection, and a clean, minimal interface.",
    tech: ["Python", "Pygame", "Game Development"],
    icon: Gamepad2,
    github: "https://github.com/Jack26-bit/Multi_player_chess_game",
    color: "#8B5CF6",
  },
  {
    title: "Resq",
    tagline: "Emergency Response Platform",
    description:
      "An emergency response platform built with modern web technologies for coordinating rescue operations and disaster management.",
    longDesc:
      "A full-stack emergency response platform designed to coordinate rescue operations during disasters. Features real-time incident reporting, resource management, volunteer coordination, and an interactive response dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    icon: Bot,
    github: "https://github.com/Jack26-bit/Resq",
    color: "#E11D48",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<null | (typeof projects)[0]>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E11D48]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#E11D48] mb-4">
            Work
          </span>
          <h2
            className="text-4xl md:text-6xl font-black mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#E11D48] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
            >
              <button
                onClick={() => setSelected(project)}
                className="group glass-card rounded-2xl p-6 w-full text-left h-full hover:border-[#E11D48]/30"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E11D48]/10 flex items-center justify-center mb-4 group-hover:bg-[#E11D48]/20 transition-all">
                  <project.icon className="w-5 h-5" style={{ color: project.color }} />
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#E11D48] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-white/40 tracking-wide mb-3">
                  {project.tagline}
                </p>
                <p className="text-white/40 text-sm leading-relaxed line-clamp-2 mb-4 font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] rounded-full bg-white/5 text-white/50 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-0.5 text-[10px] rounded-full bg-white/5 text-white/50">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 text-xs text-white/30">
                  <span className="flex items-center gap-1 group-hover:text-[#E11D48] transition-colors">
                    View Details <ChevronRight size={12} />
                  </span>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl max-w-lg w-full p-8 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E11D48]/10 flex items-center justify-center">
                    <selected.icon
                      className="w-5 h-5"
                      style={{ color: selected.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {selected.title}
                    </h3>
                    <p className="text-xs text-white/40">{selected.tagline}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <X size={16} className="text-white/60" />
                </button>
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-6 font-light">
                {selected.longDesc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selected.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full bg-[#E11D48]/10 text-[#E11D48]/90 border border-[#E11D48]/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E11D48] text-white rounded-full text-sm font-medium hover:shadow-[0_0_20px_rgba(225,29,72,0.3)] transition-all"
              >
                <Code2 size={16} />
                View on GitHub
                <ExternalLink size={14} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
