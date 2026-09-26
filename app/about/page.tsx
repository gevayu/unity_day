import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PillButton from "@/components/PillButton";
import { CIRCLES, TEAM_LEAD_SLOTS, TEAM_ROWS } from "./data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "אודות העמותה · יום האחדות",
  description:
    "עמותת יום האחדות היא תנועה חברתית הפועלת לחיזוק האחדות והחוסן החברתי בישראל וליצירת חיבורים בין קהילות, קבוצות ואנשים בארץ ובעולם.",
};

// TODO: point at the join / "get involved" page once it exists.
const JOIN_HREF = "#";
const ARROW = "/nominations/icon-arrow-light.svg";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main id="main" tabIndex={-1}>
        {/* ---------- hero ---------- */}
        <section className={styles.hero}>
          <Image src="/gallery/photo-5.jpg" alt="" fill priority sizes="100vw" className={styles.heroImage} />
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                <span>לא רק לדבר על אחדות.</span>
                <span>להפוך אותה למעשה.</span>
              </h1>
              <p className={styles.heroLead}>
                עמותת יום האחדות היא תנועה חברתית הפועלת לחיזוק האחדות והחוסן החברתי בישראל וליצירת
                חיבורים בין קהילות, קבוצות ואנשים בארץ ובעולם. העמותה פועלת לקידום שיח, מפגשים ושותפויות,
                ומעניקה במה ליוזמות ולאנשים שהופכים את ערך האחדות לעשייה שיש לה השפעה.
              </p>
            </div>
            <div className={styles.heroActions}>
              <PillButton href="#mission" icon={ARROW} className={styles.heroGhost}>
                קראו עוד
              </PillButton>
              <PillButton href={JOIN_HREF} icon={ARROW} className={styles.heroPrimary}>
                הצטרפו למסע
              </PillButton>
            </div>
          </div>
        </section>

        {/* ---------- from memory, a mission ---------- */}
        <section id="mission" className={styles.mission} aria-labelledby="mission-title">
          <div className={styles.missionCard}>
            <div className={styles.missionPhoto}>
              <Image
                src="/about/memory-friends.jpg"
                alt="שלושה חברים מחייכים ומחובקים על רקע כתום"
                fill
                sizes="(max-width: 900px) 100vw, 650px"
              />
              <span className={styles.missionFade} aria-hidden="true" />
            </div>
            <div className={styles.missionText}>
              <h2 id="mission-title" className={styles.title}>
                <span>מהזיכרון</span>
                <span className={styles.accentGold}>נולדה שליחות</span>
              </h2>
              <div className={styles.body}>
                <p>
                  בקיץ 2014, במהלך 18 ימי החיפושים אחר איל יפרח, גיל-עד שער ונפתלי פרנקל, נחשפה עוצמתה של
                  חברה שלמה שהתלכדה סביב דאגה אחת משותפת. רבבות אנשים מכל רחבי הארץ התגייסו, קהילות
                  נרתמו, והגבולות שבדרך כלל מפרידים בין קבוצות שונות היטשטשו לרגע.
                </p>
                <p>
                  מתוך אותה חוויה הגיעה ההחלטה לא להניח לרוח הזו להישאר כזיכרון של תקופה אחת, אלא להפוך
                  אותה למנוף חברתי של שותפויות וקשרים בין אנשים וקהילות. משפחות הנערים והשותפים לדרך
                  ביקשו ליצור מסגרת שתמשיך לטפח את תחושת הערבות ההדדית גם בשגרה, ולא רק בשעת משבר. כך
                  נולדה עמותת יום האחדות, שהפכה עם השנים ממיזם שנוסד ברגע לאומי מכונן לתנועה חברתית רחבה.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- unity is not uniformity ---------- */}
        <section className={styles.unity} aria-labelledby="unity-title">
          <div className={styles.unityRow}>
            <div className={styles.unityText}>
              <h2 id="unity-title" className={`${styles.title} ${styles.titleInline}`}>
                אחדות אינה <span className={styles.accentGreen}>אחידות</span>
              </h2>
              <div className={styles.body}>
                <p>
                  אחדות אינה דורשת ויתור על השונות. החברה הישראלית מורכבת מקבוצות, זהויות, אמונות ודעות
                  שונות. דווקא בתוך המגוון הזה מבקשת העמותה ליצור אפשרויות למפגשים: מקום שבו אפשר להקשיב
                  גם כשלא מסכימים, להכיר גם כשמגיעים מרקעים שונים ולמצוא בסיס משותף שמאפשר לפעול יחד.
                </p>
                <p>
                  אחדות אינה מצב נתון אלא בחירה מתמשכת, והיא נבנית דרך קשר בין אנשים, אחריות הדדית
                  ומוכנות לראות את האדם שמאחורי השוני.
                </p>
              </div>
            </div>
            <div className={styles.globe}>
              <Image src="/about/globe.png" alt="" width={1074} height={768} sizes="537px" />
            </div>
          </div>
        </section>

        {/* ---------- from idea to impact ---------- */}
        <section className={styles.idea} aria-labelledby="idea-title">
          <div className={styles.ideaCard}>
            <div className={styles.ideaText}>
              <h2 id="idea-title" className={`${styles.title} ${styles.ideaTitle}`}>
                <span>מהרעיון להשפעה,</span>
                <span className={styles.accentGreen}>תנועה שנבנית לאורך כל השנה</span>
              </h2>
              <div className={styles.body}>
                <p>
                  עמותת יום האחדות פועלת לאורך כל השנה לחיזוק האחדות בחברה הישראלית, ליצירת הזדמנויות
                  לחיבור, לחיזוק יוזמות חברתיות וליצירת מרחבים שבהם אנשים וקבוצות שונות יכולים להיפגש,
                  להכיר ולפעול יחד. הפעילויות מתקיימות במרחבי החינוך, הקהילה והחברה, בשיתוף בתי ספר,
                  ארגונים, רשויות, קהילות וגופים בישראל ובעולם היהודי.
                </p>
                <p>
                  לצד יצירת יוזמות חדשות, העמותה מחברת בין אנשים, ארגונים ומיזמים שכבר פועלים בשטח,
                  ומסייעת להם להרחיב את מעגלי ההשפעה שלהם. וכך נוצרה עם השנים רשת הולכת וגדלה של שותפים
                  לעשייה, רשת שמחזקת את הקשרים בין חלקים שונים בחברה ומאפשרת לרעיונות טובים להפוך לתנועה
                  של ממש.
                </p>
              </div>
              {/* TODO: point at an activities page once it exists; for now it jumps to the circles below. */}
              <PillButton href="#circles" icon={ARROW}>
                גלו את הפעילות שלנו
              </PillButton>
            </div>
            {/* right to left: orange, green, blue backdrops */}
            <div className={styles.strips} aria-hidden="true">
              <div className={styles.strip}>
                <Image
                  src="/about/idea-3.jpg"
                  alt=""
                  width={2400}
                  height={774}
                  sizes="2360px"
                  className={styles.stripZoom}
                />
              </div>
              <div className={styles.strip}>
                <Image src="/about/idea-2.jpg" alt="" fill sizes="1200px" className={styles.stripMiddle} />
              </div>
              <div className={styles.strip}>
                <Image src="/about/idea-1.jpg" alt="" fill sizes="1490px" className={styles.stripLeft} />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- when a value becomes action ---------- */}
        <section id="circles" className={styles.circles} aria-labelledby="circles-title">
          <Image
            src="/about/cloud-outline.svg"
            alt=""
            aria-hidden="true"
            width={403.227}
            height={156.583}
            className={styles.cloudOutline}
          />
          <Image
            src="/about/cloud-filled.svg"
            alt=""
            aria-hidden="true"
            width={412.345}
            height={155.71}
            className={styles.cloudFilled}
          />
          <div className={styles.sectionHead}>
            <h2 id="circles-title" className={styles.title}>
              כשערך הופך לעשייה
            </h2>
            <p className={styles.sectionLead}>
              הפעילות של העמותה מתמקדת בכמה מעגלים מרכזיים, המדגישים את ערך האחדות ומעודדים לעשייה קבועה,
              מתמשכת ומתפתחת.
            </p>
          </div>
          <ul className={styles.circleGrid}>
            {CIRCLES.map((c) => {
              const photo = (
                <div className={styles.circlePhoto}>
                  <Image src={c.photo.src} alt={c.photo.alt} fill sizes="(max-width: 760px) 100vw, 318px" />
                </div>
              );
              return (
                <li key={c.id} className={styles.circleCol}>
                  {c.photoFirst && photo}
                  <div
                    className={`${styles.circleCard} ${styles[c.tone]}`}
                    style={{ "--card-h": `${c.textHeight}px` } as CSSProperties}
                  >
                    <h3 className={styles.circleTitle}>{c.title}</h3>
                    <p className={`${styles.circleText} ${c.narrowText ? styles.circleTextNarrow : ""}`}>
                      {c.text}
                    </p>
                  </div>
                  {!c.photoFirst && photo}
                </li>
              );
            })}
          </ul>
        </section>

        {/* ---------- from national pain to an Israeli tradition ---------- */}
        <section className={styles.tradition} aria-labelledby="tradition-title">
          <Image
            src="/about/tradition-line.svg"
            alt=""
            aria-hidden="true"
            width={921.323}
            height={330.954}
            className={styles.traditionLine}
          />
          <div className={styles.traditionRow}>
            <div className={styles.traditionMedia}>
              <div className={styles.traditionPhoto}>
                <Image
                  src="/about/tradition-kids.jpg"
                  alt="ילדים מושכים יחד בחבל במשחק משיכת חבל"
                  fill
                  sizes="(max-width: 900px) 100vw, 611px"
                />
              </div>
            </div>
            <div className={styles.traditionText}>
              <h2 id="tradition-title" className={styles.title}>
                <span>מכאב לאומי</span>
                <span className={styles.accentGold}>למסורת ישראלית</span>
              </h2>
              <p className={styles.bodyText}>
                מה שנולד בימים שבהם הלב של המדינה פעם יחד, הפך עם השנים למסורת ישראלית של ממש. אחד הביטויים
                הבולטים לכך הוא פרס ירושלים לאחדות ישראל, המעניק מדי שנה הכרה לאנשים, ארגונים ויוזמות
                שפועלים לחיזוק החברה הישראלית והעם היהודי. טקס הענקת הפרס הפך לאירוע מרכזי בבית הנשיא,
                במעמד נשיא המדינה ובברכתו, עדות חיה לכך שרוחה של אותה תקופה ממשיכה לחיות, להתחדש ולהשפיע
                גם היום.
              </p>
              <PillButton href="/prize/nominations" icon={ARROW}>
                עוד על פרס ירושלים לאחדות
              </PillButton>
            </div>
          </div>
          <Image
            src="/about/bunting.svg"
            alt=""
            aria-hidden="true"
            width={543.828}
            height={167.879}
            className={styles.bunting}
          />
        </section>

        {/* ---------- Bat Galim and Ofir Shaer ---------- */}
        <section className={styles.founders} aria-labelledby="founders-title">
          <div className={styles.foundersWrap}>
            <div className={styles.foundersCard}>
              <Image
                src="/about/founders-rings.svg"
                alt=""
                aria-hidden="true"
                width={1323.54}
                height={709}
                className={styles.rings}
              />
              <div className={styles.foundersText}>
                <h2 id="founders-title" className={`${styles.title} ${styles.foundersTitle}`}>
                  <span>בת גלים ואופיר שער,</span>
                  <span className={styles.accentAmber}>רוח האחדות</span>
                </h2>
                <div className={`${styles.body} ${styles.foundersBody}`}>
                  <p>
                    מאחורי עמותת יום האחדות עומדים בת גלים ואופיר שער, הוריו של גיל-עד שער ז״ל. מאז 2014 הם
                    בוחרים לתרגם את הכאב לשליחות של חיבור, אחדות ותקווה, והם נמנים עם מייסדי העמותה, מייסדי
                    מיזם יום האחדות ומובילי פרס ירושלים לאחדות ישראל. בני הזוג שער פועלים לאורך השנים מתוך
                    אמונה בכוחם של חיבור, אופטימיות וערבות הדדית לחיזוק החברה הישראלית והעם היהודי בארץ
                    ובעולם, דווקא בתקופות של משבר, אי-ודאות ואתגרים גדולים.
                  </p>
                  <p>
                    בת גלים שער, יו&quot;ר העמותה מאז הקמתה, עוסקת בחינוך למעלה משני עשורים. היא בעלת תואר
                    ראשון במדע המדינה והיסטוריה ותואר שני במנהל חינוכי, מרצה בארץ ובעולם ושותפה לקידום יוזמות
                    ופרויקטים המחברים בין אנשים, קהילות וחלקים שונים בחברה הישראלית ובעולם היהודי. אופיר
                    שער, עורך דין ורואה חשבון, בעל משרד בתחום המיסוי, שותף להובלת פעילות העמותה ולפיתוח
                    יוזמותיה. הסיפור של יום האחדות שזור בסיפורן של שלוש משפחות הנערים, שבחרו להפוך את הכאב
                    והאובדן למקור של חיבור, תקווה ואחריות משותפת. פועלן למען האחדות והחיבורים בחברה
                    הישראלית ובעולם היהודי זכה להכרה לאומית, כאשר שלוש האימהות זכו להדליק משואה ביום
                    העצמאות בשנת 2019. הרוח הזו ממשיכה לפעום ביום האחדות, שמחבר בין אנשים, קהילות וקבוצות
                    ומזמין את כולנו לבחור באחדות גם בשגרה.
                  </p>
                </div>
              </div>
              {/* PLACEHOLDER: stock photo from the design; replace with a photo of Bat Galim and Ofir Shaer. */}
              <div className={styles.foundersPhoto}>
                <Image src="/about/founders.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 650px" />
                <span className={styles.foundersFade} aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- the people behind the work ---------- */}
        <section className={styles.people} aria-labelledby="people-title">
          <div className={styles.sectionHead}>
            <h2 id="people-title" className={styles.title}>
              האנשים שמאחורי העשייה
            </h2>
            <p className={`${styles.sectionLead} ${styles.peopleLead}`}>
              מאחורי פעילות העמותה עומדים מייסדים, הנהלה וצוות הפועלים לאורך השנה מתוך שליחות, קירוב ואהבת
              הזולת, על מנת להפוך את חזון האחדות לעשייה חברתית מתמשכת ופורה.
            </p>
          </div>
          {/* PLACEHOLDER: empty cards, as in the design (see data.ts) */}
          <div className={styles.team}>
            <ul className={styles.teamLead}>
              {Array.from({ length: TEAM_LEAD_SLOTS }, (_, i) => (
                <li key={i} className={styles.teamCard} />
              ))}
            </ul>
            <div className={styles.teamRows}>
              {TEAM_ROWS.map((count, row) => (
                <ul key={row} className={styles.teamRow}>
                  {Array.from({ length: count }, (_, i) => (
                    <li key={i} className={`${styles.teamCard} ${styles.teamCardSmall}`} />
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- the journey continues ---------- */}
        <section className={styles.journey} aria-labelledby="journey-title">
          <Image
            src="/about/plane.svg"
            alt=""
            aria-hidden="true"
            width={178.339}
            height={87.467}
            className={styles.plane}
          />
          <Image
            src="/about/cloud-small.svg"
            alt=""
            aria-hidden="true"
            width={139.9}
            height={52.829}
            className={styles.cloudSmall}
          />
          <Image
            src="/about/cloud-large.svg"
            alt=""
            aria-hidden="true"
            width={259.724}
            height={98.0768}
            className={styles.cloudLarge}
          />
          <Image
            src="/about/cloud-medium.svg"
            alt=""
            aria-hidden="true"
            width={222.008}
            height={83.8344}
            className={styles.cloudMedium}
          />
          <div className={styles.journeyText}>
            <h2 id="journey-title" className={styles.title}>
              <span>המסע</span>
              <span className={styles.accentBlue}>ממשיך</span>
            </h2>
            <div className={`${styles.body} ${styles.journeyBody}`}>
              <p>
                מאז הקמתה פועלת עמותת יום האחדות כדי לחזק את מה שמחבר בין אנשים, לעודד עשייה משותפת ולתת
                במה למי שבוחרים לבנות חברה מחוברת יותר, חזקה יותר ואוהבת הרבה יותר. החזון הוא חברה שבה
                השונות אינה מחלישה את תחושת השייכות, אלא מתקיימת לצדה, ומתוכה נוצרים מפגש, אחריות ושותפות.
              </p>
              <p>
                המסע ממשיך. עכשיו תורכם לקחת בו חלק. הכירו את הדרכים שבהן אפשר להפוך את רעיון האחדות
                למעשה.
              </p>
            </div>
            <div className={styles.journeyActions}>
              <PillButton href={JOIN_HREF} icon={ARROW} className={styles.journeyPrimary}>
                הצטרפו למסע
              </PillButton>
              <PillButton href="/unity-day" variant="light" className={styles.journeyOutline}>
                למדו עוד על יום האחדות
              </PillButton>
            </div>
          </div>
          <Image
            src="/about/skyline.svg"
            alt=""
            aria-hidden="true"
            width={1200.56}
            height={225.104}
            className={styles.skyline}
          />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
