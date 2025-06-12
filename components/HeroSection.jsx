'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Toy Model Loader
function ToyModel({ modelPath, scale = 0.12, position = [0, -2.5, 0] }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={scale} position={position} />;
}

export default function HeroSection() {
  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-28 relative z-10 bg-cover"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Header */}
      <div className="text-white">
        <h2 className="text-3xl md:text-4xl font-bold">PremBrothers</h2>
        <p className="text-base md:text-lg mt-2">Where Toys Meet Imagination 🎠</p>
      </div>

      {/* 3D Models with Logo — side by side even on mobile */}
      <div className="w-full flex flex-row justify-center items-center gap-2 md:gap-8 mt-10 md:mt-24 overflow-x-auto px-2">
        {/* Captain America */}
        <div className="w-[100px] h-[150px] md:w-[160px] md:h-[240px] flex-shrink-0">
          <Canvas camera={{ position: [0, 1.5, 7] }}>
            <ambientLight intensity={1} />
            <directionalLight position={[2, 2, 2]} />
            <ToyModel
              modelPath="/models/captain_america.glb"
              scale={0.15}
              position={[0, -2.5, 0]}
            />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
          </Canvas>
        </div>

        {/* Logo */}
        <div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-auto animate-bounce"
          />
        </div>

        {/* Iron Man */}
        <div className="w-[100px] h-[150px] md:w-[160px] md:h-[240px] flex-shrink-0">
          <Canvas camera={{ position: [0, 1.5, 7] }}>
            <ambientLight intensity={1} />
            <directionalLight position={[2, 2, 2]} />
            <ToyModel
              modelPath="/models/ironman.glb"
              scale={3.7}
              position={[0, -2.5, 0]}
            />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
          </Canvas>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-6 md:mt-10">
        <button className="bg-white text-[#8B5E3C] font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 transition">
          Explore Toys
        </button>
      </div>
    </section>
  );
}
