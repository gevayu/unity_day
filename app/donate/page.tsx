import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import DonationForm from "./DonationForm";
import CopyBankDetails from "./CopyBankDetails";
import { ABROAD_CURRENCIES, ABROAD_PARTNERS, BANK_DETAILS, HELP_CONTACTS } from "./data";
import { heebo } from "./fonts";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "תרומה · יום האחדות",
  description:
    "התרומה שלכם לפרס ירושלים לאחדות ישראל וליום האחדות מאפשרת לנו להמשיך ולקדם אחדות בכל רחבי החברה הישראלית.",
};

const BANK_TEXT = BANK_DETAILS.map((d) => `${d.label}: ${d.value}`).join("\n");

export default function DonatePage() {
  return (
    <>
      <SiteHeader minimal />

      <main id="main" tabIndex={-1} className={heebo.variable}>
        <section className={styles.hero}>
          <Image src="/gallery/photo-2.jpg" alt="" fill priority sizes="100vw" className={styles.heroImage} />
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>
              יחד, ממשיכים
              <br />
              לבנות חיבורים
            </h1>
            <p className={styles.heroLead}>
              התרומה שלכם לפרס ירושלים לאחדות ישראל וליום האחדות מאפשרת לנו להמשיך ולקדם אחדות בכל רחבי
              החברה הישראלית.
            </p>
            <p className={styles.heroBadge}>
              <Image src="/donate/icon-shield.svg" alt="" width={20} height={20} />
              מוכר לזיכוי במס בישראל לפי סעיף 46
            </p>
          </div>
        </section>

        <section className={styles.donate}>
          <DonationForm />
        </section>

        {/* ---------- other ways to give ---------- */}
        <section className={styles.ways} aria-labelledby="ways-title">
          <div className={styles.heartHand} aria-hidden="true">
            <Image src="/donate/heart-hand-1.svg" alt="" width={252.127} height={180.513} />
            <Image src="/donate/heart-hand-2.svg" alt="" width={254.313} height={182.671} />
            <Image src="/donate/heart-hand-3.svg" alt="" width={252.929} height={181.287} />
          </div>

          <div className={styles.waysInner}>
            <h2 id="ways-title" className={styles.waysTitle}>
              דרכים נוספות לתרום
            </h2>

            <div className={styles.waysBody}>
              <div className={styles.waysCards}>
                <article className={`${styles.wayCard} ${styles.wayBank}`} aria-labelledby="way-bank">
                  <span className={styles.wayIcon}>
                    <Image src="/donate/icon-bank.svg" alt="" width={22} height={22} />
                  </span>
                  <h3 id="way-bank" className={styles.wayTitle}>
                    העברה בנקאית
                  </h3>
                  <dl className={styles.bankRows}>
                    {BANK_DETAILS.map((d) => (
                      <div key={d.label} className={styles.bankRow}>
                        <dt>{d.label}</dt>
                        <dd>{d.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <CopyBankDetails text={BANK_TEXT} className={styles.copyBtn} />
                  <p className={styles.bankNote}>אנא ציינו את שמכם המלא בפרטי ההעברה.</p>
                </article>

                <article className={`${styles.wayCard} ${styles.wayAbroad}`} aria-labelledby="way-abroad">
                  <span className={styles.wayIcon}>
                    <Image src="/donate/icon-globe.svg" alt="" width={22} height={22} />
                  </span>
                  <h3 id="way-abroad" className={styles.wayTitle}>
                    תרומות מחו״ל
                  </h3>
                  <p className={styles.wayLead}>
                    אפשר לתרום גם בדולר, ליש״ט, דולר קנדי או שקל דרך אחד השותפים המהימנים שלנו.
                  </p>
                  <ul className={styles.tags} aria-label="מטבעות">
                    {ABROAD_CURRENCIES.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <ul className={styles.partners}>
                    {ABROAD_PARTNERS.map((p) => (
                      <li key={p.label}>
                        <a href={p.href} className={styles.partner} lang="en">
                          {p.label}
                          <Image src="/donate/icon-arrow-out.svg" alt="" width={16} height={16} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>

              <div className={styles.help}>
                <div className={styles.helpText}>
                  <h3 className={styles.helpTitle}>צריכים עזרה עם התרומה?</h3>
                  <p className={styles.helpLead}>מיכל ואופיר ישמחו לעזור בכל שאלה.</p>
                </div>
                <ul className={styles.helpLinks}>
                  {HELP_CONTACTS.map((c) => (
                    <li key={c.href}>
                      <a href={c.href} className={styles.helpLink}>
                        <Image src={c.icon} alt="" width={16} height={16} />
                        {c.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter compact />
    </>
  );
}
