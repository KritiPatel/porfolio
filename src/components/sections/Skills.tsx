"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/providers/LanguageProvider";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <SectionHeading title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.groups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 sm:p-7 hover:border-[var(--c-accent)]/40 hover:shadow-[0_8px_30px_rgba(16,185,129,0.06)] transition-all duration-300"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-base font-semibold text-[var(--c-text)] group-hover:text-[var(--c-accent)] transition-colors sm:text-lg">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + j * 0.03 }}
                    className="rounded-full bg-[var(--c-surface-light)] px-3.5 py-1.5 text-xs text-[var(--c-text-secondary)] border border-[var(--c-border)] hover:border-[var(--c-accent)]/40 hover:text-[var(--c-accent-light)] hover:bg-[var(--c-accent-glow)] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
