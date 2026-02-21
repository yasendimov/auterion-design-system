# Codebase Structure

**Analysis Date:** 2026-02-21

## Directory Layout

```
src/
├── assets/
│   ├── main.css              # Tailwind imports, @theme token bridge, Inter Variable font-face
│   ├── tokens/
│   │   ├── colors.css        # Primitive + semantic color tokens (CSS custom props)
│   │   └── typography.css    # Type scale, weights, line heights, tracking, features
│   ├── fonts/
│   │   └── InterVariable.woff2  # Self-hosted official Inter Variable woff2
│   └── brand/
│       └── logo/             # Brand logo assets
├── components/
│   ├── TheSidebar.vue        # Navigation sidebar with accordion sections
│   └── ThemeToggle.vue       # Light/dark theme toggle button
├── composables/
│   └── useTheme.ts           # Theme state and toggle logic
├── layouts/
│   └── DefaultLayout.vue     # Two-column layout (sidebar + main content)
├── pages/
│   ├── HomePage.vue          # Index page with section cards
│   ├── ColorsPage.vue        # Color tokens showcase (primitives, semantic, foundation)
│   ├── TypographyPage.vue    # Type scale, weights, OpenType features
│   ├── PlaceholderPage.vue   # Generic template for under-construction pages
│   ├── BrandIdeaPage.vue     # Brand idea content page
│   ├── VoicePrinciplesPage.vue # Voice principles content page
│   ├── WritingAuterionPage.vue # Writing guidelines content page
│   └── FormattingPage.vue    # Formatting and structure guidelines
├── router/
│   └── index.ts              # Route definitions, route metadata
├── App.vue                   # Root component, delegates to DefaultLayout
└── main.ts                   # Vue app entry point, router attachment, CSS import
```

## Directory Purposes

**src/assets:**
- Purpose: Static resources: CSS tokens, fonts, brand imagery
- Contains: Tailwind config bridge, design tokens, self-hosted fonts
- Key files: `src/assets/main.css` (Tailwind imports), `src/assets/tokens/colors.css` (all color tokens)

**src/assets/tokens/:**
- Purpose: Centralized design token definitions
- Contains: CSS custom properties organized by token type
- Key files:
  - `colors.css`: Primitives (Radix scales), semantic aliases, foundation tokens
  - `typography.css`: Type scale (xs–9xl), weights, line heights, letter spacing, OpenType features

**src/assets/fonts/:**
- Purpose: Self-hosted font files
- Contains: Inter Variable woff2 (official from rsms/inter)
- Committed: Yes (single woff2 file)

**src/assets/brand/:**
- Purpose: Brand identity assets (logos, brand colors visual reference)
- Contains: Logo SVGs and brand collateral
- Committed: Yes

**src/components/:**
- Purpose: Reusable Vue components (currently layout/navigation only)
- Contains: Singleton layout components (the* prefix) and UI components
- Key files:
  - `TheSidebar.vue`: Navigation structure, accordion state, route detection
  - `ThemeToggle.vue`: Theme switcher button with icon conditional rendering

**src/composables/:**
- Purpose: Vue 3 composables for extracting reusable logic
- Contains: State management and side effects
- Key files: `useTheme.ts` (theme toggle, initialization, DOM manipulation)

**src/layouts/:**
- Purpose: Page layout templates
- Contains: Structural layouts (not content)
- Key files: `DefaultLayout.vue` (two-column: sidebar + main, flex-based)

**src/pages/:**
- Purpose: Route-level page components
- Contains: Full-page content for each route
- Naming: `*Page.vue` (HomePage, ColorsPage, etc.)
- Key files:
  - `HomePage.vue`: Section index with card grid
  - `ColorsPage.vue`: Interactive color token showcase with grids
  - `TypographyPage.vue`: Type scale table, weight samples, features demo
  - `PlaceholderPage.vue`: Generic under-construction template
  - Remaining: Content pages (Brand Idea, Voice Principles, Writing, Formatting)

**src/router/:**
- Purpose: Vue Router configuration and route definitions
- Contains: All routes, route metadata, route helper functions
- Key files: `index.ts` (createRouter, route array, placeholder helper)

## Key File Locations

**Entry Points:**

- `src/main.ts`: Application bootstrap—creates Vue app, attaches router, imports main.css
- `src/App.vue`: Root component—renders DefaultLayout wrapper
- `index.html`: Browser entry point (implicit, in project root)

**Configuration:**

- `src/assets/main.css`: Tailwind imports, @theme token bridge, Inter font-face definition
- `src/assets/tokens/colors.css`: All color token definitions (primitives, semantic, foundation)
- `src/assets/tokens/typography.css`: Type scale and typography tokens
- `src/router/index.ts`: All route definitions and metadata

**Core Logic:**

- `src/composables/useTheme.ts`: Theme state and toggle implementation
- `src/layouts/DefaultLayout.vue`: Page structure (sidebar + content)
- `src/components/TheSidebar.vue`: Navigation and section state management
- `src/components/ThemeToggle.vue`: Theme switcher UI

**Documentation Pages:**

- `src/pages/HomePage.vue`: Index
- `src/pages/ColorsPage.vue`: Color tokens showcase
- `src/pages/TypographyPage.vue`: Typography reference
- `src/pages/BrandIdeaPage.vue`: Brand strategy
- `src/pages/VoicePrinciplesPage.vue`: Voice and tone
- `src/pages/WritingAuterionPage.vue`: Writing guidelines
- `src/pages/FormattingPage.vue`: Formatting and structure
- `src/pages/PlaceholderPage.vue`: Under-construction template

