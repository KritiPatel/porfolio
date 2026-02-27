"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { theme } from "@/config/theme";

interface NodeData {
  position: [number, number, number];
  scale: number;
}

function SkillNode({ position, scale }: NodeData) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[0.15, 0]} />
        <meshStandardMaterial
          color={theme.colors.accent.DEFAULT}
          emissive={theme.colors.accent.dark}
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
}

function ConnectionLines({ nodes }: { nodes: NodeData[] }) {
  const linesRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i].position;
        const b = nodes[j].position;
        const dist = Math.sqrt(
          (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2
        );
        if (dist < 3) {
          positions.push(...a, ...b);
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    return geo;
  }, [nodes]);

  useFrame((state) => {
    if (!linesRef.current) return;
    linesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial
        color={theme.colors.accent.DEFAULT}
        transparent
        opacity={0.12}
      />
    </lineSegments>
  );
}

export function FloatingNodes() {
  const nodes: NodeData[] = useMemo(() => {
    const result: NodeData[] = [];
    for (let i = 0; i < 20; i++) {
      result.push({
        position: [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4,
        ],
        scale: 0.5 + Math.random() * 0.5,
      });
    }
    return result;
  }, []);

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color={theme.colors.accent.light} />
      {nodes.map((node, i) => (
        <SkillNode key={i} {...node} />
      ))}
      <ConnectionLines nodes={nodes} />
    </>
  );
}
