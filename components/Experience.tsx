"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { content, resolve } from "@/lib/content";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

export default function Experience() {
  const { lang } = useLang();
  const c = content.experience;

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] top-0 right-0" style={{ background: "radial-gradient(circle, #F9D0D0, transparent)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
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
          <h2 className="text-4xl md:text-5xl font-extrabold font-syne" style={{ fontFamily: "var(--font-syne)" }}>
            <span style={{ color: "var(--text-primary)" }}>{c.heading1[lang]} </span>
            <span className="gradient-text">{c.heading2[lang]}</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, var(--text-accent-pink), var(--text-accent-gold), transparent)", opacity: 0.3 }}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-6 md:pl-20"
          >
            {c.items.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                whileHover={{ scale: 1.01 }}
                className="glass-card p-7 relative transition-all duration-300"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-[52px] top-8 w-3 h-3 rounded-full hidden md:block"
                  style={{ background: exp.accent, boxShadow: `0 0 12px ${exp.accent}60` }}
                />

                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
                      style={{ background: `${exp.accent}15`, border: `1px solid ${exp.accent}30`, color: exp.accent }}
                    >
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold mt-1 font-syne" style={{ color: "var(--text-primary)", fontFamily: "var(--font-syne)" }}>
                      {exp.role[lang]}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{exp.company[lang]}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{exp.companyType[lang]}</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wide"
                      style={{ background: "var(--glass-hover)", border: "1px solid var(--glass-border)", color: "var(--text-muted)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px w-full mb-4" style={{ background: "linear-gradient(to right, var(--glass-border), transparent)" }} />

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.accent }} />
                      {bullet[lang]}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
