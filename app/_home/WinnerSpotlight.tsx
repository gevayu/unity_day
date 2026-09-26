"use client";

import Image from "next/image";
import { useState } from "react";
import type { Spotlight } from "./data";
import styles from "./WinnerSpotlight.module.css";

// The yellow prize-winner card: one winner at a time, looping arrows.
export default function WinnerSpotlight({ winners }: { winners: Spotlight[] }) {
  const [index, setIndex] = useState(0);
  const count = winners.length;
  const go = (step: 1 | -1) => setIndex((i) => (i + step + count) % count);
  const w = winners[index];

  return (
    <div
      className={styles.card}
      role="group"
      aria-roledescription="קרוסלה"
      aria-label="זוכי הפרס"
      onKeyDown={(e) => {
        // RTL: the left arrow key moves forward
        if (e.key === "ArrowLeft") go(1);
        if (e.key === "ArrowRight") go(-1);
      }}
    >
      <div className={styles.photo}>
        {winners.map((item, i) => (
          <Image
            key={item.id}
            src={item.photo}
            alt={i === index ? item.alt : ""}
            fill
            sizes="(max-width: 900px) 100vw, 618px"
            className={i === index ? styles.current : styles.hidden}
            style={{ objectPosition: item.focus }}
            aria-hidden={i === index ? undefined : true}
          />
        ))}
        <span className={styles.fade} aria-hidden="true" />
      </div>

      <div className={styles.text} aria-live="polite">
        <h3 className={styles.name}>{w.name}</h3>
        <div className={styles.details}>
          <p className={styles.role}>{w.role}</p>
          <p className={styles.quote}>{w.quote}</p>
        </div>
      </div>

      {count > 1 && (
        <>
          {/* RTL: the right-hand arrow goes back, the left-hand one forward */}
          <button type="button" className={`${styles.arrow} ${styles.arrowPrev}`} onClick={() => go(-1)} aria-label="לזוכה הקודם">
            <Image src="/home/icon-chevron-right.svg" alt="" width={16} height={16} />
          </button>
          <button type="button" className={`${styles.arrow} ${styles.arrowNext}`} onClick={() => go(1)} aria-label="לזוכה הבא">
            <Image src="/home/icon-chevron-left.svg" alt="" width={16} height={16} />
          </button>
        </>
      )}
    </div>
  );
}
