import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "התרומה עברה. תודה. · יום האחדות",
  description: "קבלה בדרך אליכם. הנה לאן הולכת התרומה, ועוד שני דברים קטנים שעוזרים.",
  robots: { index: false },
};

// Contact details and links as they appear in the design. TODO: confirm the
// real phone number and point the two CTAs at their pages.
const CONTACT = {
  email: "info@unity-day.org.il",
  phone: "03-1234567",
  phoneDial: "+97231234567",
  hours: "א׳–ה׳, 9:00–17:00",
};
const MONTHLY_HREF = "/donate";
const MATCH_HREF = "#";

const SITE_URL = "https://unity-day.org.il";
const SHARE_TEXT =
  "הרגע תרמתי ליום האחדות. הם מחברים בין אנשים מכל קצוות החברה הישראלית סביב רעיון אחד: אחדות. שווה הצצה: unity-day.org.il";

// Right to left, as they sit in the design.
const SHARE_LINKS = [
  {
    label: "לינקדאין",
    icon: "/thank-you/icon-linkedin.svg",
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SITE_URL)}`,
  },
  {
    label: "מייל",
    icon: "/thank-you/icon-mail.svg",
    href: `mailto:?subject=${encodeURIComponent("יום האחדות")}&body=${encodeURIComponent(SHARE_TEXT)}`,
  },
  {
    label: "וואטסאפ",
    icon: "/thank-you/icon-whatsapp.svg",
    href: `https://wa.me/?text=${encodeURIComponent(SHARE_TEXT)}`,
  },
];

