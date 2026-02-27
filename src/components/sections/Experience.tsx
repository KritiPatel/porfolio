"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/providers/LanguageProvider";

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <SectionHeading title={t.experience.title} subtitle={t.experience.subtitle} />

        <div className="space-y-8">
          {t.experience.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] overflow-hidden hover:border-[var(--c-accent)]/30 hover:shadow-[0_8px_30px_rgba(16,185,129,0.06)] transition-all duration-300"
            >
              <div className="border-l-2 border-[var(--c-accent)] pl-6 pr-6 py-7 sm:pl-8 sm:pr-8 sm:py-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--c-text)]">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--c-text-secondary)] sm:text-base">
                      {item.company} · {item.location}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-[var(--c-accent-glow)] border border-[var(--c-accent)]/20 px-4 py-1.5 font-mono text-xs text-[var(--c-accent)]">
                    {item.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {item.bullets.map((bullet, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + j * 0.06 }}
                      className="flex items-start gap-3 text-sm text-[var(--c-text-secondary)] leading-relaxed"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--c-accent)]" />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
