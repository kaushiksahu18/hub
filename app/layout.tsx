import type React from "react";
import { memo } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Course Registration Platform",
  description: "Register for dancing, singing, and gym courses",
};

const HeaderMemo = memo(Header);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="main" className="w-full h-screen relative">
          <HeaderMemo />
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
