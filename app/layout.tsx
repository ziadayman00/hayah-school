import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "مدرسة حياة - تعليم متميز ومستدام",
  description: "مدرسة حياة - نبني مستقبلًا أخضر من خلال تعليم متميز يجمع بين الأصالة والحداثة مع التزام كامل بالاستدامة البيئية",
  keywords: "مدرسة حياة, تعليم, استدامة بيئية, مدرسة خضراء, تعليم متميز",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}