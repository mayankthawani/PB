'use client';

import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Particles } from './Particles';

// Toy Model Loader
function ToyModel({ modelPath, scale = 0.12, position = [0, -2.5, 0] }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={scale} position={position} />;
}

export default function HeroSection() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      style={{ opacity, y }}
      className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-28 relative z-10 bg-cover bg-fixed overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Particles />
        <div className="absolute top-20 left-10 animate-float-slow">
          <motion.div 
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 rounded-full bg-gradient-to-r from-amber-200/20 to-yellow-500/20 blur-xl"
          />
        </div>
        <div className="absolute bottom-20 right-10 animate-float">
          <motion.div 
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 rounded-full bg-gradient-to-r from-amber-400/10 to-yellow-600/10 blur-xl"
          />
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white max-w-2xl mx-auto relative"
      >
        {/* Animated Header */}
        <motion.h2 
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          PremBrothers
        </motion.h2>
        <motion.p 
          className="text-base md:text-lg mt-4 italic font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Because adulthood is overrated.
        </motion.p>
        <motion.p 
          className="text-sm md:text-base text-white/90 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Where nostalgia checks out with free shipping.
        </motion.p>
        
        {/* Interactive Badge */}
        <motion.div 
          className="mt-6 text-xs md:text-sm flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm animate-shimmer cursor-pointer"
          >
            🎯 Premium Toys
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm animate-shimmer cursor-pointer"
          >
            🚚 Free Shipping
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Enhanced 3D Models Section */}
      <motion.div 
        className="w-full flex flex-row justify-center items-center gap-2 md:gap-8 mt-10 md:mt-24 overflow-x-visible px-2 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
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
        <motion.div
          whileHover={{ scale: 1.1, rotateZ: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-white/80 text-sm md:text-base"
        >
          Interact with models ↓
        </motion.div>
      </motion.div>

      {/* Enhanced CTA Button */}
      <motion.div 
        className="mt-6 md:mt-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button className="relative overflow-hidden group bg-gradient-to-r from-amber-400 to-amber-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
          <span className="relative z-10">Explore Toys</span>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
        </button>
      </motion.div>
    </motion.section>
  );
}

// Add this CSS to your globals.css
/*
@keyframes shimmer {
  0% { background-position: -100% 0; }
  100% { background-position: 100% 0; }
}

.animate-shimmer {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}
*/
