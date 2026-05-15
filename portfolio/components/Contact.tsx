"use client";

import { motion } from "framer-motion";

const contactRows = [
  {
    icon: "✉️",
    label: "Email",
    value: "nguyen.thao@email.com",
    href: "mailto:nguyen.thao@email.com",
    desc: "Phản hồi trong vòng 24h",
  },
  {
    icon: "📱",
    label: "Điện thoại / Phone",
    value: "+84 909 123 456",
    href: "tel:+84909123456",
    desc: "Thứ 2 – Thứ 6, 8:00 – 17:30",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/nguyen-thao",
    href: "https://linkedin.com/in/nguyen-thao",
    desc: "Kết nối chuyên nghiệp",
  },
  {
    icon: "📍",
    label: "Địa điểm / Location",
    value: "TP. Hồ Chí Minh, Việt Nam",
    href: "https://maps.google.com/?q=Ho+Chi+Minh+City",
    desc: "Sẵn sàng làm việc tại HCM & remote",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Orbs */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #F9D0D0, transparent)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[300px] h-[300px] blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4A847, transparent)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[rgba(212,168,71,0.8)] mb-3">
            — Liên hệ / Contact
          </p>
        </motion.div>

        <div className="glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Heading */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h2
                className="text-4xl md:text-5xl font-extrabold leading-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <span className="text-[#FAF7F2]">Hãy cùng</span>
                <br />
                <span className="gradient-text">làm việc</span>
                <br />
                <span className="text-[#FAF7F2]">nhé. ✦</span>
              </h2>

              <p className="text-[rgba(250,247,242,0.6)] leading-relaxed text-base md:text-lg">
                Tôi luôn sẵn sàng lắng nghe về các cơ hội hợp tác mới. Dù bạn đang tìm kiếm một chuyên gia logistics hay muốn thảo luận về giải pháp chuỗi cung ứng — hãy liên hệ với tôi!
              </p>

              {/* CTA Button */}
              <motion.a
                href="mailto:nguyen.thao@email.com"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[#0C0D0F] text-sm shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #F9D0D0 0%, #D4A847 100%)",
                  boxShadow: "0 8px 32px rgba(212,168,71,0.25)",
                }}
              >
                <span>Gửi Email ngay</span>
                <span className="text-base">→</span>
              </motion.a>

              {/* Decorative element */}
              <div className="pt-4">
                <div className="flex gap-2">
                  {["#F9D0D0", "#FADADD", "#D4A847", "#E8C870"].map((c) => (
                    <div
                      key={c}
                      className="w-2 h-2 rounded-full"
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Rows */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-3"
            >
              {contactRows.map((row) => (
                <motion.a
                  key={row.label}
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 6, backgroundColor: "rgba(249,208,208,0.05)" }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[rgba(249,208,208,0.08)] group transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "rgba(249,208,208,0.08)",
                      border: "1px solid rgba(249,208,208,0.12)",
                    }}
                  >
                    {row.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-widest uppercase text-[rgba(250,247,242,0.4)] mb-0.5">
                      {row.label}
                    </p>
                    <p className="text-sm font-semibold text-[#FAF7F2] group-hover:text-[#F9D0D0] transition-colors duration-300 truncate">
                      {row.value}
                    </p>
                    <p className="text-[11px] text-[rgba(250,247,242,0.35)]">{row.desc}</p>
                  </div>
                  <span className="text-[rgba(249,208,208,0.3)] group-hover:text-[#F9D0D0] transition-all duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
