export type WinnerPhoto = {
  src: string;
  alt: string;
  /** object-position, when the design crops away from the centre */
  position?: string;
};

export type WinnerProfile = {
  slug: string;
  name: string;
  summary: string;
  hero: string;
  /** Right to left, as the meta strip reads. */
  meta: { label: string; value: string }[];
  quote: { text: string; author: string; photo: WinnerPhoto };
  story: { paragraphs: string[]; pullQuote: string };
  gallery: {
    /** the large photo on the right of the top row */
    feature: WinnerPhoto;
    /** the two stacked photos on its left, top to bottom */
    stack: [WinnerPhoto, WinnerPhoto];
    /** the bottom row, right to left */
    row: [WinnerPhoto, WinnerPhoto, WinnerPhoto];
  };
};

// PLACEHOLDER CONTENT: the single winner shown in the Figma frame
// ("AWARD WINNERS + single"). The quote, the author line and the story
// paragraphs are the design's dummy copy, and the photos are stock images
// shared with other pages. Replace with the winners feed from the CMS.
export const WINNER_PROFILES: WinnerProfile[] = [
  {
    slug: "negev-mountain-alliance",
    name: "ברית הנגב וההר",
    summary:
      "ברית הנגב וההר מפגישה בין תושבי הנגב המערבי לתושבי גוש עציון. שתי קהילות שמגיעות ממקומות שונים ולעיתים גם מעמדות שונות, ובוחרות לבנות אמון דרך מפגשי עומק, סיורים ויוזמות בשטח.",
    hero: "/winner/negev-mountain-hero.jpg",
    meta: [
      { label: "קטגוריה", value: "מקומי" },
      { label: "שנת זכייה", value: "2026" },
      { label: "אזור פעילות", value: "הנגב המערבי וגוש עציון" },
    ],
    quote: {
      text: "ציטוט לדוגמה של הזוכה על העשייה שחיברה בין אנשים בקהילה שלו.",
      author: "שם הזוכה · תפקיד, ברית הנגב וההר",
      photo: { src: "/moments/card-2.jpg", alt: "משתתף מחייך עם תג כנס" },
    },
    story: {
      paragraphs: [
        "טקסט לדוגמה — כאן ייכנס הסיפור המלא של היוזמה: איך היא נולדה, מי הוביל אותה, ומה קרה במפגש הראשון בין הקהילות.",
        "טקסט לדוגמה — פסקה שנייה על הפעילות בשטח, על היקף המשתתפים, ועל מה שהשתנה מאז הזכייה בפרס.",
      ],
      pullQuote:
        "הזוכים ממשיכים לפעול הרבה אחרי הטקס. חלקם הרחיבו את היוזמה שלהם, חלקם חברו לזוכים אחרים, וחלקם חזרו אל הפרס מהצד השני של השולחן.",
    },
    gallery: {
      feature: { src: "/winners/story-4.jpg", alt: "צעיר מחייך ליד דגל ישראל" },
      stack: [
        { src: "/gallery/photo-3.jpg", alt: "משפחה רב-דורית מצטלמת יחד בסלפי" },
        {
          src: "/winner/gallery-hands.jpg",
          alt: "קבוצה גדולה מרימה ידיים ומחייכת למצלמה בשטח פתוח",
          // the design squashes this portrait into the slot; we keep its true
          // aspect and show the same band, centred on the raised hands and faces
          position: "50% 85.6%",
        },
      ],
      row: [
        { src: "/winner/gallery-friends.jpg", alt: "שלושה חברים מחובקים על רקע כתום" },
        { src: "/moments/card-2.jpg", alt: "משתתף מחייך עם תג כנס" },
        { src: "/gallery/photo-4.jpg", alt: "צעירים רוקדים ומריעים ברחבה" },
      ],
    },
  },
];

export function getWinnerProfile(slug: string) {
  return WINNER_PROFILES.find((w) => w.slug === slug);
}
