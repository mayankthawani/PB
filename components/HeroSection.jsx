'use client';

import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Particles } from './Particles';

// Toy Model Loader
function ToyModel({ modelPath, scale = 0.12, position = [0, -2.5, 0] }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={scale} position={position} />;
}

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.section
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
        className="text-white max-w-3xl mx-auto relative"
      >
        <motion.p 
          className="text-2xl md:text-3xl font-medium mb-6 tracking-wider uppercase text-amber-200 drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-block transform hover:scale-105 transition-transform duration-300">
            Adulthood is overrated.
          </span>
        </motion.p>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 animate-gradient-x">
            PremBrothers
          </span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl font-light text-white/90 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="inline-block transform hover:scale-105 transition-transform duration-300">
            Where nostalgia checks out with free shipping.
          </span>
        </motion.p>
        
        {/* Interactive Badge */}
        <motion.div 
          className="mt-8 text-sm md:text-base flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm animate-shimmer cursor-pointer border border-amber-200/20 hover:border-amber-200/40 transition-colors duration-300"
          >
            🎯 Premium Toys
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm animate-shimmer cursor-pointer border border-amber-200/20 hover:border-amber-200/40 transition-colors duration-300"
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
{/* Logo */}
<div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
  <img
    src="/logo.jpg"
    alt="Logo"
    className="w-full h-full rounded-full animate-bounce object-cover"
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
      </motion.div>

      {/* Flip CTA Button */}
      <motion.div 
        className="mt-8 md:mt-12 perspective"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative group">
          <button 
            onClick={() => setIsFlipped(!isFlipped)}
            className={`flip-button bg-gradient-to-r from-amber-400 to-amber-600 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-all duration-500 ${isFlipped ? 'flipped' : ''}`}
          >
            <div className="flip-front text-lg">Explore Toys</div>
            <div className="flip-back text-lg">PB welcomes you!</div>
          </button>
        </div>
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

.perspective {
  perspective: 1000px;
}

.flip-button {
  position: relative;
  width: 200px;
  height: 60px;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: linear-gradient(45deg, #feb47b, #ff7e5f);
  border-radius: 30px;
  overflow: hidden;
  transition: transform 0.6s;
}

.flip-button .flip-front,
.flip-button .flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flip-button .flip-back {
  transform: rotateY(180deg);
}

.flip-button.flipped .flip-front {
  transform: rotateY(180deg);
}

.flip-button.flipped .flip-back {
  transform: rotateY(0);
}

.flip-button:hover {
  transform: rotateY(180deg);
}
*/
