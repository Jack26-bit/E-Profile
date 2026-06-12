"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, GitFork, Clock, Code2, ExternalLink } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

const languageColors: Record<string, string> = {
  Python: "#3776AB",
  C: "#555555",
  Dart: "#00B4AB",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  HTML: "#E34F26",
  CSS: "#1572B6",
};

export default function GitHubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/Jack26-bit/repos?sort=updated&per_page=6"
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data: Repo[] = await res.json();
        setRepos(data.filter((r) => r.name !== "Jack26-bit").slice(0, 6));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 30) return `${diffDays}d ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;
    return `${Math.floor(diffDays / 365)}y ago`;
  };

  return (
    <section id="github" className="relative py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E11D48]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#E11D48] mb-4">
            Open Source
          </span>
          <h2
            className="text-4xl md:text-6xl font-black mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            GitHub <span className="text-gradient">Repositories</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#E11D48] mx-auto" />
        </motion.div>

        {loading && (
          <div className="flex justify-center py-20">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 border-2 border-[#E11D48]/20 rounded-full" />
              <div className="absolute inset-0 border-2 border-transparent border-t-[#E11D48] rounded-full animate-spin" />
            </div>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-white/40">
              Unable to load repositories. Please visit{" "}
              <a
                href="https://github.com/Jack26-bit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E11D48] hover:underline"
              >
                github.com/Jack26-bit
              </a>
            </p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                className="group glass-card rounded-2xl p-6 flex flex-col hover:border-[#E11D48]/30"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <Code2 size={16} className="text-[#E11D48] shrink-0" />
                    <h3 className="text-white font-semibold truncate group-hover:text-[#E11D48] transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <ExternalLink size={14} className="text-white/20 group-hover:text-[#E11D48] transition-colors shrink-0" />
                </div>

                <p className="text-white/40 text-sm leading-relaxed line-clamp-2 mb-4 flex-1 font-light">
                  {repo.description || "No description"}
                </p>

                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0.5 text-[10px] rounded-full bg-[#E11D48]/10 text-[#E11D48]/80 border border-[#E11D48]/20"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 text-xs text-white/30 mt-auto pt-3 border-t border-white/5">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{
                          backgroundColor:
                            languageColors[repo.language] || "#8B8B8B",
                        }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} /> {repo.forks_count}
                  </span>
                  <span className="flex items-center gap-1 ml-auto">
                    <Clock size={12} /> {formatDate(repo.updated_at)}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
