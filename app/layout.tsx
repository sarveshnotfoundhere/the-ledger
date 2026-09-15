import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./editorial.css";
import "./neon-green.css";
import "./accounting-experience.css";
import "./topic11.css";
import "./globals-topic-pages.css";
import "./page-topic.css";
import "./case-files/case-styles.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "THE LEDGER — Recent Innovations in Accounting Technologies",
  description: "Digital Accounting · CIA 3 · Topic 11 — an interactive presentation on recent innovations in accounting technologies.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
