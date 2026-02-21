# Technology Stack

**Analysis Date:** 2026-02-21

## Languages

**Primary:**
- TypeScript ~5.7.0 - Application and configuration code with strict mode (`noUnusedLocals`, `noUnusedParameters`, `noUncheckedSideEffectImports`)
- CSS (CSS Custom Properties + @theme) - Design tokens and styling foundation
- HTML - Semantic markup in Vue templates

**Secondary:**
- JavaScript - Used in Vite and build tooling

## Runtime

**Environment:**
- Node.js (version not pinned - compatible with pnpm 9.x)
- Browser (ES2020 target for app code, ES2022 for build tools)

**Package Manager:**
- pnpm 9.x
- Lockfile: `pnpm-lock.yaml` (v9.0) present in repository

## Frameworks

**Core:**
- Vue 3.5.28 - Progressive framework with Composition API and SFC (`<script setup>`)
- Vue Router 5.0.3 - Client-side SPA routing with history mode

**Styling:**
- Tailwind CSS 4.1.0 - Utility-first CSS framework with CSS-first configuration
- @tailwindcss/vite 4.2.0 - Vite plugin for Tailwind CSS integration

**Build/Dev:**
- Vite 6.2.0 - Fast frontend build tool and dev server
- @vitejs/plugin-vue 5.2.3 - Vue 3 plugin for Vite
- vue-tsc 2.2.0 - TypeScript type checker for Vue SFCs

## Key Dependencies

**Critical:**
- vue 3.5.28 - Core framework dependency
- vue-router 5.0.3 - Routing system
- @tailwindcss/vite 4.2.0 - Styling pipeline

**Infrastructure:**
- @types/node 25.3.0 - TypeScript definitions for Node.js APIs
- jiti 2.6.1 (transitive) - ESM import for config files
- lightningcss 1.31.1 (transitive) - Fast CSS parser for Tailwind
- typescript 5.7.3 (pinned) - TypeScript compiler

## Configuration

**Environment:**
- No environment variables required for local development
- `.env` file should contain environment-specific overrides if needed (not checked in)
- Dark mode configured via `data-theme` attribute on `<html>` root element

**Build:**
- `vite.config.ts` - Vite configuration with Vue and Tailwind CSS plugins
- `tsconfig.json` - Base TypeScript configuration (references app and node configs)
- `tsconfig.app.json` - Application-specific TypeScript settings (ES2020 target, strict mode)
- `tsconfig.node.json` - Build tooling TypeScript settings (ES2022 target)

**CSS/Design Tokens:**
- `src/assets/main.css` - Tailwind imports, @theme token bridge, and font-face declarations
- `src/assets/tokens/colors.css` - Two-layer color system (primitives + semantic aliases)
- `src/assets/tokens/typography.css` - Type scale, weights, line heights, letter spacing

**Index:**
- `index.html` - Entry point with `data-theme="dark"` preset on `<html>`

## Fonts

**Self-hosted:**
- Inter Variable 4.1 (woff2 format) - Located at `src/assets/fonts/InterVariable.woff2`
- Font weights: 100–900 (variable)
- Declared in `src/assets/main.css` with `font-display: swap`
- OpenType features enabled globally: ss01, ss07, ss08, cv02, cv03, cv04, cv06, cv09, cv12, cv13

**Fallback stack:**
- `'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif` for sans-serif
- `ui-monospace, 'SF Mono', 'Cascadia Code', 'Fira Code', monospace` for monospace

## Icons

**Font Awesome** (referenced in project instructions)
- Implementation: Import as needed in components
- No specific version pinned in package.json

## Color System

**Architecture:**
- Layer 1: Primitive scales at `:root` (light mode default) and `[data-theme="dark"]`
- Layer 2: Semantic aliases defined once at `:root` using CSS `var()` references (auto-resolve on theme change)
- Radix UI aligned scales with custom Auterion scales

**Primitive scales:**
- Grayscale: gray, slate, mauve, sage, sand (neutral options)
- Chromatic: blue, indigo, violet, pink, red, orange, amber, green, lime, teal, cyan, bronze

**Semantic token groups (7 variants each):**
- primary (blue-based) - Interactive elements
- alarm (red-based) - Immediate action
- warning (orange-based) - Prompt action
- caution (amber-based) - Awareness
- ok (green-based) - Nominal status
- accent (teal-based) - Data visualization

**Foundation tokens:**
- Page: `--color-page-bg`, `--color-page-bg-subtle`
- Text: `--color-text-{primary,secondary,tertiary,disabled,inverse,link}`
- Borders: `--color-border-{subtle,default,strong}`
- Surfaces: `--color-surface-{1,2,3}` (layered depth)

## Path Aliases

- `@/` → `src/`

## Scripts

```bash
pnpm dev        # Start dev server (http://localhost:5173)
pnpm build      # Type-check and build (vue-tsc -b && vite build)
pnpm preview    # Preview production build
```

## Platform Requirements

**Development:**
- pnpm 9.x package manager
- Node.js compatible with pnpm 9.x
- Modern browser with ES2020 support

**Production:**
- Static hosting (dist/ folder output from `pnpm build`)
- No server-side runtime required (client-side SPA)
- Browser with ES2020 support

---

*Stack analysis: 2026-02-21*
