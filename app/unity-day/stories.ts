export type Story = {
  id: string;
  num: string;
  /** label on the tab above the card */
  tab: string;
  kicker: string;
  title: string;
  text: string;
  photo: string;
  photoAlt: string;
  href: string;
};

// The one story that exists in the design (tab 01).
const COHEN: Omit<Story, "id" | "num" | "tab" | "kicker"> = {
  title: "עמותת כהן",
  text: "עשייה עמוקה לחיבור החברה הישראלית עם מורשת יהדות אתיופיה, באמצעות פעילות חינוכית ורב-תחומית שאינה מבקשת רק להציג תרבות, אלא ליצור היכרות שוויונית, מכבדת ומחברת. וכך, מורשת שהתקיימה במשך דורות מקבלת את מקומה הראוי בתוך הסיפור הישראלי. כי החברה הישראלית חזקה יותר כשכל קהילה יכולה להביא את הסיפור שלה, ולהרגיש שהסיפור הזה הוא חלק מהסיפור של כולנו.",
  photo: "/unity-day/story-photo.jpg",
  photoAlt: "ארבעה צעירים יושבים יחד, מחייכים ומשוחחים",
  // TODO: link to the full story page
  href: "#",
};

const TABS = [
  { num: "01", tab: "אחדות אישית" },
  { num: "02", tab: "אחדות לאומית" },
  { num: "03", tab: "אחדות בחינוך" },
  { num: "04", tab: "אחדות בינלאומית" },
  { num: "05", tab: "אחדות ברשויות מקומיות" },
];

// PLACEHOLDER: the design only has content for story 01 (and its kicker says
// "אחדות מקומית" while the tab says "אחדות אישית"). Stories 02-05 reuse it with
// a kicker built from their tab until the real stories come from the CMS.
export const STORIES: Story[] = TABS.map(({ num, tab }, i) => ({
  ...COHEN,
  id: `story-${num}`,
  num,
  tab,
  kicker: i === 0 ? "אחדות מקומית - 01" : `${tab} - ${num}`,
}));
