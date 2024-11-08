import type { Metadata } from "next";
import "./globals.css";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import React from "react";

export const metadata: Metadata = {
  title: "Precision Medicine Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeaderComponent />
        <main className="2xl:max-w-screen-2xl 2xl:mx-auto">{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
