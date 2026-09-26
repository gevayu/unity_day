// Content of the "כשערך הופך לעשייה" grid, right to left as it reads in the
// design. Each column is a text card plus a photo; `photoFirst` puts the photo
// above the text. `textHeight` is the card height in the design (Rubik wraps a
// little shorter than Polin, so it's kept as a min-height).
export type Circle = {
  id: string;
  title: string;
  text: string;
  tone: "yellow" | "blue" | "green" | "amber";
  textHeight: number;
  /** the green card's copy is narrower than its box in the design */
  narrowText?: boolean;
  photo: { src: string; alt: string };
  photoFirst?: boolean;
};

export const CIRCLES: Circle[] = [
  {
    id: "connections",
    title: "חיבורים בין אנשים וקהילות",
    text: "קידום מפגשים, שותפויות, יוזמות ופעילויות שמאפשרים לאנשים מקבוצות שונות להכיר זה את זה, להקשיב וליצור שותפויות חדשות.",
    tone: "amber",
    textHeight: 176,
    photo: { src: "/gallery/photo-3.jpg", alt: "משפחה רב-דורית מצטופפת יחד ומחייכת" },
  },
  {
    id: "education",
    title: "חינוך לאחדות ולחברה משותפת",
    text: "פיתוח וקידום פעילות חינוכית וקהילתית שמעניקה כלים ליצירת מפגש, שיח ותחושת שייכות.",
    tone: "green",
    textHeight: 200,
    narrowText: true,
    photo: { src: "/about/circle-album.jpg", alt: "סבא, אם ובת מעלעלים יחד באלבום תמונות" },
    photoFirst: true,
  },
  {
    id: "recognition",
    title: "הכרה באנשים שעושים שינוי",
    text: "העמותה מעניקה פרסים ובמה לאנשים, ארגונים ויוזמות שהופכים את רעיון האחדות למעשים. בין הביטויים המרכזיים לכך נמצא פרס ירושלים לאחדות ישראל, המוקיר עשייה יוצאת דופן לחיזוק האחדות בחברה הישראלית.",
    tone: "blue",
    textHeight: 236,
    photo: { src: "/about/circle-sunset.jpg", alt: "צלליות של צעירים עולים יחד במדרגות מול השקיעה" },
  },
  {
    id: "diaspora",
    title: "שותפות בין ישראל ליהדות התפוצות",
    text: "יצירת קשרים ושיתופי פעולה שמרחיבים את מעגל השייכות ומחזקים את הקשר בין החברה הישראלית לבין קהילות יהודיות ברחבי העולם.",
    tone: "yellow",
    textHeight: 220,
    photo: { src: "/about/circle-kids.jpg", alt: "קבוצת ילדים מחייכים סביב שולחן בכיתה" },
    photoFirst: true,
  },
];

// PLACEHOLDER: the design only has empty cards here (5 large, then two rows
// of 6 small). Replace with the founders / board / staff when the content is
// ready; until then the cards render empty, exactly as in the design.
export const TEAM_LEAD_SLOTS = 5;
export const TEAM_ROWS = [6, 6];
