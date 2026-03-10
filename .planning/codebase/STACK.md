# Technology Stack

**Analysis Date:** 2026-03-10

## Languages

**Primary:**
- TypeScript 5.7 - All source code, configuration, type definitions
- Vue 3 - Component framework for UI rendering
- CSS 4 (Custom Properties) - Design tokens and styling foundation

**Secondary:**
- HTML 5 - Document structure in `index.html`
- JavaScript (ESNext) - Runtime execution via transpilation

## Runtime

**Environment:**
- Node.js (version unspecified, no .nvmrc or .node-version file)
- ES2020 target for application code (`tsconfig.app.json`)
- ES2022 target for tooling (`tsconfig.node.json`)

**Package Manager:**
- pnpm (lockfile: `pnpm-lock.yaml` v9.0)
- `onlyBuiltDependencies` configured for `esbuild`

## Frameworks

**Core:**
- Vue 3 (^3.5.13) - Progressive framework for UI components and reactivity
- Vue Router 5 (^5.0.3) - Client-side routing for SPA navigation
- Vite 6 (^6.2.0) - Fast build tool and dev server (port 5174)

**UI & Styling:**
- Tailwind CSS 4 (^4.1.0) - Utility-first CSS framework with CSS-first config
- @tailwindcss/vite (^4.1.0) - Vite plugin for Tailwind processing
- @headlessui/vue (^1.7.23) - Unstyled, accessible component primitives
- @heroicons/vue (^2.2.0) - Icon library (used in WebsitePage)

**Build & Development:**
- @vitejs/plugin-vue (^5.2.3) - Vue SFC compilation for Vite
- vue-tsc (^2.2.0) - TypeScript type checking for Vue files

## Key Dependencies

**Critical:**
- vue (^3.5.13) - Core framework for reactive component system
- vue-router (^5.0.3) - Required for SPA routing and navigation
- @tailwindcss/vite (^4.1.0) - Tailwind CSS processing in Vite

**UI Components:**
- @headlessui/vue (^1.7.23) - Accessible interactive primitives (only used in `src/pages/WebsitePage.vue`)
- @heroicons/vue (^2.2.0) - SVG icons (only used in `src/pages/WebsitePage.vue`)

**Development:**
- typescript (^5.7.0) - Type checking and language features
- @types/node (^25.3.0) - Node.js type definitions
- vite (^6.2.0) - Build orchestration and dev server

## Configuration

**Environment:**
- No `.env` files required - this is a static design system documentation site
- Client-side only, no server-side environment variables
- Dark theme is the default (set in `index.html` with `data-theme="dark"`)

**Build:**
- `vite.config.ts` - Vite configuration with Vue plugin and Tailwind integration
- `tsconfig.json` - Referenced config (delegates to app and node configs)
- `tsconfig.app.json` - Application code targeting ES2020, strict mode, path alias `@/*` → `src/*`
- `tsconfig.node.json` - Tooling code (Vite config) targeting ES2022

**Tailwind Configuration:**
- CSS-first approach via `@theme` block in `src/assets/main.css`
- Token bridge: typography tokens defined in CSS custom properties, referenced in Tailwind `@theme`
- Color tokens (primitives and semantic) auto-discovered as CSS custom properties via Tailwind v4
- Dark mode via custom `@custom-variant dark` targeting `[data-theme="dark"]`

## Platform Requirements

**Development:**
- Node.js (version unspecified)
- pnpm package manager
- Modern terminal/shell
- Text editor supporting TypeScript and Vue

**Production:**
- Static hosting (no server required)
- Modern browser with:
  - ES2020 JavaScript support
  - CSS Custom Properties support
  - CSS Grid and Flexbox support
  - CSS `@custom-property` and custom variants (Tailwind v4)

## Build & Run Commands

```bash
pnpm dev       # Start Vite dev server (http://localhost:5174)
pnpm build     # Type-check with vue-tsc, then build with Vite
pnpm preview   # Preview production build locally
```

## Assets & Resources

**Self-hosted:**
- Inter Variable (woff2) - Located at `src/assets/fonts/InterVariable.woff2`
- Font display strategy: `swap` for optimal rendering performance

**Design Tokens:**
- Color primitives and semantic tokens: `src/assets/tokens/colors.css`
- Typography scale and spacing: `src/assets/tokens/typography.css`
- Brand assets: `src/assets/brand/` (logos and brand imagery)

## TypeScript Configuration

**Compiler Options:**
- Target: ES2020 (application), ES2022 (tooling)
- Module: ESNext with bundler resolution
- Strict mode enabled: `strict: true`
- Unused checks: `noUnusedLocals` and `noUnusedParameters`
- No emit: `true` (Vite handles compilation)
- Path alias: `@/*` → `src/*`

**Included Files:**
- `env.d.ts` - Vite client types
- `src/**/*` - All TypeScript and Vue files

---

*Stack analysis: 2026-03-10*
