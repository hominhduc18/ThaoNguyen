"use client";

import { motion } from "framer-motion";

const infoCards = [
  { icon: "👤", label: "Họ tên / Name", value: "Nguyễn Thảo" },
  { icon: "🎂", label: "Ngày sinh / DOB", value: "25 / 02 / 2001" },
  { icon: "🚢", label: "Lĩnh vực / Field", value: "Logistics & Supply Chain" },
  { icon: "📍", label: "Địa điểm / Location", value: "TP. Hồ Chí Minh, VN" },
  { icon: "🌐", label: "Ngôn ngữ / Language", value: "Tiếng Việt · English" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Orb */}
      <div
        className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #FADADD, transparent)" }}
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
            — Về tôi / About Me
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <span className="text-[#FAF7F2]">Xin chào, tôi là </span>
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
            {infoCards.map((card, i) => (
              <motion.div
                key={card.label}
                variants={cardVariant}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`glass-card p-5 transition-all duration-300 group ${i === 4 ? "sm:col-span-2" : ""}`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{card.icon}</span>
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-[rgba(250,247,242,0.4)] mb-1">
                      {card.label}
                    </p>
                    <p
                      className="font-semibold text-[#FAF7F2] group-hover:text-[#F9D0D0] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {card.value}
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
            <p className="text-[rgba(250,247,242,0.7)] leading-[1.9] text-base md:text-[17px]">
              Tôi là <span className="text-[#F9D0D0] font-semibold">Nguyễn Thảo</span>, một chuyên gia Logistics & Supply Chain trẻ với niềm đam mê mãnh liệt với thương mại quốc tế và tối ưu hóa chuỗi cung ứng. Được đào tạo bài bản về Logistics tại trường đại học và tích lũy hơn <span className="text-[#D4A847] font-semibold">3 năm kinh nghiệm thực tiễn</span>, tôi hiểu sâu sắc về quy trình xuất nhập khẩu, thủ tục hải quan và vận tải đa phương thức.
            </p>
            <p className="text-[rgba(250,247,242,0.7)] leading-[1.9] text-base md:text-[17px]">
              Tôi có khả năng xử lý toàn bộ quy trình từ <span className="text-[#F9D0D0] font-semibold">đặt hàng, lập kế hoạch vận chuyển, khai báo hải quan đến giao nhận hàng hóa</span> — đảm bảo đúng thời hạn, đúng chi phí và tuân thủ pháp lý. Bên cạnh đó, tôi luôn cập nhật xu hướng công nghệ logistics để mang lại hiệu quả tối ưu cho doanh nghiệp.
            </p>
            <p className="text-[rgba(250,247,242,0.7)] leading-[1.9] text-base md:text-[17px]">
              Điểm mạnh của tôi không chỉ là kiến thức chuyên môn mà còn là <span className="text-[#D4A847] font-semibold">tư duy phân tích, tinh thần trách nhiệm cao và khả năng làm việc nhóm hiệu quả</span>. Tôi đang tìm kiếm môi trường làm việc năng động để tiếp tục phát triển và đóng góp vào sự tăng trưởng bền vững của tổ chức.
            </p>

            {/* Decorative line */}
            <div className="flex items-center gap-4 pt-4">
              <div className="h-px flex-1 bg-gradient-to-r from-[rgba(249,208,208,0.3)] to-transparent" />
              <span className="text-[rgba(212,168,71,0.6)] text-lg">✦</span>
              <div className="h-px flex-1 bg-gradient-to-l from-[rgba(249,208,208,0.3)] to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
