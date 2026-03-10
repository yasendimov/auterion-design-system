# Codebase Structure

**Analysis Date:** 2026-03-10

## Directory Layout

```
auterion-design-system/
├── src/
│   ├── assets/              # Static resources and token definitions
│   │   ├── brand/           # Brand SVG assets (logos)
│   │   │   └── logo/        # Auterion logo symbol and full versions
│   │   ├── fonts/           # Self-hosted font files
│   │   ├── tokens/          # Design token CSS definitions
│   │   │   ├── colors.css   # Primitives, semantic aliases, themes
│   │   │   └── typography.css # Type scales, weights, line heights
│   │   └── main.css         # Tailwind imports, @theme declarations, font-face
│   ├── components/          # Shared Vue components (reusable across pages)
│   ├── composables/         # Vue composables (reactive logic)
│   ├── layouts/             # Layout wrapper components
│   ├── pages/               # Route-level page components (one per route)
│   ├── router/              # Vue Router configuration
│   ├── App.vue              # Root component (layout selector)
│   └── main.ts              # Application entry point
├── .planning/               # GSD planning documents
│   └── codebase/            # Architecture reference documents
├── index.html               # HTML shell (Vite entry point)
├── vite.config.ts           # Vite + Vue + Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── pnpm-lock.yaml           # Locked dependency versions
```

## Directory Purposes

**src/:**
- Purpose: All application source code
- Contains: Vue components, TypeScript, composables, routing logic
- Key files: `main.ts` (entry), `App.vue` (root), `router/index.ts` (routes)

**src/assets/:**
- Purpose: Static resources and global design tokens
- Contains: CSS token files, fonts, brand logo SVGs
- Key files: `main.css` (Tailwind bridge), `tokens/colors.css` (primitives & semantic aliases), `tokens/typography.css` (type scales)

**src/assets/tokens/:**
- Purpose: Design token definitions consumed by all components
- Contains: CSS custom properties for colors (light + dark modes) and typography
- Key files: `colors.css` (2-layer token system), `typography.css` (font sizes, weights, line heights)

**src/assets/brand/:**
- Purpose: Official brand assets
- Contains: SVG logos with currentColor fill support
- Key files: `logo/auterion-logo-symbol.svg`, `logo/auterion-logo-full.svg`

**src/assets/fonts/:**
- Purpose: Self-hosted typefaces
- Contains: Inter Variable woff2 font file
- Key files: `InterVariable.woff2`

**src/components/:**
- Purpose: Reusable Vue components shared across multiple pages
- Contains: Layout wrapper components, UI controls
- Key files:
  - `TheSidebar.vue` - Navigation sidebar with accordion sections
  - `ThemeToggle.vue` - Dark/light mode toggle button

**src/composables/:**
- Purpose: Encapsulated reactive logic
- Contains: Vue 3 composables
- Key files: `useTheme.ts` - Theme state (dark/light) and toggle logic

**src/layouts/:**
- Purpose: Page layout templates
- Contains: Wrapper components that structure full pages
- Key files: `DefaultLayout.vue` - Two-column layout (sidebar + content area)

**src/pages/:**
- Purpose: Route-level page components
- Contains: Full-page Vue components, one per route
- Key files:
  - `HomePage.vue` - Home/landing page with section grid
  - `ColorsPage.vue` - Design token color system documentation
  - `TypographyPage.vue` - Type scale and font system documentation
  - `BrandIdeaPage.vue` - Brand strategy and positioning
  - `VoicePrinciplesPage.vue` - Brand voice and tone guidelines
  - `WritingAuterionPage.vue` - Writing style guidelines
  - `FormattingPage.vue` - Content formatting and structure rules
  - `WebsitePage.vue` - Website design showcase (standalone page, no sidebar)
  - `PlaceholderPage.vue` - Generic under-construction page template

**src/router/:**
- Purpose: Vue Router configuration and route definitions
- Contains: Router instance, all route definitions, metadata
- Key files: `index.ts` - Router creation, route array with metadata

**Root-level config files:**
- `vite.config.ts` - Vite build tool configuration, alias setup (`@/` → `src/`)
- `tsconfig.json` - TypeScript compiler options (strict mode, source maps)
- `package.json` - Project metadata, dependencies, scripts
- `pnpm-lock.yaml` - Locked dependency versions
- `index.html` - HTML shell for Vite SPA

