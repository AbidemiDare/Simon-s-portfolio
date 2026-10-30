import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="pb-8 text-sm text-[var(--muted)] sm:pb-10">
      © {site.year} {site.name}. Crypto content is for education only and is not financial
      advice.
    </footer>
  );
}
