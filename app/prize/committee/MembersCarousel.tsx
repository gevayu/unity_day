"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Member } from "./members";
import styles from "./MembersCarousel.module.css";

const STEP = 390 + 16; // card + gap

export default function MembersCarousel({ members }: { members: Member[] }) {
  const track = useRef<HTMLUListElement>(null);

  // RTL: scrolling "forward" means moving left (negative scrollLeft).
  const scroll = (dir: 1 | -1) => track.current?.scrollBy({ left: -dir * STEP, behavior: "smooth" });

  return (
    <section className={styles.section} aria-labelledby="members-title">
      <div className={styles.header}>
        <h2 id="members-title" className={styles.title}>
          חברי הוועדה
        </h2>
        <div className={styles.arrows}>
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowLight}`}
            onClick={() => scroll(-1)}
            aria-label="לחבר הוועדה הקודם"
          >
            <Image src="/committee/icon-prev.svg" alt="" width={16} height={16} />
          </button>
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowDark}`}
            onClick={() => scroll(1)}
            aria-label="לחבר הוועדה הבא"
          >
            <Image src="/committee/icon-next.svg" alt="" width={16} height={16} />
          </button>
        </div>
      </div>

      <ul ref={track} className={styles.track}>
        {members.map((m) => (
          <li key={m.id} className={styles.card}>
            <div className={styles.photo}>
              <Image
                src={m.photo}
                alt={m.name}
                fill
                sizes="390px"
                style={{ objectPosition: `${m.focusX} 50%` }}
              />
            </div>
            <div className={styles.text}>
              <h3 className={styles.name}>{m.name}</h3>
              <p className={styles.role}>{m.role}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.illustration} aria-hidden="true">
        <Image src="/committee/illustration.png" alt="" width={1536} height={1024} sizes="1530px" />
      </div>
    </section>
  );
}
