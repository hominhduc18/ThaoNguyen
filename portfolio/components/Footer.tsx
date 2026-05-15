"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[rgba(249,208,208,0.08)] py-10 px-6">
      {/* Subtle gradient top */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(249,208,208,0.3), rgba(212,168,71,0.3), transparent)",
        }}
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
          <span
            className="text-xl font-bold gradient-text"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            TN.
          </span>

          {/* Center */}
          <div className="text-center space-y-1">
            <p className="text-xs text-[rgba(250,247,242,0.35)]">
              © {year} Nguyễn Thảo · All rights reserved.
            </p>
            <p className="text-xs text-[rgba(250,247,242,0.25)]">
              Thiết kế với ♥ · Logistics & Supply Chain Professional
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-[rgba(250,247,242,0.4)]">
            <span>📍</span>
            <span>TP. Hồ Chí Minh, Việt Nam</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
