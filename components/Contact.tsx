"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { content, resolve } from "@/lib/content";

export default function Contact() {
  const { lang } = useLang();
  const c = content.contact;
  const headingLines = c.heading[lang].split("\n");

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] top-1/2 left-1/4 -translate-y-1/2" style={{ background: "radial-gradient(circle, #F9D0D0, transparent)" }} />
      <div className="orb w-[300px] h-[300px] bottom-0 right-1/4" style={{ background: "radial-gradient(circle, #D4A847, transparent)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "var(--text-accent-gold)" }}>
            {c.sectionTag[lang]}
          </p>
        </motion.div>

        <div className="glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight font-syne" style={{ fontFamily: "var(--font-syne)" }}>
                {headingLines.map((line, i) => (
                  <span key={i}>
                    {i === 1 ? <span className="gradient-text">{line}</span> : <span style={{ color: "var(--text-primary)" }}>{line}</span>}
                    {i < headingLines.length - 1 && <br />}
                  </span>
                ))}
              </h2>

              <p className="leading-relaxed text-base md:text-lg" style={{ color: "var(--text-secondary)" }}>
                {c.description[lang]}
              </p>

              <motion.a
                href="mailto:nguyen.thao@email.com"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm"
                style={{
                  background: "linear-gradient(135deg, #F9D0D0 0%, #D4A847 100%)",
                  color: "#0C0D0F",
                  boxShadow: "0 8px 32px rgba(212,168,71,0.25)",
                }}
              >
                <span>{c.cta[lang]}</span>
                <span>→</span>
              </motion.a>

              <div className="flex gap-2 pt-2">
                {["#F9D0D0", "#FADADD", "#D4A847", "#E8C870"].map((col) => (
                  <div key={col} className="w-2 h-2 rounded-full" style={{ background: col }} />
                ))}
              </div>
            </motion.div>

            {/* Right: Contact rows */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-3"
            >
              {c.rows.map((row, i) => (
                <motion.a
                  key={i}
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-300"
                  style={{ border: "1px solid var(--glass-border)", background: "transparent" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--glass-hover)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "var(--glass-hover)", border: "1px solid var(--glass-border)" }}
                  >
                    {row.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-widest uppercase mb-0.5" style={{ color: "var(--text-muted)" }}>
                      {resolve(row.label as any, lang)}
                    </p>
                    <p className="text-sm font-semibold truncate transition-colors duration-300" style={{ color: "var(--text-primary)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--text-accent-pink)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text-primary)")}
                    >
                      {resolve(row.value as any, lang)}
                    </p>
                    <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                      {row.desc[lang]}
                    </p>
                  </div>
                  <span className="transition-all duration-300 group-hover:translate-x-1" style={{ color: "var(--glass-border)" }}>→</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
