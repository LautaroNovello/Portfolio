import { Sun, Moon } from "lucide-react";

type ThemeToggleProps = {
  isDark: boolean;
  onToggle: () => void;
};

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
      style={{
        /* Minimalist circular button */
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "50%",
        border: "1px solid var(--line)",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        background: "var(--toggle-bg)",
        color: "var(--toggle-ink)",
        boxShadow: "var(--card-shadow)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLButtonElement).style.transform = "scale(1)")
      }
    >
      {/* Icon rotates based on theme */}
      <span
        style={{
          display: "inline-flex",
          transform: isDark ? "rotate(0deg)" : "rotate(180deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {isDark ? (
          <Sun size={17} strokeWidth={2} />
        ) : (
          <Moon size={17} strokeWidth={2} />
        )}
      </span>
    </button>
  );
}
