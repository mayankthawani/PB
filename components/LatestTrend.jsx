'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function LatestToys() {
  const router = useRouter();

  const toys = [
    {
      id: 1,
      name: 'Iron Man Action Figure',
      price: '₹799',
      image: '/dadu.jpg',
    },
    {
      id: 2,
      name: 'Captain America Shield',
      price: '₹599',
      image: '/toys/captain.jpg',
    },
    {
      id: 3,
      name: 'Spider-Man Web Slinger',
      price: '₹699',
      image: '/toys/spiderman.jpg',
    },
    {
      id: 4,
      name: 'Hulk Smash Glove',
      price: '₹499',
      image: '/toys/hulk.jpg',
    },
    {
      id: 5,
      name: 'Thor’s Hammer Mjölnir',
      price: '₹899',
      image: '/toys/thor.jpg',
    },
  ];

  return (
    <section className="w-full py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-[#5C4033] mb-6 text-center">
        Latest Trends
      </h2>

      {/* Scrollable Cards */}
      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        {toys.map((toy) => (
          <Card
            key={toy.id}
            className="min-w-[220px] max-w-[240px] border-2 border-[#8B5E3C] bg-[#F5DEB3] rounded-lg shadow-md flex-shrink-0"
          >
            {/* Image fits full width */}
            <div className="w-full h-48 overflow-hidden border-b-2 border-[#8B5E3C]">
              <img
                src={toy.image}
                alt={toy.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <CardContent className="text-center px-3 py-4">
              <h3 className="text-[#5C4033] font-semibold text-base">{toy.name}</h3>
              <p className="text-[#7A5649] text-sm mt-1">{toy.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-6">
        <Button
          className="bg-[#8B5E3C] text-white hover:bg-[#A47148] transition font-medium px-6 py-2 rounded-full"
          onClick={() => router.push('/all-toys')}
        >
          See More
        </Button>
      </div>
    </section>
  );
}
