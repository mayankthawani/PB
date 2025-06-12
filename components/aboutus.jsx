'use client';

import React from 'react';

export default function AboutUs() {
  return (
    <section className="w-full py-16 px-6 text-[#5C4033] min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Toy Image or Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
        <img
  src="/pbphoto.jpg"
  alt="About PremBrothers"
  className="w-72 md:w-96 rounded-xl border-[6px] border-[#8B5E3C] shadow-lg"
/>

        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About PremBrothers</h2>
          <p className="text-lg leading-relaxed">
            At <strong>PremBrothers</strong>, we're not just toy sellers — we're memory makers.
            Whether it's your first action figure or your hundredth collectible, we bring the
            fun back to your shelf, and your heart.
          </p>
          <p className="text-md mt-4 italic text-[#7A5649]">
            Started by two brothers in a small room full of big dreams and plastic heroes.
          </p>
        </div>
      </div>
    </section>
  );
}
