import type { Metadata } from "next";
import "./globals.css";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import React from "react";
import MatomoInit from "@/components/MatomoInit";

export const metadata: Metadata = {
  title: "Precision Medicine Portal",
  description:
    "Service for researchers in the precision medicine field, designed to support and accelerate data-driven life science research in Sweden",
  openGraph: {
    title: "Precision Medicine Portal",
    description:
      "Service for researchers in the precision medicine field, designed to support and accelerate data-driven life science research in Sweden",
    url: "https://precision-medicine-portal.scilifelab.se",
    siteName: "Precision Medicine Portal",
    images: [
      {
        url: "https://precision-medicine-portal.scilifelab.se/SciLifeLab%20logo/metalogo.png",
        width: 1200,
        height: 628,
        alt: "Precision Medicine Portal Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MatomoInit></MatomoInit>
        <HeaderComponent />
        <main className="2xl:max-w-screen-2xl 2xl:mx-auto">{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
