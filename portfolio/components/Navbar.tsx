"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", labelVi: "Giới thiệu", href: "#about" },
  { label: "Skills", labelVi: "Kỹ năng", href: "#skills" },
  { label: "Experience", labelVi: "Kinh nghiệm", href: "#experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-xl bg-[rgba(12,13,15,0.85)] border-b border-[rgba(249,208,208,0.08)] shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-syne text-xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          <span className="gradient-text">TN.</span>
        </button>

        {/* Desktop Nav Pills */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(249,208,208,0.08)]">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
                active === link.href
                  ? "bg-gradient-to-r from-[#F9D0D0]/20 to-[#D4A847]/20 text-[#F9D0D0] border border-[rgba(249,208,208,0.2)]"
                  : "text-[rgba(250,247,242,0.6)] hover:text-[#FAF7F2]"
              )}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNav("#contact")}
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, #F9D0D0, #D4A847)",
              color: "#0C0D0F",
            }}
          >
            <span className="relative z-10">Liên hệ</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "w-5 h-0.5 bg-[#F9D0D0] rounded-full transition-all duration-300",
              menuOpen && "rotate-45 translate-y-2"
            )}
          />
          <span
            className={cn(
              "w-5 h-0.5 bg-[#F9D0D0] rounded-full transition-all duration-300",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "w-5 h-0.5 bg-[#F9D0D0] rounded-full transition-all duration-300",
              menuOpen && "-rotate-45 -translate-y-2"
            )}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden backdrop-blur-xl bg-[rgba(12,13,15,0.95)] border-b border-[rgba(249,208,208,0.08)]"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left py-2 text-[rgba(250,247,242,0.7)] hover:text-[#F9D0D0] transition-colors font-medium"
                >
                  {link.label} <span className="text-xs text-[rgba(250,247,242,0.4)]">/ {link.labelVi}</span>
                </button>
              ))}
              <button
                onClick={() => handleNav("#contact")}
                className="mt-2 py-2.5 rounded-full text-sm font-semibold text-[#0C0D0F]"
                style={{ background: "linear-gradient(135deg, #F9D0D0, #D4A847)" }}
              >
                Liên hệ
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
