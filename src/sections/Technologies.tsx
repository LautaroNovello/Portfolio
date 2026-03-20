import { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { FaAws } from "react-icons/fa6";
import { SiTwilio, SiZoho } from "react-icons/si";

type Tech = {
  name: string;
  slug: string;
  color: string;
  icon?: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
};

const technologies: Tech[] = [
  { name: "Python",      slug: "python",      color: "#3776AB" },
  { name: "JavaScript",  slug: "javascript",  color: "#F7DF1E" },
  { name: "TypeScript",  slug: "typescript",  color: "#3178C6" },
  { name: "NestJS",      slug: "nestjs",      color: "#E0234E" },
  { name: "React",       slug: "react",       color: "#61DAFB" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "#06B6D4" },
  { name: "Vite",        slug: "vite",        color: "#646CFF" },
  { name: "Framer Motion", slug: "framer",    color: "#0055FF" },
  { name: "Lucide React", slug: "lucide",     color: "dynamic" },
  { name: "Express",     slug: "express",     color: "dynamic" },
  { name: "MySQL",       slug: "mysql",       color: "#4479A1" },
  { name: "PostgreSQL",  slug: "postgresql",  color: "#4169E1" },
  { name: "Docker",      slug: "docker",      color: "#2496ED" },
  { name: "InfluxDB",    slug: "influxdb",    color: "#22ADF6" },
  { name: "Java",        slug: "openjdk",     color: "#007396" },
  { name: "AWS",         slug: "aws",         color: "#FF9900", icon: FaAws },
  { name: "Linux",       slug: "linux",       color: "#FCC624" },
  { name: "Git",         slug: "git",         color: "#F05032" },
  { name: "GitHub",      slug: "github",      color: "dynamic" },
  { name: "Zoho Mail",    slug: "zoho",        color: "#0067ff", icon: SiZoho },
  { name: "Twilio",      slug: "twilio",      color: "#F22F46", icon: SiTwilio },
];

// Split into 3 lanes
const lane1 = technologies.slice(0, 7);
const lane2 = technologies.slice(7, 14);
const lane3 = technologies.slice(14);

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}

type MarqueeTrackProps = {
  items: Tech[];
  direction?: "left" | "right";
  speed?: number;
};

function MarqueeTrack({ items, direction = "left", speed = 38 }: MarqueeTrackProps) {
  const x = useMotionValue(direction === "left" ? 0 : -1000); // Initial placeholder
  const trackRef = useRef<HTMLDivElement>(null);
  const repeated = [...items, ...items, ...items, ...items, ...items, ...items];

  useAnimationFrame((_, delta) => {
    const px = (delta / 1000) * speed;
    const track = trackRef.current;
    if (!track) return;
    const totalW = track.scrollWidth;
    const sliceW = totalW / 6;
    
    // Set initial position if not set
    if (direction === "right" && x.get() === -1000) {
      x.set(-sliceW);
    } else if (direction === "left" && x.get() === -1000) {
      x.set(0);
    }

    if (direction === "left") {
      x.set((x.get() - px) % -sliceW);
    } else {
      let nextX = x.get() + px;
      if (nextX > 0) nextX = -sliceW;
      x.set(nextX);
    }
  });

  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <motion.div
        ref={trackRef}
        style={{
          x,
          display: "flex",
          gap: "0.65rem",
          width: "max-content",
          willChange: "transform",
          padding: "0.75rem 0",
        }}
      >
        {repeated.map((tech, i) => (
          <TechTag key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </motion.div>
    </div>
  );
}

function TechTag({ tech }: { tech: Tech }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const effectiveColor = tech.color === "dynamic" 
    ? (isDarkMode ? "#ffffff" : "#181717") 
    : tech.color;

  const rgb = hexToRgb(effectiveColor);

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.4rem 0.9rem 0.4rem 0.6rem",
        borderRadius: "999px",
        border: `1.5px solid rgba(${rgb}, 0.28)`,
        background: `rgba(${rgb}, 0.06)`,
        boxShadow: `0 1px 4px rgba(${rgb}, 0.1)`,
        cursor: "default",
        userSelect: "none",
        flexShrink: 0,
        whiteSpace: "nowrap",
        transition: "box-shadow 0.3s ease",
      }}
      onHoverStart={(e: any) => {
        const el = e.target as HTMLElement;
        el.style.boxShadow = `0 4px 14px rgba(${rgb}, 0.22), 0 1px 4px rgba(${rgb}, 0.12)`;
        el.style.borderColor = `rgba(${rgb}, 0.52)`;
        el.style.background = `rgba(${rgb}, 0.1)`;
      }}
      onHoverEnd={(e: any) => {
        const el = e.target as HTMLElement;
        el.style.boxShadow = `0 1px 4px rgba(${rgb}, 0.1)`;
        el.style.borderColor = `rgba(${rgb}, 0.28)`;
        el.style.background = `rgba(${rgb}, 0.06)`;
      }}
    >
      {/* Icon bubble */}
      <span style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "1.6rem",
        height: "1.6rem",
        borderRadius: "50%",
        background: `rgba(${rgb}, 0.12)`,
        border: `1px solid rgba(${rgb}, 0.24)`,
        flexShrink: 0,
        padding: '3px'
      }}>
        {tech.icon ? (
          <tech.icon 
            size={18} 
            style={{ color: effectiveColor }} 
          />
        ) : (
          <img 
            src={`https://cdn.simpleicons.org/${tech.slug}/${effectiveColor.replace("#", "")}`}
            alt={tech.name} 
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        )}
      </span>

      {/* Label */}
      <span style={{
        fontSize: "0.85rem",
        fontWeight: 600,
        color: "var(--ink)",
        letterSpacing: "-0.01em",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}>
        {tech.name}
      </span>
    </motion.div>
  );
}


// End of Tech components

export function TechnologiesSection() {

  return (
    <section
      id="tecnologias"
      className="technologies-section"
    >
      {/* Subtle ambient tint - Outside container to cover full width */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: "radial-gradient(ellipse 50% 60% at 15% 50%, rgba(45,95,245,0.04) 0%, transparent 70%)",
      }} />

      <div className="technologies-container" style={{ position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div className="technologies-head">
          <p className="technologies-eyebrow">Stack principal</p>
          <h2 className="content-section-title">Tecnologías</h2>
          <p className="technologies-intro">
            Estas son algunas de las herramientas y tecnologias que fui utilizando en el desarrollo de diversos proyectos
          </p>
        </div>

        {/* Marquee lanes */}
        <div style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "0.65rem",
        }}>
          <MarqueeTrack items={lane1} direction="left"  speed={32} />
          <MarqueeTrack items={lane2} direction="right" speed={26} />
          <MarqueeTrack items={lane3} direction="left"  speed={36} />
        </div>
      </div>
    </section>
  );
}
