import Image from "next/image";
import NewsletterForm from "./NewsletterForm";
import styles from "./SiteFooter.module.css";

type Column = { title: string; accent?: string; links: string[] };

// Ordered right-to-left, as they read on the page.
const COLUMNS: Column[] = [
  {
    title: "מסע הזיכרון",
    accent: "var(--journey-memory)",
    links: ["אודות העמותה והחזון", "ציר הזמן", "שלושת הנערים", "הספר", "אתר ההנצחה"],
  },
  {
    title: "מסע האחדות",
    accent: "var(--journey-unity)",
    links: [
      "יום האחדות",
      "מפת הפעילויות",
      "פרס ירושלים לאחדות",
      "ערכות חינוכיות",
      "בית הספר לאחדות",
      "לוח אירועי אחדות",
    ],
  },
  {
    title: "מסע הזהות",
    accent: "var(--journey-identity)",
    links: ["בשביל העם היהודי", "GCC", "התאום היהודי שלי", "Connection", "גשר המיתרים"],
  },
  {
    title: "הצטרפו למסע",
    links: ["להרים אירוע", "הסלון הישראלי", "הגשת מועמדות", "התנדבות והצטרפות", "ארגונים שותפים"],
  },
  {
    title: "מדיה וצור קשר",
    links: ["גלריית תמונות ווידאו", "עדכונים וחדשות", "בתקשורת", "צור קשר"],
  },
];

const SOCIAL = [
  { label: "YouTube", icon: "/gallery/icon-youtube.svg", href: "#" },
  { label: "Instagram", icon: "/gallery/icon-instagram.svg", href: "#" },
  { label: "Facebook", icon: "/gallery/icon-facebook.svg", href: "#" },
];

const LEGAL = ["תקנון האתר", "מדיניות פרטיות", "הצהרת נגישות"];

function Divider() {
  return (
    <div className={styles.divider} aria-hidden="true">
      <Image src="/gallery/divider-vertical.svg" alt="" width={176} height={1} />
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.sitemap}>
        {COLUMNS.map((col) => (
          <nav key={col.title} className={styles.column} aria-label={col.title}>
            <h2 className={styles.columnTitle} style={col.accent ? { color: col.accent } : undefined}>
              {col.title}
            </h2>
            <ul className={styles.columnLinks}>
              {col.links.map((link) => (
                <li key={link}>
                  {/* TODO: real hrefs */}
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className={styles.bottom}>
        <div className={styles.blocks}>
          <section className={styles.newsletter} aria-labelledby="footer-newsletter">
            <div className={styles.newsletterHead}>
              <div className={styles.logoCard}>
                <Image src="/gallery/logo-footer.svg" alt="יום האחדות, לזכר שלושת הנערים" width={100} height={80} />
              </div>
              <div className={styles.blockText}>
                <h2 id="footer-newsletter" className={styles.blockTitle}>
                  השארו מעודכנים
                </h2>
                <p className={styles.blockBody}>עדכונים מדי פעם על יום האחדות, הפרס ויוזמות בסביבתכם.</p>
              </div>
            </div>
            <NewsletterForm />
          </section>

          <Divider />

          <section className={styles.follow} aria-labelledby="footer-follow">
            <h2 id="footer-follow" className={styles.blockTitle}>
              עקבו אחרינו
            </h2>
            <ul className={styles.social}>
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className={styles.socialLink} aria-label={s.label}>
                    <Image src={s.icon} alt="" width={16} height={16} />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <Divider />

          <section className={styles.support} aria-labelledby="footer-support">
            <div className={styles.blockText}>
              <h2 id="footer-support" className={styles.blockTitle}>
                תמכו בעמותה
              </h2>
              <p className={styles.blockBody}>כל תרומה מגדילה את המעגל.</p>
            </div>
            <a href="#" className={styles.donate}>
              תרומה
            </a>
          </section>

          <div className={styles.spacer} aria-hidden="true" />

          <div className={styles.illustration} aria-hidden="true">
            <Image src="/gallery/illustration-people.svg" alt="" width={461.263} height={155.644} />
          </div>
        </div>

        <div className={styles.legal}>
          <p>כל הזכויות שמורות לעמותת יום האחדות. 2026</p>
          <ul className={styles.legalLinks}>
            {LEGAL.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
          <p>עיצוב ופיתוח אתר: Bold Move</p>
        </div>
      </div>
    </footer>
  );
}
