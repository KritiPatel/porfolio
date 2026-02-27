"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";

export function Resume() {
  const { t } = useLanguage();

  return (
    <section id="resume" className="py-20 sm:py-24">
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-5 rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] p-8 text-center sm:flex-row sm:justify-between sm:text-left sm:p-10"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--c-accent-glow)] border border-[var(--c-accent)]/20">
              <svg className="h-7 w-7 text-[var(--c-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--c-text)] sm:text-2xl">
                {t.resume.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--c-text-secondary)]">
                {t.resume.subtitle}
              </p>
            </div>
          </div>

          <motion.a
            href={`/${t.resume.filename}`}
            download
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex shrink-0 items-center gap-2.5 rounded-xl bg-[var(--c-accent)] px-6 py-3.5 text-sm font-semibold text-[var(--c-bg)] hover:bg-[var(--c-accent-light)] hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all duration-300"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {t.resume.download}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
