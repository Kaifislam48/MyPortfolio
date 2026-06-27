"use client";
import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -300, y: -300 });
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const hasHover = window.matchMedia("(hover: hover)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!hasHover || prefersReducedMotion) return;
    setIsEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    let animationId: number;
    const animate = () => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${mousePos.current.x - 150}px, ${mousePos.current.y - 150}px, 0)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 300,
        height: 300,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(200, 240, 255, 0.045) 0%, rgba(200, 240, 255, 0.015) 35%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
        mixBlendMode: "screen",
      }}
    />
  );
}
