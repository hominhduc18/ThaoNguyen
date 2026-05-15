"use client";

import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { content } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

export default function Hero() {
  const { lang } = useLang();
  const c = content.hero;

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Floating orbs */}
      <div className="orb w-96 h-96 -left-32 top-1/4" style={{ background: "radial-gradient(circle, #F9D0D0, transparent)" }} />
      <div className="orb w-80 h-80 -right-32 bottom-1/4" style={{ background: "radial-gradient(circle, #D4A847, transparent)" }} />
      <div className="orb w-[600px] h-[600px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: "radial-gradient(circle, #FADADD, #D4A847)", opacity: "calc(var(--orb-opacity) * 0.4)" }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div className="space-y-6">
            {/* Badge */}
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm"
              style={{ border: "1px solid var(--glass-border)", background: "var(--glass-hover)" }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-blink" />
              <span style={{ color: "var(--text-secondary)" }}>{c.badge[lang]}</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight font-syne"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className="gradient-text">Nguyễn</span>
              <br />
              <span style={{ color: "var(--text-primary)" }}>Thảo</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-lg md:text-xl font-medium gradient-text-gold font-syne"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {c.role[lang]}
            </motion.p>

            {/* Description */}
            <motion.p
              custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="leading-relaxed max-w-lg text-base md:text-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              {c.description[lang]}
            </motion.p>

            {/* Buttons */}
            <motion.div
              custom={4} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={() => handleScroll("#contact")}
                className="px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #F9D0D0 0%, #D4A847 100%)",
                  color: "#0C0D0F",
                  boxShadow: "0 8px 32px rgba(212,168,71,0.28)",
                }}
              >
                {c.cta1[lang]}
              </button>
              <button
                onClick={() => handleScroll("#experience")}
                className="px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300"
                style={{
                  border: "1px solid var(--glass-border)",
                  color: "var(--text-secondary)",
                  background: "transparent",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "var(--text-accent-pink)";
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                  e.currentTarget.style.background = "var(--glass-hover)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.borderColor = "var(--glass-border)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {c.cta2[lang]}
              </button>
            </motion.div>
          </div>

          {/* Right: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="glass-card p-8 w-full max-w-sm relative">
              {/* Open to Work badge */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #F9D0D0, #D4A847)", color: "#0C0D0F" }}
              >
                ✦ Open to Work
              </div>

              {/* Avatar */}
              <div className="flex flex-col items-center gap-3 mb-6 mt-2">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold shadow-xl animate-float font-syne"
                  style={{
                    background: "linear-gradient(135deg, #F9D0D0 0%, #FADADD 40%, #D4A847 100%)",
                    color: "#0C0D0F",
                    fontFamily: "var(--font-syne)",
                    boxShadow: "0 8px 32px rgba(212,168,71,0.3)",
                  }}
                >
                  T
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg font-syne" style={{ color: "var(--text-primary)", fontFamily: "var(--font-syne)" }}>
                    Nguyễn Thảo
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {c.location[lang]}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px mb-6" style={{ background: "linear-gradient(90deg, transparent, var(--glass-border), transparent)" }} />

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                {c.stats.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-xl p-3 text-center transition-all duration-300 hover:scale-105 cursor-default"
                    style={{ background: "var(--glass-hover)", border: "1px solid var(--glass-border)" }}
                  >
                    <p className="text-2xl font-extrabold gradient-text font-syne" style={{ fontFamily: "var(--font-syne)" }}>
                      {stat.value}
                    </p>
                    <p className="text-[10px] leading-tight mt-0.5" style={{ color: "var(--text-muted)" }}>
                      {stat.label[lang]}
                    </p>
                    <p className="text-[9px]" style={{ color: "var(--text-muted)", opacity: 0.7 }}>
                      {stat.sub[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
