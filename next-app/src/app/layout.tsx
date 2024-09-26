import type { Metadata } from "next";
import "./globals.css";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import { initiateTrackingCookie } from "@/util/cookiesHandling";

export const metadata: Metadata = {
  title: "Precision Medicine Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  initiateTrackingCookie();
  return (
    <html lang="en">
      <body>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
