import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "folio. Resume Studio",
  title: "folio. — Resume Studio",
  description:
    "Build a resume that opens doors. Choose a design, make the colors yours, and export a clean PDF.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/folio-icon.svg",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    title: "folio.",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6044c8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
