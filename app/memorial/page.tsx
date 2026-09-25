import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "לזכר שלושת הנערים · יום האחדות",
  description:
    "לזכרם של איל יפרח, גיל-עד שער ונפתלי פרנקל ז״ל. ברוח האחדות שנוצרה במהלך ח״י הימים ששינו אותנו, נוצר יום האחדות.",
};

type Person = {
  id: string;
  name: string;
  bio: string;
  more: string;
  // TODO: link each card to the boy's own page once it exists.
  href: string;
  photo: { src: string; width: number; height: number; alt: string; crop: string };
  tone: "orange" | "green" | "blue";
  /** Right to left in the design: the photo sits on the right of this card. */
  photoFirst?: boolean;
};

// Top to bottom, as they sit on the page.
const PEOPLE: Person[] = [
  {
    id: "naftali",
    name: "נפתלי פרנקל ז״ל",
    bio: "נער של משפחה וחברות אמת, שחייו הקצרים הותירו חותם עמוק בלב משפחתו, חבריו ובקהילתו. נפתלי היה תלמיד חכם וסקרן שאוהב ללמוד, שחקן כדורסל נלהב, וחבר קרוב שתמיד היה עמוד התווך של הקהילה והחברים סביבו.",
    more: "עוד על נפתלי",
    href: "#",
    photo: {
      src: "/memorial/naftali-frenkel.jpg",
      width: 908,
      height: 1000,
      alt: "נפתלי פרנקל ז״ל מחייך",
      crop: "cropCover",
    },
    tone: "orange",
  },
  {
    id: "gilad",
    name: "גיל-עד שער ז״ל",
    bio: "נער מלא קסם שאהב את החיים, אנשים, מוסיקה ומילים. גיל-עד היה חבר נאמן, מדריך מסור וילד אהוב על משפחתו והשפעתו עליהם ניכרת עד היום.",
    more: "עוד על גיל-עד",
    href: "#",
    photo: {
      src: "/memorial/gilad-shaer.jpg",
      width: 1682,
      height: 2400,
      alt: "גיל-עד שער ז״ל מחייך בחולצה אדומה, על רקע צמחייה",
      crop: "cropGiladCard",
    },
    tone: "green",
    photoFirst: true,
  },
  {
    id: "eyal",
    name: "איל יפרח ז״ל",
    bio: "נער עם חיוך גדול ומאיר, לב רחב עם נתינה אינסופית, מנהיגות ואהבת אדם, שהקדיש מזמנו להתנדבות, להדרכה ולעשייה למען אחרים. איל, הבכור מבין שבעה אחים, הקדיש את זמנו הפנוי להתנדבות עם ילדים בעלי צרכים מיוחדים, להדרכת נוער ולעשייה חברתית ענפה, תוך שהוא סוחף אחריו אחרים ברוחב לב ובאנרגיה מדבקת.",
    more: "עוד על איל",
    href: "#",
    photo: {
      src: "/memorial/eyal-yifrach.jpg",
      width: 450,
      height: 678,
      alt: "איל יפרח ז״ל מחייך",
      crop: "cropEyalCard",
    },
    tone: "blue",
  },
];

