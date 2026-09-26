import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PillButton from "@/components/PillButton";
import { WINNER_PROFILES, getWinnerProfile, type WinnerPhoto } from "./data";
import styles from "./page.module.css";

// TODO: point at the prize regulations once that page exists.
const REGULATIONS_HREF = "#";
const NOMINATIONS_HREF = "/prize/nominations";
const ALL_WINNERS_HREF = "/prize/winners";

type Props = { params: Promise<{ slug: string }> };

// Only the winners in data.ts exist; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return WINNER_PROFILES.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const winner = getWinnerProfile((await params).slug);
  if (!winner) return {};
  return {
    title: `${winner.name} · זוכי פרס אחדות ישראל`,
    description: winner.summary,
  };
}

function Photo({ photo, sizes, className }: { photo: WinnerPhoto; sizes: string; className?: string }) {
  return (
    <div className={[styles.photo, className].filter(Boolean).join(" ")}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        style={photo.position ? { objectPosition: photo.position } : undefined}
      />
    </div>
  );
}

export default async function WinnerPage({ params }: Props) {
  const winner = getWinnerProfile((await params).slug);
  if (!winner) notFound();
  const { gallery } = winner;

  return (
    <>
      <SiteHeader />

      <main id="main" tabIndex={-1}>
        <section className={styles.hero}>
          <Image src={winner.hero} alt="" fill priority sizes="100vw" className={styles.heroImage} />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{winner.name}</h1>
            <p className={styles.heroLead}>{winner.summary}</p>
          </div>
        </section>

        <section className={styles.identity} aria-label="פרטי הזכייה">
          <dl className={styles.meta}>
            {winner.meta.map((m) => (
              <div key={m.label} className={styles.metaItem}>
                <dt className={styles.metaLabel}>{m.label}</dt>
                <dd className={styles.metaValue}>{m.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.story} aria-labelledby="story-title">
          <div className={styles.storyRow}>
            <div className={styles.storyText}>
              <div className={styles.gift} aria-hidden="true">
                <Image src="/winner/gift.svg" alt="" width={273.617} height={181.243} />
              </div>
              <div className={styles.storyBody}>
                <h2 id="story-title" className={styles.storyTitle}>
                  <span>הפרס אינו טקס סיום.</span>
                  <span className={styles.storyTitleAccent}>הוא נקודת פתיחה.</span>
                </h2>
                <div className={styles.storyParagraphs}>
                  {winner.story.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  <p className={styles.pullQuote}>{winner.story.pullQuote}</p>
                </div>
              </div>
            </div>

            <aside className={styles.quoteCard} aria-label="מפי הזוכים">
              <Photo photo={winner.quote.photo} sizes="(max-width: 900px) 100vw, 400px" className={styles.quotePhoto} />
              <div className={styles.quote}>
                <span className={styles.quoteMark} aria-hidden="true">
                  ”
                </span>
                <blockquote className={styles.quoteText}>
                  <p>{winner.quote.text}</p>
                </blockquote>
                <p className={styles.quoteAuthor}>{winner.quote.author}</p>
              </div>
            </aside>
          </div>
        </section>

        <section className={styles.gallery} aria-labelledby="gallery-title">
          <div className={styles.galleryInner}>
            <h2 id="gallery-title" className={styles.galleryTitle}>
              רגעים מהעשייה
            </h2>
            <div className={styles.galleryTop}>
              <Photo photo={gallery.feature} sizes="(max-width: 900px) 100vw, 868px" className={styles.feature} />
              <div className={styles.galleryStack}>
                {gallery.stack.map((photo) => (
                  <Photo key={photo.src} photo={photo} sizes="(max-width: 900px) 100vw, 436px" />
                ))}
              </div>
            </div>
            <div className={styles.galleryRow}>
              {gallery.row.map((photo) => (
                <Photo key={photo.src} photo={photo} sizes="(max-width: 900px) 100vw, 430px" />
              ))}
            </div>
            <PillButton href={ALL_WINNERS_HREF} icon="/nominations/icon-arrow-light.svg" className={styles.allWinners}>
              לכל הזוכים
            </PillButton>
          </div>
        </section>

        <section className={styles.cta} aria-labelledby="cta-title">
          <Image src="/winner/wave.png" alt="" width={2500} height={500} sizes="2500px" className={styles.ctaWave} />
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h2 id="cta-title" className={styles.ctaTitle}>
                מכירים מישהו שראוי לפרס?
              </h2>
              <div className={styles.ctaText}>
                <p>אל תניחו שמישהו אחר כבר הגיש אותו. לרוב אף אחד לא הגיש.</p>
                <p>אפשר להגיש מועמדות של אדם, ארגון, מיזם או מוסד, ואפשר להגיש את עצמכם.</p>
              </div>
              <div className={styles.ctaButtons}>
                <PillButton href={NOMINATIONS_HREF} className={styles.ctaButton}>
                  להגשת מועמדות
                </PillButton>
                <PillButton href={REGULATIONS_HREF} variant="light" className={`${styles.ctaButton} ${styles.outline}`}>
                  לתקנון הפרס
                </PillButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
