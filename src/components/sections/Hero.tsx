"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";

const SceneContainer = dynamic(
  () => import("@/components/three/SceneContainer").then((m) => ({ default: m.SceneContainer })),
  { ssr: false }
);
const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => ({ default: m.HeroScene })),
  { ssr: false }
);

function TextReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-flex overflow-hidden">
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const { t, personal } = useLanguage();

  const nameParts = personal.name.split(" ");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-35">
        <SceneContainer camera={{ position: [0, 0, 8], fov: 50 }}>
          <HeroScene />
        </SceneContainer>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[var(--c-bg)]/30 via-transparent to-[var(--c-bg)]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-5 font-mono text-sm tracking-[0.3em] text-[var(--c-accent)] uppercase"
        >
          {t.hero.greeting}
        </motion.p>

        <h1 className="mb-5 text-5xl font-bold leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl">
          {nameParts.map((part, i) => (
            <span key={i}>
              <TextReveal text={part} delay={0.4 + i * 0.15} />
              {i < nameParts.length - 1 && "\u00A0"}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-2 text-xl text-[var(--c-text-secondary)] sm:text-2xl"
        >
          {personal.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mb-10 font-mono text-sm text-[var(--c-text-muted)] tracking-wider"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-[var(--c-accent)] px-8 py-3 text-sm font-semibold text-[var(--c-bg)] hover:bg-[var(--c-accent-light)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[var(--c-border-light)] px-8 py-3 text-sm font-semibold text-[var(--c-text)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition-all duration-300"
          >
            {t.hero.cta2}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-[var(--c-text-muted)] tracking-[0.3em] uppercase">
            {t.hero.scroll}
          </span>
          <div className="h-6 w-px bg-gradient-to-b from-[var(--c-accent)] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
