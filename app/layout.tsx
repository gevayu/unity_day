import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

// Polin is the design font. It's commercial, so it isn't bundled here:
// if it's installed (or added via next/font/local) it wins, otherwise Rubik.
const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "יום האחדות",
  description: "יום האחדות, לזכר שלושת הנערים",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={rubik.variable}>
      <body>{children}</body>
    </html>
  );
}
