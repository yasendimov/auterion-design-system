# Architecture

**Analysis Date:** 2026-02-21

## Pattern Overview

**Overall:** Client-side Single Page Application (SPA) with documentation-driven design system browser

**Key Characteristics:**
- Vue 3 Composition API with TypeScript strict mode
- Client-side routing with Vue Router 5 (no server-side rendering)
- CSS-first design token system using CSS custom properties
- Dark-mode-first (dark is default, light is secondary theme)
- Component discovery and documentation via navigable guide interface
- All styling via Tailwind CSS v4 with theme bridge to token system

## Layers

**Entry Point:**
- Purpose: Bootstrap the application, initialize Vue and router
- Location: `src/main.ts`
- Contains: Vue app creation, router attachment, CSS imports
- Depends on: Vue, Vue Router, main.css
- Used by: Browser via `index.html`

**Root Component:**
- Purpose: Define the base template and layout wrapper
- Location: `src/App.vue`
- Contains: Layout delegation to DefaultLayout
- Depends on: DefaultLayout
- Used by: Vue app bootstrapper

**Layout Layer:**
- Purpose: Provide consistent page structure (sidebar + main content)
- Location: `src/layouts/DefaultLayout.vue`
- Contains: Two-column layout, theme-aware styling, router-view outlet
- Depends on: TheSidebar component, Vue Router
- Used by: App.vue (all pages render through this)

**Navigation Layer:**
- Purpose: Section-based navigation with accordion sidebar state management
- Location: `src/components/TheSidebar.vue`
- Contains: Section definitions, active route detection, exclusive accordion behavior
- Depends on: Vue Router, ThemeToggle, useRoute/useRouter composables
- Used by: DefaultLayout

**Page Components:**
- Purpose: Content for each route; documentation pages, token showcases
- Location: `src/pages/*.vue`
- Contains: Route-specific content, token grids, type scales, color showcases
- Depends on: Vue Router (meta), DOM data attributes for token access
- Used by: Router configuration as route components

**Composables:**
- Purpose: Reusable Vue 3 logic extraction
- Location: `src/composables/useTheme.ts`
- Contains: Theme state (ref), toggle function, initialization from DOM
- Depends on: Vue (ref), document API
- Used by: ThemeToggle, any component needing theme state

**Router Configuration:**
- Purpose: Define all routes, lazy-load pages, manage route metadata
- Location: `src/router/index.ts`
- Contains: Route array with path, component, meta (section, title), placeholder helper
- Depends on: Vue Router, all page components
- Used by: Vue app bootstrapper

## Data Flow

**Theme Initialization:**

1. Browser loads `index.html`
2. `src/main.ts` mounts Vue app and imports `src/assets/main.css`
3. `src/App.vue` renders DefaultLayout
4. ThemeToggle component mounts, calls `useTheme().initialize()`
5. `useTheme` reads `document.documentElement.getAttribute('data-theme')`
6. Dark theme is default; CSS custom properties resolve for light/dark variants
7. Theme toggle updates DOM attribute; CSS reflows via `@custom-variant dark` selector

**Route Navigation:**

1. Browser URL changes or user clicks router-link in TheSidebar
2. Vue Router matches route in `src/router/index.ts`
3. Route component (page file) is mounted in DefaultLayout's `<router-view />`
4. Route meta (section, title) extracted by PlaceholderPage if needed
5. Page renders content (may reference CSS tokens, theme-aware classes)

**Token Resolution:**

1. CSS custom properties defined in `src/assets/tokens/colors.css` at `:root` (light theme default)
2. Redefined at `[data-theme="dark"]` for dark variants
3. Tailwind bridge in `src/assets/main.css` (@theme block) exposes tokens as utility classes
4. Components use semantic token classes: `bg-primary`, `text-text-secondary`, `border-border-subtle`
5. Theme changes update `data-theme` attribute; CSS cascade applies dark overrides

**State Management:**

- Minimal: Theme toggle state in `useTheme()` composable (single ref)
- Sidebar open/close state in TheSidebar component (Set<string>)
- Router state managed by Vue Router (current path, route meta)
- All other state is derivable from DOM or route

## Key Abstractions

**Design Token System:**

- **Primitives:** Radix UI color scales (10-step chromatic) + custom scales (auterion-gray, etc.)
- **Semantic Aliases:** Intent-based tokens (primary, alarm, warning, caution, ok, accent) with 7 variants each (subtle, muted, border, default, hover, text, on-name)
- **Foundation Tokens:** Page backgrounds, text colors, borders, surfaces
- **Implementation:** CSS custom properties in `src/assets/tokens/colors.css`, exposed to Tailwind via @theme bridge

**Theme Toggle Pattern:**

- Uses `data-theme` attribute on `<html>` element (not classList, for clarity)
- Dark theme (data-theme="dark") applies CSS overrides via custom variant
- State persisted in composable (not localStorage—defaults to dark on load)
- Any element with dark: prefix gets dark-mode styles automatically

**Page Metadata Pattern:**

- Routes define `meta: { section, title }` for sidebar grouping
- PlaceholderPage extracts meta via `route.meta` and renders generic template
- Pages with unique content override placeholder by importing explicit page component

**Placeholder Helper:**

```typescript
function placeholder(section: string, title: string) {
  return {
    component: PlaceholderPage,
    meta: { section, title },
  }
}
```
Reduces boilerplate for under-construction pages.

## Entry Points

**Primary Entry Point (Browser):**

- Location: `index.html` (root)
- Triggers: User navigates to domain
- Responsibilities: Load Vue app, attach to #app div

**Application Entry Point:**

- Location: `src/main.ts`
- Triggers: Browser loads index.html
- Responsibilities: Create Vue app, attach router, mount to DOM

**Route Entry Points:**

- Each page in `src/pages/` is an entry point for its route
- Triggered by Vue Router when URL matches route
- HomePage (`/`): Main index, links to all sections
- ColorsPage (`/color/primitives`): Interactive token showcase
- TypographyPage (`/typography/introduction`): Type scale and weights
- Pages with strategy, voice, writing: Content pages with layout headers
- PlaceholderPage: Generic template for under-construction pages

## Error Handling

**Strategy:** Minimal error handling; pages expected to render without data fetching

**Patterns:**
- No try-catch blocks (no async operations, no network calls)
- Route fallback: Undefined routes will not match and Vue Router shows nothing (no 404 page defined)
- Theme initialization defaults to dark if document attribute missing
- All token references via CSS custom properties—if token missing, browser applies fallback color (usually black or transparent)

## Cross-Cutting Concerns

**Styling:**
- Tailwind CSS v4 with @theme token bridge
- All color classes map to semantic tokens (never raw primitives in components)
- Dark mode via data-theme attribute and @custom-variant dark
- No <style> blocks in components (all inline Tailwind classes)

**Theme Application:**
- Composable: `useTheme()` in `src/composables/useTheme.ts`
- Hook: ThemeToggle component initializes on mount, updates on click
- Persistence: Not implemented (defaults to dark on page load)

**Layout Consistency:**
- DefaultLayout enforces two-column structure
- TheSidebar manages sidebar state and navigation
- All pages render in main content area via router-view
- Responsive: Sidebar is fixed width, main content scrolls

**Routing:**
- Vue Router 5 with createWebHistory (client-side navigation)
- No lazy code-splitting (all pages imported at bundle time)
- Meta attached to routes for section/title info used by PlaceholderPage and sidebar

---

*Architecture analysis: 2026-02-21*