export default function ThankYouPage() {
  return (
    <>
      <SiteHeader />

      <main id="main" tabIndex={-1}>
        <section className={styles.hero}>
          <Image src="/thank-you/hero.jpg" alt="" fill priority sizes="100vw" className={styles.heroImage} />
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>התרומה עברה. תודה.</h1>
            <p className={styles.heroLead}>
              קבלה בדרך אליכם. אם היא לא הגיעה תוך עשר דקות, בדקו בתיקיית הספאם או כתבו לנו למייל
              ליצירת קשר.
            </p>
          </div>
        </section>

        {/* ---------- where the money goes ---------- */}
        <section className={styles.money} aria-labelledby="money-title">
          <div className={styles.heartHand} aria-hidden="true">
            <Image src="/thank-you/heart-hand-1.svg" alt="" width={273.52} height={195.832} />
            <Image src="/thank-you/heart-hand-2.svg" alt="" width={275.891} height={198.171} />
            <Image src="/thank-you/heart-hand-3.svg" alt="" width={274.391} height={196.67} />
          </div>
          <div className={styles.inner}>
            <div className={styles.moneyIntro}>
              <h2 id="money-title" className={styles.moneyTitle}>
                לאן הולכת התרומה שלכם?
              </h2>
              <p className={styles.moneyLead}>
                אף אחד לא אוהב לתרום לקופסה שחורה, אז הנה הגרסה הקצרה: 92% מכל תרומה הולכים ישירות
                למימון פעילויות האחדות שלנו. ה-8% שנשארו משלמים על הצוות, השכירות והמערכות שבלעדיהם
                התוכנית פשוט לא רצה.
              </p>
            </div>

            <div className={styles.splitBar} role="img" aria-label="92% לפעילויות האחדות, 8% לתפעול">
              <div className={styles.segMinor}>8%</div>
              <div className={styles.segMajor}>
                <span className={styles.segMajorNum}>92%</span>
                <span className={styles.segMajorCap}>ישירות לפעילויות האחדות</span>
              </div>
            </div>

            <div className={styles.miniCards}>
              <div className={`${styles.miniCard} ${styles.miniCardDark}`}>
                <span className={styles.miniMark} aria-hidden="true" />
                <div className={styles.miniText}>
                  <h3>8% · שומרים על הגלגלים</h3>
                  <p>צוות, שכירות ומערכות. הבסיס השקט שבלעדיו התוכנית פשוט לא רצה.</p>
                </div>
              </div>
              <div className={`${styles.miniCard} ${styles.miniCardGold}`}>
                <span className={styles.miniMark} aria-hidden="true" />
                <div className={styles.miniText}>
                  <h3>92% · אל הפעילות</h3>
                  <p>מפגשים, אירועים, ערכות חינוכיות ותוכניות בשטח — כל מה שהופך אחדות ממילה למעשה.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- two things that help ---------- */}
        <section className={styles.help} aria-labelledby="help-title">
          <div className={styles.helpIntro}>
            <h2 id="help-title" className={styles.helpTitle}>
              עוד שני דברים שעוזרים
            </h2>
            <p className={styles.helpLead}>
              כבר תרמתם, וזה מספיק לגמרי. אבל אם בא לכם לעשות עוד - יש שתי דרכים קטנות עם השפעה
              גדולה.
            </p>
          </div>

          <div className={styles.helpBody}>
            <div className={styles.helpGrid}>
              <article className={`${styles.helpCard} ${styles.helpCardBlue}`}>
                <span className={styles.chip} aria-hidden="true" />
                <p className={styles.kicker}>חמש דקות, שווה כפול</p>
                <h3 className={styles.helpCardTitle}>לבדוק אם מקום העבודה שלכם מכפיל</h3>
                <p className={styles.helpCardText}>
                  הרבה חברות מכפילות תרומות של עובדים, ורוב האנשים בכלל לא יודעים על זה. לוקח בערך
                  חמש דקות לבדוק את זה בפורטל של משאבי אנוש.
                </p>
                <a href={MATCH_HREF} className={styles.cta}>
                  <Image src="/thank-you/icon-arrow.svg" alt="" width={16} height={16} />
                  לבדוק אם אצלכם
                </a>
              </article>
              <article className={`${styles.helpCard} ${styles.helpCardGold}`}>
                <span className={styles.chip} aria-hidden="true" />
                <p className={styles.kicker}>הכי משמעותי בשבילנו</p>
                <h3 className={styles.helpCardTitle}>להפוך את זה לחודשי</h3>
                <p className={styles.helpCardText}>
                  תרומות חודשיות הן אלה שאפשר לתכנן סביבן שנה שלמה. גם תרומה חודשית קטנה שווה לנו
                  יותר מתרומה חד-פעמית גדולה — פשוט כי אנחנו יודעים שהיא מגיעה.
                </p>
                <a href={MONTHLY_HREF} className={styles.cta}>
                  <Image src="/thank-you/icon-arrow.svg" alt="" width={16} height={16} />
                  לעבור להוראת קבע
                </a>
              </article>
            </div>

            <div className={styles.share}>
              <div className={styles.shareText}>
                <p className={styles.shareKicker}>
                  להעביר הלאה
                  <Image src="/thank-you/icon-share.svg" alt="" width={16} height={16} />
                </p>
                <h3 className={styles.shareTitle}>הדבר הכי זול שאפשר לעשות למען אחדות</h3>
                <p className={styles.shareLead}>
                  שיתוף אחד שווה לפעמים תורם חדש. הנה טקסט מוכן מראש — רק ללחוץ ולשלוח.
                </p>
              </div>
              <div className={styles.shareBox}>
                <p className={styles.shareMessage}>{SHARE_TEXT}</p>
                <ul className={styles.shareLinks}>
                  {SHARE_LINKS.map((s) => (
                    <li key={s.label}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className={styles.shareLink}>
                        {s.label}
                        <Image src={s.icon} alt="" width={18} height={18} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- something wrong ---------- */}
        <section className={styles.contact} aria-labelledby="contact-title">
          <div className={styles.contactCard}>
            <div className={styles.contactText}>
              <h2 id="contact-title" className={styles.contactTitle}>
                משהו לא בסדר בתרומה?
              </h2>
              <p className={styles.contactLead}>
                קבלה שלא הגיעה, סכום שגוי, או הוראת קבע שרוצים לשנות או לבטל — אנחנו כאן בשביל זה.
                כתבו לנו או התקשרו, ונטפל בזה.
              </p>
              <p className={styles.contactNote}>
                בדרך כלל עונים תוך יום עסקים אחד.
                <Image src="/thank-you/icon-clock.svg" alt="" width={18} height={18} />
              </p>
            </div>
            <ul className={styles.contactRows}>
              <li>
                <a href={`mailto:${CONTACT.email}`} className={styles.contactRow}>
                  <span className={styles.contactIcon}>
                    <Image src="/thank-you/icon-contact-mail.svg" alt="" width={22} height={22} />
                  </span>
                  <span className={styles.contactValue}>
                    <span className={styles.contactLabel}>כתבו לנו</span>
                    <span dir="ltr">{CONTACT.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneDial}`} className={styles.contactRow}>
                  <span className={styles.contactIcon}>
                    <Image src="/thank-you/icon-contact-phone.svg" alt="" width={22} height={22} />
                  </span>
                  <span className={styles.contactValue}>
                    <span className={styles.contactLabel}>{CONTACT.hours}</span>
                    <span dir="ltr">{CONTACT.phone}</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
