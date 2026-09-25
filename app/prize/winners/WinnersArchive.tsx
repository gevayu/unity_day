"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import PillButton from "@/components/PillButton";
import { TONES, WINNER_YEARS, type Winner, type WinnerYear } from "./winners";
import styles from "./WinnersArchive.module.css";

// Year chips toggle a filter; with none pressed every winner is listed.
export default function WinnersArchive({ winners }: { winners: Winner[] }) {
  const [year, setYear] = useState<WinnerYear | null>(null);
  const visible = year === null ? winners : winners.filter((w) => w.year === year);

  return (
    <div className={styles.archive}>
      <div className={styles.toolbar}>
        <div className={styles.years} role="group" aria-label="סינון לפי שנת זכייה">
          {WINNER_YEARS.map((y) => (
            <button
              key={y}
              type="button"
              className={y === year ? `${styles.chip} ${styles.chipActive}` : styles.chip}
              aria-pressed={y === year}
              aria-controls="winners-grid"
              onClick={() => setYear(y === year ? null : y)}
            >
              {y}
            </button>
          ))}
        </div>
        <PillButton href="/prize/nominations">להגשת מועמדות</PillButton>
      </div>

      <div id="winners-grid" className={styles.results} aria-live="polite">
        {visible.length > 0 ? (
          <ul className={styles.grid}>
            {visible.map((w) => (
              <li key={w.id} className={styles.card} style={{ "--tone": TONES[w.tone] } as CSSProperties}>
                <div className={styles.media}>
                  <Image
                    src={w.src}
                    alt={w.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 429px"
                    className={styles.photo}
                  />
                  <span className={styles.fade} aria-hidden="true" />
                  <span className={styles.badge}>{w.year}</span>
                </div>
                <div className={styles.body}>
                  <p className={styles.category}>{w.category}</p>
                  <h3 className={styles.name}>{w.name}</h3>
                  <p className={styles.description}>{w.description}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>עדיין אין זוכים להצגה בשנה הזו.</p>
        )}
      </div>

      {/* TODO: page through the full winners archive once it comes from the CMS */}
      <PillButton href="#">עוד זוכים</PillButton>
    </div>
  );
}
