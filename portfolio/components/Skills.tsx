"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    emoji: "🚢",
    titleEn: "Freight Management",
    titleVi: "Quản lý Vận tải",
    desc: "Điều phối vận tải biển, hàng không và đường bộ. Lựa chọn hãng tàu, booking và theo dõi lô hàng quốc tế.",
    progress: 88,
    color: "#F9D0D0",
    colSpan: 1,
  },
  {
    emoji: "📋",
    titleEn: "Customs & Docs",
    titleVi: "Hải quan & Chứng từ",
    desc: "Khai báo hải quan điện tử (VNACCS), chuẩn bị C/O, B/L, Invoice, Packing List và các chứng từ xuất nhập khẩu.",
    progress: 92,
    color: "#D4A847",
    colSpan: 1,
  },
  {
    emoji: "🔗",
    titleEn: "Supply Chain Ops",
    titleVi: "Vận hành Chuỗi cung ứng",
    desc: "Lập kế hoạch nguồn cung, quản lý tồn kho, tối ưu hóa chi phí logistics và điều phối giữa các bên liên quan.",
    progress: 82,
    color: "#FADADD",
    colSpan: 2,
  },
  {
    emoji: "🤝",
    titleEn: "Vendor Relations",
    titleVi: "Quan hệ Đối tác",
    desc: "Đàm phán với forwarder, hãng tàu, kho bãi và các nhà cung cấp dịch vụ logistics trong và ngoài nước.",
    progress: 85,
    color: "#E8C870",
    colSpan: 1,
  },
  {
    emoji: "💻",
    titleEn: "Logistics Systems",
    titleVi: "Hệ thống Logistics",
    desc: "Thành thạo ERP, TMS, phần mềm hải quan ECUS, Excel nâng cao và các công cụ quản lý vận tải hiện đại.",
    progress: 78,
    color: "#F9D0D0",
    colSpan: 1,
  },
  {
    emoji: "🌐",
    titleEn: "Languages",
    titleVi: "Ngôn ngữ",
    desc: "Tiếng Việt (bản ngữ) · Tiếng Anh (giao tiếp thương mại, đọc viết hợp đồng và chứng từ quốc tế lưu loát).",
    progress: 80,
    color: "#D4A847",
    colSpan: 1,
  },
];

function ProgressBar({ progress, color }: { progress: number; color: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="mt-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-[10px] text-[rgba(250,247,242,0.4)] uppercase tracking-widest">
          Proficiency
        </span>
        <span className="text-[10px] font-semibold" style={{ color }}>
          {progress}%
        </span>
      </div>
      <div className="h-1 w-full rounded-full bg-[rgba(255,255,255,0.06)]">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${progress}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        />
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Orb */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] blur-3xl opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(212,168,71,0.15), transparent)" }}
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
            — Kỹ năng / Skills
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <span className="text-[#FAF7F2]">Chuyên môn </span>
            <span className="gradient-text">nổi bật</span>
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
          {skills.map((skill) => (
            <motion.div
              key={skill.titleEn}
              variants={itemVariant}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`glass-card p-6 transition-all duration-300 group ${
                skill.colSpan === 2 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
              style={{
                borderColor: `rgba(${skill.color === "#F9D0D0" ? "249,208,208" : skill.color === "#D4A847" ? "212,168,71" : "250,218,221"},0.1)`,
              }}
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
                  <p
                    className="font-bold text-[#FAF7F2] text-sm leading-tight"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {skill.titleEn}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: skill.color, opacity: 0.8 }}>
                    {skill.titleVi}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-[rgba(250,247,242,0.55)] text-sm leading-relaxed">
                {skill.desc}
              </p>

              {/* Progress Bar */}
              <ProgressBar progress={skill.progress} color={skill.color} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
