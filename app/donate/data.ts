// Donation page data. PLACEHOLDER: amounts, destinations, bank details, partner
// links and the two contact people are copied from the Figma frame and still
// need to be confirmed by the association before going live.

export type Frequency = "once" | "monthly";
export type CurrencyCode = "ILS" | "USD" | "GBP" | "CAD";
export type PaymentMethod = "card" | "bit" | "apple" | "google" | "paypal";
export type Dedication = "honor" | "memory";

// Right to left, as they sit in the design (the monthly option is on the right).
export const FREQUENCIES: { id: Frequency; label: string; summary: string }[] = [
  { id: "monthly", label: "חודשית", summary: "תרומה חודשית" },
  { id: "once", label: "חד-פעמית", summary: "תרומה חד-פעמית" },
];

// Right to left.
export const CURRENCIES: { code: CurrencyCode; symbol: string }[] = [
  { code: "CAD", symbol: "C$" },
  { code: "GBP", symbol: "£" },
  { code: "USD", symbol: "$" },
  { code: "ILS", symbol: "₪" },
];

// Right to left; "אחר" (a custom amount) is the last button on the left.
export const AMOUNTS = [100, 250, 500, 1000];

// PLACEHOLDER: the design only shows "תמיכה כללית"; the rest are the site's
// programmes as named in the footer.
export const DESTINATIONS = [
  "תמיכה כללית",
  "יום האחדות",
  "פרס ירושלים לאחדות",
  "ערכות חינוכיות",
  "בית הספר לאחדות",
];

// Right to left.
export const PAYMENT_METHODS: { id: PaymentMethod; label: string }[] = [
  { id: "card", label: "כרטיס אשראי" },
  { id: "bit", label: "ביט" },
  { id: "apple", label: "Apple Pay" },
  { id: "google", label: "Google Pay" },
  { id: "paypal", label: "PayPal" },
];

// Right to left.
export const DEDICATIONS: { id: Dedication; label: string }[] = [
  { id: "honor", label: "לכבוד" },
  { id: "memory", label: "לזכר" },
];

// PLACEHOLDER: "Sunshine Association" is a stand-in account name from the design.
export const BANK_DETAILS = [
  { label: "שם החשבון", value: "Sunshine Association" },
  { label: "בנק", value: "בנק מזרחי-טפחות (20)" },
  { label: "סניף", value: "מודיעין (521)" },
  { label: "מספר חשבון", value: "252329" },
];

// Right to left.
export const ABROAD_CURRENCIES = ["ILS", "CAD", "GBP", "USD"];

// TODO: link to each partner's donation page for Unity Day.
export const ABROAD_PARTNERS = [
  { label: "Neeman Foundation", href: "#" },
  { label: "MyOfficeGuy", href: "#" },
];

// PLACEHOLDER: the design says "מיכל ואופיר" above, but the email chip is
// labelled "מירי". Right to left, as in the design.
export const HELP_CONTACTS = [
  { label: "אופיר · 050-2898922", href: "tel:+972502898922", icon: "/donate/icon-phone.svg" },
  { label: "מירי · office@unityday.org.il", href: "mailto:office@unityday.org.il", icon: "/donate/icon-mail.svg" },
];
