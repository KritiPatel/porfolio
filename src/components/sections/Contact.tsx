"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/providers/LanguageProvider";
import { socialLinks } from "@/config/site";

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "mail")
    return (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  if (icon === "linkedin")
    return (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  return null;
}

export function Contact() {
  const { t, personal } = useLanguage();

  const contactItems = [
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: t.contact.emailLabel,
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: t.contact.locationLabel,
      value: personal.location,
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-lg"
        >
          <div className="rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] p-8 sm:p-10">
            <div className="space-y-6 mb-8">
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--c-accent-glow)] text-[var(--c-accent)] border border-[var(--c-accent)]/10">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-[var(--c-text-muted)] uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[var(--c-text)] hover:text-[var(--c-accent)] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[var(--c-text)]">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-[var(--c-border)] pt-6 flex items-center justify-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--c-border)] text-[var(--c-text-muted)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition-all duration-200"
                  aria-label={link.label}
                >
                  <SocialIcon icon={link.icon} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
