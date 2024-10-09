import { BODY_CLASSES } from "@/constants";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={BODY_CLASSES}>{children}</div>;
}
