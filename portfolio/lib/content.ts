export type Lang = "vi" | "en";
export type T = { vi: string; en: string };

export const t = (obj: T, lang: Lang) => obj[lang];

export const content = {
  nav: {
    links: [
      { label: { vi: "Giới thiệu", en: "About" }, href: "#about" },
      { label: { vi: "Kỹ năng", en: "Skills" }, href: "#skills" },
      { label: { vi: "Kinh nghiệm", en: "Experience" }, href: "#experience" },
    ],
    cta: { vi: "Liên hệ", en: "Contact" },
  },

  hero: {
    badge: { vi: "Đang tìm kiếm cơ hội mới", en: "Open to New Opportunities" },
    role: { vi: "Logistics & Supply Chain Professional", en: "Logistics & Supply Chain Professional" },
    description: {
      vi: "Chuyên gia xuất nhập khẩu, vận tải quốc tế và thông quan hải quan với hơn 3 năm kinh nghiệm thực tiễn tại TP. Hồ Chí Minh. Cam kết mang lại giải pháp logistics tối ưu, chính xác và hiệu quả.",
      en: "Import/export specialist, international freight and customs clearance professional with 3+ years of hands-on experience in Ho Chi Minh City. Committed to delivering precise, efficient logistics solutions.",
    },
    cta1: { vi: "✦ Liên hệ ngay", en: "✦ Get in Touch" },
    cta2: { vi: "Xem kinh nghiệm →", en: "View Experience →" },
    location: { vi: "TP. Hồ Chí Minh, Việt Nam", en: "Ho Chi Minh City, Vietnam" },
    stats: [
      { value: "3+", label: { vi: "Năm kinh nghiệm", en: "Years Exp." }, sub: { vi: "Kinh nghiệm", en: "Experience" } },
      { value: "50+", label: { vi: "Lô hàng", en: "Shipments" }, sub: { vi: "Quốc tế", en: "International" } },
      { value: "15+", label: { vi: "Đối tác", en: "Partners" }, sub: { vi: "Doanh nghiệp", en: "Businesses" } },
      { value: "100%", label: { vi: "Tận tâm", en: "Dedicated" }, sub: { vi: "Cam kết", en: "Committed" } },
    ],
  },

  about: {
    sectionTag: { vi: "— Về tôi", en: "— About Me" },
    heading1: { vi: "Xin chào, tôi là", en: "Hello, I'm" },
    infoCards: [
      { icon: "👤", label: { vi: "Họ tên", en: "Full Name" }, value: "Nguyễn Thảo" },
      { icon: "🎂", label: { vi: "Ngày sinh", en: "Date of Birth" }, value: "25 / 02 / 2001" },
      { icon: "🚢", label: { vi: "Lĩnh vực", en: "Field" }, value: "Logistics & Supply Chain" },
      { icon: "📍", label: { vi: "Địa điểm", en: "Location" }, value: { vi: "TP. Hồ Chí Minh, VN", en: "Ho Chi Minh City, VN" } },
      { icon: "🌐", label: { vi: "Ngôn ngữ", en: "Languages" }, value: { vi: "Tiếng Việt · English", en: "Vietnamese · English" } },
    ],
    bio: [
      {
        vi: `Tôi là <pink>Nguyễn Thảo</pink>, một chuyên gia Logistics & Supply Chain trẻ với niềm đam mê mãnh liệt với thương mại quốc tế và tối ưu hóa chuỗi cung ứng. Được đào tạo bài bản và tích lũy hơn <gold>3 năm kinh nghiệm thực tiễn</gold>, tôi hiểu sâu sắc về quy trình xuất nhập khẩu, thủ tục hải quan và vận tải đa phương thức.`,
        en: `I am <pink>Nguyễn Thảo</pink>, a young Logistics & Supply Chain professional with a strong passion for international trade and supply chain optimization. With thorough academic training and over <gold>3 years of hands-on experience</gold>, I have deep expertise in import/export processes, customs procedures, and multimodal transportation.`,
      },
      {
        vi: `Tôi có khả năng xử lý toàn bộ quy trình từ <pink>đặt hàng, lập kế hoạch vận chuyển, khai báo hải quan đến giao nhận hàng hóa</pink> — đảm bảo đúng thời hạn, đúng chi phí và tuân thủ pháp lý. Tôi luôn cập nhật xu hướng công nghệ logistics để mang lại hiệu quả tối ưu cho doanh nghiệp.`,
        en: `I am capable of managing the entire workflow from <pink>purchase orders, shipment planning, customs declaration to cargo delivery</pink> — ensuring on-time delivery, cost efficiency, and full legal compliance. I continuously update my knowledge of logistics technologies to bring optimal performance to the business.`,
      },
      {
        vi: `Điểm mạnh của tôi không chỉ là kiến thức chuyên môn mà còn là <gold>tư duy phân tích, tinh thần trách nhiệm cao và khả năng làm việc nhóm hiệu quả</gold>. Tôi đang tìm kiếm môi trường làm việc năng động để tiếp tục phát triển và đóng góp vào sự tăng trưởng bền vững của tổ chức.`,
        en: `My strengths go beyond technical knowledge — I bring <gold>analytical thinking, a high sense of responsibility, and effective teamwork skills</gold>. I am seeking a dynamic work environment where I can continue to grow and contribute to sustainable organizational success.`,
      },
    ],
  },

  skills: {
    sectionTag: { vi: "— Kỹ năng", en: "— Skills" },
    heading1: { vi: "Chuyên môn", en: "Core" },
    heading2: { vi: "nổi bật", en: "Expertise" },
    proficiency: { vi: "Thành thạo", en: "Proficiency" },
    items: [
      {
        emoji: "🚢",
        titleEn: "Freight Management",
        titleVi: "Quản lý Vận tải",
        desc: {
          vi: "Điều phối vận tải biển, hàng không và đường bộ. Lựa chọn hãng tàu, booking và theo dõi lô hàng quốc tế.",
          en: "Coordinating sea, air and road freight. Carrier selection, booking and tracking international shipments end-to-end.",
        },
        progress: 88,
        color: "#F9D0D0",
        colSpan: 1,
      },
      {
        emoji: "📋",
        titleEn: "Customs & Docs",
        titleVi: "Hải quan & Chứng từ",
        desc: {
          vi: "Khai báo hải quan điện tử (VNACCS), chuẩn bị C/O, B/L, Invoice, Packing List và các chứng từ xuất nhập khẩu.",
          en: "Electronic customs declaration (VNACCS), preparation of C/O, B/L, Commercial Invoice, Packing List and trade documents.",
        },
        progress: 92,
        color: "#D4A847",
        colSpan: 1,
      },
      {
        emoji: "🔗",
        titleEn: "Supply Chain Ops",
        titleVi: "Vận hành Chuỗi cung ứng",
        desc: {
          vi: "Lập kế hoạch nguồn cung, quản lý tồn kho, tối ưu hóa chi phí logistics và điều phối giữa các bên liên quan.",
          en: "Supply planning, inventory management, logistics cost optimization and coordination among all stakeholders in the chain.",
        },
        progress: 82,
        color: "#FADADD",
        colSpan: 2,
      },
      {
        emoji: "🤝",
        titleEn: "Vendor Relations",
        titleVi: "Quan hệ Đối tác",
        desc: {
          vi: "Đàm phán với forwarder, hãng tàu, kho bãi và các nhà cung cấp dịch vụ logistics trong và ngoài nước.",
          en: "Negotiating with freight forwarders, shipping lines, warehouses and domestic/international logistics service providers.",
        },
        progress: 85,
        color: "#E8C870",
        colSpan: 1,
      },
      {
        emoji: "💻",
        titleEn: "Logistics Systems",
        titleVi: "Hệ thống Logistics",
        desc: {
          vi: "Thành thạo ERP, TMS, phần mềm hải quan ECUS, Excel nâng cao và các công cụ quản lý vận tải hiện đại.",
          en: "Proficient in ERP, TMS, ECUS customs software, advanced Excel and modern transportation management tools.",
        },
        progress: 78,
        color: "#F9D0D0",
        colSpan: 1,
      },
      {
        emoji: "🌐",
        titleEn: "Languages",
        titleVi: "Ngôn ngữ",
        desc: {
          vi: "Tiếng Việt (bản ngữ) · Tiếng Anh giao tiếp thương mại, đọc viết hợp đồng và chứng từ quốc tế lưu loát.",
          en: "Vietnamese (native) · Business English fluency: reading/writing contracts and international trade documents.",
        },
        progress: 80,
        color: "#D4A847",
        colSpan: 1,
      },
    ],
  },

  experience: {
    sectionTag: { vi: "— Kinh nghiệm", en: "— Experience" },
    heading1: { vi: "Hành trình", en: "Career" },
    heading2: { vi: "nghề nghiệp", en: "Journey" },
    items: [
      {
        period: "2023 — Nay / Present",
        role: { vi: "Điều phối Logistics", en: "Logistics Coordinator" },
        company: { vi: "Công ty TNHH Thương mại Quốc tế ABC", en: "ABC International Trading Co., Ltd." },
        companyType: { vi: "Xuất nhập khẩu · Hàng tiêu dùng", en: "Import/Export · Consumer Goods" },
        tags: ["Freight Forwarding", "Customs", "Documentation", "Vendor Mgmt"],
        tagColor: "#F9D0D0",
        bullets: [
          {
            vi: "Điều phối toàn bộ lô hàng xuất nhập khẩu đường biển và đường hàng không, đảm bảo đúng tiến độ với tỷ lệ on-time delivery đạt 96%.",
            en: "Coordinated all sea and air freight shipments, achieving a 96% on-time delivery rate across all international routes.",
          },
          {
            vi: "Chuẩn bị và kiểm tra bộ chứng từ xuất nhập khẩu: B/L, C/O, Commercial Invoice, Packing List, LC và các giấy tờ liên quan.",
            en: "Prepared and reviewed complete sets of trade documents including B/L, C/O, Commercial Invoice, Packing List, and Letters of Credit.",
          },
          {
            vi: "Khai báo hải quan điện tử (VNACCS/VCIS) và phối hợp với Chi cục Hải quan xử lý thủ tục thông quan hàng hóa.",
            en: "Filed electronic customs declarations (VNACCS/VCIS) and collaborated with customs authorities to process clearance procedures efficiently.",
          },
          {
            vi: "Đàm phán giá cước với forwarder, hãng tàu, giảm chi phí logistics xuống 12% trong năm 2024.",
            en: "Negotiated freight rates with forwarders and shipping lines, reducing overall logistics costs by 12% in 2024.",
          },
        ],
        accent: "#F9D0D0",
      },
      {
        period: "2022 — 2023",
        role: { vi: "Nhân viên Logistics", en: "Logistics Assistant" },
        company: { vi: "Công ty CP Vận tải & Giao nhận XYZ", en: "XYZ Transportation & Freight JSC" },
        companyType: { vi: "Forwarder · Vận tải đa phương thức", en: "Forwarder · Multimodal Transport" },
        tags: ["Import/Export", "Trucking", "Warehouse", "Tracking"],
        tagColor: "#D4A847",
        bullets: [
          {
            vi: "Hỗ trợ điều phối vận chuyển nội địa và quốc tế cho hơn 30 khách hàng doanh nghiệp, xử lý trung bình 15–20 lô hàng/tháng.",
            en: "Assisted in coordinating domestic and international transport for 30+ corporate clients, handling 15–20 shipments per month on average.",
          },
          {
            vi: "Theo dõi và cập nhật trạng thái hàng hóa trên hệ thống TMS, đảm bảo khách hàng nhận thông tin đầy đủ và kịp thời.",
            en: "Tracked and updated cargo status on the TMS system, ensuring clients received complete and timely shipment information.",
          },
          {
            vi: "Phối hợp với kho bãi, đội xe và hải quan để giải quyết vấn đề phát sinh trong quá trình giao nhận.",
            en: "Coordinated with warehouses, truck fleets and customs officials to resolve issues arising during cargo delivery.",
          },
          {
            vi: "Lập báo cáo vận hành hàng tuần và hàng tháng, hỗ trợ quản lý đưa ra quyết định tối ưu chi phí.",
            en: "Compiled weekly and monthly operational reports, supporting management in making cost-optimization decisions.",
          },
        ],
        accent: "#D4A847",
      },
      {
        period: "2019 — 2023",
        role: { vi: "Cử nhân Logistics", en: "Bachelor in Logistics" },
        company: { vi: "Đại học Kinh tế TP. HCM (UEH)", en: "University of Economics Ho Chi Minh City (UEH)" },
        companyType: { vi: "Giáo dục · Logistics & SCM", en: "Education · Logistics & SCM" },
        tags: ["Supply Chain", "Incoterms", "Trade Finance", "Research"],
        tagColor: "#FADADD",
        bullets: [
          {
            vi: "Tốt nghiệp ngành Logistics và Quản lý chuỗi cung ứng với GPA đạt loại Khá, chuyên ngành Xuất nhập khẩu.",
            en: "Graduated in Logistics and Supply Chain Management with Good GPA, specializing in Import/Export operations.",
          },
          {
            vi: "Hoàn thành luận văn tốt nghiệp về tối ưu hóa chuỗi cung ứng cho doanh nghiệp vừa và nhỏ tại TP. HCM.",
            en: "Completed graduation thesis on supply chain optimization for small and medium enterprises in Ho Chi Minh City.",
          },
          {
            vi: "Tham gia các khóa học bổ trợ: Incoterms 2020, UCP 600 (L/C), khai báo hải quan và quản lý kho hiện đại.",
            en: "Completed supplementary courses: Incoterms 2020, UCP 600 (L/C), customs declaration and modern warehouse management.",
          },
          {
            vi: "Hoạt động tích cực trong CLB Kinh tế – Kinh doanh, tổ chức sự kiện và kết nối doanh nghiệp với sinh viên.",
            en: "Actively participated in the Economics & Business Club, organizing events and connecting businesses with students.",
          },
        ],
        accent: "#E8C870",
      },
    ],
  },

  contact: {
    sectionTag: { vi: "— Liên hệ", en: "— Contact" },
    heading: { vi: "Hãy cùng\nlàm việc\nnhé. ✦", en: "Let's work\ntogether\nnow. ✦" },
    description: {
      vi: "Tôi luôn sẵn sàng lắng nghe về các cơ hội hợp tác mới. Dù bạn đang tìm kiếm một chuyên gia logistics hay muốn thảo luận về giải pháp chuỗi cung ứng — hãy liên hệ với tôi!",
      en: "I am always open to hearing about new collaboration opportunities. Whether you are looking for a logistics expert or want to discuss supply chain solutions — feel free to reach out!",
    },
    cta: { vi: "Gửi Email ngay", en: "Send Email Now" },
    rows: [
      {
        icon: "✉️",
        label: { vi: "Email", en: "Email" },
        value: "nguyen.thao@email.com",
        href: "mailto:nguyen.thao@email.com",
        desc: { vi: "Phản hồi trong vòng 24h", en: "Response within 24 hours" },
      },
      {
        icon: "📱",
        label: { vi: "Điện thoại", en: "Phone" },
        value: "+84 909 123 456",
        href: "tel:+84909123456",
        desc: { vi: "Thứ 2 – Thứ 6, 8:00 – 17:30", en: "Mon – Fri, 8:00 AM – 5:30 PM" },
      },
      {
        icon: "💼",
        label: "LinkedIn",
        value: "linkedin.com/in/nguyen-thao",
        href: "https://linkedin.com/in/nguyen-thao",
        desc: { vi: "Kết nối chuyên nghiệp", en: "Professional network" },
      },
      {
        icon: "📍",
        label: { vi: "Địa điểm", en: "Location" },
        value: { vi: "TP. Hồ Chí Minh, Việt Nam", en: "Ho Chi Minh City, Vietnam" },
        href: "https://maps.google.com/?q=Ho+Chi+Minh+City",
        desc: { vi: "Sẵn sàng làm việc tại HCM & remote", en: "Available in HCM City & remote" },
      },
    ],
  },

  footer: {
    copyright: { vi: "Bảo lưu mọi quyền.", en: "All rights reserved." },
    subtitle: { vi: "Thiết kế với ♥ · Logistics & Supply Chain Professional", en: "Made with ♥ · Logistics & Supply Chain Professional" },
    location: { vi: "TP. Hồ Chí Minh, Việt Nam", en: "Ho Chi Minh City, Vietnam" },
  },
} as const;

// Helper for string or T type
export function resolve(val: { vi: string; en: string } | string, lang: Lang): string {
  if (typeof val === "string") return val;
  return val[lang];
}
