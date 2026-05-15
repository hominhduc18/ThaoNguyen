"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const stats = [
  { value: "3+", label: "Năm kinh nghiệm", sub: "Years Exp." },
  { value: "50+", label: "Lô hàng", sub: "Shipments" },
  { value: "15+", label: "Đối tác", sub: "Partners" },
  { value: "100%", label: "Tận tâm", sub: "Dedicated" },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Floating orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full pointer-events-none blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, #F9D0D0, transparent)" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full pointer-events-none blur-3xl opacity-15"
        style={{ background: "radial-gradient(circle, #D4A847, transparent)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl opacity-5"
        style={{ background: "radial-gradient(circle, #FADADD, #D4A847)" }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(249,208,208,0.2)] bg-[rgba(249,208,208,0.05)] text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-blink" />
              <span className="text-[rgba(250,247,242,0.7)]">Đang tìm kiếm cơ hội mới</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className="gradient-text">Nguyễn</span>
              <br />
              <span className="text-[#FAF7F2]">Thảo</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-xl font-medium gradient-text-gold"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Logistics & Supply Chain Professional
            </motion.p>

            {/* Description */}
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[rgba(250,247,242,0.6)] leading-relaxed max-w-lg text-base md:text-lg"
            >
              Chuyên gia xuất nhập khẩu, vận tải quốc tế và thông quan hải quan với hơn 3 năm kinh nghiệm thực tiễn tại TP. Hồ Chí Minh. Cam kết mang lại giải pháp logistics tối ưu, chính xác và hiệu quả.
            </motion.p>

            {/* Buttons */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={() => handleScroll("#contact")}
                className="px-7 py-3 rounded-full font-semibold text-[#0C0D0F] text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #F9D0D0 0%, #D4A847 100%)",
                  boxShadow: "0 8px 32px rgba(212,168,71,0.25)",
                }}
              >
                ✦ Liên hệ ngay
              </button>
              <button
                onClick={() => handleScroll("#experience")}
                className="px-7 py-3 rounded-full font-semibold text-sm border border-[rgba(249,208,208,0.25)] text-[rgba(250,247,242,0.8)] hover:border-[rgba(249,208,208,0.5)] hover:text-[#F9D0D0] transition-all duration-300 hover:bg-[rgba(249,208,208,0.05)]"
              >
                Xem kinh nghiệm →
              </button>
            </motion.div>
          </div>

          {/* Right: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="glass-card p-8 w-full max-w-sm relative">
              {/* Glow border */}
              <div
                className="absolute inset-0 rounded-[1.25rem] opacity-30 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(249,208,208,0.2), rgba(212,168,71,0.2))",
                  filter: "blur(1px)",
                }}
              />

              {/* Open to Work badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: "linear-gradient(135deg, #F9D0D0, #D4A847)",
                  color: "#0C0D0F",
                }}>
                ✦ Open to Work
              </div>

              {/* Avatar */}
              <div className="flex flex-col items-center gap-3 mb-6 mt-2">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold shadow-xl animate-float"
                  style={{
                    background:
                      "linear-gradient(135deg, #F9D0D0 0%, #FADADD 40%, #D4A847 100%)",
                    color: "#0C0D0F",
                    fontFamily: "var(--font-syne)",
                    boxShadow: "0 8px 32px rgba(212,168,71,0.3)",
                  }}
                >
                  T
                </div>
                <div className="text-center">
                  <p
                    className="font-bold text-lg text-[#FAF7F2]"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Nguyễn Thảo
                  </p>
                  <p className="text-xs text-[rgba(250,247,242,0.5)]">
                    TP. Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[rgba(249,208,208,0.2)] to-transparent mb-6" />

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-3 text-center transition-all duration-300 hover:scale-105 cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(249,208,208,0.08)",
                    }}
                  >
                    <p
                      className="text-2xl font-extrabold gradient-text"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-[rgba(250,247,242,0.5)] leading-tight mt-0.5">
                      {stat.label}
                    </p>
                    <p className="text-[9px] text-[rgba(250,247,242,0.3)]">
                      {stat.sub}
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
