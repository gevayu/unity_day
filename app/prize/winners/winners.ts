// Newest first: this is also the chip order, right to left.
export const WINNER_YEARS = [2025, 2024, 2023, 2022] as const;
export type WinnerYear = (typeof WINNER_YEARS)[number];

// Card background + the matching fade over the photo, as "r, g, b".
export const TONES = {
  blue: "139, 182, 225",
  yellow: "255, 208, 130",
  green: "182, 216, 139",
} as const;

export type Winner = {
  id: string;
  year: WinnerYear;
  category: string;
  name: string;
  description: string;
  tone: keyof typeof TONES;
  src: string;
  alt: string;
};

const PHOTO = "/gallery/photo-3.jpg";
const PHOTO_ALT = "משפחה רב-דורית מצטלמת יחד בסלפי";

// PLACEHOLDER CONTENT: the nine cards from the Figma frame, in reading order
// (right to left, top to bottom). They all share one stock photo and the same
// dummy copy. Replace with the real winners list from the CMS.
export const WINNERS: Winner[] = [
  ...[1, 2, 3].map((n) => ({ id: `w2025-${n}`, year: 2025 as const, tone: "blue" as const })),
  ...[1, 2, 3].map((n) => ({ id: `w2024-${n}`, year: 2024 as const, tone: "yellow" as const })),
  ...[1, 2, 3].map((n) => ({ id: `w2023-${n}`, year: 2023 as const, tone: "green" as const })),
].map((card) => ({
  ...card,
  category: "חינוך",
  name: "שם הזוכה",
  description: "תיאור קצר של הפעילות והתרומה לחברה הישראלית",
  src: PHOTO,
  alt: PHOTO_ALT,
}));
