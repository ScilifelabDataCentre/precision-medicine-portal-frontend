import "../globals.css";
import AboutPageComponent from "@/components/AboutPageComponent";
import { LastUpdated } from "@/components/common/last-updated";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AboutPageComponent />
      {children}
      <LastUpdated date="11-11-2024" />
    </div>
  );
}
