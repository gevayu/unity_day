import type { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PillButton from "@/components/PillButton";
import WinnersArchive from "./WinnersArchive";
import { TONES, WINNERS } from "./winners";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "קהילת הזוכים · יום האחדות",
  description:
    "פרס ירושלים לאחדות ישראל מוענק מדי שנה לאנשים, ליוזמות ולארגונים שהופכים את רעיון האחדות למעשה שמשנה מציאות.",
};

// TODO: point these at their pages once they exist.
const ABOUT_PRIZE_HREF = "#";
const MORE_STORIES_HREF = "#";
const JOIN_HREF = "#";

type Story = {
  id: string;
  src: string;
  alt: string;
  tone: keyof typeof TONES;
  date: string;
  title: string;
  text: string;
};

// PLACEHOLDER CONTENT: the four story cards from the Figma frame, right to
// left and top to bottom. Titles, dates and copy are the design's dummies.
const STORY_COPY = {
  date: "פברואר 2026 · תל אביב",
  title: "שם הפרויקט",
  text: "סיפור של חיבור והשפעה קהילתית, מפי אחד מזוכי הפרס.",
};
const STORIES: Story[] = [
  { id: "s1", src: "/gallery/photo-3.jpg", alt: "משפחה רב-דורית מצטלמת יחד בסלפי", tone: "yellow", ...STORY_COPY },
  { id: "s2", src: "/winners/story-1.jpg", alt: "משפחה של שלושה דורות צועדת יחד בשדה", tone: "blue", ...STORY_COPY },
  { id: "s3", src: "/winners/story-4.jpg", alt: "צעיר מחייך ליד דגל ישראל", tone: "blue", ...STORY_COPY },
  { id: "s4", src: "/winners/story-3.jpg", alt: "ילדים צוחקים מחובקים סביב שולחן בכיתה", tone: "green", ...STORY_COPY },
];

type Path = { id: string; image: string; title: string; text: string };

// Right to left, as they sit in the design.
const PATHS: Path[] = [
  { id: "community", image: "/winners/illustration-community.png", title: "להשתתף באירוע", text: "ראו מה קורה בסביבתכם" },
  { id: "heart", image: "/winners/illustration-heart.png", title: "להישאר בעניינים", text: "קבלו את העדכונים ישר למייל" },
  { id: "sprout", image: "/winners/illustration-sprout.png", title: "להציע יוזמה", text: "ספרו לנו מה תרצו להתחיל" },
  { id: "sunrise", image: "/winners/illustration-sunrise.png", title: "לתרום לעמותה", text: "לישראל טובה יותר" },
];

