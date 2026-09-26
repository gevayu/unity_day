import type { Metadata } from "next";

// /lab: design explorations kept apart from the site. Nothing on the site
// links here, and search engines are told to stay out.
export const metadata: Metadata = {
  title: {
    default: "מעבדת עיצוב · יום האחדות",
    template: "%s · מעבדת עיצוב · יום האחדות",
  },
  robots: { index: false, follow: false },
};

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return children;
}
