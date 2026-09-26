import PillButton from "@/components/PillButton";
import { HERO_STATS } from "./data";
import styles from "./HeroContent.module.css";

const ARROW_LIGHT = "/nominations/icon-arrow-light.svg";
const DONATE_HREF = "/donate";

type Props = {
  /** Where "התחילו את המסע" leads; on the homepage it's the journeys section below. */
  startHref?: string;
  panelClassName?: string;
  statsClassName?: string;
};

// The homepage hero's copy (the page's h1), its two CTAs and the stats row.
// Returned as two siblings so each layout can place them in its own column.
export default function HeroContent({ startHref = "#journeys", panelClassName, statsClassName }: Props) {
  return (
    <>
      <div className={panelClassName ? `${styles.panel} ${panelClassName}` : styles.panel}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            <span className={styles.kicker}>מתוך הכאב הגדול ביותר</span>{" "}
            <span className={styles.headline}>בחרנו באחדות</span>
          </h1>
          <p className={styles.lead}>זו הדרך שבה אנחנו ממשיכים לצמוח, להתחבר ולבנות יחד</p>
        </div>
        <div className={styles.actions}>
          <PillButton href={DONATE_HREF} icon={ARROW_LIGHT} className={`${styles.button} ${styles.ghost}`}>
            לתרומה
          </PillButton>
          <PillButton href={startHref} icon={ARROW_LIGHT} className={`${styles.button} ${styles.blue}`}>
            התחילו את המסע
          </PillButton>
        </div>
      </div>
      <ul className={statsClassName ? `${styles.stats} ${statsClassName}` : styles.stats}>
        {HERO_STATS.map((s) => (
          <li key={s.label} className={styles.stat}>
            <span className={styles.statValue} style={{ color: s.color }}>
              {s.value}
            </span>{" "}
            <span className={styles.statLabel}>{s.label}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
