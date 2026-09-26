"use client";

import { useState, type FormEvent } from "react";
import styles from "./NewsletterForm.module.css";

export default function NewsletterForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: post the address to the mailing-list provider.
    setSent(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="newsletter-email" className="sr-only">
        האימייל שלך
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="האימייל שלך"
        className={styles.input}
        disabled={sent}
      />
      <button type="submit" className={styles.submit} disabled={sent}>
        הרשמה
      </button>
      <p className={styles.status} role="status">
        {sent ? "תודה! נעדכן אתכם." : ""}
      </p>
    </form>
  );
}
