'use client';

import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import JewelryModel from './JewelryModel';

interface ProductViewer3DProps {
  productId: string;
  category: 'ring' | 'necklace' | 'bracelet';
  material?: 'yellow-gold' | 'rose-gold' | 'white-gold';
  onMaterialChange?: (material: 'yellow-gold' | 'rose-gold' | 'white-gold') => void;
}

export default function ProductViewer3D({
  productId,
  category,
  material = 'yellow-gold',
  onMaterialChange
}: ProductViewer3DProps) {
  const [autoRotate, setAutoRotate] = useState(true);
  const [resetView, setResetView] = useState(0);

  const materialColors = {
    'yellow-gold': '#D4AF37',
    'rose-gold': '#E0BFB8',
    'white-gold': '#E8E8E8',
  };

  const handleResetView = () => {
    setResetView(prev => prev + 1);
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl overflow-hidden">
      {/* 3D Canvas */}
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />

        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-5, 5, 5]} intensity={0.6} color="#ffffff" />
        <spotLight
          position={[0, 8, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.8}
          castShadow
          color={materialColors[material]}
        />

        {/* Environment for realistic reflections */}
        <Environment preset="city" />

        {/* 3D Model */}
        <Suspense fallback={null}>
          <JewelryModel material={material} />
        </Suspense>

        {/* Ground Shadow */}
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.4}
          scale={10}
          blur={2}
          far={4}
        />

        {/* Controls */}
        <OrbitControls
          key={resetView}
          enableZoom={true}
          enablePan={false}
          autoRotate={autoRotate}
          autoRotateSpeed={1}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          minDistance={3}
          maxDistance={8}
        />
      </Canvas>

      {/* Control Panel */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg flex items-center gap-4">
        {/* Auto-Rotate Toggle */}
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`p-2 rounded-full transition-all ${
            autoRotate ? 'bg-gold-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}
          title={autoRotate ? 'Pause rotation' : 'Auto rotate'}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>

        {/* Reset View */}
        <button
          onClick={handleResetView}
          className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-all"
          title="Reset view"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </button>

        {/* Fullscreen */}
        <button
          className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-all"
          title="Fullscreen"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
        </button>
      </div>

      {/* Instructions */}
      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 text-sm text-gray-700">
        <p className="font-medium mb-1">🖱️ Controls:</p>
        <ul className="text-xs space-y-1">
          <li>• Drag to rotate</li>
          <li>• Scroll to zoom</li>
          <li>• Double-click to reset</li>
        </ul>
      </div>

      {/* Loading Indicator */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="animate-pulse text-gold-500 opacity-50">
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
