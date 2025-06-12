'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AllToysPage() {
  const [toys, setToys] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/data/trendToys.json')
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Toys:", data);
        setToys(data);
      })
      .catch((err) => console.error("Fetch Error:", err));
  }, []);

  return (
    <section className="min-h-screen w-full px-6 py-12 ">
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
        All Trending Toys
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {toys.map((toy) => (
          <div
            key={toy.id}
            className="border-2 border-[#8B5E3C] bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="w-full h-48 border-b-2 border-[#8B5E3C]">
              <img
                src={toy.image}
                alt={toy.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-4 py-3 text-center">
              <h3 className="text-[#5C4033] font-semibold text-base">{toy.name}</h3>
              <p className="text-[#7A5649] text-sm mt-1">{toy.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
