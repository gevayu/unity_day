"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import {
  AMOUNTS,
  CURRENCIES,
  DEDICATIONS,
  DESTINATIONS,
  FREQUENCIES,
  PAYMENT_METHODS,
  type CurrencyCode,
  type Dedication,
  type Frequency,
  type PaymentMethod,
} from "./data";
import styles from "./DonationForm.module.css";

const cx = (...names: (string | false | undefined)[]) => names.filter(Boolean).join(" ");

function formatAmount(symbol: string, value: number) {
  return `${symbol}${value.toLocaleString("en-US")}`;
}

// Right to left, as in the design.
const FEATURES = [
  { icon: "/donate/icon-receipt.svg", label: "קבלה מוכרת למס לפי סעיף 46" },
  { icon: "/donate/icon-lock.svg", label: "תשלום מאובטח" },
  { icon: "/donate/icon-eye.svg", label: "אפשר לתרום בעילום שם" },
];

type Field = {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  inputMode?: "numeric" | "tel" | "email" | "text";
  pattern?: string;
  required?: boolean;
  ltr?: boolean;
};

function TextField({ field, disabled }: { field: Field; disabled?: boolean }) {
  return (
    <div className={styles.field}>
      <label htmlFor={field.id} className={styles.fieldLabel}>
        {field.label}
      </label>
      <input
        id={field.id}
        name={field.id}
        type={field.type ?? "text"}
        autoComplete={field.autoComplete}
        inputMode={field.inputMode}
        pattern={field.pattern}
        required={field.required && !disabled}
        disabled={disabled}
        placeholder={field.placeholder}
        dir={field.ltr ? "ltr" : undefined}
        className={cx(styles.input, field.ltr && styles.inputLtr)}
      />
    </div>
  );
}

// Right to left within each row.
const DETAILS: Field[][] = [
  [
    { id: "name", label: "שם מלא", placeholder: "הזינו את השם המלא", autoComplete: "name", required: true },
    { id: "idNumber", label: "מספר תעודת זהות", placeholder: "הזינו את מספר תעודת הזהות", inputMode: "numeric", pattern: "[0-9]{5,9}" },
  ],
  [
    { id: "email", label: "אימייל", placeholder: "הזינו את כתובת האימייל", type: "email", autoComplete: "email", required: true },
    { id: "phone", label: "טלפון", placeholder: "הזינו את מספר הטלפון", type: "tel", autoComplete: "tel" },
  ],
  [{ id: "address", label: "כתובת למשלוח קבלה", placeholder: "הזינו את כתובת המשלוח המלאה", autoComplete: "street-address" }],
];

const CARD: Field[][] = [
  [
    {
      id: "cardNumber",
      label: "מספר כרטיס",
      placeholder: "0000 0000 0000 0000",
      autoComplete: "cc-number",
      inputMode: "numeric",
      pattern: "[0-9 ]{12,23}",
      required: true,
      ltr: true,
    },
  ],
  [
    { id: "cardExpiry", label: "תוקף", placeholder: "MM / YY", autoComplete: "cc-exp", pattern: "(0[1-9]|1[0-2]) ?/ ?[0-9]{2}", required: true, ltr: true },
    { id: "cardCvc", label: "קוד אבטחה", placeholder: "***", autoComplete: "cc-csc", inputMode: "numeric", pattern: "[0-9]{3,4}", required: true, ltr: true },
  ],
  [{ id: "cardName", label: "שם בעל הכרטיס", placeholder: "כפי שמופיע על הכרטיס", autoComplete: "cc-name", required: true }],
];

function FieldRows({ rows, disabled }: { rows: Field[][]; disabled?: boolean }) {
  return (
    <div className={styles.fields}>
      {rows.map((row) => (
        <div key={row[0].id} className={styles.fieldRow}>
          {row.map((field) => (
            <TextField key={field.id} field={field} disabled={disabled} />
          ))}
        </div>
      ))}
    </div>
  );
}

function StepHead({ n, id, children }: { n: number; id: string; children: React.ReactNode }) {
  return (
    <div className={styles.stepHead}>
      <span className={styles.stepNum} aria-hidden="true">
        {n}
      </span>
      <h3 id={id} className={styles.stepTitle}>
        {children}
      </h3>
    </div>
  );
}

