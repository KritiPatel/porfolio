"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { socialLinks } from "@/config/site";

export function Footer() {
  const { t, personal } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--c-border)] bg-[var(--c-surface)]">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-[var(--c-text-muted)]">
          &copy; {year} {personal.name}. {t.footer.built}
        </p>
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--c-text-muted)] hover:text-[var(--c-accent)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
