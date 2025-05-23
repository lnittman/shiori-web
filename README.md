# Shiori Portfolio Website

This repository contains the source code for **shiori-web**, the personal portfolio site for dancer **Shiori Murayama**. The site is built with **Next.js 14**, TypeScript and Tailwind CSS.

## Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The application runs at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/              # Next.js pages (App Router)
    bio/            # Biography page
    contact/        # Contact form page
    gallery/        # Photo & video gallery
    work/           # Work list and dynamic work details
    layout.tsx      # Root layout with navigation & language provider
    globals.css     # Global styles
    page.tsx        # Home page
  components/       # Reusable React components
    PerformanceMap/ # Map visualization of performance locations
  lib/              # Data and utility modules
    data/           # Portfolio data such as performances
public/
  images/           # Images referenced across the site
```

### Pages

- `/` – Home page with hero section and introduction
- `/bio` – Biography in English and Japanese
- `/work` – Grid of performances with an interactive map of locations
- `/work/[id]` – Detail page for each performance
- `/gallery` – Filterable gallery of photos and videos
- `/contact` – Simple contact form (submission logic TBD)

There are currently **no API routes** in this project.

## Portfolio Content

- **Images**: add JPG/PNG files to `public/images` and reference them in pages or data.
- **Work data**: `src/lib/data/performances.ts` exports an array of `Performance` objects. Each object contains metadata and a list of media items. Update this file to add new performances or edit existing entries.
- **Translations**: the `LanguageProvider` in `src/components/providers/LanguageProvider.tsx` handles English/Japanese toggling. Text strings live directly in the page components.

To create a new page, add a folder with `page.tsx` under `src/app` following the existing pattern. Use Tailwind classes for styling and keep interactive components marked with `'use client'`.

## Key Dependencies

- `next` – React framework powering the App Router
- `react` and `react-dom`
- `tailwindcss` and `@tailwindcss/typography` for styling
- `framer-motion` for animations
- `three`, `@react-three/fiber` and `@react-three/drei` for potential 3D content
- `react-use-measure` for measuring DOM nodes

## Deployment

The site can be built with `npm run build` and served with `npm start`. Deployment to platforms like Vercel works out of the box.

