'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// 👉 import MapClient only on the browser
const MapClient = dynamic(() => import('@/components/MapClient'), {
  ssr: false,
});

export default function StoreLocator() {
  const [userCoords, setUserCoords] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          setUserCoords([pos.coords.latitude, pos.coords.longitude]),
        (err) => console.error('Location denied', err)
      );
    }
  }, []);

  return (
    <section className="px-4 py-12">
      <h2 className="text-3xl font-bold text-[#5C4033] text-center mb-6">
        Find Us Near You
      </h2>

      {/* Map with brown border */}
      <MapClient userCoords={userCoords} />
    </section>
  );
}
