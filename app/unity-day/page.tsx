import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PillButton from "@/components/PillButton";
import JourneyStories from "./JourneyStories";
import { STORIES } from "./stories";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "על יום האחדות · יום האחדות",
  description:
    "יום אחד. 365 ימים בשנה. רעיון שמחבר אנשים. יום האחדות נולד לזכר איל יפרח, גיל-עד שער ונפתלי פרנקל, ומזמין את כולנו לבחור להתקרב.",
};

// TODO: point at the join / "get involved" page once it exists.
const JOIN_HREF = "#";

type Way = {
  kicker: string;
  title: string;
  text: string;
  icon: { src: string; width: number; height: number };
  /** the per-card spacing and title widths from the design */
  headWidth: number;
  gap: number;
  titleWidth?: number;
  tightTitle?: boolean;
  href: string;
};

// Right to left, row by row, as they sit in the design.
const WAYS: Way[] = [
  {
    kicker: "סלון ישראלי",
    title: "לפתוח את הבית",
    text: "שיחה סביב שולחן אחד, עם אנשים וקולות שונים ומגוונים מכל קצוות הארץ.",
    icon: { src: "/unity-day/icon-salon.png", width: 66, height: 54 },
    headWidth: 299,
    gap: 88,
    tightTitle: true,
    href: "#", // TODO: Israeli salon page
  },
  {
    kicker: "ערכות חינוכיות",
    title: "ליצור קירבה בכיתה ובתנועות הנוער",
    text: "תכנים ופעילויות שמאפשרים להפוך ערכים למפגש דינמי ומשמעותי.",
    icon: { src: "/unity-day/icon-kits.png", width: 67, height: 61 },
    headWidth: 182,
    gap: 58,
    href: "#", // TODO: educational kits page
  },
  {
    kicker: "מפת הפעילויות",
    title: "למצוא את השותפות קרוב אליכם",
    text: "מגוון מפגשים ויוזמות ברחבי הארץ - בוחרים, מגיעים ולוקחים חלק.",
    icon: { src: "/unity-day/icon-map.png", width: 63, height: 73 },
    headWidth: 187,
    titleWidth: 195,
    gap: 38,
    href: "#", // TODO: activities map
  },
  {
    kicker: "בית ספר לאחדות",
    title: "ללמוד איך יוצרים את הביחד",
    text: "כלים, רעיונות והדרכות למי שרוצים להוביל פעילות בעצמם.",
    icon: { src: "/unity-day/icon-school.png", width: 67, height: 64 },
    headWidth: 187,
    gap: 58,
    href: "#", // TODO: school for unity page
  },
];

