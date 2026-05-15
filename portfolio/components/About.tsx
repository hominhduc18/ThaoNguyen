"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { content, resolve } from "@/lib/content";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

function parseBio(raw: string) {
  const parts: { text: string; type: "plain" | "pink" | "gold" }[] = [];
  const regex = /<(pink|gold)>(.*?)<\/\1>/g;
  let last = 0;
  let match;
  while ((match = regex.exec(raw)) !== null) {
    if (match.index > last) parts.push({ text: raw.slice(last, match.index), type: "plain" });
    parts.push({ text: match[2], type: match[1] as "pink" | "gold" });
    last = match.index + match[0].length;
  }
  if (last < raw.length) parts.push({ text: raw.slice(last), type: "plain" });
  return parts;
}

export default function About() {
  const { lang } = useLang();
  const c = content.about;

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] -top-32 right-0" style={{ background: "radial-gradient(circle, #FADADD, transparent)" }} />

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
            <span className="gradient-text">Thảo</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {c.infoCards.map((card, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`glass-card p-5 transition-all duration-300 group ${i === 4 ? "sm:col-span-2" : ""}`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{card.icon}</span>
                  <div>
                    <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "var(--text-muted)" }}>
                      {typeof card.label === "string" ? card.label : card.label[lang]}
                    </p>
                    <p
                      className="font-semibold font-syne transition-colors duration-300"
                      style={{ color: "var(--text-primary)", fontFamily: "var(--font-syne)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--text-accent-pink)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text-primary)")}
                    >
                      {resolve(card.value as any, lang)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            {c.bio.map((para, i) => (
              <p key={i} className="leading-[1.9] text-base md:text-[17px]" style={{ color: "var(--text-secondary)" }}>
                {parseBio(para[lang]).map((seg, j) => {
                  if (seg.type === "pink") return <span key={j} className="font-semibold" style={{ color: "var(--text-accent-pink)" }}>{seg.text}</span>;
                  if (seg.type === "gold") return <span key={j} className="font-semibold" style={{ color: "var(--text-accent-gold)" }}>{seg.text}</span>;
                  return <span key={j}>{seg.text}</span>;
                })}
              </p>
            ))}

            {/* Decorative line */}
            <div className="flex items-center gap-4 pt-4">
              <div className="h-px flex-1" style={{ background: "linear-gradient(to right, var(--glass-border), transparent)" }} />
              <span className="text-lg" style={{ color: "var(--text-accent-gold)", opacity: 0.6 }}>✦</span>
              <div className="h-px flex-1" style={{ background: "linear-gradient(to left, var(--glass-border), transparent)" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
