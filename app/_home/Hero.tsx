import Image from "next/image";
import HeroContent from "./HeroContent";
import styles from "./Hero.module.css";

type Props = {
  /** Tint over the photo (any CSS colour); the homepage uses the default black 50%. */
  overlay?: string;
  startHref?: string;
  className?: string;
  /** extra class for HeroContent's copy frame */
  panelClassName?: string;
};

// The homepage hero: the Jerusalem photo under a tint, copy and stats centred on it.
export default function Hero({ overlay, startHref, className, panelClassName }: Props) {
  return (
    <section
      className={className ? `${styles.hero} ${className}` : styles.hero}
      style={overlay ? ({ "--hero-overlay": overlay } as React.CSSProperties) : undefined}
    >
      <Image src="/winners/hero.jpg" alt="" fill priority sizes="100vw" className={styles.image} />
      <div className={styles.inner}>
        <HeroContent startHref={startHref} panelClassName={panelClassName} />
      </div>
    </section>
  );
}
