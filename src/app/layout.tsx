import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "날씨 앱",
  description: "날씨앱 알려드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