export default function UnityDayPage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* ---------- hero ---------- */}
        <section className={styles.hero}>
          <Image src="/gallery/photo-2.jpg" alt="" fill priority sizes="100vw" className={styles.heroImage} />
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                <span>יום אחד. 365 ימים בשנה.</span>
                <span>רעיון שמחבר אנשים.</span>
              </h1>
              <div className={styles.heroLead}>
                <p>מה קורה כשאנשים בוחרים להיות יחד?</p>
                <p>
                  יום האחדות נולד מתוך האבל הלאומי על הירצחם של איל יפרח, גיל-עד שער ונפתלי פרנקל,
                  ומתחושת האחדות שנוצרה בין אנשים שלא תמיד נפגשים. זכרם של שלושת הנערים נותר שזור ברגע
                  שבו חברה שלמה עצרה, חיפשה והתלכדה סביב תקווה אחת. מה שהיה אז רגע של כאב הפך עם השנים
                  ליום שמזמין אותנו לזכור מה אנחנו מסוגלים ליצור כשאנחנו בוחרים להתקרב.
                </p>
              </div>
            </div>
            <div className={styles.heroActions}>
              <PillButton href="#connections" icon="/nominations/icon-arrow-light.svg" className={styles.heroGhost}>
                קראו עוד
              </PillButton>
              <PillButton href={JOIN_HREF} icon="/nominations/icon-arrow-light.svg" className={styles.heroPrimary}>
                הצטרפו למסע
              </PillButton>
            </div>
          </div>
        </section>

        {/* ---------- countless ways to connect ---------- */}
        <section id="connections" className={styles.connect} aria-labelledby="connect-title">
          <div className={styles.connectCard}>
            <div className={styles.connectPhoto}>
              <Image
                src="/gallery/hero.jpg"
                alt="צעירים בחולצות כחולות מניפים דגלי ישראל בצעדה"
                fill
                sizes="(max-width: 900px) 100vw, 745px"
              />
              <span className={styles.connectFade} aria-hidden="true" />
            </div>
            <div className={styles.connectText}>
              <div className={styles.connectCopy}>
                <h2 id="connect-title" className={styles.connectTitle}>
                  אינספור דרכים לחיבורים.
                </h2>
                <div className={styles.connectBody}>
                  <p>
                    ביום האחדות, הרעיון הופך למציאות. בתי ספר פותחים דלת לשיח מכבד ומכיל, משפחות וקהילות
                    יוצרות זמן ייעודי להיות יחד, רשויות מקומיות מחברות בין תושבים, ארגונים ויוזמות מביאים
                    אנשים לאותו מקום, לנקודת זמן אחת שמשלבת מציאויות שונות לזמן של קירוב לבבות.
                  </p>
                  <p>
                    כל פעילות נראית אחרת, אבל מאחוריה עומדת אותה בחירה פשוטה: לעצור לרגע, לפגוש, להקשיב
                    וליצור משהו משותף.
                  </p>
                </div>
              </div>
              {/* TODO: destination for "more about Unity Day" */}
              <PillButton href="#" icon="/nominations/icon-arrow-light.svg" className={styles.connectCta}>
                עוד על יום האחדות
              </PillButton>
            </div>
          </div>
        </section>

        {/* ---------- a journey of togetherness ---------- */}
        <section className={styles.journey} aria-labelledby="journey-title">
          <div className={styles.hand} aria-hidden="true">
            <Image src="/unity-day/hand-1.svg" alt="" width={339.725} height={243.228} />
            <Image src="/unity-day/hand-2.svg" alt="" width={342.669} height={246.137} />
            <Image src="/unity-day/hand-3.svg" alt="" width={340.806} height={244.272} />
          </div>
          <Image
            src="/unity-day/heart-right.svg"
            alt=""
            width={235.447}
            height={247.962}
            className={styles.heart}
            aria-hidden="true"
          />
          <header className={styles.journeyHead}>
            <h2 id="journey-title" className={styles.journeyTitle}>
              <span>מסע של ביחד</span>
              <span>מתחיל כאן</span>
            </h2>
            <div className={styles.journeyIntro}>
              <p className={styles.journeySub}>כשהמושג אחדות מקבל פנים</p>
              <p className={styles.journeyLead}>
                יום האחדות הוא נקודת שיא של מפגש. הוא נולד מתוך ההבנה שבמציאות של ריחוק, חוסר ודאות
                ואיומים משותפים, הצורך בתחושת שייכות ובקהילה חזקה הוא עמוק מתמיד - בישראל ובקהילות
                היהודיות ברחבי העולם.
              </p>
            </div>
          </header>
          <JourneyStories stories={STORIES} />
        </section>

        {/* ---------- now it's your turn ---------- */}
        <section className={styles.turn} aria-labelledby="turn-title">
          <div className={styles.turnRow}>
            <div className={styles.turnText}>
              <div className={styles.pins} aria-hidden="true">
                <Image src="/unity-day/pins.svg" alt="" width={215.263} height={152.886} />
              </div>
              <div className={styles.turnHead}>
                <h2 id="turn-title" className={styles.turnTitle}>
                  עכשיו תורך!
                </h2>
                <p className={styles.turnSub}>אחדות מתחילה במה שאתם עושים ויש דרכים רבות להפוך לחלק ממנה</p>
              </div>
              <div className={styles.turnBody}>
                <p>
                  יום זה לא נועד לצפייה מהצד. הוא מזמין אתכם לפתוח דלת, להכיר אנשים חדשים, לנהל שיחה
                  אחרת, לצאת מאזור הנוחות, ללמוד משהו שטרם הכרתם, ובעיקר, לסיים את היום הזה עם תובנות
                  חדשות, קשרים אחרים, ויוזמות מפתיעות.
                </p>
                <p>
                  בין אם אתם משפחה, אנשי חינוך, קהילה או ארגון - יש לכם דרך ליצור את יום האחדות שלכם,
                  ולקחת חלק!
                </p>
              </div>
              <p className={styles.turnQuote}>&quot;אל תחכו ליום האחדות, הפכו לחלק ממנו - תעשו אותו שלכם&quot;</p>
            </div>

            <ul className={styles.ways}>
              {WAYS.map((w) => (
                <li key={w.kicker}>
                  <a
                    href={w.href}
                    className={styles.way}
                    style={
                      {
                        "--head-width": `${w.headWidth}px`,
                        "--title-width": w.titleWidth ? `${w.titleWidth}px` : "100%",
                        "--gap": `${w.gap}px`,
                        "--title-lh": w.tightTitle ? 1.2 : 1.3,
                      } as CSSProperties
                    }
                  >
                    <Image
                      src="/unity-day/card-shape.svg"
                      alt=""
                      width={347}
                      height={289.999}
                      className={styles.wayShape}
                    />
                    <span className={styles.wayIcon} aria-hidden="true">
                      <Image src={w.icon.src} alt="" width={w.icon.width} height={w.icon.height} />
                    </span>
                    <div className={styles.wayText}>
                      <h3 className={styles.wayHead}>
                        <span className={styles.wayKicker}>{w.kicker}</span>
                        <span className={styles.wayTitle}>{w.title}</span>
                      </h3>
                      <p className={styles.wayDesc}>{w.text}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
