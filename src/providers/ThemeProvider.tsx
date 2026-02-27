"use client";

import { useEffect } from "react";
import { theme } from "@/config/theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    const c = theme.colors;

    root.style.setProperty("--c-bg", c.background);
    root.style.setProperty("--c-surface", c.surface);
    root.style.setProperty("--c-surface-light", c.surfaceLight);
    root.style.setProperty("--c-surface-hover", c.surfaceHover);
    root.style.setProperty("--c-border", c.border);
    root.style.setProperty("--c-border-light", c.borderLight);
    root.style.setProperty("--c-text", c.text.primary);
    root.style.setProperty("--c-text-secondary", c.text.secondary);
    root.style.setProperty("--c-text-muted", c.text.muted);
    root.style.setProperty("--c-accent", c.accent.DEFAULT);
    root.style.setProperty("--c-accent-light", c.accent.light);
    root.style.setProperty("--c-accent-dark", c.accent.dark);
    root.style.setProperty("--c-accent-darker", c.accent.darker);
    root.style.setProperty("--c-accent-glow", c.accent.glow);
    root.style.setProperty("--c-accent-glow-strong", c.accent.glowStrong);
    root.style.setProperty("--c-font-heading", theme.fonts.heading);
    root.style.setProperty("--c-font-body", theme.fonts.body);
    root.style.setProperty("--c-font-mono", theme.fonts.mono);
    root.style.setProperty("--layout-max-width", theme.layout.maxWidth);
    root.style.setProperty("--layout-section-padding", theme.layout.sectionPadding);
    root.style.setProperty("--layout-nav-height", theme.layout.navHeight);
  }, []);

  return <>{children}</>;
}
