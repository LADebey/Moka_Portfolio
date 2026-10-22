# Moka Portfolio

Personal portfolio site built from a Figma design, for job applications.

## Stack
- Astro 7 (static output), plain CSS, no UI framework.
- Node 22 (`.nvmrc`). Astro is pinned to `~7.3.8` because 7.4+ needs Node ≥ 22.23.4;
  bump it once the dev environment has a newer Node.
- Hosting not chosen yet (Netlify / Cloudflare Pages / VPS). Keep the build host-agnostic:
  `npm run build` → `dist/`.

## Commands
- `npm run dev` — dev server
- `npm run build` — production build (must pass before every push)
- `npm run check` — type-check `.astro` files

## Layout
- `design/` — Figma exports (`mockups/`) and `design-notes.md`. Reference only, never imported by the site.
- `src/assets/` — real images used on the site (optimized by Astro via `astro:assets`).
- `public/` — files served as-is (favicon, fonts, CV PDF).
- `src/content/projects/*.md` — one Markdown file per project; schema in `src/content.config.ts`.
- `src/styles/global.css` — design tokens as CSS custom properties on `:root`.
- `src/layouts/`, `src/components/`, `src/pages/` — standard Astro.

## Conventions
- The Figma file is the source of truth: take colors, fonts, sizes and spacing from it
  (Figma connector or `design/design-notes.md`), not from guessing pixels.
- Every value from the design goes through a token in `global.css`; no hard-coded colors in components.
- Responsive: match the mobile frames when they exist; otherwise adapt the desktop design.
- Use `<Image />` from `astro:assets` for images in `src/assets/`.
- Content language: French (`<html lang="fr">`) unless the design says otherwise.

## Git workflow
- `main` — production. Only receives merges from `dev`; whatever is on `main` gets deployed.
- `dev` — integration branch. All work lands here first.
- Feature branches — branched from `dev`, merged back into `dev`, then deleted.
  Naming: `feature/<name>` (new page/section), `fix/<name>`, `docs/<name>`, `chore/<name>`.
  Claude session branches (`claude/...`) count as feature branches: branch from `dev`, merge into `dev`.
- Never commit directly to `main`. Release = merge `dev` into `main` once `npm run build` passes on `dev`.
- Merge with `--no-ff` so each feature shows up as one merge commit.
