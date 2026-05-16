"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { content } from "@/lib/content";

export default function Footer() {
  const { lang } = useLang();
  const c = content.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-10 pb-32 px-6" style={{ borderTop: "1px solid var(--glass-border)" }}>
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
          className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4"
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
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs pr-2 md:pr-32" style={{ color: "var(--text-muted)" }}>
            <span>📍</span>
            <span>{c.location[lang]}</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Twinkle Character */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] w-20 h-20 md:w-28 md:h-28 cursor-pointer drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="Hi từ Twinkle!"
      >
        <div className="w-full h-full overflow-hidden rounded-[2rem] border-4 border-[#FFD700] bg-white relative shadow-[0_0_20px_rgba(255,215,0,0.4)]">
          <img src="/twinkle.png" alt="Twinkle" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </footer>
  );
}