export default function MemorialPage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* ---------- hero ---------- */}
        <section className={styles.hero}>
          <Image src="/memorial/hero.jpg" alt="" fill priority sizes="100vw" className={styles.heroImage} />
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>לזכרם</h1>
            <p className={styles.heroNames}>
              איל יפרח, גיל-עד שער
              <br />
              ונפתלי פרנקל ז״ל
            </p>
            <p className={styles.heroLead}>
              לזכרם וברוח האחדות שנוצרה במהלך ח”י הימים
              <br />
              ששינו אותנו, נוצר יום האחדות.
            </p>
          </div>
        </section>

        {/* ---------- intro ---------- */}
        <section className={styles.intro} aria-labelledby="intro-title">
          <span className={styles.introBlob} aria-hidden="true" />
          <div className={styles.introCard}>
            <div className={styles.introPhoto}>
              <Image
                src="/memorial/intro-gathering.jpg"
                alt="צעירים עומדים חבוקים זה בזה במפגש באולם, מול במה"
                fill
                sizes="(max-width: 900px) 100vw, 745px"
              />
            </div>
            <div className={styles.introText}>
              <h2 id="intro-title" className={styles.introTitle}>
                איל יפרח, גיל-עד שער ונפתלי פרנקל ז״ל
              </h2>
              <div className={styles.introBody}>
                <p>
                  יש זיכרונות שנשארים בלב, ויש זכרונות שהופכים לחיבורים בין אנשים.
                  <br />
                  בקיץ 2014, במשך 18 ימים, מדינה שלמה עצרה את נשימתה וחיפשה את איל יפרח, גיל-עד שער
                  ונפתלי פרנקל. לרגע, שלושה נערים שלא הכרנו הפכו לילדים של כולנו. אנשים שלא הכירו זה
                  את זה מצאו את עצמם מחכים, דואגים ומתפללים יחד. וכך, לצד הכאב והדאגה, נולדה תחושת
                  אחדות יוצאת דופן - רבבות אנשים מכל חלקי החברה בישראל ומיהדות התפוצות מעורבים
                  ודואגים לאותו גורל.
                </p>
                <p>
                  שלושת הנערים לא שבו הביתה.
                  <br />
                  אבל מתוך האובדן והכאב הגדול נולד כוח חדש - כוח של חיבור, עשייה וערבות הדדית. במהרה
                  הוא הפך ליום האחדות - יום שנולד מתוך הזיכרון ומבקש לשמר את רוח הסולידריות והערבות
                  ההדדית שהקיפה את ישראל ואת יהדות התפוצות באותם 18 ימים, ולהפוך אותה לחלק מהחיים
                  שלנו, בישראל ובעולם היהודי.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- three boys ---------- */}
        <section className={styles.boys} aria-labelledby="boys-title">
          <div className={styles.boysInner}>
            <div className={styles.boysHead}>
              <div className={styles.boysIntro}>
                <h2 id="boys-title" className={styles.boysTitle}>
                  שלושה נערים.
                  <br />
                  מפגש גורלי ששינה הכול.
                </h2>
                <p className={styles.boysText}>
                  גיל-עד שער, נפתלי פרנקל ואיל יפרח היו שלושה נערים צעירים, עם חיים משלהם, משפחה,
                  חברים, חלומות ותוכניות לעתיד, הם לא ידעו שמפגש מקרי במקום אחד ישנה את חייהם לנצח.
                  גיל-עד ונפתלי, בני 16, היו חברים טובים שלמדו יחד בישיבת מקור חיים, איל, בן 19, למד
                  בישיבת שבי חברון. שלושתם יצאו באותו ערב בדרכם הביתה, כל אחד ליעדו, לביתו האהוב
                  והבטוח.
                </p>
              </div>
              <div className={styles.heart} aria-hidden="true">
                <Image src="/memorial/illustration-heart.svg" alt="" width={560.958} height={269.999} />
              </div>
            </div>

            <div className={styles.boysPhotos}>
              {/* right to left: Naftali, Eyal, Gil-ad */}
              <ul className={styles.portraits}>
                <li className={styles.portrait}>
                  <div className={`${styles.portraitFrame} ${styles.portraitYellow}`}>
                    <Image
                      src="/memorial/naftali-frenkel.jpg"
                      alt="נפתלי פרנקל ז״ל מחייך"
                      fill
                      sizes="(max-width: 760px) 100vw, 381px"
                      className={styles.cropCover}
                    />
                  </div>
                </li>
                <li className={styles.portrait}>
                  <div className={`${styles.portraitFrame} ${styles.portraitBlue}`}>
                    <Image
                      src="/memorial/eyal-yifrach.jpg"
                      alt="איל יפרח ז״ל מחייך, על רקע כחול"
                      width={450}
                      height={678}
                      sizes="441px"
                      className={styles.cropEyal}
                    />
                  </div>
                </li>
                <li className={styles.portrait}>
                  <div className={`${styles.portraitFrame} ${styles.portraitGreen}`}>
                    <Image
                      src="/memorial/gilad-shaer.jpg"
                      alt="גיל-עד שער ז״ל מחייך בחולצה אדומה, על רקע צמחייה"
                      width={1682}
                      height={2400}
                      sizes="1052px"
                      className={styles.cropGilad}
                    />
                  </div>
                </li>
              </ul>
              <div className={styles.boysQuote}>
                <p>
                  ב-12 ביוני, בדרכם הביתה לשבת, גיל-עד ונפתלי נפגשו עם איל בטרמפיאדה בגוש עציון -
                  מפגש מקרי לגמרי. השלושה עלו יחד לטרמפ, מבלי לדעת שהנסיעה הזו תהיה הפעם האחרונה שלהם
                  בחיים.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- "they took me" (blue wave) ---------- */}
        <section className={styles.wave} aria-labelledby="kidnap-title">
          <Image
            src="/nominations/wave.png"
            alt=""
            width={2500}
            height={500}
            sizes="2500px"
            className={styles.waveBg}
          />
          <div className={styles.waveContent}>
            <h2 id="kidnap-title" className={styles.waveTitle}>
              &quot;חטפו אותי!&quot;
            </h2>
            <p className={styles.waveText}>
              זמן קצר לאחר תחילת הנסיעה גיל-עד הבין שמדובר בחטיפה ולמרות הסכנה העצומה, הוא הוציא
              בחשאי את מכשיר הנייד שלו, חייג למשטרה ולחש למוקדן &quot;חטפו אותי&quot;. זה היה אות החיים
              האחרון, רגע שהפך עם השנים לאחד הסמלים המזוהים ביותר עם סיפורם של שלושת הנערים.
            </p>
          </div>
        </section>

        {/* ---------- eighteen days ---------- */}
        <section className={styles.days}>
          <div className={styles.daysRow}>
            <p className={styles.daysText}>
              השלושה נחטפו בידי מחבלי חמאס.
              <br />
              ח״י ימים מדינה שלמה חיכתה לבשורה אחרת. משפחות, חברים והמוני אנשים בישראל ובעולם היהודי
              התפללו, חיפשו וקיוו לשובם של השלושה, שבין לילה הפכו לסיפור של כולנו - סיפור שחיבר
              אנשים שלא הכירו זה את זה, קהילות שהיו רחוקות זו מזו, ועם שלם שהתכנס סביב תקווה אחת.
            </p>
            <div className={styles.daysMedia}>
              <span className={styles.daysBlob} aria-hidden="true" />
              <div className={styles.daysPhoto}>
                <Image
                  src="/memorial/western-wall.jpg"
                  alt="המונים מתפללים ברחבת הכותל המערבי"
                  width={640}
                  height={460}
                  sizes="(max-width: 900px) 100vw, 690px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------- mourning (green wave) ---------- */}
        <section className={`${styles.wave} ${styles.waveGreen}`}>
          <Image
            src="/memorial/wave-green.png"
            alt=""
            width={2500}
            height={500}
            sizes="2500px"
            className={styles.waveBg}
          />
          <div className={styles.waveContent}>
            <p className={styles.waveLead}>
              ב-30 ביוני 2014, נמצאו גופותיהם של השלושה, והתקווה הגדולה הפכה לאבל לאומי עמוק.
              <br />
              המדינה כולה התמודדה עם האובדן, אך 18 הימים שבהם חיפשו אחריהם כבר הותירו חותם עמוק -
              זיכרון של חברה שלמה שהתכנסה סביב שלושה נערים, ושל אנשים שבחרו להיות שם זה עבור זה.
            </p>
          </div>
        </section>

        {/* ---------- three lives ---------- */}
        <section className={styles.lives} aria-labelledby="lives-title">
          <div className={styles.livesInner}>
            <div className={styles.livesHead}>
              <h2 id="lives-title" className={styles.livesTitle}>
                שלושה נערים.
                <br />
                שלושה עולמות.
                <br />
                זיכרון אחד.
              </h2>
              <div className={styles.livesLead}>
                <p>
                  גיל-עד, איל ונפתלי היו שלושה נערים שונים זה מזה. צעירים, מלאי חיים, שהיו בדרכם הביתה -
                  וחייהם נגדעו באחת.
                </p>
                <p>
                  היום אנחנו מבקשים לזכור אותם לא רק דרך היום שבו נלקחו מאיתנו, אלא גם דרך חייהם: דרך
                  מי שהיו, האנשים שאהבו, הדברים שהאמינו בהם והטוב שהשאיר כל אחד מהם אחריו.
                </p>
              </div>
            </div>

            <div className={styles.people}>
              {PEOPLE.map((p) => {
                const photo = (
                  <div className={styles.personPhoto}>
                    <Image
                      src={p.photo.src}
                      alt={p.photo.alt}
                      width={p.photo.width}
                      height={p.photo.height}
                      sizes="(max-width: 760px) 100vw, 773px"
                      className={styles[p.photo.crop]}
                    />
                  </div>
                );
                return (
                  <article
                    key={p.id}
                    className={`${styles.person} ${styles[p.tone]}`}
                    aria-labelledby={`person-${p.id}`}
                  >
                    {p.photoFirst && photo}
                    <div className={styles.personBody}>
                      <div className={styles.personText}>
                        <h3 id={`person-${p.id}`} className={styles.personName}>
                          {p.name}
                        </h3>
                        <p className={styles.personBio}>{p.bio}</p>
                      </div>
                      <a href={p.href} className={styles.personLink}>
                        {p.more}
                      </a>
                    </div>
                    {!p.photoFirst && photo}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---------- remembering, connecting, continuing ---------- */}
        <section className={styles.closing} aria-labelledby="closing-title">
          <span className={styles.closingBlob} aria-hidden="true" />
          <div className={styles.closingRow}>
            <div className={styles.closingPanel}>
              <div className={styles.closingContent}>
                <div className={styles.closingHead}>
                  <h2 id="closing-title" className={styles.closingTitle}>
                    זוכרים.
                    <br />
                    מחברים.
                    <br />
                    ממשיכים.
                  </h2>
                  <Image
                    src="/memorial/illustration-candle.svg"
                    alt=""
                    aria-hidden="true"
                    width={141.892}
                    height={190.002}
                    className={styles.candle}
                  />
                </div>
                <div className={styles.closingBody}>
                  <p>
                    הזיכרון של איל, גיל-עד ונפתלי חוצה גבולות. בישראל ובעולם היהודי נולדו לאורך השנים
                    עשרות יוזמות, מפגשים ומעשי הנצחה שמספרים את סיפורם וממשיכים את הערכים שהפכו את שלושת
                    הנערים לסמל של חיבור והידברות בין אנשים.
                  </p>
                  <p>
                    הנצחה היא לא רק להביט לאחור.
                    <br />
                    היא הבחירה לקחת את מה שהשאירו אחריהם, ולתת לו להמשיך לחיות - באנשים, במעשים
                    ובבחירות שאנחנו עושים יום יום - לעוד מפגש, לעוד חיבור, לעוד דיאלוג.
                    <br />
                    ח״י ימים שהוכיחו לנו כמה אנחנו יכולים להיות יחד.
                    <br />
                    עכשיו הגיע הזמן להפוך את הרגע ההוא לדרך.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.closingPhoto}>
              <Image src="/memorial/closing-sunset.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 750px" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
