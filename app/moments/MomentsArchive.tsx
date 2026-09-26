"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import PillButton from "@/components/PillButton";
import { MOMENT_TYPES, TONES, type Moment, type MomentType } from "./data";
import styles from "./MomentsArchive.module.css";

const FILTERS: { id: MomentType | "all"; label: string }[] = [
  { id: "all", label: "הכול" },
  ...MOMENT_TYPES.map(({ id, label }) => ({ id, label })),
];

export default function MomentsArchive({ moments }: { moments: Moment[] }) {
  const [filter, setFilter] = useState<MomentType | "all">("all");
  const visible = filter === "all" ? moments : moments.filter((m) => m.type === filter);

  return (
    <section className={styles.archive} aria-labelledby="archive-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 id="archive-title" className={styles.title}>
            ארכיון / מן התקשורת
          </h2>
          <div className={styles.filters} role="group" aria-label="סינון לפי סוג">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                className={f.id === filter ? `${styles.chip} ${styles.chipActive}` : styles.chip}
                aria-pressed={f.id === filter}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <ul className={styles.grid}>
          {visible.map((moment) => {
            const type = MOMENT_TYPES.find((t) => t.id === moment.type)!;
            return (
              <li
                key={moment.id}
                className={styles.card}
                style={{ "--tone": TONES[moment.tone] } as CSSProperties}
              >
                <div className={styles.media}>
                  <Image
                    src={moment.src}
                    alt={moment.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 390px"
                    className={styles.photo}
                  />
                  <span className={styles.fade} aria-hidden="true" />
                </div>
                <div className={styles.cardFooter}>
                  <a href={moment.href} className={styles.view} aria-label={`לצפייה: ${moment.alt}`}>
                    לצפייה
                  </a>
                  <span className={styles.type}>
                    {type.label}
                    <Image src={type.icon} alt="" width={32} height={32} />
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* TODO: page through the archive once it comes from the CMS */}
      <PillButton href="#">עוד רגעים</PillButton>
    </section>
  );
}
