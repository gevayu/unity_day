export type Member = {
  id: string;
  name: string;
  role: string;
  photo: string;
  /** horizontal focus of the crop, as in the Figma frame */
  focusX: string;
};

// PLACEHOLDER CONTENT: names and roles are the design's own placeholders.
// Ordered right to left, as they read on the page.
export const MEMBERS: Member[] = [
  {
    id: "c1",
    name: "שם החבר/ה",
    role: "תפקיד ותחום — תיאור קצר של חבר/ת הוועדה.",
    photo: "/committee/member-3.jpg",
    focusX: "50%",
  },
  {
    id: "c2",
    name: "שם החבר/ה",
    role: "תפקיד ותחום — תיאור קצר של חבר/ת הוועדה.",
    photo: "/committee/member-2.jpg",
    focusX: "39.9%",
  },
  {
    id: "c3",
    name: "שם החבר/ה",
    role: "תפקיד ותחום — תיאור קצר של חבר/ת הוועדה.",
    photo: "/committee/member-1.jpg",
    focusX: "0%",
  },
];
