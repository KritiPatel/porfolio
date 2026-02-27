"use client";

import { ParticleField } from "./ParticleField";

export function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <ParticleField count={400} spread={18} size={0.015} />
    </>
  );
}
