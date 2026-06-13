import { useEffect } from "react";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import CustomCursor from "@/components/portfolio/CustomCursor";
import GrainOverlay from "@/components/portfolio/GrainOverlay";

export default function Portfolio() {
  // Light-touch smooth scroll: bias the wheel deltas so native scroll feels softer.
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <main className="relative bg-[var(--bg)] text-[var(--ink)]">
      <GrainOverlay />
      <CustomCursor />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
