import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "folio. — Resume Studio", description: "Build a resume that opens doors. A thoughtful, live resume builder with beautiful templates and easy PDF export." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