## Key File Locations

**Entry Points:**
- `src/main.ts`: Bootstrap Vue app, mount to DOM
- `src/App.vue`: Root component that handles layout routing

**Configuration:**
- `vite.config.ts`: Build tool, plugin setup, path aliases
- `tsconfig.json`: TypeScript compilation rules
- `src/assets/main.css`: Tailwind import, font-face, custom variant for dark mode
- `index.html`: Script tag for main.ts, root `#app` element

**Core Logic:**
- `src/router/index.ts`: All route definitions and metadata
- `src/composables/useTheme.ts`: Theme state and switching logic
- `src/layouts/DefaultLayout.vue`: Main page layout structure
- `src/components/TheSidebar.vue`: Navigation controller with section management

**Design System Definition:**
- `src/assets/tokens/colors.css`: Primitives (16 scales × 10 steps) + semantic aliases + theme overrides
- `src/assets/tokens/typography.css`: Font family, sizes, line heights, letter spacing

**Example Pages:**
- `src/pages/HomePage.vue`: Landing page demonstrating section grid layout
- `src/pages/ColorsPage.vue`: Interactive color token documentation with theme-aware rendering

## Naming Conventions

**Files:**

- Page components: `*Page.vue` suffix (e.g., `HomePage.vue`, `ColorsPage.vue`)
- Shared components: `The*` prefix for singleton layout components (e.g., `TheSidebar.vue`, `ThemeToggle.vue`)
- Composables: `use*` prefix (e.g., `useTheme.ts`)
- CSS tokens: kebab-case with `--color-` and `--font-` prefixes (e.g., `--color-primary`, `--font-size-base`)

**Directories:**

- Feature areas: lowercase plural (e.g., `components/`, `pages/`, `layouts/`)
- Token groups: lowercase plural (e.g., `tokens/`)
- Brand assets: feature-specific subdirs (e.g., `brand/logo/`)

**Routes:**

- Path pattern: `/{section}/{topic}` (e.g., `/strategy/brand-idea`, `/color/primitives`)
- Home: `/`
- External links: marked with `external: true` in route metadata

## Where to Add New Code

**New Page/Section:**
1. Create new route file: `src/pages/{NamePage}.vue`
2. Add route to `src/router/index.ts`:
   ```typescript
   { path: '/section/topic', component: NamePage, meta: { section: 'Section', title: 'Topic' } }
   ```
3. Add navigation item to section in `src/components/TheSidebar.vue` `sections` array

**New Shared Component:**
1. Create in `src/components/ComponentName.vue`
2. Import in page or layout where needed
3. Use `The` prefix for singleton layout components, no prefix for generic reusable components

**New Composable:**
1. Create in `src/composables/useFeatureName.ts`
2. Export named function (not default export)
3. Return ref/computed state and methods
4. Import in components via `import { useFeatureName } from '@/composables/useFeatureName'`

**New Design Tokens:**
- Colors: Add CSS custom properties to `src/assets/tokens/colors.css`
  - Primitive: `--color-{scale}-{step}` (1-10)
  - Semantic: `--color-{intent}` or `--color-{intent}-{variant}`
- Typography: Add to `src/assets/tokens/typography.css` and @theme block in `main.css`
- Follow two-layer pattern: define primitives, then semantic aliases via `var()` references

**Utilities & Helpers:**
- No dedicated utils directory yet; co-locate with consumers or create `src/utils/` if collection grows
- Prefer composables for logic needed in multiple components

## Special Directories

**src/.planning/**
- Purpose: GSD planning and analysis documents
- Generated: No (hand-written)
- Committed: Yes
- Contains: ARCHITECTURE.md, STRUCTURE.md, CONVENTIONS.md, etc. for orchestrator reference

**node_modules/:**
- Purpose: Installed dependencies
- Generated: Yes (by pnpm)
- Committed: No (.gitignore)

**dist/**
- Purpose: Production build output
- Generated: Yes (by `vite build`)
- Committed: No (.gitignore)

---

*Structure analysis: 2026-03-10*
