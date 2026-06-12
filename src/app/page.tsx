import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import GitHubSection from "@/components/GitHubSection";
import Projects from "@/components/Projects";
import NeuralNetwork from "@/components/NeuralNetwork";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Particles from "@/components/Particles";

export default function Home() {
  return (
    <>
      <Particles />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <NeuralNetwork />
      <GitHubSection />
      <Education />
      <Contact />

      <footer className="relative py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4 text-xs text-white/20">
            <span className="w-12 h-[1px] bg-white/10" />
            <span className="tracking-[0.3em] uppercase font-light">
              設計 ・ 構築 ・ 展開
            </span>
            <span className="w-12 h-[1px] bg-white/10" />
          </div>
          <p className="text-xs text-white/20 font-light tracking-wide">
            &copy; {new Date().getFullYear()} Neeraj Kiran Janakula. Crafted with
            precision &amp; purpose.
          </p>
        </div>
      </footer>
    </>
  );
}
