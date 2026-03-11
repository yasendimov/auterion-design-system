# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Aerospace-focused design system documentation site built as a Vue SPA. Dark-mode-first. No test suite.

## Commands

- `pnpm dev` — Start dev server (http://localhost:5174)
- `pnpm build` — Type-check and build (`vue-tsc -b && vite build`)
- `pnpm preview` — Preview production build

## Tech Stack

- **Vue 3** + **Vue Router 5** (SPA, client-side history)
- **Vite 6** with `@vitejs/plugin-vue` and `@tailwindcss/vite`
- **Tailwind CSS v4** — CSS-first config via `@theme` in `src/assets/main.css`
- **Headless UI** (`@headlessui/vue`) for accessible interactive components
- **Heroicons** (`@heroicons/vue`) for icons
- **TypeScript** — Strict mode, `noUnusedLocals`, `noUnusedParameters`
- **pnpm** as package manager
- **Inter Variable** — Self-hosted official woff2 (not @fontsource)

## Project Structure

```
src/
  assets/
    main.css              # Tailwind imports + @theme token bridge
    tokens/colors.css     # Primitive + semantic color tokens (CSS custom props)
    tokens/typography.css # Type scale, weights, line heights, tracking
    fonts/                # Self-hosted InterVariable.woff2
  components/             # Shared Vue components (TheSidebar, ThemeToggle)
  composables/            # Vue composables (useTheme)
  layouts/                # Page layouts (DefaultLayout)
  pages/                  # Route-level page components
  router/index.ts         # All route definitions
```

## Design Token Architecture

**Two-layer system:**
1. **Primitives** — Defined in `tokens/colors.css` at `:root` (light) and `[data-theme="dark"]` (dark). Radix 12-step model. Custom scales: base (Auterion neutral) + blue (Auterion Blue #1475ff). Stock Radix: red, orange, amber, green, teal.
2. **Semantic aliases** — Defined once at `:root` using `var()` references to primitives. They auto-resolve when primitives change per theme. Do NOT redefine semantic aliases in `[data-theme="dark"]`.

**Tailwind bridge** — The `@theme` block in `main.css` bridges typography tokens only. Color tokens (CSS custom properties) are auto-discovered by Tailwind v4, so `bg-[--color-primary]` or semantic classes like `bg-primary` work without explicit `@theme` entries.

### Radix 12-step scale zones

| Step | Purpose                          |
|------|----------------------------------|
| 1    | App background                   |
| 2    | Subtle background                |
| 3    | UI element background            |
| 4    | Hovered UI element background    |
| 5    | Active / selected UI element bg  |
| 6    | Subtle border / separator        |
| 7    | UI element border / focus ring   |
| 8    | Hovered border / stronger border |
| 9    | Solid fill (accent)              |
| 10   | Hovered solid fill               |
| 11   | Low-contrast text                |
| 12   | High-contrast text               |

### Semantic color groups

Each group has 7 variants: `-subtle`, `-muted`, `-border`, base, `-hover`, `-text`, `on-{name}`.

| Group     | Primitive | Purpose                  |
|-----------|-----------|--------------------------|
| primary   | blue      | Interactive elements     |
| alarm     | red       | Immediate action         |
| warning   | orange    | Prompt action            |
| caution   | amber     | Awareness                |
| ok        | green     | Nominal status           |
| accent    | teal      | Data visualization       |

### Foundation tokens

- **Page:** `--color-page`, `--color-page-subtle` (base steps 1–2)
- **Text:** `--color-high`, `--color-low`, `--color-dim`, `--color-inverse`, `--color-link` (base steps 12, 11, 9 + blue 9)
- **Borders:** `--color-line`, `--color-line-hover`, `--color-line-active` (base steps 6–8)
- **Surfaces:** `--color-surface-{1,2,3}` (base steps 3–5)

## Conventions

- **Theme switching** — Uses `data-theme` attribute on `<html>`. Dark is the default/primary theme.
- **Component naming** — `The` prefix for singleton layout components (TheSidebar, ThemeToggle). Page components use `*Page.vue`.
- **Path alias** — `@/` maps to `src/`.
- **Placeholder routes** — Use the `placeholder()` helper in `router/index.ts` with `section` and `title` meta. Don't create new page files for placeholder content.
- **Tailwind usage** — Use semantic token classes (`bg-surface-1`, `text-high`, `text-low`, `border-line`, `bg-page`) over raw primitive classes. Keep styles in templates with utility classes; avoid `<style>` blocks unless necessary.
- **No external CSS frameworks** — Everything is built on Tailwind + custom tokens.
- **OpenType features** — Enabled globally via `--default-font-feature-settings` in `typography.css`. Don't override unless intentional.
