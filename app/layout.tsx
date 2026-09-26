import type { Metadata } from "next";
import { Outfit, Rubik } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Polin is the design font (licensed; the files are self-hosted from app/fonts).
const polin = localFont({
  src: [
    { path: "./fonts/Polin-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Polin-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Polin-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Polin-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Polin-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Polin-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-polin",
  display: "swap",
});

// Fallback only, for any glyph Polin lacks; not preloaded.
const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
  preload: false,
});

// Only used for the oversized quote mark on /moments.
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "יום האחדות",
  description: "יום האחדות, לזכר שלושת הנערים",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${polin.variable} ${rubik.variable} ${outfit.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          דלג לתוכן הראשי
        </a>
        {children}
      </body>
    </html>
  );
}
