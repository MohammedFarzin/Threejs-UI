'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import JewelryModel from '../3D/JewelryModel';
import GoldParticles from './GoldParticles';

export default function Hero3D() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-green-gold opacity-90 z-0" />

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10">
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

          {/* Lighting Setup for Gold Material */}
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#D4AF37" />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
          <spotLight
            position={[0, 5, 0]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            castShadow
            color="#FFC107"
          />

          {/* Environment for Reflections */}
          <Environment preset="sunset" />

          {/* 3D Jewelry Model */}
          <Suspense fallback={null}>
            <JewelryModel />
          </Suspense>

          {/* Gold Particles */}
          <GoldParticles count={100} />

          {/* Camera Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Canvas>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="fade-in">
          <h1 className="text-white mb-6 drop-shadow-2xl">
            Timeless Elegance
          </h1>
          <p className="text-xl md:text-2xl text-gold-100 mb-8 max-w-2xl mx-auto font-light">
            Handcrafted luxury jewelry that tells your story
          </p>
          <button className="group relative px-8 py-4 bg-gold-500 text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-gold-600 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10">Explore Collection</span>
            <div className="absolute inset-0 shimmer" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold-300 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gold-300 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold-400 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
}
