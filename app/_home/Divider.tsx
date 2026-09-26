import Image from "next/image";
import shared from "./shared.module.css";

// Figma draws these as horizontal line SVGs turned 90deg.
export default function Divider({ src, length, thickness }: { src: string; length: number; thickness: number }) {
  return (
    <span className={shared.vDivider} style={{ height: length }} aria-hidden="true">
      <Image src={src} alt="" width={length} height={thickness} />
    </span>
  );
}
