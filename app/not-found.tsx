import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PillButton from "@/components/PillButton";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "הדף לא נמצא · יום האחדות",
  description: "הדף שחיפשתם לא נמצא. אולי תמצאו כאן את מה שחיפשתם.",
};

// TODO: there is no search page yet; the form already sends ?q= to /search.
const SEARCH_ACTION = "/search";

const DONATE_HREF = "/donate";

type Tile = { label: string; icon: string; href: string; tone: "blue" | "yellow" | "green" };

// Right to left, as they sit in the design (4 on the first row, 3 on the second).
const TILES: Tile[] = [
  { label: "דף הבית", icon: "/not-found/icon-home.svg", href: "/", tone: "blue" },
  // TODO: no "about the prize" page yet.
  { label: "על הפרס", icon: "/not-found/icon-prize.svg", href: "/prize/nominations", tone: "green" },
  { label: "הגשת מועמדות", icon: "/not-found/icon-nominations.svg", href: "/prize/nominations", tone: "yellow" },
  // TODO: no Unity Day page yet.
  { label: "יום האחדות", icon: "/not-found/icon-unity-day.svg", href: "/unity-day", tone: "blue" },
  { label: "גלריה", icon: "/not-found/icon-gallery.svg", href: "/gallery", tone: "yellow" },
  { label: "תרומה", icon: "/not-found/icon-donate.svg", href: DONATE_HREF, tone: "green" },
  { label: "צור קשר", icon: "/not-found/icon-contact.svg", href: "/contact", tone: "blue" },
];

// titleWidth: the caption box width in Figma, which sets where the title wraps.
type NewsItem = { title: string; titleWidth: number; href: string; image: string; crop?: boolean };

// Right to left. Placeholder items from the design; TODO: feed from the CMS.
const NEWS: NewsItem[] = [
  {
    title: "ההגשה למועמדות 2026 נפתחה.",
    titleWidth: 188,
    href: "/prize/nominations",
    image: "/not-found/news-nominations.jpg",
    crop: true,
  },
  {
    title: "הכירו את זוכי פרס האחדות 2025.",
    titleWidth: 192,
    href: "/prize/winners",
    image: "/not-found/news-winners.jpg",
  },
  {
    title: "קהילות מכל הארץ נפגשו ביום האחדות 2025.",
    titleWidth: 296,
    href: "/moments",
    image: "/gallery/photo-3.jpg",
  },
];

// TODO: no news index page yet.
const NEWS_INDEX_HREF = "#";

export default function NotFound() {
  return (
    <>
      <SiteHeader />

      <main id="main" tabIndex={-1}>
        <section className={styles.hero}>
          <Image
            src="/not-found/cloud-hero-right.svg"
            alt=""
            aria-hidden="true"
            width={386.795}
            height={149.795}
            priority
            className={styles.cloudHeroRight}
          />
          <Image
            src="/not-found/cloud-hero-left.svg"
            alt=""
            aria-hidden="true"
            width={280.164}
            height={108.795}
            priority
            className={styles.cloudHeroLeft}
          />
          <div className={styles.heroText}>
            <h1 className={styles.heroHeading}>
              <span className={styles.code}>404</span>
              <span className={styles.heroTitle}>אופס, קצת הלכנו לאיבוד.</span>
            </h1>
            <p className={styles.heroLead}>הדף שחיפשתם לא נמצא</p>
          </div>
        </section>

        <section className={styles.search} aria-labelledby="search-title">
          <Image
            src="/not-found/cloud-search.svg"
            alt=""
            aria-hidden="true"
            width={183.285}
            height={71.174}
            className={styles.cloudSearch}
          />
          <div className={styles.searchInner}>
            <div className={styles.searchHead}>
              <p className={styles.searchLead}>
                לפעמים גם הדרך הכי טובה מתחילה בכיוון אחר.
                <br />
                אנחנו כאן כדי לעזור לכם למצוא את מה שחיפשתם.
              </p>
              <h2 id="search-title" className={styles.searchTitle}>
                מה בא לכם למצוא?
              </h2>
            </div>
            <form action={SEARCH_ACTION} method="get" role="search" className={styles.searchBox}>
              <label htmlFor="not-found-search" className="sr-only">
                מה תרצו לחפש?
              </label>
              <input
                id="not-found-search"
                name="q"
                type="search"
                required
                placeholder="מה תרצו לחפש?"
                className={styles.searchInput}
              />
              <button type="submit" className={styles.darkButton}>
                <Image src="/not-found/icon-arrow.svg" alt="" width={16} height={16} />
                חיפוש
              </button>
            </form>
          </div>
        </section>

        <section className={styles.links} aria-labelledby="links-title">
          <h2 id="links-title" className={styles.sectionTitle}>
            אולי תמצאו כאן את מה שחיפשתם.
          </h2>
          <ul className={styles.tiles}>
            {TILES.map((tile) => (
              <li key={tile.label}>
                <a href={tile.href} className={`${styles.tile} ${styles[tile.tone]}`}>
                  <Image src={tile.icon} alt="" width={60} height={60} />
                  <span className={styles.tileLabel}>{tile.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.news} aria-labelledby="news-title">
          <h2 id="news-title" className={styles.sectionTitle}>
            חדשות ועדכונים אחרונים
          </h2>
          <ul className={styles.newsGrid}>
            {NEWS.map((item) => (
              <li key={item.title}>
                <a href={item.href} className={styles.newsCard}>
                  <span className={styles.newsImage}>
                    {item.crop ? (
                      <Image
                        src={item.image}
                        alt=""
                        width={2400}
                        height={1601}
                        sizes="(max-width: 760px) 175vw, 683px"
                        className={styles.newsCrop}
                      />
                    ) : (
                      <Image src={item.image} alt="" fill sizes="(max-width: 760px) 100vw, 390px" />
                    )}
                  </span>
                  <span className={styles.newsTitle} style={{ width: item.titleWidth }}>
                    {item.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a href={NEWS_INDEX_HREF} className={styles.darkButton}>
            <Image src="/not-found/icon-arrow.svg" alt="" width={16} height={16} />
            קראו עוד
          </a>
        </section>

        <section className={styles.stay} aria-labelledby="stay-title">
          <div className={styles.stayHead}>
            <h2 id="stay-title" className={styles.stayTitle}>
              נשארים מחוברים
            </h2>
            <p className={styles.stayLead}>הירשמו לעדכונים ותישארו חלק מהרגעים שמחברים בינינו.</p>
          </div>
          <div className={styles.stayActions}>
            <PillButton href={DONATE_HREF}>לתרום לעשייה שלנו</PillButton>
            <PillButton href="#footer-newsletter" variant="light" className={styles.outline}>
              הרשמה לעדכונים
            </PillButton>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
