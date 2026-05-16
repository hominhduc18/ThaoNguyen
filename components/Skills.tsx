"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { content } from "@/lib/content";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

function ProgressBar({ progress, color, label }: { progress: number; color: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="mt-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-[10px] uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>{label}</span>
        <span className="text-[10px] font-semibold" style={{ color }}>{progress}%</span>
      </div>
      <div className="h-1 w-full rounded-full" style={{ background: "var(--glass-hover)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${progress}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: 0.2 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { lang } = useLang();
  const c = content.skills;

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="orb w-[600px] h-[400px] bottom-0 left-1/2 -translate-x-1/2"
        style={{ background: "radial-gradient(ellipse, rgba(212,168,71,0.2), transparent)" }} />

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

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {c.items.map((skill) => (
            <motion.div
              key={skill.titleEn}
              variants={itemVariant}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`glass-card p-6 transition-all duration-300 ${skill.colSpan === 2 ? "sm:col-span-2 lg:col-span-2" : ""}`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}08)`,
                    border: `1px solid ${skill.color}22`,
                  }}
                >
                  {skill.emoji}
                </div>
                <div>
                  <p className="font-bold text-sm leading-tight font-syne" style={{ color: "var(--text-primary)", fontFamily: "var(--font-syne)" }}>
                    {skill.titleEn}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: skill.color, opacity: 0.85 }}>
                    {skill.titleVi}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {skill.desc[lang]}
              </p>

              {/* Progress */}
              <ProgressBar progress={skill.progress} color={skill.color} label={c.proficiency[lang]} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
