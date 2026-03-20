import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type ContactLink = {
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number }>;
  tone: "slate" | "blue" | "red";
};

const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/LautaroNovello",
    icon: FaGithub,
    tone: "slate",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lautaro-novello-a0b991269/",
    icon: FaLinkedin,
    tone: "blue",
  },
  {
    label: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=Lauty.novello@gmail.com",
    icon: MdEmail,
    tone: "red",
  },
];

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="contact-section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="contact-container">
        <div className="contact-heading">
          <p className="contact-eyebrow">Contacto</p>
          <h2 className="content-section-title">¿Te interesa trabajar juntos?</h2>
          <p className="contact-message">
            Estas son mis redes. Si querés, escribime y coordinamos una charla.
          </p>
        </div>

        <div className="contact-icons" aria-label="Redes de contacto">
          {contactLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className={`contact-icon-link contact-icon-link--${item.tone}`}
                aria-label={item.label}
              >
                <Icon size={17} aria-hidden="true" />
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
