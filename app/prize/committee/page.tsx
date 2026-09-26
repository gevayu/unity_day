import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MembersCarousel from "./MembersCarousel";
import { MEMBERS } from "./members";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ועדת הפרס · פרס ירושלים לאחדות ישראל",
  description:
    "מאחורי כל זוכה בפרס ירושלים לאחדות ישראל עומדת ועדה של אנשים ונשים מתחומי החינוך, הציבור, האקדמיה, המשפט והחברה האזרחית.",
};

export default function CommitteePage() {
  return (
    <>
      <SiteHeader />

      <main id="main" tabIndex={-1}>
        <section className={styles.hero}>
          <Image src="/committee/hero.jpg" alt="" fill priority sizes="100vw" className={styles.heroBg} />
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>ועדת הפרס</h1>
              <p className={styles.heroLead}>
                מאחורי כל זוכה בפרס ירושלים לאחדות ישראל עומדת ועדה של אנשים ונשים מתחומי החינוך,
                הציבור, האקדמיה, המשפט והחברה האזרחית, שבחרו להקדיש מזמנם כדי לקרוא כל מועמדות,
                לבחון כל יוזמה ולהכריע יחד. הם מגיעים מעולמות שונים, ולעיתים גם מעמדות שונות, וזה
                בדיוק העניין. ההרכב המגוון הזה הוא עצמו אמירה על מה שהפרס מבקש לקדם.
              </p>
            </div>
            <div className={styles.heroPhoto}>
              <Image
                src="/committee/hero.jpg"
                alt="שני צעירים מחליפים ביניהם מתנה ליד חומה עתיקה"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 681px"
              />
            </div>
          </div>
        </section>

        <MembersCarousel members={MEMBERS} />
      </main>

      <SiteFooter />
    </>
  );
}
