"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { theme } from "@/config/theme";

export function ScrollMorphScene() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    meshRef.current.scale.setScalar(scale);
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 3, 3]} intensity={0.6} color={theme.colors.accent.light} />
      <mesh ref={meshRef} position={[3, 0, 0]} scale={1.5}>
        <torusKnotGeometry args={[0.8, 0.25, 128, 16]} />
        <MeshDistortMaterial
          color={theme.colors.accent.dark}
          emissive={theme.colors.accent.darker}
          emissiveIntensity={0.3}
          roughness={0.4}
          metalness={0.6}
          distort={0.2}
          speed={3}
          wireframe
        />
      </mesh>
    </>
  );
}
