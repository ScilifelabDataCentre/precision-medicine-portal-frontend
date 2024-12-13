import "../globals.css";
import AboutPageComponent from "@/components/AboutPageComponent";
import { LastUpdated } from "@/components/common/last-updated";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto px-4 py-8">
      <AboutPageComponent />
      {children}
      <LastUpdated date="04-12-2024" />
    </div>
  );
}
