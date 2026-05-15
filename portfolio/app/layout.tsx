import type { Metadata } from "next";
import { Syne, Instrument_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nguyễn Thảo | Logistics & Supply Chain Professional",
  description:
    "Portfolio cá nhân của Nguyễn Thảo – Chuyên gia Logistics & Supply Chain, xuất nhập khẩu, vận tải quốc tế, hải quan tại TP. Hồ Chí Minh, Việt Nam.",
  keywords: [
    "Nguyễn Thảo",
    "Logistics",
    "Supply Chain",
    "Xuất nhập khẩu",
    "Hải quan",
    "Vận tải quốc tế",
    "Ho Chi Minh City",
  ],
  authors: [{ name: "Nguyễn Thảo" }],
  creator: "Nguyễn Thảo",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    title: "Nguyễn Thảo | Logistics & Supply Chain Professional",
    description:
      "Chuyên gia Logistics & Supply Chain, xuất nhập khẩu, vận tải quốc tế tại TP. Hồ Chí Minh.",
    siteName: "Nguyễn Thảo Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${syne.variable} ${instrumentSans.variable}`}
    >
      <body className={`${instrumentSans.className} noise-overlay`}>
        {children}
      </body>
    </html>
  );
}
