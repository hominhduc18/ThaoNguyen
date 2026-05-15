"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { content } from "@/lib/content";

export default function Footer() {
  const { lang } = useLang();
  const c = content.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-10 px-6" style={{ borderTop: "1px solid var(--glass-border)" }}>
      {/* Gradient top line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--text-accent-pink), var(--text-accent-gold), transparent)", opacity: 0.4 }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <span className="text-xl font-bold gradient-text font-syne" style={{ fontFamily: "var(--font-syne)" }}>
            TN.
          </span>

          {/* Center */}
          <div className="text-center space-y-1">
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              © {year} Nguyễn Thảo · {c.copyright[lang]}
            </p>
            <p className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.7 }}>
              {c.subtitle[lang]}
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-muted)" }}>
            <span>📍</span>
            <span>{c.location[lang]}</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
