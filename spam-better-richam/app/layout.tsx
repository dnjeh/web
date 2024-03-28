import type { Metadata } from "next";
import { Nanum_Gothic_Coding } from "next/font/google";
import "./globals.css";

const nanum = Nanum_Gothic_Coding({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "스팸-더나은-리챔",
  description: "프론트 1차 과제",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nanum.className}>
      <body className="w-[100vw] h-[100vh] bg-amber-200">{children}</body>
    </html>
  );
}
