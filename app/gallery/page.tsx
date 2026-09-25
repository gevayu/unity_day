import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import GalleryBrowser from "./GalleryBrowser";
import { GALLERY_PHOTOS } from "./data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "אחדות שהופכת לזיכרונות · יום האחדות",
  description:
    "קבלו הצצה למפגשים, לאנשים, ליוזמות ולעשייה - לכל מה שהופך את יום האחדות מרעיון למציאות.",
};

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className={styles.hero}>
          <Image
            src="/gallery/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>אחדות שהופכת לזיכרונות</h1>
              <p className={styles.heroLead}>
                קבלו הצצה למפגשים, לאנשים, ליוזמות ולעשייה - לכל מה שהופך את יום האחדות מרעיון
                למציאות.
              </p>
            </div>
            <a href="#gallery" className={styles.heroCta}>
              הצטרפו למסע דרך הרגעים שבהם האחדות קיבלה חיים.
              <Image
                src="/gallery/icon-arrow-cta.svg"
                alt=""
                width={15}
                height={15}
                className={styles.heroCtaIcon}
              />
            </a>
          </div>
        </section>

        <section id="gallery" className={styles.gallery} aria-label="גלריית תמונות">
          <GalleryBrowser photos={GALLERY_PHOTOS} />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
