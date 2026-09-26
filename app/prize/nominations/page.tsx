import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PillButton from "@/components/PillButton";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "קול קורא להגשת מועמדות · פרס אחדות ישראל",
  description:
    "פרס ירושלים לאחדות ישראל מוענק לאישים, לארגונים, למיזמים ולרשויות שפועלים לחיזוק האחדות בישראל ובעולם היהודי. הגשת המועמדות פתוחה.",
};

// TODO: point at the real submission form.
const SUBMIT_HREF = "#";

type Category = { title: string; text: string; tone: "blue" | "green" | "yellow"; alignTitle?: "start" };

// Right to left, as they read on the page.
const CATEGORY_ROWS: Category[][] = [
  [
    {
      title: "מקומי",
      tone: "yellow",
      text: "לאישים, ארגונים או מיזמים הפועלים לחיזוק האחדות, קירוב לבבות וסובלנות ברמה יישובית או אזורית, ומשפיעים השפעה ניכרת במרחב המקומי.",
    },
    {
      title: "ארצי",
      tone: "green",
      text: "לאישים, ארגונים או מיזמים שפועלים פעולה יוצאת דופן בתחום האחדות ברחבי מדינת ישראל, ומשפיעים השפעה ניכרת ברמה הארצית.",
    },
    {
      title: "בינלאומי",
      tone: "blue",
      text: "לאישים, ארגונים או מיזמים העוסקים בקידום אחדות ישראל ובהידוק הקשר בין מדינת ישראל ליהדות התפוצות, ומשפיעים השפעה ניכרת ברחבי העולם היהודי.",
    },
  ],
  [
    {
      title: "חינוך",
      tone: "blue",
      text: "למוסדות חינוך שתרמו תרומה מתמשכת או חדשנית להגברת ההבנה והרגישות ההדדיים בין מגזרים ואנשים בעלי רקע שונה, ולמיזמים חינוכיים מקוריים המקדמים את רוח האחדות בעם בצורה יוצאת דופן.",
    },
    {
      title: "רשויות מקומיות",
      tone: "yellow",
      // the design sets this one title flush right rather than centred
      alignTitle: "start",
      text: "לרשות הפועלת באופן יזום ומתמשך לקידום ערך האחדות, מקדמת אחדות חברתית בין קבוצות מגוונות באוכלוסייה באמצעות פעילויות חינוכיות, סדנאות, שיח בין-תרבותי ופרויקטים קהילתיים, ומקיימת שיתופי פעולה עם רשויות אחרות במיזמים חינוכיים משותפים.",
    },
  ],
];

const STEPS = ["בוחרים את הקטגוריה המתאימה.", "ממלאים את הטופס בפירוט.", "יש לצרף עד שתי המלצות."];

