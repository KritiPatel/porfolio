"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { useLanguage } from "@/providers/LanguageProvider";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((project, i) => (
            <GlowCard key={project.title} index={i}>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-[var(--c-text)]">
                  {project.title}
                </h3>
                <svg className="h-5 w-5 text-[var(--c-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>

              <p className="mb-5 font-mono text-xs text-[var(--c-accent)] leading-relaxed">
                {project.tech}
              </p>

              <p className="mb-6 text-sm text-[var(--c-text-secondary)] leading-relaxed">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--c-accent)] hover:text-[var(--c-accent-light)] transition-colors"
                >
                  {project.linkLabel}
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
