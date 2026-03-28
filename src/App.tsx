import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import TopNavBar from "./components/Navigation";
import { Hero } from "./sections/Hero";
import { ProjectsSection } from "./sections/Projects";
import { TechnologiesSection } from "./sections/Technologies";
import { ContactSection } from "./sections/Contact";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [isDark, setIsDark] = useState(() => {
    // Persist preference in localStorage
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="app-shell">
      <TopNavBar isDark={isDark} onToggle={() => setIsDark((d) => !d)} />
      <main className="page-main">
        <Hero />
        <ProjectsSection />
        <TechnologiesSection />
        <ContactSection />
      </main>
      <Analytics />
    </div>
  );
}

export default App;