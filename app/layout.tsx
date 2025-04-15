
import type { Metadata } from "next";
import { Be_Vietnam_Pro,Crimson_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from 'react-hot-toast'
import RootLayouts from "./RootLayouts";
import Script from "next/script";
import GoogleAnalytics from "./GoogleAnalytics";

const BeVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ["400", "500", "600", "700", "800", "900"]
});

const CrimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: '--font-CrimsonPro',
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Quizzy Social Gallery",
  description: "Quizzy Social Gallery là dự án nhằm cung cấp những bộ tài liệu và sản phẩm trong lĩnh vực Social Media Marketing được biên soạn kỹ lưỡng và thực tế dựa trên những kiến thức, kinh nghiệm của cá nhân mình sau gần 3 năm làm việc cho các doanh nghiệp, khách hàng trong và ngoài nước.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="dark">
      {/* <Script disable-devtool-auto src='https://cdn.jsdelivr.net/npm/disable-devtool'></Script> */}
      {/* {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
        <GoogleAnalytics ga_id=
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      ) : null} */}
      <body className={`${BeVietnamPro.className} bg-white`}>
        <RootLayouts>
          <div>  <Toaster position="bottom-center" reverseOrder={false} /></div>
          {children}
        </RootLayouts>
      </body>
    </html>
  );
}
