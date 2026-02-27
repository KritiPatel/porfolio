"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

interface SceneContainerProps {
  children: React.ReactNode;
  className?: string;
  camera?: { position?: [number, number, number]; fov?: number };
}

export function SceneContainer({
  children,
  className = "",
  camera = { position: [0, 0, 5], fov: 75 },
}: SceneContainerProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={camera}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: "none" }}
      >
        <Suspense fallback={null}>
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
