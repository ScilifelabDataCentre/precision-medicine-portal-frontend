import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

const latoSans = localFont({
  src: "../../fonts/Lato-Regular.ttf", 
  weight: "100 900",
});

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
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
