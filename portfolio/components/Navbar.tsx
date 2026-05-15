"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import { useLang } from "@/contexts/LanguageContext";
import { content } from "@/lib/content";

export default function Navbar() {
  const { theme, toggle: toggleTheme } = useTheme();
  const { lang, toggle: toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const isDark = theme === "dark";

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

  const navLinks = content.nav.links;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "shadow-lg" : "bg-transparent"
      )}
      style={scrolled ? { background: "var(--nav-bg)", backdropFilter: "blur(20px)", borderBottom: "1px solid var(--glass-border)" } : {}}
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
        <div
          className="hidden md:flex items-center gap-1 p-1 rounded-full"
          style={{ background: "var(--glass-hover)", border: "1px solid var(--glass-border)" }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background: active === link.href ? "var(--glass-bg)" : "transparent",
                color: active === link.href ? "var(--text-accent-pink)" : "var(--text-secondary)",
                border: active === link.href ? "1px solid var(--glass-border)" : "1px solid transparent",
              }}
            >
              {link.label[lang]}
            </button>
          ))}
        </div>

        {/* Right: toggles + CTA */}
        <div className="hidden md:flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="toggle-btn font-syne font-bold text-xs tracking-wider"
            title={lang === "vi" ? "Switch to English" : "Chuyển sang Tiếng Việt"}
          >
            {lang === "vi" ? "EN" : "VI"}
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="toggle-btn text-base"
            title={isDark ? "Chế độ sáng" : "Chế độ tối"}
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          {/* CTA */}
          <button
            onClick={() => handleNav("#contact")}
            className="ml-1 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, #F9D0D0, #D4A847)",
              color: "#0C0D0F",
            }}
          >
            <span className="relative z-10">{content.nav.cta[lang]}</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
        </div>

        {/* Mobile right: toggles + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleLang} className="toggle-btn font-bold text-[10px] tracking-wider">
            {lang === "vi" ? "EN" : "VI"}
          </button>
          <button onClick={toggleTheme} className="toggle-btn text-sm">
            {isDark ? "☀️" : "🌙"}
          </button>
          <button
            className="flex flex-col gap-1.5 p-2 ml-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-5 h-0.5 rounded-full block transition-all duration-300"
                style={{
                  background: "var(--text-accent-pink)",
                  transform:
                    menuOpen && i === 0 ? "rotate(45deg) translateY(8px)" :
                    menuOpen && i === 1 ? "scaleX(0)" :
                    menuOpen && i === 2 ? "rotate(-45deg) translateY(-8px)" : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "var(--nav-bg)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--glass-border)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left py-2 font-medium transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text-accent-pink)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {link.label[lang]}
                </button>
              ))}
              <button
                onClick={() => handleNav("#contact")}
                className="mt-2 py-2.5 rounded-full text-sm font-semibold"
                style={{ background: "linear-gradient(135deg, #F9D0D0, #D4A847)", color: "#0C0D0F" }}
              >
                {content.nav.cta[lang]}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
