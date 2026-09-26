import Image from "next/image";
import Hero from "@/app/_home/Hero";
import HeroContent from "@/app/_home/HeroContent";
import shared from "@/app/_home/shared.module.css";
import { PHOTO, type HeroVariant as Variant } from "./variants";
import styles from "./HeroVariant.module.css";

// The journeys this CTA points to only exist on the homepage.
const START_HREF = "/#journeys";

// The photo is height-bound in every cover crop here, so it renders at
// 700px x its aspect (about 1187px wide) whatever the box width.
const COVER_WIDTH = Math.ceil(700 * PHOTO.aspect);

type CSSVars = React.CSSProperties & Record<`--${string}`, string>;

export default function HeroVariant({ variant }: { variant: Variant }) {
  const { layout } = variant;

  if (layout.kind === "classic") {
    return (
      <Hero overlay={layout.overlay} startHref={START_HREF} className={styles.lab} panelClassName={styles.flat} />
    );
  }

  if (layout.kind === "framed") {
    return (
      <section
        className={`${styles.framed} ${styles.lab}`}
        style={{ "--overlay": layout.overlay } as CSSVars}
      >
        <Image src={PHOTO.src} alt="" fill priority sizes="100vw" className={styles.backdrop} />
        <div className={styles.framedRow}>
          <div className={styles.column}>
            <HeroContent
              startHref={START_HREF}
              panelClassName={`${styles.flat} ${styles.narrow}`}
              statsClassName={styles.stats}
            />
          </div>
          <div className={styles.framedPhoto}>
            <Image src={PHOTO.src} alt={PHOTO.alt} fill priority sizes="(max-width: 900px) 100vw, 953px" />
          </div>
        </div>
      </section>
    );
  }

  const { proportion, panel, panelOverlay, fade } = layout;
  const vars: CSSVars = { "--panel-bg": panel };
  if (panelOverlay) vars["--panel-overlay"] = panelOverlay;
  if (fade) {
    vars["--fade-width"] = `${fade.width}px`;
    vars["--fade-angle"] = fade.angle;
    vars["--fade-rgb"] = fade.rgb;
    vars["--fade-alpha"] = String(fade.alpha);
  }

  // Copy first in the DOM: it is the right-hand column in RTL.
  return (
    <section className={`${styles.split} ${styles[proportion]} ${styles.lab}`} style={vars}>
      <div className={styles.panel}>
        {panelOverlay && (
          <div className={styles.panelBackdrop} aria-hidden="true">
            <Image src={PHOTO.src} alt="" fill sizes={`(max-width: 900px) 140vw, ${COVER_WIDTH}px`} />
          </div>
        )}
        <HeroContent
          startHref={START_HREF}
          panelClassName={proportion === "wide" ? `${styles.flat} ${styles.narrow}` : styles.flat}
          statsClassName={styles.stats}
        />
      </div>
      <div className={styles.photo}>
        <Image
          src={PHOTO.src}
          alt={PHOTO.alt}
          fill
          priority
          sizes={`(max-width: 900px) 140vw, ${COVER_WIDTH}px`}
        />
        {fade && <span className={`${shared.fade} ${styles.fade}`} aria-hidden="true" />}
      </div>
    </section>
  );
}
