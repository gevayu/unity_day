"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { CATEGORIES, YEARS, type Category, type GalleryPhoto, type Year } from "./data";
import styles from "./GalleryBrowser.module.css";

const ALL = "הכל";

// Grid areas of the bento layout, in the order photos fill them.
const SLOTS = ["big", "a", "b", "d", "c"] as const;
const PAGE_SIZE = SLOTS.length;

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

export default function GalleryBrowser({ photos }: { photos: GalleryPhoto[] }) {
  const [year, setYear] = useState<Year | typeof ALL>(ALL);
  const [category, setCategory] = useState<Category | typeof ALL>(ALL);
  const [page, setPage] = useState(0);

  const pages = useMemo(() => {
    const filtered = photos.filter(
      (p) => (year === ALL || p.year === year) && (category === ALL || p.category === category),
    );
    const chunks: GalleryPhoto[][] = [];
    for (let i = 0; i < filtered.length; i += PAGE_SIZE) {
      chunks.push(filtered.slice(i, i + PAGE_SIZE));
    }
    return chunks;
  }, [photos, year, category]);

  const current = pages[Math.min(page, pages.length - 1)] ?? [];
  const isBento = current.length === PAGE_SIZE;
  const hasPaging = pages.length > 1;

  function go(delta: number) {
    setPage((p) => (p + delta + pages.length) % pages.length);
  }

  return (
    <div className={styles.browser}>
      <div className={styles.toolbar}>
        <div className={styles.filters}>
          <ChipRow
            id="filter-year"
            label="שנה"
            options={YEARS}
            value={year}
            onChange={(v) => {
              setYear(v);
              setPage(0);
            }}
          />
          <ChipRow
            id="filter-category"
            label="קטגוריה"
            options={CATEGORIES}
            value={category}
            onChange={(v) => {
              setCategory(v);
              setPage(0);
            }}
          />
        </div>
        <Image src="/gallery/gift.svg" alt="" width={152.01} height={100.69} className={styles.gift} />
      </div>

      <div className={styles.carousel}>
        <div className={styles.controls} data-hidden={!hasPaging || undefined}>
          <div className={styles.arrows}>
            {/* RTL: the right-pointing arrow goes back, the left-pointing one goes forward */}
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowLight}`}
              onClick={() => go(-1)}
              aria-label="לעמוד הקודם"
              disabled={!hasPaging}
            >
              <Image src="/gallery/arrow-right.svg" alt="" width={16} height={16} />
            </button>
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowDark}`}
              onClick={() => go(1)}
              aria-label="לעמוד הבא"
              disabled={!hasPaging}
            >
              <Image src="/gallery/arrow-left.svg" alt="" width={16} height={16} />
            </button>
          </div>
          <div className={styles.dots}>
            {pages.map((_, i) => (
              <button
                key={i}
                type="button"
                className={styles.dot}
                aria-label={`עמוד ${i + 1} מתוך ${pages.length}`}
                aria-current={i === page ? "true" : undefined}
                onClick={() => setPage(i)}
              >
                <span />
              </button>
            ))}
          </div>
        </div>

        {current.length === 0 ? (
          <p className={styles.empty} role="status">
            עוד אין תמונות לסינון הזה. נסו שנה או קטגוריה אחרת.
          </p>
        ) : (
          <ul className={isBento ? styles.bento : styles.compact} aria-live="polite">
            {current.map((photo, i) => (
              <li
                key={photo.id}
                className={styles.tile}
                style={isBento ? { gridArea: SLOTS[i] } : undefined}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={
                    isBento && SLOTS[i] === "big"
                      ? "(max-width: 1320px) 100vw, 784px"
                      : "(max-width: 1320px) 50vw, 400px"
                  }
                  className={styles.photo}
                />
              </li>
            ))}
            <li className={`${styles.tile} ${styles.brandTile}`} aria-hidden="true">
              <Image src="/gallery/heart-line.svg" alt="" width={273.848} height={152.978} />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
