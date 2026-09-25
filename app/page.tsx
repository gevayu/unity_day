import type { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PillButton from "@/components/PillButton";
import WinnerSpotlight from "./_home/WinnerSpotlight";
import {
  EVENTS,
  EVENT_PHOTO,
  FIELD_STORIES,
  HERO_STATS,
  IMPACT_STATS,
  JOIN_PATHS,
  JOURNEYS,
  SPOTLIGHT,
  STORY_PHOTO,
  TONES,
} from "./_home/data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "יום האחדות · לזכר שלושת הנערים",
  description:
    "מתוך הכאב הגדול ביותר בחרנו באחדות. זו הדרך שבה אנחנו ממשיכים לצמוח, להתחבר ולבנות יחד.",
};

const ARROW_LIGHT = "/nominations/icon-arrow-light.svg";
const ARROW_DARK = "/nominations/icon-arrow-dark.svg";

// TODO: point these at their pages once they exist.
const DONATE_HREF = "#";
const JOURNEY_START_HREF = "#";
const EVENTS_HREF = "#";
const JOIN_HREF = "#";

// Figma draws these as horizontal line SVGs turned 90deg.
function Divider({ src, length, thickness }: { src: string; length: number; thickness: number }) {
  return (
    <span className={styles.vDivider} style={{ height: length }} aria-hidden="true">
      <Image src={src} alt="" width={length} height={thickness} />
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* ---------- hero ---------- */}
        <section className={styles.hero}>
          <Image src="/winners/hero.jpg" alt="" fill priority sizes="100vw" className={styles.heroImage} />
          <div className={styles.heroInner}>
            <div className={styles.heroPanel}>
              <div className={styles.heroCopy}>
                <h1 className={styles.heroTitle}>
                  <span className={styles.heroKicker}>מתוך הכאב הגדול ביותר</span>
                  <span className={styles.heroHeadline}>בחרנו באחדות</span>
                </h1>
                <p className={styles.heroLead}>זו הדרך שבה אנחנו ממשיכים לצמוח, להתחבר ולבנות יחד</p>
              </div>
              <div className={styles.heroActions}>
                <PillButton href={DONATE_HREF} icon={ARROW_LIGHT} className={`${styles.heroButton} ${styles.heroGhost}`}>
                  לתרומה
                </PillButton>
                <PillButton href="#journeys" icon={ARROW_LIGHT} className={`${styles.heroButton} ${styles.heroBlue}`}>
                  התחילו את המסע
                </PillButton>
              </div>
            </div>
            <ul className={styles.heroStats}>
              {HERO_STATS.map((s) => (
                <li key={s.label} className={styles.heroStat}>
                  <span className={styles.heroStatValue} style={{ color: s.color }}>
                    {s.value}
                  </span>
                  <span className={styles.heroStatLabel}>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- memory becomes a choice ---------- */}
        <section className={styles.choice} aria-labelledby="choice-title">
          <div className={styles.choiceCard}>
            <span className={styles.choiceBlob} aria-hidden="true" />
            <div className={styles.choicePhoto}>
              <Image
                src="/winners/about.jpg"
                alt="צעירה בחולצת פסים מצלמת חברים ביער"
                fill
                sizes="(max-width: 900px) 100vw, 650px"
              />
              <span className={styles.choiceFade} aria-hidden="true" />
            </div>
            <div className={styles.choiceText}>
              <div className={styles.choiceCopy}>
                <h2 id="choice-title" className={styles.h2}>
                  כשזיכרון הופך <span style={{ color: "#3692d0" }}>לבחירה</span>
                </h2>
                <p>
                  בקיץ 2014 עצרה מדינת ישראל את נשימתה. חטיפתם של הנערים איל יפרח, גיל-עד שער ונפתלי פרנקל
                  הובילה ל-18 ימי חיפושים. ח״י ימים שבהם, דווקא מתוך הכאב והחרדה, התגלתה עוצמת החיים
                  המשותפים שלנו. באותם ימים התגייסו רבבות אנשים מכל חלקי העם מתוך תחושת ערבות הדדית ואחדות
                  שפעמה בכל חלקי הארץ.
                </p>
                <div className={styles.choiceQuote}>
                  <Divider src="/home/divider-quote.svg" length={46} thickness={2} />
                  <p>איך שומרים על רוח האחדות גם כשהכאב נשאר והשגרה חוזרת?</p>
                </div>
                <p>
                  אפשר היה להשאיר את הרוח הזו כזיכרון של משבר, אנחנו בחרנו אחרת. מתוך אותה אחדות צמחה תנועה
                  חיה שפועלת עד היום לחבר בין אנשים, לעודד יוזמות ולהפוך את רוח הערבות ההדדית לעשייה. את
                  העבר אי אפשר לשנות, אבל אפשר לבחור מה יוולד ממנו.
                </p>
              </div>
              <PillButton href="/memorial" variant="light" icon={ARROW_DARK} className={styles.outlineButton}>
                לסיפור המלא של 18 הימים
              </PillButton>
            </div>
          </div>
        </section>

        {/* ---------- three journeys ---------- */}
        <section id="journeys" className={styles.journeys} aria-labelledby="journeys-title">
          <Image src="/home/cloud.svg" alt="" width={405} height={198.164} className={styles.cloud} aria-hidden="true" />
          <div className={styles.journeysInner}>
            <header className={styles.journeysHead}>
              <h2 id="journeys-title" className={styles.h2}>
                שלושה נערים. שלוש משפחות.{" "}
                <span className={styles.block} style={{ color: "#3692d0" }}>
                  שלושה מעגלים.
                </span>
              </h2>
              <div className={styles.journeysLead}>
                <p>מסע אחד שממשיך לחבר בין אנשים, קהילות ויוזמות בארץ ובעולם. מהזיכרון שממנו הכל התחיל.</p>
                <p>אל האחדות שאנחנו בוחרים בה בכל יום. ואל הזהות שמחברת בינינו, בארץ ובעולם.</p>
              </div>
            </header>
            <ul className={styles.journeyCards}>
              {JOURNEYS.map((j) => (
                <li key={j.id} className={styles.journeyCard} style={{ "--tone": TONES[j.tone] } as React.CSSProperties}>
                  <div className={styles.journeyPhoto}>
                    <Image src={j.photo} alt={j.alt} fill sizes="(max-width: 900px) 100vw, 429px" />
                    <span className={styles.toneFade} aria-hidden="true" />
                  </div>
                  <div className={styles.journeyBody}>
                    <div className={styles.journeyText}>
                      <h3 className={styles.journeyTitle}>{j.title}</h3>
                      <p>{j.text}</p>
                    </div>
                    {/* "#" placeholders stay plain anchors so Next doesn't prefetch them */}
                    <a href={j.href} className={styles.journeyButton}>
                      {j.cta}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <PillButton href={JOURNEY_START_HREF} icon="/home/icon-arrow-white.svg" className={styles.blueButton}>
            התחילו את המסע
          </PillButton>
          <Image src="/home/people-line.svg" alt="" width={830.23} height={240} className={styles.peopleLine} aria-hidden="true" />
        </section>

        {/* ---------- impact numbers ---------- */}
        <section className={styles.impact} aria-label="יום האחדות במספרים">
          <ul className={styles.impactList}>
            {IMPACT_STATS.map((s) => (
              <li key={s.label} className={styles.impactItem}>
                <span className={styles.impactValue} style={{ color: s.color }} dir="ltr">
                  {s.value}
                </span>
                <span className={styles.impactLabel}>{s.label}</span>
                <span className={styles.impactNote}>{s.note}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- unity day ---------- */}
        <section className={styles.unity} aria-labelledby="unity-title">
          <div className={styles.unityCard}>
            <span className={styles.unityBlob} aria-hidden="true" />
            <div className={styles.unityPanel}>
              <div className={styles.unityContent}>
                <div className={styles.unityCopy}>
                  <Image src="/home/logo-heart.svg" alt="" width={159.977} height={77} aria-hidden="true" />
                  <h2 id="unity-title" className={styles.h2}>
                    <span className={styles.block}>יום האחדות.</span>
                    <span className={styles.block}>יום אחד. תנועה שלמה.</span>
                  </h2>
                  <div className={styles.unityBody}>
                    <p>
                      אחת לשנה עוצרת מדינה שלמה, יחד עם קהילות יהודיות בעולם, כדי להיפגש, להקשיב ולבחור מחדש
                      במה שמחבר בינינו.
                    </p>
                    <p>
                      מאז שנקבע בשנת 2024 בחוק הישראלי כיום הלאומי של ישראל לחיזוק האחדות והערבות ההדדית, הוא
                      הפך למאורע רחב היקף, המאחד מאות אלפי תלמידים, אנשי חינוך, רשויות מקומיות, ארגונים,
                      קהילות ומשפחות.
                    </p>
                    <p>
                      יום האחדות אינו רק אירוע שנתי. הוא הביטוי לשנה שלמה
                      <br />
                      של עשייה וחיבורים.
                    </p>
                  </div>
                </div>
                <PillButton href="/unity-day" variant="light" icon={ARROW_DARK} className={styles.skyButton}>
                  כל הפרטים על יום האחדות
                </PillButton>
              </div>
            </div>
            <div className={styles.unityPhoto}>
              <Image
                src="/thank-you/hero.jpg"
                alt="צלליות של משפחה אוחזת ידיים בשדה מול השקיעה"
                fill
                sizes="(max-width: 900px) 100vw, 750px"
              />
              <span className={styles.unityFade} aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* ---------- the prize ---------- */}
        <section className={styles.prize} aria-labelledby="prize-title">
          <div className={styles.prizeRow}>
            <div className={styles.prizeIntro}>
              <div className={styles.prizeCopy}>
                <h2 id="prize-title" className={styles.h2}>
                  <span className={styles.block}>כשאחדות הופכת</span>
                  <span className={styles.block} style={{ color: "#fab612" }}>
                    למופת
                  </span>
                </h2>
                <p>
                  יש אנשים שאינם מסתפקים בחלום על חברה טובה יותר, הם יוצרים ובונים אותה מדי יום. פרס ירושלים
                  לאחדות ישראל מוקיר את האנשים, הארגונים והיוזמות שבמעשיהם הופכים את ערכי האחדות למציאות. זהו
                  ביטויה הממלכתי של תנועת האחדות.
                </p>
              </div>
              <PillButton href="/prize/winners" icon={ARROW_LIGHT}>
                הכירו את זוכי הפרס
              </PillButton>
            </div>
            <WinnerSpotlight winners={SPOTLIGHT} />
          </div>
        </section>

        {/* ---------- people become a community ---------- */}
        <section className={styles.communitySection} aria-labelledby="community-title">
          <div className={styles.communityCopy}>
            <h2 id="community-title" className={styles.h2}>
              <span className={styles.block}>כשאנשים</span>
              <span className={styles.block} style={{ color: "#8dbf22" }}>
                הופכים לקהילה
              </span>
            </h2>
            {/* PLACEHOLDER: the design's Lorem ipsum */}
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
              facilisi.lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <Image src="/home/community-line.svg" alt="" width={894} height={227.613} className={`${styles.communityLine} ${styles.communityLineLeft}`} aria-hidden="true" />
          <Image src="/home/community-line.svg" alt="" width={894} height={227.613} className={`${styles.communityLine} ${styles.communityLineRight}`} aria-hidden="true" />
        </section>

        {/* ---------- upcoming events ---------- */}
        <section className={styles.events} aria-labelledby="events-title">
          <h2 id="events-title" className={styles.h2}>
            <span className={styles.block}>האירועים הקרובים</span>
            <span className={styles.block} style={{ color: "#557799" }}>
              ברחבי הארץ
            </span>
          </h2>
          <ul className={styles.eventGrid}>
            {EVENTS.map((e) => (
              <li key={e.id} className={`${styles.event} ${e.strong ? styles.eventStrong : ""}`}>
                <div className={styles.eventText}>
                  <div className={styles.eventHead}>
                    <h3 className={styles.eventTitle}>{e.title}</h3>
                    <p className={styles.eventSponsor} dir="auto">
                      {e.sponsor}
                    </p>
                  </div>
                  <p className={styles.eventMeta}>
                    <span className={styles.eventDate}>{e.date}</span>
                    <Divider src="/home/divider-event.svg" length={17} thickness={1} />
                    <span className={styles.eventTime}>{e.time}</span>
                    <Divider src="/home/divider-event.svg" length={17} thickness={1} />
                    <span className={styles.eventCity}>
                      <Image src="/home/icon-pin.svg" alt="" width={16} height={16} aria-hidden="true" />
                      {e.city}
                    </span>
                  </p>
                </div>
                <div className={styles.eventPhoto}>
                  <Image src={EVENT_PHOTO.src} alt={EVENT_PHOTO.alt} fill sizes="(max-width: 760px) 100vw, 320px" />
                </div>
              </li>
            ))}
          </ul>
          <PillButton href={EVENTS_HREF} icon={ARROW_LIGHT}>
            ללוח האירועים המלא
          </PillButton>
        </section>

        {/* ---------- stories from the field ---------- */}
        <section className={styles.stories} aria-labelledby="stories-title">
          <Image src="/home/hearts-left.svg" alt="" width={860.767} height={182.09} className={styles.heartsLeft} aria-hidden="true" />
          <Image src="/home/hearts-right.svg" alt="" width={681.485} height={145} className={styles.heartsRight} aria-hidden="true" />
          <div className={styles.storiesInner}>
            <header className={styles.storiesHead}>
              <h2 id="stories-title" className={styles.h2}>
                סיפורים <span style={{ color: "#8bb6e1" }}>מהשטח</span>
              </h2>
              <p className={styles.storiesLead}>
                כאן תוכלו גם לגלות סיפורים חדשים, יוזמות, אירועים ופעילויות מהשטח, להכיר אנשים שמובילים שינוי,
                ולמצוא את המקום שלכם בעשייה. כי כל צעד קטן של הקשבה, חיבור או עשייה, יוצר עוד מעגל של אחדות.
              </p>
            </header>
            <ul className={styles.storyList}>
              {FIELD_STORIES.map((s) => {
                const visual = (
                  <div className={styles.storyVisual}>
                    <span
                      className={styles.storyBlob}
                      style={{ "--blob-dx": `${s.blobDx}px`, "--blob-dy": `${s.blobDy}px` } as React.CSSProperties}
                      aria-hidden="true"
                    >
                      <Image src="/home/story-blob.svg" alt="" width={557.532} height={548.504} />
                    </span>
                    <div className={styles.storyPhoto}>
                      <Image src={STORY_PHOTO.src} alt={STORY_PHOTO.alt} fill sizes="(max-width: 760px) 100vw, 450px" />
                    </div>
                  </div>
                );
                const text = (
                  <div className={styles.storyText}>
                    <p className={styles.storyDate}>{s.date}</p>
                    <h3 className={styles.storyTitle} style={{ color: s.color }}>
                      {s.title}
                    </h3>
                    <p className={styles.storyBlurb} dir="auto">
                      {s.text}
                    </p>
                  </div>
                );
                return (
                  <li key={s.id} className={`${styles.story} ${s.photoSide === "left" ? styles.storyPhotoLeft : ""}`}>
                    {s.photoSide === "right" ? (
                      <>
                        {visual}
                        {text}
                      </>
                    ) : (
                      <>
                        {text}
                        {visual}
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
            <PillButton href="/moments" icon={ARROW_LIGHT}>
              לעוד סיפורים מהשטח
            </PillButton>
          </div>
        </section>

        {/* ---------- ways to join ---------- */}
        <section className={styles.join} aria-labelledby="join-title">
          <header className={styles.joinHead}>
            <h2 id="join-title" className={styles.h2}>
              מוכנים להצטרף?
            </h2>
            <p className={styles.joinLead}>כל אחד יכול להתחיל מהמקום שמתאים לו. מה השביל שלך?</p>
          </header>
          {/* flat row so the dividers share the justify-between spacing, as in Figma */}
          <div className={styles.paths}>
            {JOIN_PATHS.map((p, i) => (
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
          <PillButton href={JOIN_HREF} icon={ARROW_LIGHT}>
            יוצאים לדרך
          </PillButton>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
