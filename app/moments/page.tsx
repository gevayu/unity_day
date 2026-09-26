import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MomentsArchive from "./MomentsArchive";
import { MOMENTS } from "./data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ככה נראית אחדות · יום האחדות",
  description:
    "הצצה לאירועים, למפגשים וליוזמות שהפכו את יום האחדות מרעיון למציאות.",
};

export default function MomentsPage() {
  return (
    <>
      <SiteHeader />

      <main id="main" tabIndex={-1}>
        <section className={styles.hero}>
          <Image
            src="/gallery/photo-5.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span>ככה נראית אחדות</span>
              <span>כשהיא קורה באמת</span>
            </h1>
            <div className={styles.heroBody}>
              <p className={styles.heroText}>
                הצצה לאירועים, למפגשים וליוזמות שהפכו את יום האחדות מרעיון למציאות - עם אנשים,
                קהילות ורגעים שמוכיחים שביחד זה לא רק רעיון טוב. זה משהו שעושים.
              </p>
              <blockquote className={styles.quote}>
                <span className={styles.quoteMark} aria-hidden="true">
                  &quot;
                </span>
                <p>יש רגעים שצריך להיות בהם כדי להרגיש.</p>
              </blockquote>
              <p className={styles.heroText}>
                מפגש בין אנשים שלא היו נפגשים ביום רגיל, אולם שמתמלא בקולות של דיאלוג, רחוב שהופך
                לחגיגה, יוזמה קטנה שהופכת לאירוע גדול - ורגעים שבהם פתאום מרגישים כמה כוח יש לנו
                כשאנחנו ביחד. כאן תוכלו לחוות את אותם רגעים בלתי נשכחים, כפי שהם נראו ונשמעו לאורך
                השנים - באירועים, בתמונות, בסרטונים ובסיפורים שהפכו את יום האחדות למה שהוא היום.
              </p>
            </div>
          </div>
        </section>

        <MomentsArchive moments={MOMENTS} />
      </main>

      <SiteFooter />
    </>
  );
}
