'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AllToysPage() {
  const [toys, setToys] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/data/ourcollection.json')
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Toys:", data);
        setToys(data);
      })
      .catch((err) => console.error("Fetch Error:", err));
  }, []);

  return (
    <section className="min-h-screen w-full px-6 py-12">
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={() => router.push('/')}
          className="bg-[#8B5E3C] text-white px-4 py-2 rounded hover:bg-[#A47148] transition-all"
        >
          ← Back to Home
        </button>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-[#5C4033] text-center mb-10">
        Our Full Collection
      </h2>

      {/* Grid layout for 2 cards per row */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto">
        {toys.map((toy) => (
          <div
            key={toy.id}
            className="bg-[#EED9C4] border-2 border-[#5C4033] rounded-xl shadow-md overflow-hidden"
          >
            <div className="w-full h-48 border-b-2 border-[#5C4033]">
              <img
                src={toy.image}
                alt={toy.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-4 py-4 text-center">
              <h3 className="text-[#5C4033] font-semibold text-lg">{toy.name}</h3>
              <p className="text-[#7A5649] text-sm mt-2">{toy.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
