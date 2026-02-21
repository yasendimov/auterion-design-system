# Auterion Design System

Aerospace-focused design system documentation site. Dark-mode-first.

## Commands

- `pnpm dev` — Start dev server (http://localhost:5173)
- `pnpm build` — Type-check and build (`vue-tsc -b && vite build`)
- `pnpm preview` — Preview production build

## Tech Stack

- **Vue 3** + **Vue Router 5** (SPA, client-side history)
- **Vite 6** with `@vitejs/plugin-vue` and `@tailwindcss/vite`
- **Tailwind CSS v4** — CSS-first config via `@theme` in `src/assets/main.css`
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
1. **Primitives** — Defined in `tokens/colors.css` at `:root` (light) and `[data-theme="dark"]` (dark). 17 chromatic scales + 5 neutrals, 10 steps each (Radix-aligned).
2. **Semantic aliases** — Defined once at `:root` using `var()` references to primitives. They auto-resolve when primitives change per theme. Do NOT redefine semantic aliases in `[data-theme="dark"]`.

**Tailwind bridge** — `@theme` block in `main.css` exposes all tokens to Tailwind utilities (e.g., `bg-primary`, `text-text-secondary`).

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

- **Page:** `--color-page-bg`, `--color-page-bg-subtle`
- **Text:** `--color-text-{primary,secondary,tertiary,disabled,inverse,link}`
- **Borders:** `--color-border-{subtle,default,strong}`
- **Surfaces:** `--color-surface-{1,2,3}` (layered depth)

## Conventions

- **Theme switching** — Uses `data-theme` attribute on `<html>`. Dark is the default/primary theme.
- **Component naming** — `The` prefix for singleton layout components (TheSidebar, ThemeToggle). Page components use `*Page.vue`.
- **Path alias** — `@/` maps to `src/`.
- **Placeholder routes** — Use the `placeholder()` helper in `router/index.ts` with `section` and `title` meta. Don't create new page files for placeholder content.
- **Tailwind usage** — Use semantic token classes (`bg-surface-1`, `text-text-primary`, `border-border-subtle`) over raw primitive classes. Keep styles in templates with utility classes; avoid `<style>` blocks unless necessary.
- **No external CSS frameworks** — Everything is built on Tailwind + custom tokens.
- **OpenType features** — Enabled globally via `--default-font-feature-settings` in `typography.css`. Don't override unless intentional.