## Naming Conventions

**Files:**

- Vue components: `PascalCase.vue` (e.g., `HomePage.vue`, `ThemeToggle.vue`)
- Composables: `use[Feature]` kebab-case file, PascalCase export (e.g., `useTheme.ts` exports `useTheme()`)
- Pages: `*Page.vue` suffix (e.g., `ColorsPage.vue`, `HomePage.vue`)
- Layout components: `The[Layout]` prefix for singleton layout (e.g., `DefaultLayout.vue`, `TheSidebar.vue`)
- Types: `[ComponentName].types.ts` (not used yet; pattern reserved for future)
- CSS files: `[feature].css` in assets (e.g., `colors.css`, `typography.css`)

**Directories:**

- Plural names: `src/pages/`, `src/components/`, `src/assets/`, `src/composables/`, `src/router/`
- Feature subdirs: `src/assets/tokens/`, `src/assets/fonts/`, `src/assets/brand/`
- No nested component dirs (all in `src/components/` for now)

**CSS Custom Properties:**

- Primitives: `--color-[scale]-[step]` (e.g., `--color-blue-5`, `--color-gray-10`)
- Semantic: `--color-[group]-[variant]` or `--color-[group]` for default (e.g., `--color-primary-hover`, `--color-alarm`)
- Foundation: `--color-page`, `--color-text-primary`, `--color-surface-1`, `--color-border-subtle`
- Typography: `--font-size-[scale]`, `--line-height-[scale]`, `--tracking-[scale]`, `--font-weight-[name]`
- Features: `--font-features-sans`, `--default-font-variation-settings`

**TypeScript/JavaScript:**

- Functions: `camelCase` (e.g., `useTheme`, `toggleSection`, `isActive`)
- Variables: `camelCase` for var/const (e.g., `isDark`, `sections`, `openSections`)
- Constants: `SCREAMING_SNAKE_CASE` (not used yet; pattern reserve)
- Composable exports: Export named function with `use` prefix (e.g., `export function useTheme()`)

**Vue Components Props & Events:**

- Props in interfaces: `PascalCase` (e.g., `interface HeroSectionProps`)
- Props in template/script: Follow TypeScript naming (camelCase defaults)
- Events: Emit as is (Vue handles event transformation)

## Where to Add New Code

**New Documentation Page:**

1. Create new `.vue` file in `src/pages/` named `[Topic]Page.vue`
2. Define page structure with header and sections (mirror TypographyPage, ColorsPage pattern)
3. Add route to `src/router/index.ts` with path, component, and meta (section, title)
4. Add sidebar item to `TheSidebar.vue` sections array
5. Use semantic token classes only (no raw Tailwind colors, no hardcoded hex)

**New Reusable Component:**

1. Create folder in `src/components/` (e.g., `src/components/marketing/HeroSection/`)
2. Create three files:
   - `HeroSection.vue` - Component implementation with `<script setup lang="ts">`
   - `HeroSection.types.ts` - Props interface (Props export)
   - `index.ts` - Named export for easy imports
3. Use `withDefaults(defineProps<Props>(), { ... })` pattern
4. All styles via Tailwind classes in template; no <style> blocks
5. All colors via semantic tokens (text-primary, bg-surface, etc.)

**New Composable:**

1. Create file in `src/composables/use[Feature].ts`
2. Use Vue 3 Composition API (ref, computed, watch, etc.)
3. Export named function (not default)
4. Pattern: `export function useFeature() { ... return { ... } }`
5. Use in components via `const { ... } = useFeature()`

**New Token:**

1. Edit `src/assets/tokens/colors.css` or `src/assets/tokens/typography.css`
2. Define at `:root` for light theme (or baseline)
3. If theme-dependent, redefine at `[data-theme="dark"]`
4. Expose to Tailwind in `src/assets/main.css` @theme block if applicable
5. Reference in components as semantic alias, not primitive (e.g., `bg-primary` not `bg-blue-5`)

**New Layout:**

1. Create file in `src/layouts/` named `[Name]Layout.vue`
2. Structure with clear regions (header, sidebar, main, footer, etc.)
3. Use flex or grid for layout (no absolute positioning)
4. Include `<router-view />` where page content should render
5. Reference from App.vue or conditional logic if layout varies by route

## Special Directories

**src/assets/tokens/:**
- Purpose: Central source of truth for design tokens
- Generated: No (hand-written CSS custom properties)
- Committed: Yes
- Modification: Edit directly; changes auto-apply to components via CSS cascade

**src/assets/fonts/:**
- Purpose: Self-hosted web fonts
- Generated: No (pre-built woff2 from official Inter)
- Committed: Yes
- Modification: Replace InterVariable.woff2; update font-face src in main.css if needed

**src/assets/brand/:**
- Purpose: Brand identity collateral
- Generated: No
- Committed: Yes
- Modification: Add SVGs/images here; reference via import or relative path

**node_modules/:**
- Purpose: Installed dependencies
- Generated: Yes (via pnpm install)
- Committed: No (.gitignore)
- Modification: Do not edit; use pnpm add/remove instead

**dist/:**
- Purpose: Production build output
- Generated: Yes (via pnpm build)
- Committed: No (.gitignore)
- Modification: Do not edit; regenerate via pnpm build

---

*Structure analysis: 2026-02-21*
