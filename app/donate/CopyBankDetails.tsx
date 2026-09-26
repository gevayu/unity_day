"use client";

import { useEffect, useState } from "react";

export default function CopyBankDetails({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2500);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      // Clipboard access can be blocked (insecure context, permissions); the details stay visible above.
    }
  }

  return (
    <button type="button" className={className} onClick={copy}>
      <span aria-live="polite">{copied ? "הפרטים הועתקו" : "העתקת פרטי החשבון"}</span>
    </button>
  );
}
