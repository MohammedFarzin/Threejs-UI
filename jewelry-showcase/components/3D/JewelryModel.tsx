'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, MeshStandardMaterial } from 'three';
import { MeshTransmissionMaterial } from '@react-three/drei';

interface JewelryModelProps {
  material?: 'yellow-gold' | 'rose-gold' | 'white-gold';
}

export default function JewelryModel({ material = 'yellow-gold' }: JewelryModelProps) {
  const ringRef = useRef<Mesh>(null);
  const gemRef = useRef<Mesh>(null);

  // Material colors
  const materialColors = {
    'yellow-gold': '#D4AF37',
    'rose-gold': '#E0BFB8',
    'white-gold': '#E8E8E8',
  };

  const accentColors = {
    'yellow-gold': '#FFC107',
    'rose-gold': '#F5C7B8',
    'white-gold': '#F0F0F0',
  };

  const goldColor = materialColors[material];
  const accentColor = accentColors[material];

  // Gentle floating animation
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (ringRef.current) {
      ringRef.current.position.y = Math.sin(time * 0.5) * 0.1;
      ringRef.current.rotation.y = time * 0.3;
      ringRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
    }

    if (gemRef.current) {
      gemRef.current.rotation.y = time * 2;
    }
  });

  return (
    <group scale={1.5}>
      {/* Ring Band */}
      <mesh ref={ringRef} castShadow receiveShadow>
        <torusGeometry args={[1, 0.15, 32, 100]} />
        <meshStandardMaterial
          color={goldColor}
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Ring Setting (Top Part) */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.4, 0.3, 32]} />
        <meshStandardMaterial
          color={goldColor}
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Diamond/Gem */}
      <mesh ref={gemRef} position={[0, 1.1, 0]} castShadow>
        <octahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.1}
          roughness={0}
          envMapIntensity={2}
          transparent
          opacity={0.95}
          emissive="#88ccff"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Decorative Gold Accents */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i * Math.PI * 2) / 6;
        const x = Math.cos(angle) * 1.15;
        const z = Math.sin(angle) * 1.15;

        return (
          <mesh key={i} position={[x, 0, z]} castShadow>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color={accentColor}
              metalness={1}
              roughness={0.2}
              envMapIntensity={1}
            />
          </mesh>
        );
      })}
    </group>
  );
}
