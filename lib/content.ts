export const content = {
  nav: {
    logo: "TN.",
    cta: { vi: "Liên hệ", en: "Let's Talk" },
    links: [
      { label: { vi: "Về tôi", en: "About" }, href: "#about" },
      { label: { vi: "Kỹ năng", en: "Skills" }, href: "#skills" },
      { label: { vi: "Kinh nghiệm", en: "Experience" }, href: "#experience" },
      { label: { vi: "Liên hệ", en: "Contact" }, href: "#contact" },
    ],
  },
  hero: {
    name: {
      part1: { vi: "Phương", en: "Phuong" },
      part2: { vi: "Thảo", en: "Thao" }
    },
    badge: { vi: "", en: "" },
    role: { vi: "Chuyên viên Logistics & Chuỗi cung ứng", en: "Logistics & Supply Chain Professional" },
    description: {
      vi: "Chuyên gia xuất nhập khẩu và thông quan với hơn 3 năm kinh nghiệm thực tiễn. Cam kết mang lại giải pháp tối ưu và chính xác.",
      en: "Import/export specialist and customs clearance professional with 3+ years of hands-on experience. Committed to precise, efficient solutions.",
    },
    location: { vi: "TP. Hồ Chí Minh, Việt Nam", en: "Ho Chi Minh City, VN" },
    cta1: { vi: "Liên hệ ngay", en: "Contact Me" },
    cta2: { vi: "Xem kinh nghiệm", en: "View Experience" },
    stats: [
      { value: "3+", label: { vi: "Năm kinh nghiệm", en: "Years Experience" }, sub: { vi: "Logistics", en: "In Logistics" } },
      { value: "500+", label: { vi: "Tờ khai hải quan", en: "Customs Declared" }, sub: { vi: "Đã hoàn thành", en: "Successfully" } },
    ],
  },
  about: {
    sectionTag: { vi: "Thông tin", en: "Biography" },
    heading1: { vi: "Tôi là", en: "I am" },
    infoCards: [
      { label: { vi: "Họ và Tên", en: "Full Name" }, value: { vi: "Nguyễn Thị Phương Thảo", en: "Nguyen Thi Phuong Thao" }, icon: "👤" },
      { label: { vi: "Vị trí", en: "Current Role" }, value: { vi: "Chuyên viên XNK", en: "Import-Export Specialist" }, icon: "💼" },
      { label: { vi: "Học vấn", en: "Education" }, value: { vi: "UEH - Đại học Kinh tế TP.HCM", en: "UEH - University of Economics HCMC" }, icon: "🎓" },
      { label: { vi: "Bằng cấp", en: "Degree" }, value: { vi: "Cử nhân Kinh doanh Quốc tế", en: "Bachelor of International Business" }, icon: "📜" },
      { label: { vi: "Ngôn ngữ", en: "Languages" }, value: { vi: "Tiếng Anh, Tiếng Việt", en: "English, Vietnamese" }, icon: "🌐" },
      { label: { vi: "Mục tiêu", en: "Core Goal" }, value: { vi: "Tối ưu hóa chuỗi cung ứng toàn cầu", en: "Optimizing Global Supply Chain" }, icon: "🎯" },
    ],
    bio: [
      {
        vi: "Với nền tảng từ <gold>UEH</gold>, tôi đã tích lũy hơn 3 năm kinh nghiệm trong ngành <pink>Logistics</pink>. Tôi am hiểu tường tận quy trình thông quan và vận tải quốc tế.",
        en: "Graduated from <gold>UEH</gold>, I have built over 3 years of experience in <pink>Logistics</pink>. I deeply understand customs procedures and international freight forwarding.",
      },
      {
        vi: "Tôi luôn chú trọng vào sự <gold>chính xác</gold> và <pink>hiệu quả</pink> trong mỗi lô hàng, đảm bảo tiến độ và chi phí tối ưu nhất cho doanh nghiệp.",
        en: "I focus on <gold>accuracy</gold> and <pink>efficiency</pink> for every shipment, ensuring the best timeline and cost-effectiveness for the company.",
      },
    ],
  },
  skills: {
    sectionTag: { vi: "Năng lực", en: "Expertise" },
    heading1: { vi: "Kỹ năng", en: "Professional" },
    heading2: { vi: "Chuyên môn", en: "Skills" },
    proficiency: { vi: "Mức độ thuần thục", en: "Proficiency Level" },
    items: [
      {
        titleVi: "Thông quan Hải quan",
        titleEn: "Customs Clearance",
        desc: { vi: "Thành thạo phần mềm ECUS/VNACCS, áp mã HS và truyền tờ khai.", en: "Expert in ECUS/VNACCS software, HS code classification, and declaration." },
        progress: 95,
        color: "#D4AF37",
        emoji: "📑",
      },
      {
        titleVi: "Chứng từ XNK",
        titleEn: "Import-Export Docs",
        desc: { vi: "Xử lý Bill, Invoice, Packing List, C/O và các loại giấy phép.", en: "Managing Bills of Lading, Invoices, Packing Lists, C/O, and licenses." },
        progress: 90,
        color: "#E8C5C5",
        emoji: "🚢",
      },
      {
        titleVi: "Quản lý Chuỗi cung ứng",
        titleEn: "Supply Chain Management",
        desc: { vi: "Tối ưu hóa kho bãi và điều phối vận chuyển nội địa/quốc tế.", en: "Optimizing warehousing and coordinating domestic/international transport." },
        progress: 85,
        color: "#D4AF37",
        emoji: "🌐",
      },
      {
        titleVi: "Tin học & Ngoại ngữ",
        titleEn: "IT & Languages",
        desc: { vi: "Chứng chỉ Tiếng Anh chuyên ngành Logistics. Chứng chỉ Tin học văn phòng MOS.", en: "English certificate for Logistics. Microsoft Office Specialist (MOS)." },
        progress: 90,
        color: "#E8C5C5",
        emoji: "🎓",
      },
    ],
  },
  experience: {
    sectionTag: { vi: "Lộ trình", en: "Timeline" },
    heading1: { vi: "Kinh nghiệm", en: "Work" },
    heading2: { vi: "Làm việc", en: "History" },
    items: [
      {
        period: "2023 — Hiện tại",
        role: { vi: "Chuyên viên Logistics Cao cấp", en: "Senior Logistics Specialist" },
        company: { vi: "Công ty Test", en: "Test Company" },
        companyType: { vi: "Dịch vụ Vận tải & Chuỗi cung ứng", en: "Logistics & Supply Chain Services" },
        tags: ["Management", "Strategy", "Operations"],
        accent: "#D4AF37",
        bullets: [
          { vi: "Quản lý và điều phối các dự án logistics trọng điểm, tối ưu hóa quy trình vận hành và giảm thiểu 15% chi phí vận chuyển.", en: "Managing and coordinating key logistics projects, optimizing operational processes and reducing transport costs by 15%." },
          { vi: "Xây dựng mối quan hệ chiến lược với các đối tác vận tải và nhà cung cấp dịch vụ quốc tế.", en: "Building strategic relationships with transport partners and international service providers." },
        ],
      },
      {
        period: "2019 — 2023",
        role: { vi: "Sinh viên Kinh doanh Quốc tế", en: "International Business Student" },
        company: { vi: "Đại học Kinh tế TP.HCM (UEH)", en: "University of Economics HCMC (UEH)" },
        companyType: { vi: "Chương trình đào tạo chính quy", en: "Formal Education Program" },
        tags: ["Education", "UEH", "International Business"],
        accent: "#E8C5C5",
        bullets: [
          { vi: "Tốt nghiệp chuyên ngành Kinh doanh Quốc tế với nền tảng kiến thức vững chắc về thương mại và chuỗi cung ứng toàn cầu.", en: "Graduated in International Business with solid knowledge of global trade and supply chain." },
          { vi: "Tham gia các đồ án thực tế về tối ưu hóa quy trình xuất nhập khẩu và phân tích thị trường logistics.", en: "Participated in projects on optimizing import-export processes and logistics market analysis." },
        ],
      },
    
    ],
  },
  contact: {
    sectionTag: { vi: "Kết nối", en: "Get in Touch" },
    heading: { vi: "Bạn có dự án mới?\nHãy thảo luận ngay", en: "Have a project?\nLet's talk." },
    description: {
      vi: "Tôi luôn sẵn sàng cho những cơ hội hợp tác mới trong lĩnh vực Logistics. Hãy liên hệ với tôi qua các kênh dưới đây.",
      en: "I'm always open to new collaboration opportunities in Logistics. Feel free to reach out through the channels below.",
    },
    cta: { vi: "Gửi Email cho tôi", en: "Send me an Email" },
    rows: [
      {
        icon: "💬",
        label: { vi: "Điện thoại & Zalo", en: "Phone & Zalo" },
        value: "0964 034 267",
        href: "https://zalo.me/0964034267",
        desc: { vi: "Gọi điện hoặc nhắn tin Zalo", en: "Call or message via Zalo" },
      },
      {
        icon: "✉️",
        label: "Email",
        value: "nguyen.thao@email.com",
        href: "mailto:nguyen.thao@email.com",
        desc: { vi: "Tôi thường phản hồi trong vòng 24h", en: "I usually reply within 24 hours" },
      },
      {
        icon: "🔗",
        label: "LinkedIn",
        value: "",
        href: "",
        desc: { vi: "Mạng lưới chuyên nghiệp", en: "Professional network" },
      },
    ],
  },
  footer: {
    copyright: { vi: "Bản quyền thuộc về Nguyễn Thảo", en: "All Rights Reserved" },
    subtitle: { vi: "", en: "" },
    location: { vi: "TP. Hồ Chí Minh, Việt Nam", en: "Ho Chi Minh City, VN" },
  },
};

export function resolve(obj: any, lang: "vi" | "en") {
  if (typeof obj === "string") return obj;
  return obj[lang];
}
