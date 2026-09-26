// Homepage content (Figma "HOMEPAGE", node 2024:11).
// Every list is ordered as it reads on the page: right to left, top to bottom.

// Card background + the matching fade over the photo, as "r, g, b".
export const TONES = {
  blue: "139, 182, 225",
  green: "182, 216, 139",
  yellow: "255, 208, 130",
} as const;
export type Tone = keyof typeof TONES;

export type Stat = { value: string; label: string; note?: string; color: string };

export const HERO_STATS: Stat[] = [
  { value: "עשרות", label: "קהילות בארץ ובעולם", color: "#1193cd" },
  { value: "למעלה ממיליון", label: "משתתפים", color: "#8abe38" },
  { value: "12", label: "שנות פעילות", color: "#ffb636" },
];

export const IMPACT_STATS: Stat[] = [
  { value: "850+", label: "מיזמים קהילתיים", note: "שעשו טוב", color: "#ffb636" },
  { value: "120K+", label: "אנשים מעורבים", note: "ביוזמות שלנו", color: "#1193cd" },
  { value: "50+", label: "ערים וקהילות", note: "בכל רחבי הארץ", color: "#8abe38" },
];

export type Journey = {
  id: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  tone: Tone;
  photo: string;
  alt: string;
};

export const JOURNEYS: Journey[] = [
  {
    id: "memory",
    title: "מסע הזיכרון",
    text: "מה באמת קרה באותם 18 ימים, ואיך הם שינו את פני החברה הישראלית? זהו הסיפור שממנו הכל התחיל, סיפורם של שלושה נערים גיל-עד, נפתלי ואיל ז״ל, והדרך שבה כאב לאומי הפך לבחירה באחדות.",
    cta: "להצטרפות למסע הזיכרון",
    href: "/memorial",
    tone: "yellow",
    photo: "/memorial/closing-sunset.jpg",
    alt: "צלליות של צעירים יושבים יחד מול השקיעה",
  },
  {
    id: "unity",
    title: "מסע האחדות",
    text: "אחדות אינה נשמרת מעצמה, היא נבנית בכל יום מחדש, באמצעות מפגש, הקשבה, אחריות משותפת ועשייה. כאן תגלו את עמותת יום האחדות, על המיזמים החינוכיים, המסגרות והיוזמות. בין התחנות המרכזיות תכירו גם את פרס ירושלים לאחדות.",
    cta: "להצטרפות למסע האחדות",
    href: "/unity-day",
    tone: "green",
    photo: "/home/journey-unity.jpg",
    alt: "שלושה דורות רוכנים יחד מעל תמונה ישנה",
  },
  {
    id: "identity",
    title: "מסע הזהות",
    text: "איך הופכת רוח האחדות שנולדה בישראל לגשר בין יהודים ברחבי העולם? מסע הזהות קם לחיים במגוון מיזמים: \"בשביל העם היהודי\", Connection ו-GCC, \"התאום היהודי שלי\", ו\"מתוק בלב\".",
    cta: "גלו את המיזמים",
    // TODO: point at the identity journey page once it exists.
    href: "#",
    tone: "blue",
    photo: "/gallery/photo-3.jpg",
    alt: "משפחה רב-דורית מצטלמת יחד בסלפי",
  },
];

export type Spotlight = {
  id: string;
  name: string;
  role: string;
  quote: string;
  photo: string;
  alt: string;
  /** object-position of the cover crop */
  focus: string;
};

// PLACEHOLDER CONTENT: the design shows one dummy winner ("שם הזוכה" /
// "תפקיד" / sample quote). The next two reuse that copy with other site
// photos so the arrows have something to page through. Replace with real
// winners (name, role, quote, photo) from the CMS.
const SPOTLIGHT_COPY = {
  name: "שם הזוכה",
  role: "תפקיד",
  quote: "ציטוט לדוגמה של הזוכה על העשייה שחיברה בין אנשים בקהילה שלו.",
};
export const SPOTLIGHT: Spotlight[] = [
  {
    id: "w1",
    ...SPOTLIGHT_COPY,
    photo: "/home/prize-winner.jpg",
    alt: "צעיר מחייך מושיט קופסת מתנה עטופה בחבל",
    focus: "93% 50%",
  },
  {
    id: "w2",
    ...SPOTLIGHT_COPY,
    photo: "/winners/story-4.jpg",
    alt: "צעיר מחייך ליד דגל ישראל",
    focus: "50% 30%",
  },
  {
    id: "w3",
    ...SPOTLIGHT_COPY,
    photo: "/winners/story-1.jpg",
    alt: "משפחה של שלושה דורות צועדת יחד בשדה",
    focus: "50% 50%",
  },
];

export type EventItem = {
  id: string;
  title: string;
  sponsor: string;
  date: string;
  time: string;
  city: string;
  /** strong green or pale green card */
  strong: boolean;
};

// PLACEHOLDER CONTENT: the four event cards from the design, all with the
// same dummy details and stock photo. Replace with the real events feed.
const EVENT_COPY = {
  title: "יום מפגש כיתות שותפות",
  sponsor: "Sponsor name",
  date: "25 במרץ",
  time: "19:30",
  city: "תל אביב",
};
export const EVENTS: EventItem[] = [
  { id: "e1", ...EVENT_COPY, strong: true },
  { id: "e2", ...EVENT_COPY, strong: false },
  { id: "e3", ...EVENT_COPY, strong: false },
  { id: "e4", ...EVENT_COPY, strong: true },
];
export const EVENT_PHOTO = { src: "/winners/story-3.jpg", alt: "ילדים צוחקים מחובקים סביב שולחן בכיתה" };

export type FieldStory = {
  id: string;
  date: string;
  title: string;
  text: string;
  color: string;
  /** which side of the row the photo sits on */
  photoSide: "right" | "left";
  /** the tilted green card behind the photo, offset from the photo's centre */
  blobDx: number;
  blobDy: number;
};

// PLACEHOLDER CONTENT: the design's three dummy stories (Lorem ipsum copy,
// one stock photo). Replace with real stories from the field.
const STORY_COPY = {
  date: "ינואר 2026 · ירושלים",
  title: "שם הפרויקט",
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis",
};
export const FIELD_STORIES: FieldStory[] = [
  { id: "s1", ...STORY_COPY, color: "#8bb6e1", photoSide: "right", blobDx: 2.514, blobDy: 0.175 },
  { id: "s2", ...STORY_COPY, color: "#b6d88b", photoSide: "left", blobDx: 2.284, blobDy: -0.175 },
  { id: "s3", ...STORY_COPY, color: "#ffd082", photoSide: "right", blobDx: 5.284, blobDy: -0.175 },
];
export const STORY_PHOTO = EVENT_PHOTO;

export type JoinPath = { id: "community" | "heart" | "sprout" | "sunrise"; image: string; title: string; text: string };

export const JOIN_PATHS: JoinPath[] = [
  { id: "community", image: "/winners/illustration-community.png", title: "להשתתף באירוע", text: "ראו מה קורה בסביבתכם" },
  { id: "heart", image: "/winners/illustration-heart.png", title: "להישאר בעניינים", text: "קבלו את העדכונים ישר למייל" },
  { id: "sprout", image: "/winners/illustration-sprout.png", title: "להציע יוזמה", text: "ספרו לנו מה תרצו להתחיל" },
  { id: "sunrise", image: "/winners/illustration-sunrise.png", title: "לתרום לעמותה", text: "לישראל טובה יותר" },
];
