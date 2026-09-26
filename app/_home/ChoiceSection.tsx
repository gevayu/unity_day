import Image from "next/image";
import PillButton from "@/components/PillButton";
import Divider from "./Divider";
import shared from "./shared.module.css";
import styles from "./ChoiceSection.module.css";

// "כשזיכרון הופך לבחירה": the section under the homepage hero. Also rendered
// under each hero exploration in /lab.
export default function ChoiceSection() {
  return (
    <section className={styles.section} aria-labelledby="choice-title">
      <div className={styles.card}>
        <span className={`${shared.blob} ${styles.blob}`} aria-hidden="true" />
        <div className={styles.photo}>
          <Image
            src="/winners/about.jpg"
            alt="צעירה בחולצת פסים מצלמת חברים ביער"
            fill
            sizes="(max-width: 900px) 100vw, 650px"
          />
          <span className={`${shared.fade} ${styles.fade}`} aria-hidden="true" />
        </div>
        <div className={styles.text}>
          <div className={styles.copy}>
            <h2 id="choice-title" className={shared.h2}>
              כשזיכרון הופך <span style={{ color: "#3692d0" }}>לבחירה</span>
            </h2>
            <p>
              בקיץ 2014 עצרה מדינת ישראל את נשימתה. חטיפתם של הנערים איל יפרח, גיל-עד שער ונפתלי פרנקל
              הובילה ל-18 ימי חיפושים. ח״י ימים שבהם, דווקא מתוך הכאב והחרדה, התגלתה עוצמת החיים
              המשותפים שלנו. באותם ימים התגייסו רבבות אנשים מכל חלקי העם מתוך תחושת ערבות הדדית ואחדות
              שפעמה בכל חלקי הארץ.
            </p>
            <div className={styles.quote}>
              <Divider src="/home/divider-quote.svg" length={46} thickness={2} />
              <p>איך שומרים על רוח האחדות גם כשהכאב נשאר והשגרה חוזרת?</p>
            </div>
            <p>
              אפשר היה להשאיר את הרוח הזו כזיכרון של משבר, אנחנו בחרנו אחרת. מתוך אותה אחדות צמחה תנועה
              חיה שפועלת עד היום לחבר בין אנשים, לעודד יוזמות ולהפוך את רוח הערבות ההדדית לעשייה. את
              העבר אי אפשר לשנות, אבל אפשר לבחור מה יוולד ממנו.
            </p>
          </div>
          <PillButton
            href="/memorial"
            variant="light"
            icon="/nominations/icon-arrow-dark.svg"
            className={styles.button}
          >
            לסיפור המלא של 18 הימים
          </PillButton>
        </div>
      </div>
    </section>
  );
}
