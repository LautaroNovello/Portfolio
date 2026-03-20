import { useEffect, useMemo, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

type TopNavBarProps = {
  isDark: boolean;
  onToggle: () => void;
};

export default function TopNavBar({ isDark, onToggle }: TopNavBarProps) {
  const items = [
    { label: "Inicio",      href: "#inicio" },
    { label: "Proyectos",   href: "#proyectos" },
    { label: "Tecnologías", href: "#tecnologias" },
    { label: "Contacto",    href: "#contacto" },
  ];

  const sectionIds = useMemo(
    () => items.map((item) => item.href.replace("#", "")),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0 
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        {/* Logo + Nav */}
        <div className="header-left-side">
          <a href="#inicio" className="logo-mark" aria-label="Inicio">
            <span className="logo-initials" aria-hidden="true">LN</span>
          </a>

          <nav className="nav-menu" aria-label="Navegación principal">
            {items.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                  onClick={() => setActiveSection(id)}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Theme toggle (replaces the old CTA button) */}
        <ThemeToggle isDark={isDark} onToggle={onToggle} />
      </div>
    </header>
  );
}