import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="pb-10 text-sm text-[var(--muted)]">
      © 2026 {site.name}. Crypto content is for education only and is not
      financial advice.
    </footer>
  );
}
