// The hero explorations in Figma section "HERO EXPLORATIONS" (2150:5601),
// numbered left to right as they sit on the canvas. Each frame is the
// homepage with only the hero (the 700px block under the header) changed.

/** A photo fading into the panel beside it (Figma: a 700px-tall strip turned
 *  90deg, gradient from transparent at 4.6386% to the panel colour at 87.545%). */
export type Fade = {
  /** strip width at 1440 */
  width: number;
  /** the gradient's angle once the strip is turned upright (transparent on the left) */
  angle: string;
  /** "r, g, b" of the panel colour */
  rgb: string;
  /** opacity the fade ends at */
  alpha: number;
};

export type Layout =
  /** the homepage hero with another tint over the photo */
  | { kind: "classic"; overlay: string }
  /** full-bleed tinted photo; the photo again, framed, beside the copy */
  | { kind: "framed"; overlay: string }
  /** the photo on the left, a coloured panel with the copy on the right */
  | {
      kind: "split";
      /** "wide": 796px photo, copy right-aligned in a 644px panel; "half": 720 | 720, copy centred */
      proportion: "wide" | "half";
      panel: string;
      /** the photo shows through the panel under this tint */
      panelOverlay?: string;
      fade?: Fade;
    };

export type HeroVariant = {
  slug: string;
  node: string;
  title: string;
  description: string;
  layout: Layout;
};

const INK_RGB = "7, 23, 34";
const BLUE_RGB = "1, 75, 152";

export const VARIANTS: HeroVariant[] = [
  {
    slug: "1",
    node: "2150:4989",
    title: "תמונה ממוסגרת",
    description: "הצילום ברקע מוחשך ב-80% שחור, ומופיע שוב בכרטיס מעוגל משמאל לטקסט.",
    layout: { kind: "framed", overlay: "rgba(0, 0, 0, 0.8)" },
  },
  {
    slug: "2",
    node: "2150:2537",
    title: "גוון כחול כהה",
    description: "הלייאאוט של דף הבית, עם שכבת כחול-לילה (90%) במקום שחור 50%.",
    layout: { kind: "classic", overlay: "rgba(25, 48, 89, 0.9)" },
  },
  {
    slug: "3",
    node: "2150:3688",
    title: "מעבר לפאנל כהה",
    description: "צילום רחב (796px) משמאל שנמוג לפאנל בצבע הדיו, והטקסט מיושר לימין.",
    layout: {
      kind: "split",
      proportion: "wide",
      panel: "#071722",
      fade: { width: 282, angle: "89.904deg", rgb: INK_RGB, alpha: 1 },
    },
  },
  {
    slug: "4",
    node: "2161:1753",
    title: "מעבר לפאנל שקוף",
    description: "כמו 3, אבל הצילום ממשיך גם מתחת לטקסט, תחת שכבת דיו של 80%.",
    layout: {
      kind: "split",
      proportion: "wide",
      panel: "#071722",
      panelOverlay: "rgba(7, 23, 34, 0.8)",
      fade: { width: 282, angle: "89.904deg", rgb: INK_RGB, alpha: 0.8 },
    },
  },
  {
    slug: "5",
    node: "2150:810",
    title: "חצי-חצי, דיו",
    description: "צילום ופאנל בצבע הדיו, חצי-חצי, עם קו חד ביניהם.",
    layout: { kind: "split", proportion: "half", panel: "#071722" },
  },
  {
    slug: "6",
    node: "2150:1961",
    title: "מעבר לכחול המותג",
    description: "חצי-חצי: הצילום נמוג לפאנל בכחול המותג (#014b98).",
    layout: {
      kind: "split",
      proportion: "half",
      panel: "#014b98",
      fade: { width: 340, angle: "89.884deg", rgb: BLUE_RGB, alpha: 1 },
    },
  },
  {
    slug: "7",
    node: "2150:1386",
    title: "חצי-חצי, כחול",
    description: "צילום ופאנל בכחול המותג, חצי-חצי, עם קו חד ביניהם.",
    layout: { kind: "split", proportion: "half", panel: "#014b98" },
  },
];

export function getVariant(slug: string) {
  return VARIANTS.find((v) => v.slug === slug);
}

/** The Jerusalem photo every exploration uses (Figma asset 423fe). */
export const PHOTO = {
  src: "/winners/hero.jpg",
  alt: "העיר העתיקה בירושלים וכיפת הסלע בשקיעה",
  /** the file's aspect, to size the srcset for height-bound cover crops */
  aspect: 1633 / 963,
};
