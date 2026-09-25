"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import PillButton from "@/components/PillButton";
import type { Story } from "./stories";
import styles from "./JourneyStories.module.css";

export default function JourneyStories({ stories }: { stories: Story[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const story = stories[active];

  // RTL: the next tab sits to the left.
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = stories.length - 1;
    const next =
      e.key === "ArrowLeft"
        ? (active + 1) % stories.length
        : e.key === "ArrowRight"
          ? (active - 1 + stories.length) % stories.length
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className={styles.stories}>
      <div className={styles.tabs} role="tablist" aria-label="סיפורי אחדות" onKeyDown={onKeyDown}>
        {stories.map((s, i) => (
          <button
            key={s.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${s.id}-tab`}
            aria-selected={i === active}
            aria-controls="journey-story"
            tabIndex={i === active ? 0 : -1}
            className={i === active ? `${styles.tab} ${styles.tabActive}` : styles.tab}
            onClick={() => setActive(i)}
          >
            <span className={styles.tabNum}>{s.num}</span>
            <span className={styles.tabLabel}>{s.tab}</span>
          </button>
        ))}
      </div>

      <div
        id="journey-story"
        role="tabpanel"
        aria-labelledby={`${story.id}-tab`}
        className={styles.card}
      >
        <Image
          src="/unity-day/story-swirl-1.svg"
          alt=""
          width={824.824}
          height={504.111}
          className={styles.swirlBottom}
        />
        <Image
          src="/unity-day/story-swirl-2.svg"
          alt=""
          width={1022}
          height={661.8}
          className={styles.swirlTop}
        />
        <div className={styles.photo}>
          <Image src={story.photo} alt={story.photoAlt} fill sizes="(max-width: 900px) 100vw, 689px" />
        </div>
        <div className={styles.text}>
          <div className={styles.copy}>
            <p className={styles.kicker}>{story.kicker}</p>
            <h3 className={styles.title}>{story.title}</h3>
            <p className={styles.body}>{story.text}</p>
          </div>
          <PillButton href={story.href} variant="light" icon="/unity-day/icon-arrow-brown.svg" className={styles.cta}>
            לסיפור המלא
          </PillButton>
        </div>
      </div>

      <div className={styles.dots}>
        {stories.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={i === active ? `${styles.dot} ${styles.dotActive}` : styles.dot}
            aria-label={`סיפור ${s.num}: ${s.tab}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}
