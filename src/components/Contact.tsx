"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Link2, Send, Terminal, ArrowUpRight, Code2 } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "neerajkiran@example.com",
    href: "mailto:neerajkiran@example.com",
    icon: Mail,
    color: "#E11D48",
  },
  {
    label: "GitHub",
    value: "@Jack26-bit",
    href: "https://github.com/Jack26-bit",
    icon: Code2,
    color: "#FFFFFF",
  },
  {
    label: "LinkedIn",
    value: "Neeraj Kiran Janakula",
    href: "https://www.linkedin.com/in/neeraj-kiran-janakula-904643384",
    icon: Link2,
    color: "#0A66C2",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E11D48]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#E11D48] mb-4">
            Connect
          </span>
          <h2
            className="text-4xl md:text-6xl font-black mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-white/40 font-light max-w-lg mx-auto">
            Have a question, idea, or collaboration? The command line is open.
          </p>
          <div className="w-16 h-[2px] bg-[#E11D48] mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass rounded-2xl overflow-hidden border-t border-[#E11D48]/20 neon-border"
        >
          <div className="flex items-center gap-2 px-5 py-3 bg-white/[0.02] border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#E11D48]/80" />
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <div className="w-3 h-3 rounded-full bg-white/20" />
            </div>
            <div className="flex items-center gap-2 mx-auto">
              <Terminal size={12} className="text-[#E11D48]/60" />
              <span className="text-[10px] text-white/30 tracking-wider uppercase font-mono">
                contact_panel — zsh
              </span>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6 text-sm text-white/30 font-mono">
              <span className="text-[#E11D48]">$</span>
              <span>./connect.sh</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {contacts.map((contact, i) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  className="group glass-card rounded-xl p-5 flex flex-col items-center text-center gap-3 hover:border-[#E11D48]/30"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${contact.color}10` }}
                  >
                    <contact.icon
                      className="w-5 h-5 transition-all duration-300"
                      style={{ color: contact.color }}
                    />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 tracking-wide mb-0.5">
                      {contact.label}
                    </p>
                    <p className="text-sm text-white/80 font-medium group-hover:text-[#E11D48] transition-colors line-clamp-1">
                      {contact.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-white/20 group-hover:text-[#E11D48] transition-colors"
                  />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-white/20 font-mono">
              <span className="text-[#E11D48]/60">❯</span>
              <span className="animate-pulse">_</span>
              <span className="text-white/10">Waiting for connection...</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:neerajkiran@example.com"
            className="group inline-flex items-center gap-2 text-sm text-white/30 hover:text-[#E11D48] transition-colors"
          >
            <Send size={14} />
            <span>Send a direct message</span>
            <ArrowUpRight size={12} />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E11D48]/20 to-transparent" />
    </section>
  );
}
