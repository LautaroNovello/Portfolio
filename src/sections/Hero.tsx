import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  GraduationCap,
  Clock,
  Code,
  Download,
  ArrowRight,
} from "lucide-react";

/* ─── Flip Card ───────────────────────────────── */
function ProfileFlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <Tilt
      tiltMaxAngleX={flipped ? 0 : 14}
      tiltMaxAngleY={flipped ? 0 : 14}
      perspective={1200}
      scale={flipped ? 1 : 1.03}
      transitionSpeed={600}
      transitionEasing="cubic-bezier(0.03,0.98,0.52,0.99)"
      glareEnable={!flipped}
      glareMaxOpacity={0.1}
      glareColor="#ffffff"
      glarePosition="all"
      glareBorderRadius="32px"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="flip-scene"
        onClick={() => setFlipped((f) => !f)}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={flipped ? "Ver foto" : "Ver información"}
        onKeyDown={(e) => e.key === "Enter" && setFlipped((f) => !f)}
      >
        <motion.div
          className="flip-inner"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0.2, 0.2, 1] }}
        >
          <div className="flip-face flip-front">
            <img
              src="/1.jpeg"
              alt="Novello Lautaro"
              className="flip-photo"
            />
          </div>

          <div className="flip-face flip-back">
            <div className="flip-back-content">
              <div className="narrative-block">
                <div className="narrative-header" style={{ marginBottom: "2px" }}>
                  <Clock size={13} strokeWidth={1.5} />
                  <span style={{ fontSize: "11px" }}>Disponibilidad</span>
                </div>
                <p style={{ fontSize: "12px", lineHeight: "1.2" }}>Full-time · Remota/Híbrida</p>
              </div>

              <div className="narrative-block">
                <div className="narrative-header" style={{ marginBottom: "2px" }}>
                  <Code size={13} strokeWidth={1.5} />
                  <span style={{ fontSize: "11px" }}>Enfoque actual</span>
                </div>
                <p style={{ fontSize: "12px", lineHeight: "1.2" }}>Frontend React, Backend NestJS, despliegues AWS</p>
              </div>

              <div className="narrative-block">
                <div className="narrative-header" style={{ marginBottom: "2px" }}>
                  <GraduationCap size={13} strokeWidth={1.5} />
                  <span style={{ fontSize: "11px" }}>Formación</span>
                </div>
                <p style={{ fontSize: "12px", lineHeight: "1.2" }}>4to año Ingeniería en Sistemas · UTN FRVM</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Tilt>
  );
}

/* ─── Hero Section ────────────────────────────── */
export const Hero = () => {

  return (
    <section id="inicio" className="hero-section">

      <motion.div
        className="hero-layout"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="hero-copy">
          <h1 className="hero-title">
            Novello
            <br />
            <span className="hero-title-accent">Lautaro</span>
          </h1>
          <p className="hero-subtitle">
            Analista en Sistemas - Full Stack Developer
          </p>

          <div className="hero-description-container">
            <p className="hero-description">
              Soy estudiante de <a href="https://www.frvm.utn.edu.ar/oferta-academica/sistemas" target="_blank" rel="noopener noreferrer" className="hero-highlight hero-link-highlight">Ingeniería en Sistemas</a> y un apasionado por materializar ideas en código. Creo firmemente que la mejor forma de aprender es haciendo; por eso, mi enfoque está en <span className="hero-highlight">construir herramientas</span> que no solo funcionen, sino que sean <span className="hero-highlight">útiles para las personas</span> en su día a día.
            </p>

            <div className="hero-cta">
              <a href="/cv_lautaro_novello.pdf" download className="hero-button hero-button-primary">
                Descargar CV
                <Download size={18} strokeWidth={2.5} />
              </a>
              <a href="#contacto" className="hero-button hero-button-secondary">
                Contactame
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-avatar-wrap">
          <ProfileFlipCard />
        </div>
      </motion.div>

    </section>
  );
};