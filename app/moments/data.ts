export type MomentType = "photos" | "videos" | "stories";

export const MOMENT_TYPES: { id: MomentType; label: string; icon: string }[] = [
  { id: "photos", label: "תמונות", icon: "/moments/icon-photo.svg" },
  { id: "videos", label: "סרטונים", icon: "/moments/icon-video.svg" },
  { id: "stories", label: "סיפורים", icon: "/moments/icon-story.svg" },
];

// Card background + the matching fade over the photo, as "r, g, b".
export const TONES = {
  yellow: "255, 208, 130",
  blue: "139, 182, 225",
  green: "182, 216, 139",
} as const;

export type Moment = {
  id: string;
  type: MomentType;
  tone: keyof typeof TONES;
  src: string;
  alt: string;
  href: string;
};

// PLACEHOLDER CONTENT: the six cards from the Figma frame, in reading order
// (right to left). Replace with the media archive feed; hrefs are TODO.
export const MOMENTS: Moment[] = [
  { id: "m1", type: "photos", tone: "blue", src: "/moments/card-3.jpg", alt: "צעיר מחייך עם דגל ישראל", href: "#" },
  { id: "m2", type: "photos", tone: "blue", src: "/moments/card-2.jpg", alt: "משתתף מחייך עם תג כנס", href: "#" },
  { id: "m3", type: "videos", tone: "yellow", src: "/gallery/hero.jpg", alt: "צעירים צועדים עם דגלי ישראל", href: "#" },
  { id: "m4", type: "videos", tone: "yellow", src: "/gallery/hero.jpg", alt: "צעירים צועדים עם דגלי ישראל", href: "#" },
  { id: "m5", type: "stories", tone: "green", src: "/moments/card-5.jpg", alt: "ילדים במשחק משיכת חבל", href: "#" },
  { id: "m6", type: "stories", tone: "green", src: "/gallery/photo-2.jpg", alt: "חברים מחובקים מול הנוף", href: "#" },
];
