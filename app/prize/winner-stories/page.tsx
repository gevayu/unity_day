import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WinnerStories from "./WinnerStories";
import { STORIES } from "./data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "האנשים מאחורי העשייה · יום האחדות",
  description:
    "פרס 'אחדות ישראל' מעניק הכרה לאנשים, לארגונים וליוזמות שהופכים את רעיון האחדות לעשייה שמשנה מציאות.",
};

export default function WinnerStoriesPage() {
  return (
    <>
      <SiteHeader />

      <main id="main" tabIndex={-1}>
        <section className={styles.hero}>
          <Image
            src="/winner-stories/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>האנשים מאחורי העשייה</h1>
            <p className={styles.heroLead}>
              פרס &apos;אחדות ישראל&apos; מעניק הכרה לאנשים, לארגונים וליוזמות שהופכים את רעיון
              האחדות לעשייה שמשנה מציאות.
            </p>
          </div>
        </section>

        <section className={styles.intro} aria-label="על הזוכים">
          <div className={styles.introText}>
            <p className={styles.introLead}>
              &quot;יום האחדות&quot; הוא אירוע הדגל המציב את העשייה המשותפת במרכז הבמה.
            </p>
            <p>
              לאורך השנה נולדות יוזמות שמחברות בין אנשים וקהילות - באמצעות חינוך, עשייה מקומית, שיח,
              מנהיגות וקשרים בין ישראל ליהדות התפוצות.
            </p>
            <p>
              לפניכם מבחר סיפורים של זוכים מהשנים האחרונות: אנשים, ארגונים ויוזמות שהעזו להוביל, לפעול
              ולחולל שינוי. הם לא המתינו שהמציאות תשתנה; הם בחרו להיות אלו שמשנים אותה, ולהוכיח שאחדות
              אינה רק חזון, אלא כוח המסוגל להפוך את החברה שלנו לטובה יותר.
            </p>
          </div>
        </section>

        <section className={styles.winners} aria-label="סיפורי הזוכים">
          <WinnerStories stories={STORIES} />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
