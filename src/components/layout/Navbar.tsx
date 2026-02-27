"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, setLocale, t, personal } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--c-bg)]/80 backdrop-blur-xl border-b border-[var(--c-border)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6 sm:px-8">
        <a
          href="#"
          className="text-lg font-bold text-[var(--c-text)] hover:text-[var(--c-accent)] transition-colors"
        >
          {personal.name.split(" ")[0]}
          <span className="text-[var(--c-accent)]">.</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {t.nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--c-text-secondary)] hover:text-[var(--c-accent)] transition-colors"
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={() => setLocale(locale === "en" ? "fr" : "en")}
            className="rounded-full border border-[var(--c-border)] px-3 py-1 text-xs font-mono text-[var(--c-text-muted)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition-all"
          >
            {locale === "en" ? "FR" : "EN"}
          </button>

          <a
            href="#contact"
            className="rounded-full border border-[var(--c-accent)] px-4 py-1.5 text-sm text-[var(--c-accent)] hover:bg-[var(--c-accent)] hover:text-[var(--c-bg)] transition-all"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setLocale(locale === "en" ? "fr" : "en")}
            className="rounded-full border border-[var(--c-border)] px-3 py-1 text-xs font-mono text-[var(--c-text-muted)]"
          >
            {locale === "en" ? "FR" : "EN"}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-[var(--c-text)]"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-[var(--c-text)]"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-[var(--c-text)]"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--c-surface)]/95 backdrop-blur-xl border-b border-[var(--c-border)]"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {t.nav.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-[var(--c-text-secondary)] hover:text-[var(--c-accent)] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
