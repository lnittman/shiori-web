export interface LatLng {
  lat: number;
  lon: number;
}

// Approximate coordinates for locations appearing in performances.ts
export const locationMap: Record<string, LatLng> = {
  'Las Vegas, NV': { lat: 36.1699, lon: -115.1398 },
  'Indio, CA': { lat: 33.6803, lon: -116.1739 },
  'New York, NY': { lat: 40.7128, lon: -74.0060 },
  'Asia': { lat: 1.3521, lon: 103.8198 },
  'Japan': { lat: 35.6764, lon: 139.6500 },
  'USA': { lat: 37.0902, lon: -95.7129 },
};

export function coordsFor(location: string): LatLng | undefined {
  return locationMap[location];
}
