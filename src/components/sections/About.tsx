"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/providers/LanguageProvider";

export function About() {
  const { t, personal } = useLanguage();

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <SectionHeading title={t.about.title} subtitle={t.about.subtitle} />

        <div className="grid gap-8 lg:grid-cols-5 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] p-7 sm:p-8">
              <div className="mb-6 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
                <span className="ml-3 font-mono text-xs text-[var(--c-text-muted)]">
                  about.tsx
                </span>
              </div>
              <div className="font-mono text-sm leading-loose">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">developer</span>{" "}
                <span className="text-[var(--c-text-muted)]">=</span>{" "}
                <span className="text-yellow-300">{"{"}</span>
                <br />
                <span className="ml-4 text-blue-300">name</span>
                <span className="text-[var(--c-text-muted)]">: </span>
                <span className="text-[var(--c-accent-light)]">
                  &quot;{personal.name}&quot;
                </span>
                <span className="text-[var(--c-text-muted)]">,</span>
                <br />
                <span className="ml-4 text-blue-300">location</span>
                <span className="text-[var(--c-text-muted)]">: </span>
                <span className="text-[var(--c-accent-light)]">
                  &quot;{personal.location}&quot;
                </span>
                <span className="text-[var(--c-text-muted)]">,</span>
                <br />
                <span className="ml-4 text-blue-300">summary</span>
                <span className="text-[var(--c-text-muted)]">:</span>
                <br />
                <p className="ml-6 mt-1 mb-1 text-[var(--c-text-secondary)] leading-relaxed whitespace-normal font-sans text-sm">
                  {t.about.summary}
                </p>
                <span className="text-yellow-300">{"}"}</span>
                <span className="text-[var(--c-text-muted)]">;</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-5">
              {t.about.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.1 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  className="rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5 sm:p-6 text-center hover:border-[var(--c-accent)]/30 hover:shadow-[0_4px_20px_rgba(16,185,129,0.06)] transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-[var(--c-accent)] sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-xs text-[var(--c-text-muted)] sm:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