export default function NominationsPage() {
  return (
    <>
      <SiteHeader />

      <main id="main" tabIndex={-1}>
        <section className={styles.hero}>
          <Image
            src="/nominations/hero.jpg"
            alt=""
            width={2400}
            height={1800}
            priority
            sizes="(max-width: 760px) 100vw, 160vw"
            className={styles.heroImage}
          />
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                <span>קול קורא להגשת מועמדות</span>
                <span>פרס אחדות ישראל</span>
              </h1>
              <div className={styles.heroLead}>
                <p>יש ארגונים שכבר שנים מקדמים אחדות בחברה. באמצעות הפרס אנחנו מביאים אותם לקדמת הבמה.</p>
                <p>
                  פרס ירושלים לאחדות ישראל מוענק לאישים, לארגונים, למיזמים ולרשויות שפועלים לחיזוק
                  האחדות בישראל ובעולם היהודי בהיקף רחב, לאורך זמן ובהשפעה ניכרת.
                </p>
                <p>גם השנה אנחנו מחפשים את הזוכים הבאים. הגשת המועמדות פתוחה.</p>
              </div>
              <PillButton href={SUBMIT_HREF} variant="light" icon="/nominations/icon-arrow-dark.svg">
                להגשת מועמדות
              </PillButton>
            </div>
          </div>
        </section>

        <section className={styles.about} aria-labelledby="about-title">
          <span className={styles.aboutBlob} aria-hidden="true" />
          <div className={styles.aboutRow}>
            <div className={styles.aboutText}>
              <div className={styles.aboutIllustration} aria-hidden="true">
                <Image src="/nominations/illustration-hand.png" alt="" width={1536} height={1024} sizes="1140px" />
              </div>
              <h2 id="about-title" className={styles.aboutTitle}>
                על הפרס
              </h2>
              <div className={styles.aboutBody}>
                <p>
                  מאז שנת 2015 פרס אחדות ישראל מוענק מדי שנה לאנשים, לארגונים, למיזמים ולרשויות
                  שהופכים את ערך האחדות למעשה יומיומי ועקבי. עשייה שמשנה מציאות בשטח.
                </p>
                <p>הטקס מתקיים בבית הנשיא, במעמד נשיא המדינה ובברכתו.</p>
                <p>
                  הזוכים מצטרפים לקהילה של מאות אנשים ויוזמות שממשיכים להיפגש, לשתף פעולה ולפתוח זה
                  לזה דלתות הרבה אחרי שהאורות בטקס כבו.
                </p>
              </div>
            </div>
            <div className={styles.aboutPhoto}>
              <Image
                src="/nominations/about.jpg"
                alt="זוכה מחייך מחזיק את פסל הפרס, ומאחוריו חברים מוחאים כפיים"
                fill
                sizes="(max-width: 900px) 100vw, 690px"
              />
            </div>
          </div>
        </section>

        <section className={styles.categories} aria-labelledby="categories-title">
          <Image src="/nominations/map.png" alt="" width={186} height={186} className={styles.map} />
          <header className={styles.sectionHead}>
            <h2 id="categories-title" className={styles.sectionTitle}>
              את מי ומה אפשר להציע
            </h2>
            <p className={styles.sectionLead}>
              הפרס מוענק בחמש קטגוריות. בכל קטגוריה יש לבחור את סוג המועמדות: יחיד, ארגון* או מיזם.
            </p>
          </header>
          <div className={styles.categoryGrid}>
            {CATEGORY_ROWS.map((row, i) => (
              <ul key={i} className={styles.categoryRow}>
                {row.map((c) => (
                  <li key={c.title} className={`${styles.category} ${styles[c.tone]}`}>
                    <h3 className={styles.categoryTitle} data-align={c.alignTitle}>
                      {c.title}
                    </h3>
                    <p className={styles.categoryText}>{c.text}</p>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className={styles.categoriesFoot}>
            <p>* תאגיד רשום: עמותה, חל״צ, חברה בע״מ או שותפות.</p>
            <PillButton href={SUBMIT_HREF} icon="/nominations/icon-arrow-light.svg">
              להגשת מועמדות
            </PillButton>
          </div>
        </section>

        <section className={styles.wave} aria-labelledby="looking-title">
          <Image
            src="/nominations/wave.png"
            alt=""
            width={2500}
            height={500}
            sizes="2500px"
            className={styles.waveBg}
          />
          <div className={styles.waveContent}>
            <h2 id="looking-title" className={styles.waveTitle}>
              מה ועדת הפרס מחפשת
            </h2>
            <p className={styles.waveText}>
              חיבור אמיתי בין קהלים. עשייה המשכית. השפעה שאפשר להצביע עליה — כמות האנשים שלוקחים חלק,
              קהילות שנפתחו, קשרים שנוצרו. מקוריות — דרך פעולה שלא ראינו קודם.
            </p>
          </div>
        </section>

        <section className={styles.howTo} aria-labelledby="who-title">
          <header className={styles.sectionHead}>
            <h2 id="who-title" className={styles.sectionTitle}>
              מי יכול להגיש הצעה?
            </h2>
            <p className={styles.sectionLead}>
              אפשר להגיש מועמדות של אדם או גוף אחר, ואפשר להגיש את עצמכם. אם אתם מכירים מישהו או גוף
              שראוי לפרס, הגישו אותו למועמדות.
            </p>
          </header>
          <div className={styles.howToBody}>
            <div className={styles.howToHead}>
              <h3>איך מגישים</h3>
              <p>ההגשה מקוונת בלבד, דרך אתר הפרס.</p>
            </div>
            <ol className={styles.steps}>
              {STEPS.map((step, i) => (
                <li key={step} className={styles.stepItem}>
                  {i > 0 && (
                    <span className={styles.stepDivider} aria-hidden="true">
                      <Image src="/nominations/divider-step.svg" alt="" width={100} height={2} />
                    </span>
                  )}
                  <div className={styles.step}>
                    <span className={styles.stepNumber}>{i + 1}</span>
                    <p className={styles.stepText}>{step}</p>
                  </div>
                </li>
              ))}
            </ol>
            <PillButton href={SUBMIT_HREF} icon="/nominations/icon-arrow-light.svg">
              להגשת מועמדות
            </PillButton>
          </div>
          <Image src="/nominations/skyline.svg" alt="" width={533.276} height={100.001} className={styles.skyline} />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
