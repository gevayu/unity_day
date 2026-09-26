// Chip order, right to left after "הכל": newest year first.
export const YEARS = ["2026", "2025", "2024", "2023", "2022"] as const;

// Chip order, right to left after "הכל", as in the design.
export const CATEGORIES = [
  "מקומי",
  "ארצי",
  "בינלאומי",
  "חינוך",
  "רשויות מקומיות",
  "תעודות הוקרה",
] as const;

export type Year = (typeof YEARS)[number];
export type Category = (typeof CATEGORIES)[number];

export type WinnerStory = {
  id: string;
  year: Year;
  category: Category;
  title: string;
  excerpt: string[];
  // TODO: link each card to the winner's full story once those pages exist.
  href: string;
  photo: {
    src: string;
    alt: string;
    /** object-position of the cover crop, when Figma doesn't centre it */
    position?: string;
  };
};

// PLACEHOLDER CONTENT: the six cards from the Figma frame, top to bottom. They
// all repeat the same dummy winner ("ברית הנגב וההר", 2026). The categories are
// arbitrary so the category chips have something to filter. Replace with the
// real winners list from the CMS.
const DUMMY = {
  year: "2026",
  title: "ברית הנגב וההר",
  excerpt: [
    "ברית הנגב וההר מפגישה בין תושבי הנגב המערבי לתושבי גוש עציון.",
    "שתי קהילות שמגיעות ממקומות שונים ולעיתים גם מעמדות שונות, ובוחרות לבנות אמון דרך מפגשי עומק, סיורים ויוזמות בשטח.",
  ],
  href: "/prize/winners/negev-mountain-alliance",
} as const;

export const STORIES: WinnerStory[] = [
  {
    ...DUMMY,
    excerpt: [...DUMMY.excerpt],
    id: "story-1",
    category: "מקומי",
    photo: { src: "/winners/story-4.jpg", alt: "צעיר מחייך ליד דגל ישראל" },
  },
  {
    ...DUMMY,
    excerpt: [...DUMMY.excerpt],
    id: "story-2",
    category: "ארצי",
    photo: { src: "/gallery/photo-3.jpg", alt: "משפחה רב-דורית מצטלמת יחד בסלפי" },
  },
  {
    ...DUMMY,
    excerpt: [...DUMMY.excerpt],
    id: "story-3",
    category: "בינלאומי",
    // Figma zooms this portrait to the full width and shows its lower part
    photo: {
      src: "/winner-stories/winner-3.jpg",
      alt: "קבוצה גדולה של אנשים מרימה ידיים בשמחה בשטח פתוח",
      position: "50% 97.34%",
    },
  },
  {
    ...DUMMY,
    excerpt: [...DUMMY.excerpt],
    id: "story-4",
    category: "חינוך",
    photo: { src: "/gallery/photo-4.jpg", alt: "צעירים רוקדים ומריעים ברחבה" },
  },
  {
    ...DUMMY,
    excerpt: [...DUMMY.excerpt],
    id: "story-5",
    category: "רשויות מקומיות",
    photo: { src: "/moments/card-2.jpg", alt: "משתתף מחייך עם תג כנס" },
  },
  {
    ...DUMMY,
    excerpt: [...DUMMY.excerpt],
    id: "story-6",
    category: "תעודות הוקרה",
    photo: { src: "/winner-stories/winner-6.jpg", alt: "שלושה חברים מחובקים על רקע קיר כתום" },
  },
];
