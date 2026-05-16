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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Gold Ring */}
              <div className="absolute inset-0 rounded-full border border-[var(--text-accent-gold)] opacity-30 animate-pulse" />
              {/* Image Frame */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-[var(--text-accent-gold)] shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                <img 
                  src="/profile.jpg" 
                  alt="Nguyễn Thảo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Info Side */}
          <div className="space-y-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: "var(--text-accent-gold)" }}>
                {c.sectionTag[lang]}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-serif" style={{ color: "var(--text-primary)" }}>
                {c.heading1[lang]} <span className="italic" style={{ color: "var(--text-accent-gold)" }}>Thảo</span>
              </h2>
            </motion.div>

            {/* Info Cards Grid */}
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
                  className="glass-card p-5 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{card.icon}</span>
                    <div>
                      <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "var(--text-muted)" }}>
                        {resolve(card.label, lang)}
                      </p>
                      <p className="font-semibold font-serif text-sm md:text-base" style={{ color: "var(--text-primary)" }}>
                        {resolve(card.value as any, lang)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-6"
            >
              {c.bio.map((para, i) => (
                <p key={i} className="leading-relaxed text-lg md:text-xl font-light" style={{ color: "var(--text-primary)" }}>
                  {parseBio(resolve(para, lang)).map((seg, j) => {
                    if (seg.type === "pink") return <span key={j} className="font-bold" style={{ color: "var(--text-accent-pink)" }}>{seg.text}</span>;
                    if (seg.type === "gold") return <span key={j} className="font-bold" style={{ color: "var(--text-accent-gold)" }}>{seg.text}</span>;
                    return <span key={j}>{seg.text}</span>;
                  })}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
