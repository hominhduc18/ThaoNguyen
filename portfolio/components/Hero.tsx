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

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 text-center md:text-left">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          
          {/* Badge */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-[10px] tracking-[0.3em] uppercase font-light mb-8 md:mb-10"
            style={{ border: "1px solid var(--glass-border)", background: "rgba(255,255,255,0.02)", color: "var(--text-muted)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-blink" />
            <span>{c.badge[lang]}</span>
          </motion.div>

          {/* Name: The Centerpiece */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="mb-8 md:mb-10 space-y-2"
          >
            <h1 className="text-6xl md:text-8xl xl:text-[9rem] font-bold font-serif tracking-tight leading-[0.85] flex flex-wrap justify-center md:justify-start gap-4">
              <span style={{ color: "var(--text-accent-gold)" }}>Thao</span>
              <span className="italic" style={{ color: "var(--text-primary)" }}>Nguyen</span>
            </h1>
          </motion.div>

          {/* Info Block */}
          <motion.div
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="space-y-6 md:space-y-8 max-w-2xl"
          >
            <p className="text-sm md:text-lg tracking-[0.4em] uppercase font-bold" style={{ color: "var(--text-accent-gold)" }}>
              {c.role[lang]}
            </p>
            
            <div className="w-16 h-0.5 mx-auto md:mx-0" style={{ background: "var(--text-accent-gold)" }} />

            <p className="text-xl md:text-2xl font-medium leading-relaxed italic font-serif" style={{ color: "var(--text-primary)" }}>
              {c.description[lang]}
            </p>

            {/* Contact Highlight */}
            <div className="pt-6 md:pt-8">
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <motion.a
                  href="tel:0964034267"
                  whileHover={{ scale: 1.05, backgroundColor: "#FFD700", color: "#000" }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-10 py-5 md:px-12 md:py-6 rounded-full font-serif text-3xl md:text-4xl tracking-widest transition-all duration-500 shadow-[0_0_50px_rgba(255,215,0,0.3)]"
                  style={{ background: "var(--text-primary)", color: "var(--bg)", fontWeight: "bold" }}
                >
                  0964 034 267
                </motion.a>
                <motion.a
                  href="https://zalo.me/0964034267"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, backgroundColor: "#0068FF", color: "#FFF", borderColor: "#0068FF" }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-8 py-5 md:px-10 md:py-6 rounded-full font-sans text-2xl font-bold tracking-widest transition-all duration-500"
                  style={{ border: "2px solid var(--text-accent-gold)", color: "var(--text-accent-gold)" }}
                >
                  Zalo
                </motion.a>
              </div>
              <p className="mt-5 text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold" style={{ color: "var(--text-accent-gold)" }}>
                {lang === "vi" ? "LIÊN HỆ TRỰC TIẾP HOẶC NHẮN TIN" : "CALL OR MESSAGE VIA ZALO"}
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 mt-12 md:mt-20 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-light"
          >
            <button onClick={() => handleScroll("#about")} className="hover:text-accent-gold transition-colors">{lang === 'vi' ? 'Về tôi' : 'About'}</button>
            <button onClick={() => handleScroll("#experience")} className="hover:text-accent-gold transition-colors">{lang === 'vi' ? 'Kinh nghiệm' : 'Experience'}</button>
            <button onClick={() => handleScroll("#contact")} className="hover:text-accent-gold transition-colors">{lang === 'vi' ? 'Liên hệ' : 'Contact'}</button>
          </motion.div>

        </div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex-shrink-0 mb-8 md:mb-0"
        >
          <div className="w-48 h-48 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full border-[3px] border-[var(--text-accent-gold)] p-2 shadow-[0_0_60px_rgba(255,215,0,0.25)]">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-[var(--text-accent-gold)] opacity-95">
              <img src="/profile.jpg" alt="Nguyễn Thảo" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Decorative Ring */}
          <div className="absolute inset-0 rounded-full border border-[var(--text-accent-gold)] opacity-30 animate-pulse -m-6" />
        </motion.div>

      </div>
    </section>
  );
}
