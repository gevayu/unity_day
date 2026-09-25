"use client";

import { useState, type FocusEvent, type FormEvent, type HTMLAttributes, type InvalidEvent } from "react";
import Image from "next/image";
import { EDIT_ORDER_HREF, ORDER, PRIVACY_HREF, REGISTRATION_NUMBER, TERMS_HREF } from "./data";
import styles from "./CheckoutForm.module.css";

type Status = "idle" | "valid" | "invalid";

const PHONE_ERROR = "מספר טלפון לא תקין — בדקו שהזנתם 10 ספרות";
// Not in the design (it only shows the valid email state). TODO: confirm the copy.
const EMAIL_ERROR = "כתובת האימייל לא תקינה";

const price = `₪${ORDER.amount}`;

// Israeli numbers: 10 digits starting with 0; dashes and spaces are ignored.
function checkPhone(input: HTMLInputElement) {
  const digits = input.value.replace(/[\s-]/g, "");
  input.setCustomValidity(digits === "" || /^0\d{9}$/.test(digits) ? "" : PHONE_ERROR);
}

type FieldProps = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "tel";
  autoComplete?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
  pattern?: string;
  maxLength?: number;
  title?: string;
  /** email/phone: typed left-to-right, still aligned to the right like the rest */
  ltr?: boolean;
  required?: boolean;
  hint?: string;
  error?: string;
  status?: Status;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange?: (input: HTMLInputElement) => void;
};

function Field({
  id,
  label,
  hint,
  error,
  status = "idle",
  ltr,
  required = true,
  type = "text",
  onChange,
  ...input
}: FieldProps) {
  const invalid = status === "invalid";
  const note = invalid && error ? error : hint;
  const noteId = note ? `${id}-note` : undefined;
  const inputClass = [styles.input, status !== "idle" && styles[status]].filter(Boolean).join(" ");

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.control}>
        <input
          id={id}
          type={type}
          required={required}
          dir={ltr ? "ltr" : undefined}
          className={inputClass}
          aria-invalid={invalid || undefined}
          aria-describedby={noteId}
          onChange={onChange ? (e) => onChange(e.currentTarget) : undefined}
          {...input}
        />
        {status !== "idle" && (
          <Image
            src={invalid ? "/checkout/icon-error.svg" : "/checkout/icon-valid.svg"}
            alt=""
            width={20}
            height={20}
            className={styles.statusIcon}
          />
        )}
      </div>
      {note && (
        <p id={noteId} className={invalid && error ? styles.error : styles.hint}>
          {note}
        </p>
      )}
    </div>
  );
}

function CardTitle({ id, step, children }: { id: string; step: number; children: React.ReactNode }) {
  return (
    <h3 id={id} className={styles.cardTitle}>
      <span className={styles.step} aria-hidden="true">
        {step}
      </span>
      {children}
    </h3>
  );
}

