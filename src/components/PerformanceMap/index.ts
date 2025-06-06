export { default } from './PerformanceMap';
export type { Marker } from './PerformanceMap';
export { locationMap, coordsFor } from './locationMap';
import type { Performance } from '@/lib/data/performances';

export function toMapMarkers(perfs: Performance[]) {
  return perfs
    .map((p) => {
      const c = coordsFor(p.location);
      if (!c) return undefined;
      const media = p.media.find((m) => m.type === 'video') ?? p.media[0];
      return { lat: c.lat, lon: c.lon, label: p.title, artist: p.artist, year: p.year, media };
    })
    .filter(Boolean) as Marker[];
}
