"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "50px";
        ringRef.current.style.height = "50px";
        ringRef.current.style.borderColor = "rgba(212,168,71,0.8)";
        ringRef.current.style.background = "rgba(212,168,71,0.1)";
      }
      if (dotRef.current) {
        dotRef.current.style.background = "#D4A847";
        dotRef.current.style.transform += " scale(1.5)";
      }
    };

    const onLeaveLink = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "40px";
        ringRef.current.style.height = "40px";
        ringRef.current.style.borderColor = "rgba(249,208,208,0.6)";
        ringRef.current.style.background = "transparent";
      }
      if (dotRef.current) {
        dotRef.current.style.background =
          "linear-gradient(135deg, #F9D0D0, #D4A847)";
      }
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(animate);

    const links = document.querySelectorAll("a, button, [data-cursor]");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          background: "linear-gradient(135deg, var(--text-accent-pink), var(--text-accent-gold))",
          willChange: "transform",
          transition: "background 0.2s ease",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{
          border: "1.5px solid var(--text-accent-pink)",
          opacity: 0.6,
          willChange: "transform",
          transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background 0.2s ease",
        }}
      />
    </>
  );
}
