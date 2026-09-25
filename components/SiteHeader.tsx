import Image from "next/image";
import Link from "next/link";
import styles from "./SiteHeader.module.css";

// TODO: swap the "#" placeholders for real routes once they exist.
const STATUS_LINKS = [
  { label: "אירועים פעילים", href: "#", current: true },
  { label: "עונת הגשה", href: "#", current: false },
  { label: "מצב קמפיין", href: "#", current: false },
];

const NAV_LINKS = [
  { label: "מסע הזיכרון", href: "#", hasMenu: true },
  { label: "מסע האחדות", href: "#", hasMenu: true },
  { label: "מסע הזהות", href: "#", hasMenu: true },
  { label: "להצטרף", href: "#", hasMenu: true },
  { label: "מדיה", href: "/gallery", hasMenu: true },
  { label: "צור קשר", href: "#", hasMenu: false },
];

export default function SiteHeader() {
  return (
    <header>
      <div className={styles.topbar}>
        <ul className={styles.statusList}>
          {STATUS_LINKS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={item.current ? `${styles.status} ${styles.statusCurrent}` : styles.status}
                aria-current={item.current ? "true" : undefined}
              >
                <span className={styles.statusDot} aria-hidden="true" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.navbar}>
        <div className={styles.primary}>
          <Link href="/" className={styles.brand} aria-label="יום האחדות, לדף הבית">
            <Image src="/site/logo-mark.svg" alt="" width={124.624} height={60.0005} priority />
            <span className={styles.brandText}>
              <span className={styles.brandTitle}>יום האחדות</span>
              <span className={styles.brandSub}>לזכר שלושת הנערים</span>
            </span>
          </Link>

          <nav aria-label="ניווט ראשי">
            <ul className={styles.navList}>
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                    {item.hasMenu && (
                      <Image
                        src="/site/icon-chevron-down.svg"
                        alt=""
                        width={14.5358}
                        height={16}
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.actions}>
          <a href="#" className={styles.lang} lang="en" aria-label="Switch to English">
            <Image src="/site/icon-globe.svg" alt="" width={14} height={14} aria-hidden="true" />
            <span dir="ltr">EN / עב</span>
          </a>
          <a href="#" className={styles.donate}>
            תרומה
          </a>
        </div>
      </div>
    </header>
  );
}
