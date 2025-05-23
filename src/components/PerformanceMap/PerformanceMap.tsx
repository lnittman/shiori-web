'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Marker {
  lat: number;
  lon: number;
  label: string;
  media?: { type: 'image' | 'video'; url: string };
  artist?: string;
  year?: string;
}

function latLonToXY(lat: number, lon: number, width: number, height: number) {
  const x = ((lon + 180) / 360) * width;
  const y = ((90 - lat) / 180) * height;
  return { x, y };
}

export default function PerformanceMap({ markers }: { markers: Marker[] }) {
  const width = 500;
  const height = 250;
  const [active, setActive] = useState<number | null>(null);

  const continents = [
    'M70 80 L160 80 L170 90 L150 120 L120 110 Z', // North America
    'M170 110 L190 130 L180 180 L160 160 Z', // South America
    'M280 80 L300 70 L320 90 L310 100 L290 95 Z', // Europe
    'M300 100 L340 120 L330 160 L290 140 Z', // Africa
    'M350 80 L390 90 L420 110 L410 140 L360 120 Z', // Asia
    'M430 150 L450 160 L440 180 L420 170 Z', // Australia
  ];

  return (
    <div className="relative" style={{ maxWidth: width }}>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        <g fill="#2d2d2d">
          {continents.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
      </svg>
      {markers.map((m, i) => {
        const { x, y } = latLonToXY(m.lat, m.lon, width, height);
        return (
          <div
            key={i}
            className="absolute"
            style={{ left: x - 6, top: y - 6 }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            <div className="w-3 h-3 bg-pink-500 rounded-full shadow" />
            <AnimatePresence>
              {active === i && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: -10 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="absolute left-4 top-0 bg-black text-white text-xs p-2 rounded w-40 z-10"
                >
                  <p className="font-bold mb-1">{m.label}</p>
                  {m.artist && (
                    <p className="mb-1">{m.artist} • {m.year}</p>
                  )}
                  {m.media && m.media.type === 'image' && (
                    <img src={m.media.url} alt="media" className="w-full h-auto" />
                  )}
                  {m.media && m.media.type === 'video' && (
                    <video src={m.media.url} className="w-full h-auto" controls />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
