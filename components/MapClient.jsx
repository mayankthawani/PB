'use client';

import { useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const STORE = [19.0880480, 82.0252210]; // [lat, lng]

function Recenter({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) map.setView(coords, 13);
  }, [coords, map]);
  return null;
}

export default function MapClient({ userCoords }) {
  return (
    <div className="w-full h-[400px] rounded-lg border-4 border-[#8B5E3C] overflow-hidden shadow-lg">
      <MapContainer
        center={STORE}
        zoom={13}
        scrollWheelZoom
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={STORE}>
          <Popup>🎯 PremBrothers Toy Store</Popup>
        </Marker>

        {userCoords && (
          <>
            <Marker position={userCoords}>
              <Popup>📍 You are here</Popup>
            </Marker>
            <Recenter coords={userCoords} />
          </>
        )}
      </MapContainer>
    </div>
  );
}
