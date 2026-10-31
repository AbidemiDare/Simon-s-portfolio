"use client";

import { useState } from "react";
import { ventures } from "@/lib/content";

// Set this in .env.local, e.g. NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/yourFormId
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-lg border-[1.5px] border-[var(--line)] bg-white/5 px-4 py-3 text-base text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--lime)] [color-scheme:dark]";
const label = "mb-1.5 block text-sm font-medium";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!ENDPOINT) {
      setStatus("error");
      return;
    }
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className={label}>Your name</label>
        <input id="name" name="name" type="text" required autoComplete="name" className={field} />
      </div>

      <div>
        <label htmlFor="contact" className={label}>Email or WhatsApp number</label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          placeholder="So I know where to reply"
          className={field}
        />
      </div>

      <div>
        <label htmlFor="interest" className={label}>What are you interested in?</label>
        <select id="interest" name="interest" defaultValue="" required className={field}>
          <option value="" disabled className="bg-black">Choose one</option>
          {ventures.map((v) => (
            <option key={v.id} value={v.title} className="bg-black">{v.title}</option>
          ))}
          <option value="Something else" className="bg-black">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={label}>Message</label>
        <textarea id="message" name="message" rows={5} required className={field} />
      </div>

      {/* Spam trap: real people never see or fill this */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />
      <input type="hidden" name="_subject" value="New message from the portfolio site" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-[var(--lime)] px-6 py-3.5 font-medium text-[#0e3b2b] hover:brightness-95 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      <p role="status" aria-live="polite" className="min-h-6 text-sm">
        {status === "sent" && "Thank you! Your message has been sent and I’ll reply soon."}
        {status === "error" &&
          "Something went wrong. Please try again, or message me on WhatsApp instead."}
      </p>
    </form>
  );
}