import { Heebo } from "next/font/google";

// The donation frame sets its figures (the ₪500 total, step numbers, bank
// details, currency tags, contact chips) in Heebo, a free Google font, so only
// this page loads it. Everything else stays on the site font (Polin → Rubik).
export const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-heebo",
  display: "swap",
});
