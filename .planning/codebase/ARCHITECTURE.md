# Architecture

**Analysis Date:** 2026-03-10

## Pattern Overview

**Overall:** Component-driven SPA with centralized design token system and route-based code splitting.

**Key Characteristics:**
- Vue 3 Composition API with TypeScript strict mode
- Client-side routing (Vue Router) with metadata-driven layout selection
- Two-layer design token architecture (primitives → semantic aliases)
- Dark-mode-first with `[data-theme="dark"]` attribute-based theme switching
- Tailwind CSS v4 with CSS custom property bridges to design tokens
- Single-responsibility components: layout container, navigation, theme toggle, page content

## Layers

**Presentation (Vue Components):**
- Purpose: Render UI, handle user interactions, consume design tokens via CSS
- Location: `src/components/`, `src/pages/`, `src/layouts/`
- Contains: `.vue` files with `<script setup>`, templates, inline Tailwind utilities
- Depends on: Vue Router, composables for state, design tokens via CSS
- Used by: Vue Router during navigation

**Routing & Navigation:**
- Purpose: Define routes, associate pages with metadata, control layout rendering
- Location: `src/router/index.ts`
- Contains: Route definitions, metadata (section, title, standalone flag), helper functions
- Depends on: Vue Router, page component imports
- Used by: App.vue to render layout or standalone pages

**State Management (Composables):**
- Purpose: Centralize reactive logic (theme switching, route metadata access)
- Location: `src/composables/`
- Contains: `useTheme()` for dark/light toggle, DOM-based persistence
- Depends on: Vue reactivity (ref, computed), Vue Router
- Used by: ThemeToggle, TheSidebar components

**Design Tokens:**
- Purpose: Define visual primitives (colors, typography) and semantic mappings
- Location: `src/assets/tokens/colors.css`, `src/assets/tokens/typography.css`
- Contains: CSS custom properties (primitives & semantic aliases), theme variants via `@media` and attribute selectors
- Depends on: CSS custom property cascade
- Used by: All components via Tailwind utilities and inline `style=` bindings

**Styling & Build:**
- Purpose: Configure Tailwind, import fonts, apply base Tailwind utilities
- Location: `src/assets/main.css`, `vite.config.ts`
- Contains: `@import` statements, `@theme` bridge declarations, font-face rules
- Depends on: Tailwind CSS v4, Vite, design tokens
- Used by: Every component via Tailwind utility classes

## Data Flow

**Route Navigation:**

1. User clicks link or navigates to URL
2. Vue Router matches route and loads component + metadata
3. App.vue reads `route.meta.standalone` flag
4. If standalone: render page directly without layout
5. If not standalone: wrap page in DefaultLayout (sidebar + main content area)
6. Page component renders and accesses route metadata via `useRoute()`

**Theme Switching:**

1. ThemeToggle button clicked
2. `useTheme().toggle()` called
3. Refs update (`isDark.value`)
4. `[data-theme]` attribute set on document root
5. CSS custom property cascade re-evaluates in `[data-theme="dark"]` scope
6. All colors update automatically (primitives change, semantic aliases auto-resolve)

**Token Resolution (Light → Dark):**

1. Semantic token defined in `:root` as `var(--color-primary)` pointing to primitive
2. Primitive defined at `:root` for light mode (e.g., `--color-blue-7: #1475ff`)
3. Primitive redefined at `[data-theme="dark"]` for dark mode (e.g., `--color-blue-7: #60a5fa`)
4. When theme switches, primitive values change; semantic aliases resolve to new values automatically
5. No need to redefine semantic aliases per theme (inheritance cascade handles it)

**State Management:**

- Theme: stored in `[data-theme]` attribute (persisted implicitly if localStorage added later)
- Route state: stored in Vue Router, accessible via `useRoute()`
- UI state (sidebar open/close): stored in `TheSidebar.vue` ref (`openSections`)
- Global theme ref: `isDark` in `useTheme()` composable, synchronized with DOM attribute

## Key Abstractions

**Layout Adapter Pattern:**

- Purpose: Conditionally render sidebar + layout vs. standalone page
- Examples: `src/App.vue` uses `route.meta.standalone` to switch layouts
- Pattern: Metadata-driven conditional rendering via `v-if` and `router-view`

**Placeholder Helper:**

- Purpose: DRY route definitions for pages under construction
- Examples: `src/router/index.ts` - `placeholder()` factory function
- Pattern: Returns `{ component: PlaceholderPage, meta: { section, title } }` to reduce boilerplate

**Semantic Token Mapping:**

- Purpose: Decouple component intent from specific colors (e.g., use `--color-primary` not `--color-blue-7`)
- Examples: `--color-primary`, `--color-alarm`, `--color-surface-1` defined in `src/assets/tokens/colors.css`
- Pattern: Single assignment at `:root` via `var()` reference, auto-resolves across themes

**Accordion Sidebar Navigation:**

- Purpose: Organize many pages under expandable sections without overflow
- Examples: `src/components/TheSidebar.vue` with 8 sections, auto-open on route change
- Pattern: Exclusive open (one section at a time), reactive tracking of active item

## Entry Points

**App Bootstrap:**

- Location: `src/main.ts`
- Triggers: Browser loads application, dev server starts
- Responsibilities: Create Vue app instance, mount router, import base CSS, render to `#app` element

**App Root:**

- Location: `src/App.vue`
- Triggers: App bootstrap
- Responsibilities: Read route metadata, choose layout (DefaultLayout or standalone), render router-view

**Main Layout:**

- Location: `src/layouts/DefaultLayout.vue`
- Triggers: Route has `standalone: false` or no metadata
- Responsibilities: Render sidebar and main content area flex container

**Navigation Hub:**

- Location: `src/components/TheSidebar.vue`
- Triggers: App mounts, route changes
- Responsibilities: Display navigation tree, track open sections, highlight active route, render theme toggle

**Router Definition:**

- Location: `src/router/index.ts`
- Triggers: App bootstrap
- Responsibilities: Define all routes, map URLs to page components, attach metadata, export router instance

## Error Handling

**Strategy:** No explicit error boundaries; Vue Router handles 404s implicitly (no catch-all route, unmounted view).

**Patterns:**

- Route mismatches: Router remains silent; view unmounts (blank page)
- Missing metadata: PlaceholderPage uses fallback strings: `const title = route.meta.title ?? 'Page'`
- Theme initialization: ThemeToggle reads DOM attribute; defaults to `isDark: true` ref if not set

## Cross-Cutting Concerns

**Logging:** None. Debugging via browser DevTools Vue extension.

**Validation:** Route metadata type-safe via TypeScript interfaces (not explicit); semantic token names documented in colors.css comments.

**Authentication:** Not implemented. No auth layer.

**Theme Persistence:** Currently not persistent (theme resets on reload). Configured via `[data-theme]` attribute; localStorage hook could be added to `useTheme()`.

---

*Architecture analysis: 2026-03-10*