export default function DonationForm() {
  const [frequency, setFrequency] = useState<Frequency>("once");
  const [currency, setCurrency] = useState<CurrencyCode>("ILS");
  const [amount, setAmount] = useState<number | "other">(500);
  const [otherAmount, setOtherAmount] = useState("");
  const [destination, setDestination] = useState(DESTINATIONS[0]);
  const [dedication, setDedication] = useState<Dedication | null>(null);
  const [method, setMethod] = useState<PaymentMethod>("card");
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);

  const symbol = CURRENCIES.find((c) => c.code === currency)!.symbol;
  const total = amount === "other" ? Number(otherAmount) || 0 : amount;
  const freq = FREQUENCIES.find((f) => f.id === frequency)!;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: hand the payment to the clearing provider (its hosted card fields
    // should replace the card inputs below) and redirect to /thank-you on
    // success. Nothing is sent or charged yet.
    setSent(true);
  }

  return (
    <div className={styles.grid}>
      <form className={styles.formCard} onSubmit={handleSubmit} aria-labelledby="donate-form-title">
        <div className={styles.formHead}>
          <h2 id="donate-form-title" className={styles.formTitle}>
            בחרו כיצד תרצו לתרום
          </h2>
        </div>

        <div className={styles.formBody}>
          {/* ---------- 1. the donation ---------- */}
          <fieldset className={styles.step} aria-labelledby="step-amount">
            <StepHead n={1} id="step-amount">
              התרומה שלכם
            </StepHead>

            <div className={styles.stepOne}>
              <div className={styles.group}>
                <p id="donate-frequency" className={styles.groupLabel}>
                  תדירות התרומה
                </p>
                <div className={styles.toggle} role="group" aria-labelledby="donate-frequency">
                  {FREQUENCIES.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      aria-pressed={frequency === f.id}
                      className={cx(styles.toggleBtn, f.id === "once" ? styles.toggleOnce : styles.toggleMonthly)}
                      onClick={() => setFrequency(f.id)}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.group}>
                <p id="donate-currency" className={styles.groupLabel}>
                  מטבע
                </p>
                <div className={styles.chips} role="group" aria-labelledby="donate-currency">
                  {CURRENCIES.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      dir="ltr"
                      aria-pressed={currency === c.code}
                      className={cx(styles.chip, styles[`chip${c.code}`])}
                      onClick={() => setCurrency(c.code)}
                    >
                      {c.symbol} {c.code}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.group}>
                <p id="donate-amount" className={styles.groupLabel}>
                  סכום התרומה
                </p>
                <div className={styles.amounts} role="group" aria-labelledby="donate-amount">
                  {AMOUNTS.map((a) => (
                    <button
                      key={a}
                      type="button"
                      aria-pressed={amount === a}
                      className={styles.amount}
                      onClick={() => setAmount(a)}
                    >
                      <span dir="ltr">{formatAmount(symbol, a)}</span>
                    </button>
                  ))}
                  <button
                    type="button"
                    aria-pressed={amount === "other"}
                    className={styles.amount}
                    onClick={() => setAmount("other")}
                  >
                    אחר
                  </button>
                </div>
                {amount === "other" && (
                  <div className={styles.otherAmount}>
                    <label htmlFor="otherAmount" className="sr-only">
                      סכום אחר
                    </label>
                    <input
                      id="otherAmount"
                      name="otherAmount"
                      type="number"
                      min={1}
                      step={1}
                      required
                      inputMode="numeric"
                      placeholder={`הזינו סכום ב-${currency}`}
                      value={otherAmount}
                      onChange={(e) => setOtherAmount(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                )}
              </div>

              <div className={cx(styles.group, styles.groupSelect)}>
                <label htmlFor="destination" className={styles.groupLabel}>
                  לאן תרצו שהתרומה שלכם תופנה?
                </label>
                <select
                  id="destination"
                  name="destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className={cx(styles.input, styles.select)}
                >
                  {DESTINATIONS.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>
          </fieldset>

          <hr className={styles.divider} />

          {/* ---------- 2. your details ---------- */}
          <fieldset className={styles.step} aria-labelledby="step-details">
            <StepHead n={2} id="step-details">
              הפרטים שלכם
            </StepHead>

            <FieldRows rows={DETAILS} />

            <div className={styles.dedication}>
              <p id="donate-dedication" className={styles.groupLabel}>
                הקדשת התרומה (לא חובה)
              </p>
              <div className={styles.dedicationBtns} role="group" aria-labelledby="donate-dedication">
                {DEDICATIONS.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    aria-pressed={dedication === d.id}
                    className={cx(styles.option, styles[`option_${d.id}`])}
                    onClick={() => setDedication(dedication === d.id ? null : d.id)}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
              {dedication && (
                <div className={styles.dedicationName}>
                  <label htmlFor="dedicationName" className="sr-only">
                    {dedication === "honor" ? "לכבוד" : "לזכר"}
                  </label>
                  <input
                    id="dedicationName"
                    name="dedicationName"
                    type="text"
                    required
                    placeholder="הזינו את השם"
                    className={styles.input}
                  />
                </div>
              )}
            </div>

            <div className={styles.wall} role="radiogroup" aria-labelledby="donate-wall">
              <p id="donate-wall" className={styles.groupLabel}>
                קיר התומכים
              </p>
              <div className={styles.wallOptions}>
                <label className={styles.radioRow}>
                  <input type="radio" name="wall" value="show" defaultChecked className={styles.radio} />
                  הצגת השם שלי
                </label>
                <label className={cx(styles.radioRow, styles.radioRowSecond)}>
                  <input type="radio" name="wall" value="anonymous" className={styles.radio} />
                  תרומה בעילום שם
                </label>
              </div>
            </div>
          </fieldset>

          <hr className={styles.divider} />

          {/* ---------- 3. payment ---------- */}
          <fieldset className={styles.step} aria-labelledby="step-payment">
            <StepHead n={3} id="step-payment">
              תשלום מאובטח
            </StepHead>

            <div className={styles.methods} role="group" aria-label="אמצעי תשלום">
              {PAYMENT_METHODS.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  aria-pressed={method === m.id}
                  className={cx(styles.option, styles.method, styles[`method_${m.id}`])}
                  onClick={() => setMethod(m.id)}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {/* Card fields only apply to the card option; the wallets open their own checkout. */}
            <div className={styles.cardFields} hidden={method !== "card"}>
              <FieldRows rows={CARD} disabled={method !== "card"} />
            </div>

            <div className={styles.consents}>
              <label className={styles.checkRow}>
                <input type="checkbox" name="newsletter" className={styles.checkbox} />
                עדכנו אותי בחדשות מיום האחדות.
              </label>
              <label className={cx(styles.checkRow, styles.checkRowSecond)}>
                <input
                  type="checkbox"
                  name="terms"
                  required
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className={styles.checkbox}
                />
                {/* TODO: link the terms and the privacy policy once those pages exist. */}
                אני מסכים/ה לתנאי התרומה ולמדיניות הפרטיות.
              </label>
            </div>

            <div className={styles.submitWrap}>
              <button type="submit" className={cx(styles.submit, agreed && styles.submitReady)}>
                השלמת התרומה
              </button>
              <p className={styles.secure}>
                <Image src="/donate/icon-lock-small.svg" alt="" width={12} height={12} />
                התשלום מאובטח, וקבלה תישלח לאימייל שלכם.
              </p>
              <p className={styles.status} role="status">
                {sent ? "תודה! הסליקה עדיין לא מחוברת לאתר, ולכן לא בוצע חיוב." : ""}
              </p>
            </div>
          </fieldset>
        </div>
      </form>

      {/* ---------- live summary ---------- */}
      <aside className={styles.summaryCol} aria-labelledby="donate-summary-title">
        <div className={styles.summary}>
          <h2 id="donate-summary-title" className={styles.summaryTitle}>
            סיכום התרומה
          </h2>
          <div className={styles.total}>
            <p className={styles.totalAmount} dir="ltr" aria-live="polite">
              {formatAmount(symbol, total)}
            </p>
            <p className={styles.totalCaption}>{freq.summary}</p>
          </div>
          <dl className={styles.rows}>
            <div className={styles.row}>
              <dt>תדירות</dt>
              <dd>{freq.label}</dd>
            </div>
            <div className={styles.row}>
              <dt>מטבע</dt>
              <dd dir="ltr">
                {symbol} {currency}
              </dd>
            </div>
            <div className={styles.row}>
              <dt>מיועד ל</dt>
              <dd>{destination}</dd>
            </div>
          </dl>
          <div className={styles.summaryLine} aria-hidden="true">
            <Image src="/donate/summary-line.svg" alt="" width={364} height={1} />
          </div>
          <p className={styles.summaryNote}>
            התרומה שלכם מסייעת לנו לקיים עוד מפגשים, יוזמות ומשאבים חינוכיים שמחזקים את האחדות.
          </p>
          <ul className={styles.features}>
            {FEATURES.map((f) => (
              <li key={f.label}>
                <span className={styles.featureIcon}>
                  <Image src={f.icon} alt="" width={14.8571} height={14.8571} />
                </span>
                {f.label}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
