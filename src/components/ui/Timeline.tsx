"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/types";

interface TimelineProps {
  items: Experience[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--c-border)] md:left-1/2" />

      {items.map((item, i) => {
        const isLeft = i % 2 === 0;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`relative mb-12 last:mb-0 pl-12 md:pl-0 md:w-[calc(50%-1.5rem)] ${
              isLeft ? "md:mr-auto md:pr-0" : "md:ml-auto md:pl-0"
            }`}
          >
            <div
              className="absolute left-[11px] top-6 h-3 w-3 rounded-full border-2 border-[var(--c-accent)] bg-[var(--c-bg)] z-10 md:left-auto"
              style={
                isLeft
                  ? { right: "-1.875rem", left: "auto" }
                  : { left: "-1.875rem" }
              }
            />

            <div className="rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 hover:border-[var(--c-accent)]/30 transition-colors duration-300">
              <div className="mb-1 text-sm font-mono text-[var(--c-accent)]">
                {item.period}
              </div>
              <h3 className="text-lg font-bold text-[var(--c-text)] sm:text-xl">
                {item.role}
              </h3>
              <p className="mb-4 text-sm text-[var(--c-text-secondary)] sm:text-base">
                {item.company} &middot; {item.location}
              </p>
              <ul className="space-y-2 text-sm text-[var(--c-text-secondary)]">
                {item.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--c-accent)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
