import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import "@/App.css";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
    lenisRef.current = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const navigate = (id) => {
    const el = document.getElementById(id);
    if (el && lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: id === "top" ? 0 : -90, duration: 1.4 });
    }
  };

  return (
    <div className="App relative" data-testid="portfolio-app">
      <div className="noise-overlay" />
      <Nav onNavigate={navigate} />
      <main>
        <Hero onNavigate={navigate} />
        <Marquee />
        <Projects />
        <About />
        <Marquee />
        <Skills />
        <Experience />
        <Contact onNavigate={navigate} />
      </main>
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}

export default App;
