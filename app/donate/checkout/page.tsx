import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CheckoutForm from "./CheckoutForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "השלמת התרומה · יום האחדות",
  description: "עוד רגע וסיימנו. כל הפרטים מוצפנים ומאובטחים - אין צורך בפתיחת חשבון.",
  robots: { index: false },
};

export default function CheckoutPage() {
  return (
    <>
      {/* The checkout frame is distraction-free: the header keeps only the status
          bar and the logo, and the footer drops its sitemap (see page.module.css). */}
      <div className={styles.minimalHeader}>
        <SiteHeader />
      </div>

      <main>
        <section className={styles.hero}>
          <Image src="/gallery/hero.jpg" alt="" fill priority sizes="100vw" className={styles.heroImage} />
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>השלמת התרומה</h1>
            <p className={styles.heroLead}>
              עוד רגע וסיימנו. כל הפרטים מוצפנים ומאובטחים - אין צורך בפתיחת חשבון.
            </p>
          </div>
        </section>

        <section className={styles.checkout} aria-labelledby="checkout-title">
          <h2 id="checkout-title" className="sr-only">
            פרטי התרומה והתשלום
          </h2>
          <CheckoutForm />
        </section>
      </main>

      <div className={styles.compactFooter}>
        <SiteFooter />
      </div>
    </>
  );
}
