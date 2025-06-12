'use client';

import React from 'react';

const owners = [
  {
    name: 'Satish Thawani',
    image: '/dadu.jpg',
    tagline: 'Started it all with a GI Joe in 1970.',
  },
  {
    name: 'Manish Thawani',
    image: '/owners/raj.jpg',
    tagline: 'Bringing nostalgia to the shelves.',
  },
  {
    name: 'Amit Thawani',
    image: '/chachu.jpg',
    tagline: 'Turns childhood dreams into collectibles.',
  },
];

export default function MeetOwners() {
  return (
    <section className="w-full py-16 px-6 text-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 animate-gradient-x">
            Meet the Dream Team
          </span>
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-amber-100 font-light">
          3 Generations. 1 Mission. <span className="italic font-medium">Bringing back the joy of childhood since 1973.</span>
        </p>

        {/* Owners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {owners.map((owner, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-yellow-800 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src={owner.image}
                  alt={owner.name}
                  className="relative w-40 h-40 rounded-full object-cover border-4 border-amber-200/50 shadow-xl transform transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-amber-200">{owner.name}</h3>
              <p className="mt-2 text-base italic text-center px-2 text-amber-100/90">{owner.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
