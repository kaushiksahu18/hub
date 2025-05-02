import type React from "react";
import { FloatingNavbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FloatingNavbar>
      {children}
      <Footer />
    </FloatingNavbar>
  );
}
