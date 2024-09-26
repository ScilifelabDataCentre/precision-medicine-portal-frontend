import { BODY_CLASSES } from "@/constants";
import "../globals.css";
import AboutPageComponent from "@/components/AboutPageComponent";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={BODY_CLASSES}>
        <AboutPageComponent />
        {children}
    </div>
  );
}
