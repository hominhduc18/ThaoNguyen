import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LangProvider } from "@/contexts/LanguageContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nguyễn Thảo | Logistics & Supply Chain Professional",
  description:
    "Portfolio cá nhân của Nguyễn Thảo – Chuyên gia Logistics & Supply Chain, xuất nhập khẩu, vận tải quốc tế, hải quan tại TP. Hồ Chí Minh, Việt Nam.",
  keywords: ["Nguyễn Thảo", "Logistics", "Supply Chain", "Xuất nhập khẩu", "Hải quan"],
  authors: [{ name: "Nguyễn Thảo" }],
  creator: "Nguyễn Thảo",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    title: "Nguyễn Thảo | Logistics & Supply Chain Professional",
    description: "Chuyên gia Logistics & Supply Chain tại TP. Hồ Chí Minh.",
    siteName: "Nguyễn Thảo Portfolio",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${cormorant.variable} ${inter.variable}`} data-theme="dark">
      <body className={`${inter.className} noise-overlay`}>
        <ThemeProvider>
          <LangProvider>
            {children}
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