export default function CheckoutForm() {
  // Only email and phone have a format to confirm, so only they show the
  // green/red states from the design.
  const [status, setStatus] = useState<Record<"email" | "phone", Status>>({ email: "idle", phone: "idle" });
  const [done, setDone] = useState(false);

  function evaluate(input: HTMLInputElement): Status {
    if (input.name === "phone") checkPhone(input);
    if (!input.value) return "idle";
    return input.checkValidity() ? "valid" : "invalid";
  }

  function onBlur(e: FocusEvent<HTMLInputElement>) {
    const input = e.currentTarget;
    setStatus((s) => ({ ...s, [input.name]: evaluate(input) }));
  }

  // Once a field shows an error, re-check it while the donor fixes it.
  function onChange(input: HTMLInputElement) {
    const name = input.name as "email" | "phone";
    if (name === "phone") checkPhone(input);
    if (status[name] === "invalid") setStatus((s) => ({ ...s, [name]: evaluate(input) }));
  }

  function onInvalid(e: InvalidEvent<HTMLFormElement>) {
    const name = (e.target as HTMLInputElement).name;
    if (name === "email" || name === "phone") setStatus((s) => ({ ...s, [name]: "invalid" }));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: create the payment session with the clearing provider and redirect to
    // its secure page; it returns to /thank-you on success. Nothing is charged yet.
    setDone(true);
  }

  return (
    <form className={styles.grid} onSubmit={onSubmit} onInvalidCapture={onInvalid}>
      {/* right: the form cards */}
      <div className={styles.formCol}>
        <fieldset className={styles.card} aria-labelledby="card-donor">
          <CardTitle id="card-donor" step={1}>פרטי התורם</CardTitle>
          {/* Pairs are in reading order (name before ID, email before phone);
              .row lays them out reversed so the first one sits on the left, as
              in the design, and stacks them in this order on mobile. */}
          <div className={styles.row}>
            <Field id="donor-name" name="fullName" label="שם מלא" placeholder="ישראל ישראלי" autoComplete="name" />
            <Field
              id="donor-id"
              name="idNumber"
              label="תעודת זהות"
              placeholder="000000000"
              inputMode="numeric"
              pattern="[0-9]{9}"
              maxLength={9}
              title="9 ספרות"
            />
          </div>
          <div className={styles.row}>
            <Field
              id="donor-email"
              name="email"
              label="אימייל"
              type="email"
              placeholder="israel@email.com"
              autoComplete="email"
              ltr
              hint="לשם תישלח הקבלה"
              error={EMAIL_ERROR}
              status={status.email}
              onBlur={onBlur}
              onChange={onChange}
            />
            <Field
              id="donor-phone"
              name="phone"
              label="טלפון"
              type="tel"
              placeholder="050-0000000"
              autoComplete="tel"
              ltr
              error={PHONE_ERROR}
              status={status.phone}
              onBlur={onBlur}
              onChange={onChange}
            />
          </div>
        </fieldset>

        <fieldset className={styles.card} aria-labelledby="card-billing">
          <CardTitle id="card-billing" step={2}>כתובת לחיוב</CardTitle>
          <Field id="billing-street" name="street" label="רחוב ומספר" placeholder="הרצל 10" autoComplete="address-line1" />
          <div className={styles.row}>
            <Field id="billing-city" name="city" label="עיר" placeholder="תל אביב" autoComplete="address-level2" />
            <Field id="billing-country" name="country" label="מדינה" placeholder="ישראל" autoComplete="country-name" />
          </div>
        </fieldset>

        <fieldset className={styles.card} aria-labelledby="card-receipt">
          <CardTitle id="card-receipt" step={3}>קבלה מוכרת לפי סעיף 46</CardTitle>
          <p className={styles.cardNote}>התרומה מזכה בהחזר מס. הקבלה תונפק על שם הפרטים הבאים.</p>
          <div className={styles.row}>
            <Field id="receipt-name" name="receiptName" label="שם לקבלה" placeholder="ישראל ישראלי" />
            <Field
              id="receipt-id"
              name="receiptId"
              label="ת.ז / ח.פ"
              placeholder="000000000"
              inputMode="numeric"
              pattern="[0-9]{9}"
              maxLength={9}
              title="9 ספרות"
            />
          </div>
        </fieldset>

        <div className={styles.consent}>
          <label className={styles.check}>
            <input type="checkbox" name="terms" required className={styles.checkbox} />
            <span>
              קראתי ואני מאשר/ת את{" "}
              <a href={TERMS_HREF} className={styles.link}>
                התקנון
              </a>{" "}
              ו
              <a href={PRIVACY_HREF} className={styles.link}>
                מדיניות הפרטיות
              </a>
              .
            </span>
          </label>
          <label className={styles.check}>
            <input type="checkbox" name="updates" className={styles.checkbox} />
            <span>אשמח לקבל עדכונים ותכנים על יום האחדות במייל. (לא חובה)</span>
          </label>
        </div>
      </div>

      {/* left: order summary and the pay button */}
      <div className={styles.summaryCol}>
        <section className={styles.summary} aria-labelledby="order-summary">
          <h3 id="order-summary" className={styles.summaryTitle}>
            סיכום ההזמנה
          </h3>
          <div className={styles.item}>
            <div className={styles.itemText}>
              <p className={styles.itemName}>{ORDER.item}</p>
              <p className={styles.itemMeta}>ייעוד: {ORDER.designation}</p>
            </div>
            <p className={styles.itemPrice}>{price}</p>
          </div>
          <hr className={styles.rule} />
          <dl className={styles.details}>
            <div className={styles.detail}>
              <dt>תדירות</dt>
              <dd>{ORDER.frequency}</dd>
            </div>
            <div className={styles.detail}>
              <dt>חיוב הבא</dt>
              <dd>{ORDER.nextCharge}</dd>
            </div>
            <div className={styles.detail}>
              <dt>קבלה</dt>
              <dd>{ORDER.receipt}</dd>
            </div>
          </dl>
          <hr className={styles.rule} />
          <div className={styles.total}>
            <p className={styles.totalLabel}>סה״כ לחיוב</p>
            <p className={styles.totalValue}>
              {price} / {ORDER.per}
            </p>
          </div>
        </section>

        <button type="submit" className={styles.pay}>
          <Image src="/checkout/icon-lock-pay.svg" alt="" width={18} height={18} />
          לתשלום מאובטח · {price}
        </button>

        <ul className={styles.trust} aria-label="אבטחה">
          <li>
            ע.ר. {REGISTRATION_NUMBER}
            <Image src="/checkout/icon-receipt.svg" alt="" width={16} height={16} />
          </li>
          <li>
            PCI-DSS
            <Image src="/checkout/icon-shield.svg" alt="" width={16} height={16} />
          </li>
          {/* Figma lays this label out LTR ("SSL" on the left); written in visual
              order so RTL renders it the same */}
          <li>
            מוצפן SSL
            <Image src="/checkout/icon-lock.svg" alt="" width={16} height={16} />
          </li>
        </ul>

        {/* The design's arrow points left, which reads as "forward" in RTL; it's
            mirrored so "back" points back. */}
        <a href={EDIT_ORDER_HREF} className={styles.back}>
          <Image src="/checkout/icon-arrow-back.svg" alt="" width={15} height={15} className={styles.backIcon} />
          חזרה לעריכת ההזמנה
        </a>

        <p className={styles.status} role="status">
          {done ? "הפרטים תקינים. החיבור לסליקה עדיין לא פעיל, כך שלא בוצע חיוב." : ""}
        </p>
      </div>
    </form>
  );
}
