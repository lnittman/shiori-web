# AGENT Guidelines for `shiori-web`

This repository is a Next.js 14 project using the App Router and TypeScript. It serves as a portfolio site.

## Conventions

- Use **2 spaces** for indentation.
- Prefer **single quotes** for strings.
- Keep React components as **client components** when they need hooks or browser APIs. Place common components inside `src/components` and pages inside `src/app`.
- When adding routes, create a new folder under `src/app` and add a `page.tsx` file. Use `[param]` folders for dynamic routes.
- Style components with Tailwind classes found in `src/app/globals.css` and `tailwind.config.js`.

## Scripts

- Development server: `npm run dev`.
- Build: `npm run build`.
- Linting: `npm run lint` (only run if specifically requested by the user).

## Commit Messages

- Begin commit messages with a short summary (max 72 characters).
- Use imperative mood, e.g. `Add contact form`, `Fix gallery layout`.

## Testing

This project does not include automated tests. Do **not** run tests, linting, or formatting unless explicitly asked.

