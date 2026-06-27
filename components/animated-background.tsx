"use client";
import { useEffect, useState } from "react";

const BLOBS = [
  { size: 480, top: "10%",  left: "5%",   delay: "0s",   duration: "18s",  anim: "aurora-drift",   opacity: 0.09 },
  { size: 400, top: "55%",  left: "65%",  delay: "5s",   duration: "24s",  anim: "aurora-drift-2", opacity: 0.08 },
  { size: 360, top: "80%",  left: "15%",  delay: "10s",  duration: "20s",  anim: "aurora-drift-3", opacity: 0.07 },
  { size: 320, top: "20%",  left: "75%",  delay: "3s",   duration: "22s",  anim: "aurora-drift",   opacity: 0.06 },
];

const PARTICLES = [
  { size: 2, top: "15%",  left: "20%",  delay: "0s",   dur: "9s"  },
  { size: 3, top: "30%",  left: "50%",  delay: "2s",   dur: "12s" },
  { size: 2, top: "60%",  left: "80%",  delay: "4s",   dur: "8s"  },
  { size: 3, top: "75%",  left: "35%",  delay: "1s",   dur: "14s" },
  { size: 2, top: "45%",  left: "10%",  delay: "6s",   dur: "10s" },
  { size: 2, top: "85%",  left: "60%",  delay: "3s",   dur: "11s" },
  { size: 3, top: "25%",  left: "90%",  delay: "7s",   dur: "9s"  },
  { size: 2, top: "70%",  left: "45%",  delay: "5s",   dur: "13s" },
  { size: 2, top: "10%",  left: "65%",  delay: "8s",   dur: "7s"  },
  { size: 3, top: "50%",  left: "28%",  delay: "2s",   dur: "15s" },
  { size: 2, top: "90%",  left: "78%",  delay: "9s",   dur: "10s" },
  { size: 2, top: "35%",  left: "15%",  delay: "4s",   dur: "12s" },
];

export default function AnimatedBackground() {
  const [reduced, setReduced] = useState(true); // start hidden, reveal after check

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reduced) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Aurora blobs */}
      {BLOBS.map((blob, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: blob.top,
            left: blob.left,
            width: blob.size,
            height: blob.size,
            borderRadius: "50%",
            background: [
              `radial-gradient(circle, var(--color-accent-primary), transparent 70%)`,
              `radial-gradient(circle, var(--color-accent-secondary), transparent 70%)`,
              `radial-gradient(circle, var(--color-accent-tertiary), transparent 70%)`,
              `radial-gradient(circle, var(--color-accent-primary), transparent 70%)`,
            ][i % 4],
            opacity: blob.opacity,
            filter: "blur(90px)",
            willChange: "transform",
            animation: `${blob.anim} ${blob.duration} ease-in-out ${blob.delay} infinite`,
          }}
        />
      ))}

      {/* Radial glow pulse at center */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--color-glow-primary) 0%, transparent 60%)",
          willChange: "opacity, transform",
          animation: "pulse-glow 5s ease-in-out infinite",
        }}
      />

      {/* Mesh gradient overlay — static texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse at 25% 25%, rgba(255,255,255,0.015) 0%, transparent 50%),
            radial-gradient(ellipse at 75% 75%, rgba(255,255,255,0.01) 0%, transparent 50%)
          `,
        }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.55)",
            willChange: "transform, opacity",
            animation: `float-particle ${p.dur} linear ${p.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
