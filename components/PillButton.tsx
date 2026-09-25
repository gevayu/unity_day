import Image from "next/image";
import styles from "./PillButton.module.css";

type Props = {
  href: string;
  variant?: "dark" | "light";
  /** Arrow SVG (drawn pointing right); it's mirrored to point forward in RTL. */
  icon?: string;
  className?: string;
  children: React.ReactNode;
};

// The 50px pill used for most CTAs in the design.
export default function PillButton({ href, variant = "dark", icon, className, children }: Props) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(" ");
  return (
    <a href={href} className={classes}>
      {children}
      {icon && <Image src={icon} alt="" width={15} height={15} className={styles.icon} />}
    </a>
  );
}
