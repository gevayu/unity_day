"use client";

import Image from "next/image";
import { useState } from "react";
import PillButton from "@/components/PillButton";
import { CATEGORIES, YEARS, type Category, type WinnerStory, type Year } from "./data";
import styles from "./WinnerStories.module.css";

const ALL = "הכל";

// TODO: point at the next page of the winners archive once it comes from the CMS.
const MORE_WINNERS_HREF = "#";

type ChipRowProps<T extends string> = {
  id: string;
  label: string;
  options: readonly T[];
  value: T | typeof ALL;
  onChange: (value: T | typeof ALL) => void;
};

function ChipRow<T extends string>({ id, label, options, value, onChange }: ChipRowProps<T>) {
  return (
    <div className={styles.filterRow} role="group" aria-labelledby={id}>
      <span id={id} className={styles.filterLabel}>
        {label}
      </span>
      <div className={styles.chips}>
        {([ALL, ...options] as const).map((option) => {
          const active = option === value;
          return (
            <button
              key={option}
              type="button"
              className={active ? `${styles.chip} ${styles.chipActive}` : styles.chip}
              aria-pressed={active}
              aria-controls="winner-stories"
              onClick={() => onChange(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Year and category chips filter the list; the cards alternate sides and
// backdrop colours by their position in what's shown.
export default function WinnerStories({ stories }: { stories: WinnerStory[] }) {
  const [year, setYear] = useState<Year | typeof ALL>(ALL);
  const [category, setCategory] = useState<Category | typeof ALL>(ALL);

  const visible = stories.filter(
    (s) => (year === ALL || s.year === year) && (category === ALL || s.category === category),
  );

  return (
    <div className={styles.browser}>
      <div className={styles.filters}>
        <ChipRow id="winners-year" label="שנת זכייה" options={YEARS} value={year} onChange={setYear} />
        <ChipRow
          id="winners-category"
          label="קטגוריה"
          options={CATEGORIES}
          value={category}
          onChange={setCategory}
        />
      </div>

      <div id="winner-stories" className={styles.results} aria-live="polite">
        {visible.length > 0 ? (
          <ul className={styles.list}>
            {visible.map((s) => (
              <li key={s.id} className={styles.card}>
                <div className={styles.visual}>
                  <span className={styles.blob} aria-hidden="true" />
                  <div className={styles.photo}>
                    <Image
                      src={s.photo.src}
                      alt={s.photo.alt}
                      fill
                      sizes="(max-width: 760px) 100vw, 450px"
                      style={s.photo.position ? { objectPosition: s.photo.position } : undefined}
                    />
                  </div>
                </div>
                <div className={styles.text}>
                  <div className={styles.copy}>
                    <p className={styles.kicker}>פרס ירושלים לאחדות ישראל · {s.year}</p>
                    <div className={styles.head}>
                      <h2 className={styles.title}>{s.title}</h2>
                      <div className={styles.excerpt}>
                        {s.excerpt.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <PillButton href={s.href} icon="/nominations/icon-arrow-light.svg">
                    לסיפור המלא
                  </PillButton>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty} role="status">
            עדיין אין סיפורי זוכים לסינון הזה. נסו שנה או קטגוריה אחרת.
          </p>
        )}
      </div>

      <PillButton href={MORE_WINNERS_HREF}>לעוד זוכים</PillButton>
    </div>
  );
}
