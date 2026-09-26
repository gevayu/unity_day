export const YEARS = ["2026", "2025", "2024", "2023"] as const;

export const CATEGORIES = [
  "חינוך",
  "קהילות",
  "רשויות מקומיות",
  "ארגונים ויוזמות",
  "קהילות בעולם",
  "טקס פרס ירושלים",
] as const;

export type Year = (typeof YEARS)[number];
export type Category = (typeof CATEGORIES)[number];

export type GalleryPhoto = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  year: Year;
  category: Category;
};

// The five photos from the Figma frame.
const PHOTOS = {
  girl: {
    src: "/gallery/photo-1.jpg",
    alt: "ילדה מחייכת עטופה בדגל ישראל",
    width: 2400,
    height: 1600,
  },
  friends: {
    src: "/gallery/photo-2.jpg",
    alt: "חברים מחובקים מול הנוף",
    width: 2400,
    height: 1600,
  },
  family: {
    src: "/gallery/photo-3.jpg",
    alt: "משפחה מחייכת מצטלמת יחד",
    width: 2400,
    height: 1600,
  },
  dancing: {
    src: "/gallery/photo-4.jpg",
    alt: "צעירים רוקדים ומריעים ברחבה",
    width: 2400,
    height: 1350,
  },
  flag: {
    src: "/gallery/photo-5.jpg",
    alt: "צעיר מניף דגל ישראל בעצרת",
    width: 2400,
    height: 1350,
  },
};

type PhotoKey = keyof typeof PHOTOS;

// PLACEHOLDER CONTENT: the design shows three carousel pages but only one
// page of photos, so pages 2-3 reuse them and the year/category tags are
// made up. Replace this with the real media feed (CMS) before launch.
const SEED: [PhotoKey, Year, Category][] = [
  ["girl", "2026", "חינוך"],
  ["dancing", "2026", "קהילות"],
  ["flag", "2025", "טקס פרס ירושלים"],
  ["family", "2025", "קהילות"],
  ["friends", "2024", "ארגונים ויוזמות"],

  ["family", "2026", "רשויות מקומיות"],
  ["flag", "2024", "קהילות בעולם"],
  ["girl", "2023", "טקס פרס ירושלים"],
  ["friends", "2026", "חינוך"],
  ["dancing", "2023", "ארגונים ויוזמות"],

  ["dancing", "2025", "קהילות בעולם"],
  ["friends", "2023", "רשויות מקומיות"],
  ["family", "2024", "חינוך"],
  ["girl", "2025", "קהילות"],
  ["flag", "2026", "ארגונים ויוזמות"],
];

export const GALLERY_PHOTOS: GalleryPhoto[] = SEED.map(([key, year, category], i) => ({
  id: `${key}-${i}`,
  ...PHOTOS[key],
  year,
  category,
}));
