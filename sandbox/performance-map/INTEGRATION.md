# Performance Map: Integration Guide

## Overview
This feature introduces a 2D world map showing where Shiori has performed. Integrate it into the `work` page to complement the existing performance grid.

## Prerequisites
- `framer-motion` is already installed.
- Access to the `performances` data from `src/lib/data/performances`.

## Integration Steps

### Step 1: Convert Performances to Marker Data
```typescript
import { performances } from '@/lib/data/performances';
import { toMapMarkers } from '@/sandbox/performance-map';

const markers = toMapMarkers(performances);
```

### Step 2: Render the Map
```tsx
import PerformanceMap from '@/sandbox/performance-map';

<PerformanceMap markers={markers} />
```

## Configuration Options
`PerformanceMap` accepts `markers` that include latitude, longitude, label, and optional media.

## Usage Examples
Place the component above the performance list or on a dedicated page:
```tsx
<section className="mb-12">
  <PerformanceMap markers={markers} />
</section>
```
