"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: string;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animId: number;

    const isDark = theme === "dark";
    const COLORS = isDark 
      ? ["rgba(249,208,208,", "rgba(250,218,221,", "rgba(212,168,71,", "rgba(232,200,112,"]
      : ["rgba(192,80,92,", "rgba(184,64,96,", "rgba(160,120,32,", "rgba(192,144,48,"];

    const count = Math.floor((width * height) / 20000);
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * (isDark ? 0.4 : 0.2) + 0.1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

      const heartsCount = 15; // Number of floating hearts
      const hearts: Particle[] = Array.from({ length: heartsCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.5 - 0.2, // Float upwards
        radius: Math.random() * 12 + 10, // Size of heart (bơm to lên)
        opacity: Math.random() * 0.5 + 0.15,
        color: "rgba(255, 192, 203,", // Pink
      }));

      const draw = () => {
        ctx.clearRect(0, 0, width, height);

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
              ctx.beginPath();
              ctx.strokeStyle = isDark 
                ? `rgba(249,208,208,${0.03 * (1 - dist / 100)})`
                : `rgba(160,120,32,${0.02 * (1 - dist / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }

        // Draw particles
        particles.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.opacity})`;
          ctx.fill();

          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        });

        // Draw floating hearts
        hearts.forEach((h) => {
          ctx.save();
          ctx.translate(h.x, h.y);
          const s = h.radius;
          ctx.beginPath();
          ctx.moveTo(0, s / 2);
          ctx.bezierCurveTo(-s, -s / 2, -s * 2, s / 2, 0, s * 1.5);
          ctx.bezierCurveTo(s * 2, s / 2, s, -s / 2, 0, s / 2);
          ctx.fillStyle = `${h.color}${h.opacity})`;
          ctx.fill();
          ctx.restore();

          h.x += h.vx;
          h.y += h.vy; // Moves upwards

          // Wrap around screen
          if (h.y < -20) {
            h.y = height + 20;
            h.x = Math.random() * width;
          }
          if (h.x < -20) h.x = width + 20;
          if (h.x > width + 20) h.x = -20;
        });

        animId = requestAnimationFrame(draw);
      };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]); // Re-run when theme changes

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000"
      style={{ opacity: "var(--particle-opacity)" }}
    />
  );
}
