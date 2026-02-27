"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-14 sm:py-16">
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
          className="flex flex-col items-center gap-5 rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] p-7 sm:flex-row sm:gap-8 sm:p-8 hover:border-[var(--c-accent)]/30 hover:shadow-[0_4px_20px_rgba(16,185,129,0.06)] transition-all duration-300"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--c-accent-glow)] border border-[var(--c-accent)]/20">
            <svg className="h-7 w-7 text-[var(--c-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>

          <div className="text-center sm:text-left">
            <p className="mb-1 text-xs font-mono tracking-widest text-[var(--c-accent)] uppercase">
              {t.education.label}
            </p>
            <h3 className="text-xl font-bold text-[var(--c-text)]">
              {t.education.degree}
            </h3>
            <p className="mt-1 text-sm text-[var(--c-text-secondary)]">
              {t.education.school} · {t.education.location}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
