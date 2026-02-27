"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { theme } from "@/config/theme";

export function WaveGrid() {
  const meshRef = useRef<THREE.Points>(null);
  const gridSize = 40;
  const spacing = 0.4;

  const positions = useMemo(() => {
    const pos = new Float32Array(gridSize * gridSize * 3);
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const idx = (i * gridSize + j) * 3;
        pos[idx] = (i - gridSize / 2) * spacing;
        pos[idx + 1] = 0;
        pos[idx + 2] = (j - gridSize / 2) * spacing;
      }
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const posAttr = meshRef.current.geometry.attributes.position;
    const arr = posAttr.array as Float32Array;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const idx = (i * gridSize + j) * 3;
        const x = arr[idx];
        const z = arr[idx + 2];
        arr[idx + 1] =
          Math.sin(x * 0.8 + time) * 0.3 +
          Math.cos(z * 0.8 + time * 0.8) * 0.3;
      }
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={meshRef} rotation={[-Math.PI / 4, 0, 0]} position={[0, -2, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={gridSize * gridSize}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color={theme.colors.accent.DEFAULT}
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
