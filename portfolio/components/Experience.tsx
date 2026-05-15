"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "2023 — Nay",
    periodEn: "2023 — Present",
    role: "Logistics Coordinator",
    roleVi: "Điều phối Logistics",
    company: "Công ty TNHH Thương mại Quốc tế ABC",
    companyType: "Xuất nhập khẩu · Hàng tiêu dùng",
    tags: ["Freight Forwarding", "Customs", "Documentation", "Vendor Mgmt"],
    tagColor: "#F9D0D0",
    bullets: [
      "Điều phối toàn bộ lô hàng xuất nhập khẩu đường biển và đường hàng không, đảm bảo đúng tiến độ với tỷ lệ on-time delivery đạt 96%.",
      "Chuẩn bị và kiểm tra bộ chứng từ xuất nhập khẩu: B/L, C/O, Commercial Invoice, Packing List, LC và các giấy tờ liên quan.",
      "Khai báo hải quan điện tử (VNACCS/VCIS) và phối hợp với Chi cục Hải quan xử lý thủ tục thông quan hàng hóa.",
      "Đàm phán giá cước với forwarder, hãng tàu, giảm chi phí logistics xuống 12% trong năm 2024.",
    ],
    accent: "#F9D0D0",
  },
  {
    period: "2022 — 2023",
    periodEn: "2022 — 2023",
    role: "Logistics Assistant",
    roleVi: "Nhân viên Logistics",
    company: "Công ty CP Vận tải & Giao nhận XYZ",
    companyType: "Forwarder · Vận tải đa phương thức",
    tags: ["Import/Export", "Trucking", "Warehouse", "Tracking"],
    tagColor: "#D4A847",
    bullets: [
      "Hỗ trợ điều phối vận chuyển nội địa và quốc tế cho hơn 30 khách hàng doanh nghiệp, xử lý trung bình 15–20 lô hàng/tháng.",
      "Theo dõi và cập nhật trạng thái hàng hóa trên hệ thống TMS, đảm bảo khách hàng nhận thông tin đầy đủ và kịp thời.",
      "Phối hợp với kho bãi, đội xe và hải quan để giải quyết vấn đề phát sinh trong quá trình giao nhận.",
      "Lập báo cáo vận hành hàng tuần và hàng tháng, hỗ trợ quản lý đưa ra quyết định tối ưu chi phí.",
    ],
    accent: "#D4A847",
  },
  {
    period: "2019 — 2023",
    periodEn: "2019 — 2023",
    role: "Cử nhân Logistics",
    roleVi: "Bachelor in Logistics",
    company: "Đại học Kinh tế TP. Hồ Chí Minh (UEH)",
    companyType: "Giáo dục · Logistics & SCM",
    tags: ["Supply Chain", "Incoterms", "Trade Finance", "Research"],
    tagColor: "#FADADD",
    bullets: [
      "Tốt nghiệp ngành Logistics và Quản lý chuỗi cung ứng với GPA đạt loại Khá, chuyên ngành Xuất nhập khẩu.",
      "Hoàn thành luận văn tốt nghiệp về tối ưu hóa chuỗi cung ứng cho doanh nghiệp vừa và nhỏ tại TP. HCM.",
      "Tham gia các khóa học bổ trợ: Incoterms 2020, UCP 600 (L/C), khai báo hải quan và quản lý kho hiện đại.",
      "Hoạt động tích cực trong CLB Kinh tế – Kinh doanh, tổ chức sự kiện và kết nối doanh nghiệp với sinh viên.",
    ],
    accent: "#E8C870",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Orb */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #F9D0D0, transparent)" }}
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
            — Kinh nghiệm / Experience
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <span className="text-[#FAF7F2]">Hành trình </span>
            <span className="gradient-text">nghề nghiệp</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(249,208,208,0.3)] via-[rgba(212,168,71,0.3)] to-transparent hidden md:block" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-6 md:pl-20"
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                whileHover={{ scale: 1.01 }}
                className="glass-card p-7 relative group transition-all duration-300"
                style={{
                  borderColor: `${exp.accent}18`,
                }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-[52px] top-8 w-3 h-3 rounded-full hidden md:block"
                  style={{
                    background: exp.accent,
                    boxShadow: `0 0 12px ${exp.accent}60`,
                  }}
                />

                {/* Top row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
                      style={{
                        background: `${exp.accent}15`,
                        border: `1px solid ${exp.accent}30`,
                        color: exp.accent,
                      }}
                    >
                      {exp.period}
                    </span>
                    <h3
                      className="text-xl font-bold text-[#FAF7F2] mt-1"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {exp.role}
                    </h3>
                    <p className="text-sm text-[rgba(250,247,242,0.5)] italic">
                      {exp.roleVi}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-[rgba(250,247,242,0.8)]">
                      {exp.company}
                    </p>
                    <p className="text-xs text-[rgba(250,247,242,0.4)] mt-0.5">
                      {exp.companyType}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wide"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(250,247,242,0.55)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-[rgba(249,208,208,0.1)] to-transparent mb-4" />

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[rgba(250,247,242,0.65)] leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.accent }} />
                      {bullet}
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