export default function WinnersPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className={styles.hero}>
          <Image src="/winners/hero.jpg" alt="" fill priority sizes="100vw" className={styles.heroImage} />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span>האנשים שהופכים</span>
              <span>אחדות למעשה</span>
            </h1>
            <p className={styles.heroLead}>
              פרס ירושלים לאחדות ישראל מוענק מדי שנה לאנשים, ליוזמות ולארגונים שהופכים את רעיון
              האחדות למעשה שמשנה מציאות.
            </p>
            <p className={styles.heroText}>
              אבל הזכייה היא לא רק הכרה בדרך שכבר נעשתה. היא גם כרטיס כניסה לקהילה של אנשים וארגונים
              החולקים מחויבות לחברה ישראלית מחוברת וחזקה יותר — ומביאים איתם ניסיון, רעיונות וקשרים
              שממשיכים להתפתח הרבה אחרי קבלת הפרס.
            </p>
          </div>
        </section>

        <section className={styles.winners} aria-labelledby="winners-title">
          <div className={styles.winnersInner}>
            <h2 id="winners-title" className={styles.titleXl}>
              מאגר הזוכים
            </h2>
            <WinnersArchive winners={WINNERS} />
          </div>
        </section>

        <section className={styles.about} aria-labelledby="about-title">
          <div className={styles.aboutCard}>
            <span className={styles.aboutBlob} aria-hidden="true" />
            <div className={styles.aboutPhoto}>
              <Image
                src="/winners/about.jpg"
                alt="צעירה בחולצת פסים מצלמת חברים ביער"
                fill
                sizes="(max-width: 900px) 100vw, 650px"
              />
              <span className={styles.aboutFade} aria-hidden="true" />
            </div>
            <div className={styles.aboutText}>
              <div className={styles.aboutCopy}>
                <h2 id="about-title" className={styles.aboutTitle}>
                  הפרס שמחבר
                </h2>
                <div className={styles.aboutBody}>
                  <p>קהילת הזוכים היא מרחב שבו אנשים, רעיונות ויוזמות נפגשים וממשיכים לצמוח.</p>
                  <p>
                    היא יוצרת קשרים בין זוכים מדורות שונים, מתחומי עשייה מגוונים, ובין אנשים שאולי לא
                    היו נפגשים אחרת.
                  </p>
                  <p>
                    מתוך הקשרים האלה נולדים היכרויות חדשות, שיתופי פעולה, למידה ורעיונות טריים —
                    והעשייה ממשיכה להתגלגל ולהתרחב.
                  </p>
                </div>
              </div>
              <PillButton
                href={ABOUT_PRIZE_HREF}
                variant="light"
                icon="/nominations/icon-arrow-dark.svg"
                className={styles.outlineButton}
              >
                לקריאה על הפרס
              </PillButton>
            </div>
          </div>
        </section>

        <section className={styles.stories} aria-labelledby="stories-title">
          <div className={styles.beginning}>
            <h2 id="stories-title" className={styles.beginningTitle}>
              סיפורי הזוכים
            </h2>
            <div className={styles.beginningBody}>
              <p className={styles.beginningLead}>הזכייה היא רק ההתחלה</p>
              <div className={styles.beginningText}>
                <p>הזוכים ממשיכים לפעול, ליצור ולהשפיע הרבה אחרי הטקס.</p>
                <p>
                  העמותה ממשיכה להאיר את העשייה שלהם, לשתף את הסיפורים, היוזמות והפרויקטים החדשים
                  שלהם, ולחבר אותם לקהילה הרחבה של זוכי הפרס.
                </p>
                <p>
                  כך נבנית רשת חיה — של אנשים וארגונים שמחזקים זה את זה, חולקים ידע וניסיון, ויחד
                  מרחיבים את מעגלי ההשפעה.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.storiesBody}>
            <ul className={styles.storyGrid}>
              {STORIES.map((s) => (
                <li key={s.id} className={styles.story}>
                  <div className={styles.storyVisual}>
                    <span
                      className={styles.storyBlob}
                      style={{ background: `rgb(${TONES[s.tone]})` }}
                      aria-hidden="true"
                    />
                    <div className={styles.storyPhoto}>
                      <Image src={s.src} alt={s.alt} fill sizes="(max-width: 760px) 100vw, 450px" />
                    </div>
                  </div>
                  <div className={styles.storyText}>
                    <div className={styles.storyHead}>
                      <p className={styles.storyDate}>{s.date}</p>
                      <h3 className={styles.storyTitle}>{s.title}</h3>
                    </div>
                    <p className={styles.storyBlurb}>{s.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <PillButton href={MORE_STORIES_HREF} icon="/nominations/icon-arrow-light.svg">
              עוד סיפורים
            </PillButton>
          </div>
        </section>

        <section className={styles.join} aria-labelledby="join-title">
          <header className={styles.joinHead}>
            <h2 id="join-title" className={styles.titleXl}>
              מוכנים להצטרף?
            </h2>
            <p className={styles.joinLead}>כל אחד יכול להתחיל מהמקום שמתאים לו. מה השביל שלך?</p>
          </header>
          {/* flat row so the dividers share the justify-between spacing, as in Figma */}
          <div className={styles.paths}>
            {PATHS.map((p, i) => (
              <Fragment key={p.id}>
                {i > 0 && (
                  <span className={styles.pathDivider} aria-hidden="true">
                    <Image src="/winners/divider-line.svg" alt="" width={335} height={0.5} />
                  </span>
                )}
                <article className={`${styles.path} ${styles[p.id]}`}>
                  <div className={styles.pathArt} aria-hidden="true">
                    <div className={styles.pathCrop}>
                      <Image src={p.image} alt="" width={1254} height={1254} sizes="380px" />
                    </div>
                  </div>
                  <div className={styles.pathText}>
                    <h3 className={styles.pathTitle}>{p.title}</h3>
                    <p className={styles.pathSub}>{p.text}</p>
                  </div>
                </article>
              </Fragment>
            ))}
          </div>
          <PillButton href={JOIN_HREF} icon="/nominations/icon-arrow-light.svg">
            יוצאים לדרך
          </PillButton>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
