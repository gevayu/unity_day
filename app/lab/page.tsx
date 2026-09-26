import type { Metadata } from "next";
import Link from "next/link";
import { VARIANTS } from "./hero/variants";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: "מעבדת עיצוב · יום האחדות" },
  description: "גרסאות הירו לדף הבית, לבדיקה ולבדיקות נגישות. לא מקושר מהאתר.",
};

export default function LabIndexPage() {
  return (
    <main className={styles.page}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>מעבדת עיצוב</p>
        <h1 className={styles.title}>גרסאות הירו לדף הבית</h1>
        <p className={styles.intro}>
          שבע ההצעות לאזור הפתיחה של דף הבית, מתוך{" "}
          <span lang="en" dir="ltr">
            HERO EXPLORATIONS
          </span>{" "}
          ב-Figma, לפי הסדר שלהן על הקנבס. כל
          עמוד מציג את מה שהפריים מראה: ההדר, ההירו והסקשן שמתחתיו. העמודים האלה לא מקושרים מהאתר ולא
          נסרקים במנועי חיפוש.
        </p>
      </div>

      <ol className={styles.list}>
        {VARIANTS.map((v) => (
          <li key={v.slug} className={styles.item}>
            <span className={styles.number} aria-hidden="true">
              {v.slug}
            </span>
            <div className={styles.body}>
              <Link href={`/lab/hero/${v.slug}`} className={styles.link}>
                הירו {v.slug}: {v.title}
              </Link>
              <p className={styles.description}>{v.description}</p>
              <p className={styles.meta}>
                פריים ב-Figma: <span dir="ltr">{v.node}</span>
              </p>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
