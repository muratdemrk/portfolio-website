# AGENTS.md

## Cursor Cloud specific instructions

This repository is a single-service frontend: a personal portfolio website built with React 19, TypeScript, Vite, and Tailwind CSS v4. There is no backend, database, or Docker.

- Package manager is **npm** (see `package-lock.json`). Dependencies are installed automatically by the startup update script.
- Scripts live in `package.json`:
  - `npm run dev` — start the Vite dev server (defaults to `http://localhost:5173/`).
  - `npm run build` — type-check with `tsc -b` then produce a production build with `vite build`.
  - `npm run lint` — run `oxlint` (the linter is Oxlint, not ESLint). Current lint output includes a couple of non-blocking warnings only.
  - `npm run preview` — serve the built `dist/` output.
- The app is fully client-side. Core functionality is the internationalization (i18n) language switcher in the header (EN/TR/DE), which swaps all page copy instantly with no reload. Translation strings live in `src/i18n/` (`en.ts`, `tr.ts`, `de.ts`) and are wired through `src/i18n/LocaleContext.tsx`.
- Vite is not exposed to the network by default; use `--host` if external access is needed.
