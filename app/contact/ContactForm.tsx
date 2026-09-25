"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import styles from "./ContactForm.module.css";

export default function ContactForm({ labelledBy }: { labelledBy?: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: send the message to the office inbox / CRM. Nothing is sent yet.
    event.currentTarget.reset();
    setSent(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-labelledby={labelledBy}>
      <div className={styles.field}>
        <label htmlFor="contact-name" className={styles.label}>
          שם מלא
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="ישראל ישראלי"
          className={styles.input}
        />
      </div>

      {/* right to left, as in the design: phone, then email */}
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="contact-phone" className={styles.label}>
            טלפון
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="050-0000000"
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-email" className={styles.label}>
            אימייל
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="israel@email.com"
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message" className={styles.label}>
          ההודעה שלכם
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          placeholder="כתבו לנו כאן…"
          className={`${styles.input} ${styles.textarea}`}
        />
      </div>

      <label className={styles.consent}>
        <input type="checkbox" name="consent" required className={styles.checkbox} />
        <span>אני מאשר/ת את מדיניות הפרטיות ושמירת הפרטים ליצירת קשר.</span>
      </label>

      <div className={styles.actions}>
        <button type="submit" className={styles.submit}>
          <Image src="/contact/icon-arrow-send.svg" alt="" width={16} height={16} />
          שליחת הפנייה
        </button>
        <p className={styles.status} role="status">
          {sent ? "תודה! קיבלנו את הפנייה ונחזור אליכם בהקדם." : ""}
        </p>
      </div>
    </form>
  );
}
