import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "./ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "צור קשר · יום האחדות",
  description:
    "יש לכם שאלה, רעיון לשיתוף פעולה, או משהו שצריך תשומת לב? כתבו לנו — אנחנו קוראים כל פנייה ועונים בדרך כלל תוך יום עסקים אחד.",
};

// Contact details as they appear in the design.
const CONTACT = {
  email: "office@unityday.org.il",
  phone: "055-9590105",
  phoneDial: "+972559590105",
  hours: "א׳–ה׳, 9:00–16:00",
};

// Right to left, as they sit in the design.
// TODO: point at the real social profiles.
const SOCIAL = [
  { label: "YouTube", icon: "/contact/icon-youtube.svg", href: "#" },
  { label: "Instagram", icon: "/contact/icon-instagram.svg", href: "#" },
  { label: "Facebook", icon: "/contact/icon-facebook.svg", href: "#" },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className={styles.hero}>
          <Image src="/gallery/photo-2.jpg" alt="" fill priority sizes="100vw" className={styles.heroImage} />
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>דברו איתנו</h1>
            <div className={styles.heroLead}>
              <p>מה קורה כשאנשים בוחרים להיות יחד?</p>
              <p>
                יש לכם שאלה, רעיון לשיתוף פעולה, או משהו שצריך תשומת לב? כתבו לנו — אנחנו קוראים כל
                פנייה ועונים בדרך כלל תוך יום עסקים אחד.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.contact} aria-labelledby="intro-title">
          <div className={styles.intro}>
            <Image
              src="/contact/globe.png"
              alt=""
              width={645}
              height={461}
              sizes="323px"
              className={styles.globe}
            />
            <div className={styles.introText}>
              <h2 id="intro-title" className={styles.introTitle}>
                מסע של ביחד מתחיל כאן
              </h2>
              <div className={styles.introBody}>
                <p className={styles.introKicker}>כשהמושג אחדות מקבל פנים</p>
                <p>
                  יום האחדות הוא נקודת שיא של מפגש. הוא נולד מתוך ההבנה שבמציאות של ריחוק, חוסר ודאות
                  ואיומים משותפים, הצורך בתחושת שייכות ובקהילה חזקה הוא עמוק מתמיד - בישראל ובקהילות
                  היהודיות ברחבי העולם.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.panel}>
            <span className={styles.blob} aria-hidden="true" />
            <div className={styles.grid}>
              <div className={styles.formCol}>
                <div className={`${styles.card} ${styles.formCard}`}>
                  <h2 id="form-title" className={styles.formTitle}>
                    שלחו לנו הודעה
                  </h2>
                  <ContactForm labelledBy="form-title" />
                </div>
              </div>

              <div className={styles.detailsCol}>
                <div className={styles.card}>
                  <h2 className={styles.detailsTitle}>פרטים ישירים</h2>
                  <ul className={styles.detailRows}>
                    <li className={styles.detailRow}>
                      <span className={styles.detailIcon}>
                        <Image src="/contact/icon-mail.svg" alt="" width={22} height={22} />
                      </span>
                      <span className={styles.detailText}>
                        <span className={styles.detailLabel}>אימייל</span>
                        <a href={`mailto:${CONTACT.email}`} className={styles.detailValue} dir="ltr">
                          {CONTACT.email}
                        </a>
                      </span>
                    </li>
                    <li className={styles.detailRow}>
                      <span className={styles.detailIcon}>
                        <Image src="/contact/icon-phone.svg" alt="" width={22} height={22} />
                      </span>
                      <span className={styles.detailText}>
                        <span className={styles.detailLabel}>טלפון</span>
                        <a href={`tel:${CONTACT.phoneDial}`} className={styles.detailValue} dir="ltr">
                          {CONTACT.phone}
                        </a>
                      </span>
                    </li>
                    <li className={styles.detailRow}>
                      <span className={styles.detailIcon}>
                        <Image src="/contact/icon-clock.svg" alt="" width={22} height={22} />
                      </span>
                      <span className={styles.detailText}>
                        <span className={styles.detailLabel}>שעות מענה</span>
                        <span className={styles.detailValue}>{CONTACT.hours}</span>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className={`${styles.card} ${styles.issueCard}`}>
                  <h2 className={styles.issueTitle}>משהו לא בסדר בתרומה?</h2>
                  <p className={styles.issueText}>
                    קבלה שלא הגיעה, סכום שגוי, או הוראת קבע שרוצים לשנות או לבטל — כתבו לנו או התקשרו,
                    ונטפל בזה. אנחנו עונים בדרך כלל תוך יום עסקים אחד.
                  </p>
                </div>

                <div className={`${styles.card} ${styles.socialCard}`}>
                  <h2 className={styles.socialTitle}>עקבו אחרינו</h2>
                  <ul className={styles.social}>
                    {SOCIAL.map((s) => (
                      <li key={s.label}>
                        <a href={s.href} className={styles.socialLink} aria-label={s.label}>
                          <Image src={s.icon} alt="" width={18} height={18} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
