"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Palette, X } from "lucide-react";
import { THEMES, useTheme } from "./theme-provider";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div
      ref={containerRef}
      style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000 }}
    >
      {/* Theme swatches popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            style={{
              position: "absolute",
              bottom: "calc(100% + 12px)",
              right: 0,
              background: "rgba(10, 20, 40, 0.85)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 16,
              padding: "12px 14px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              minWidth: 180,
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
            }}
          >
            <p style={{ margin: 0, fontSize: 10, letterSpacing: "0.12em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", paddingBottom: 4 }}>
              Theme
            </p>
            {THEMES.map((t) => (
              <button
                key={t.name}
                onClick={() => { setTheme(t.name); setOpen(false); }}
                title={t.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: theme === t.name ? "rgba(255,255,255,0.08)" : "transparent",
                  border: "none",
                  borderRadius: 10,
                  padding: "6px 8px",
                  cursor: "pointer",
                  width: "100%",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (theme !== t.name)
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  if (theme !== t.name)
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                }}
              >
                {/* Color swatch */}
                <span
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: t.color,
                    display: "block",
                    flexShrink: 0,
                    boxShadow: theme === t.name ? `0 0 10px ${t.color}88` : "none",
                    outline: theme === t.name ? `2px solid ${t.color}` : "2px solid transparent",
                    outlineOffset: 2,
                    transition: "outline 0.2s ease, box-shadow 0.2s ease",
                  }}
                />
                <span
                  style={{
                    fontSize: 12,
                    color: theme === t.name ? "#fff" : "rgba(255,255,255,0.6)",
                    fontWeight: theme === t.name ? 600 : 400,
                    transition: "color 0.2s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t.label}
                </span>
                {theme === t.name && (
                  <span style={{ marginLeft: "auto", width: 6, height: 6, borderRadius: "50%", background: t.color, flexShrink: 0 }} />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Switch theme"
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "white",
          animation: open ? "none" : "theme-btn-pulse 2.5s ease-out infinite",
          boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
              <X size={18} />
            </motion.span>
          ) : (
            <motion.span key="palette" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
              <Palette size={18} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
