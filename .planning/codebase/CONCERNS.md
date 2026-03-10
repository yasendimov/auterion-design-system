# Codebase Concerns

**Analysis Date:** 2026-03-10

## Theme Persistence (State Loss Risk)

**Issue:** Theme state is not persisted across page refreshes.

**Files:** `src/composables/useTheme.ts`

**Problem:** The `useTheme()` composable initializes `isDark` as a ref to `true` (default dark mode), but reads the actual theme from `document.documentElement.getAttribute('data-theme')` only on mount. If a user toggles to light mode and refreshes, it resets to dark mode because:
- Initial state: `isDark.value = true`
- On mount: `isDark.value = document.documentElement.getAttribute('data-theme') === 'dark'` (attribute not set on first load)
- Result: `isDark.value` becomes `false` (light mode) after first toggle, but resets to `true` on page reload

**Impact:** Users cannot persist theme preference across sessions. This degraded UX is particularly noticeable in a design system that emphasizes dark mode as primary.

**Fix approach:**
1. Use `localStorage` to persist theme state: `localStorage.setItem('theme', isDark.value ? 'dark' : 'light')`
2. On mount, read from localStorage with fallback to default: `const saved = localStorage.getItem('theme') || 'dark'`
3. Sync localStorage updates when `toggle()` is called
4. Optionally respect system preference (`prefers-color-scheme`) as secondary fallback

## Large WebsitePage Component

**Issue:** WebsitePage is monolithic (638 lines) with significant inline template complexity.

**Files:** `src/pages/WebsitePage.vue`

**Problem:** The page combines:
- Complex navigation structures with dropdowns
- Mobile menu state management
- Hero sections with grid layouts
- Multiple disclosure sections (capabilities, partners, team)
- Footer with multi-column navigation
- All styles inline via Tailwind classes

**Impact:**
- Difficult to maintain and refactor
- Hard to test individual sections
- Harder to reuse sections across other pages
- Makes it harder to track component dependencies

**Fix approach:**
1. Extract navigation components: `WebsiteNav.vue`, `WebsiteMobileNav.vue`
2. Extract section components: `CapabilitiesSection.vue`, `PartnersSection.vue`, `TeamSection.vue`, `HeroSection.vue`
3. Extract footer: `WebsiteFooter.vue` with sub-components for nav columns
4. Keep WebsitePage as a page-level composition that orchestrates sections
5. Data arrays (navigation, stats, capabilities) can move to a separate `websiteData.ts` file

## Hardcoded Color References in WebsitePage

**Issue:** Multiple hardcoded color classes used instead of semantic tokens.

**Files:** `src/pages/WebsitePage.vue`

**Problem:** Uses specific color classes like `bg-slate-900`, `bg-blue-500`, `text-blue-400` scattered throughout, rather than semantic tokens defined in `colors.css`. Examples:
- Hero section backgrounds
- Button colors
- Text colors for different sections

**Impact:**
- Cannot systematically change brand colors via token updates
- Makes it harder to support future color theming changes
- Diverges from the design system's own token architecture

**Fix approach:**
1. Audit all hardcoded colors in WebsitePage
2. Define new semantic tokens in `src/assets/tokens/colors.css` if needed for website-specific contexts
3. Replace hardcoded classes with semantic token references
4. Document which tokens map to which page sections

## Missing Accessibility Attributes

**Issue:** Interactive components lack keyboard navigation and screen reader support.

**Files:** `src/components/TheSidebar.vue`, `src/pages/WebsitePage.vue`

**Problem:**
- Section toggle buttons in sidebar don't have `aria-expanded` or `aria-controls`
- Menu disclosure buttons lack proper accessibility attributes
- External link indicator icon has no `aria-label`
- Mobile menu button in WebsitePage lacks `aria-label` or `aria-expanded`
- Some buttons and clickable areas may not be keyboard accessible

**Impact:**
- Users relying on assistive technologies cannot properly navigate
- Screen readers cannot announce state changes for expanded/collapsed sections
- Fails WCAG 2.1 Level AA accessibility standards

**Fix approach:**
1. Add `aria-expanded` to section toggles when `isSectionOpen` state changes
2. Add `aria-controls` to link button IDs
3. Add `aria-label` to icon-only buttons (hamburger menu, theme toggle)
4. Ensure all interactive elements are focusable and keyboard accessible (Tab, Enter, Space)
5. Use Headless UI components properly (already imported but ensure props like `:open` are wired)

## Type Safety: UseRoute Meta Object

**Issue:** Route meta properties lack type safety.

**Files:** `src/router/index.ts`, `src/App.vue`, `src/components/TheSidebar.vue`

**Problem:** Routes define `meta: { section, title, standalone }` as plain objects without TypeScript definitions. This means:
- No type hints for available meta properties
- Typos in property names won't be caught at compile time
- Future maintainers won't know what meta properties are valid

**Impact:**
- Less reliable code. Accessing `route.meta.section` or `route.meta.standalone` could silently fail if misspelled
- Harder to refactor meta structure globally

**Fix approach:**
1. Extend `RouteMeta` interface in `src/router/index.ts`:
   ```typescript
   declare module 'vue-router' {
     interface RouteMeta {
       section?: string
       title?: string
       standalone?: boolean
     }
   }
   ```
2. This enables proper type checking when accessing `route.meta.section` etc.

## Missing Error Boundaries

**Issue:** No error handling for failed route transitions or component errors.

**Files:** `src/main.ts`, `src/App.vue`

**Problem:** No `ErrorComponent` or `fallback` routes defined. If a lazy-loaded page component fails to import or throws during render, the entire app breaks with no graceful fallback.

**Impact:**
- Users see a blank page or console errors if any route component fails
- No visibility into what went wrong

**Fix approach:**
1. Define an `ErrorPage.vue` component with user-friendly messaging
2. Add `fallback: () => null` to lazy route imports (if using code splitting)
3. Optionally add a router `afterEach` guard to catch and log errors
4. Consider Sentry or error tracking if production monitoring is needed

## Bundle Size: WebsitePage JavaScript Impact

**Issue:** WebsitePage adds significant weight to production bundle.

**Files:** `src/pages/WebsitePage.vue`

**Problem:** WebsitePage is 638 lines and not lazy-loaded. Current production bundle:
- JS: 230 KB (gzipped: 72 KB)
- CSS: 47 KB (gzipped: 9.8 KB)
- Font: 352 KB

WebsitePage likely represents 20–30% of the JS bundle since it includes substantial hero, capabilities, partners, team sections all inline.

**Impact:**
- Slows down initial page load for users landing on other routes
- Increases time-to-interactive

**Fix approach:**
1. Lazy-load WebsitePage in router: `component: () => import('@/pages/WebsitePage.vue')`
2. Once component decomposition is done, further code-split large sections if needed
3. Consider route-based lazy loading for all page components (not just WebsitePage)
4. Monitor bundle size in CI: add `pnpm build` output to GitHub Actions

## Development Documentation Gap

**Issue:** CLAUDE.md exists but project structure lacks inline guidance for developers.

**Files:** `CLAUDE.md` (exists), but no `README.md` for quick start

**Problem:**
- New contributors must find and read CLAUDE.md to understand the project
- No quick start instructions in project root
- No contribution guidelines or PR template
- TypeScript strict mode rules (`noUnusedLocals`, `noUnusedParameters`) are enforced but not documented in source

**Impact:**
- Higher friction for contributors
- Inconsistent code quality if guidelines aren't followed

**Fix approach:**
1. Add brief `README.md` with:
   - Project description and dark-mode-first design philosophy
   - Quick start (pnpm install, pnpm dev)
   - Build commands reference
   - Link to CLAUDE.md for detailed architecture
2. Add `CONTRIBUTING.md` with:
   - Code style guidelines (semantic tokens over primitives, component naming conventions)
   - How to add new routes and pages
3. Optional: Create GitHub PR template to remind contributors of conventions

## Placeholder Routes Fill (Implementation Debt)

**Issue:** 30+ routes use the `placeholder()` helper to defer content creation.

**Files:** `src/router/index.ts`, `src/pages/PlaceholderPage.vue`

**Problem:** Routes like `/logo/introduction`, `/logo/the-basics`, `/color/semantic`, `/photography/art-direction` etc. all render the same `PlaceholderPage` component, which shows section + title metadata. This is intentional for rapid prototyping but creates a backlog of unimplemented pages.

**Impact:**
- Users landing on placeholder routes see incomplete content
- No visibility into which pages are actually done vs. pending
- Makes it harder to prioritize implementation work

**Fix approach:**
1. Document placeholder route policy in CLAUDE.md (already there, but reinforce)
2. Track placeholder routes that should be implemented as a GitHub issue or project board
3. When implementing a route, replace placeholder entry with actual component import
4. Consider adding a progress indicator on the home page showing % of design system sections documented

## CSS-in-JS Limitation with Tailwind v4

**Issue:** Tailwind v4 with CSS-first @theme limits dynamic styling options.

**Files:** `src/assets/main.css`, `src/assets/tokens/colors.css`

**Problem:** The `@theme` block in Tailwind v4 bridges design tokens only at build time. If future enhancements require:
- Runtime color customization (e.g., client-specific brand colors)
- Dynamic token generation
- Theme variants beyond light/dark

Then the current architecture would require significant refactoring, as Tailwind v4 doesn't support runtime token changes like some CSS-in-JS solutions do.

**Impact:** Low priority for current scope, but architectural constraint for future extensibility.

**Fix approach:**
1. Document current theming limitations in CLAUDE.md
2. For future runtime theming needs, consider:
   - PostCSS plugins to generate theme variants at build time
   - Client-side CSS variable overrides for non-Tailwind properties
   - Potential migration to CSS-in-JS if needed (Vue 3 + SFC `<style scoped>` can work alongside)
3. Plan ahead if multi-tenant or white-label scenarios arise

## Missing Tests

**Issue:** No test suite or test configuration.

**Files:** Project-wide

**Problem:** TypeScript, Vite, and Vue 3 are configured, but:
- No test runner (Jest, Vitest, etc.)
- No unit or integration tests
- No test configuration files
- No test coverage tracking
- CLAUDE.md states "no test suite"

**Impact:**
- Refactoring is risky without tests to catch regressions
- Color token changes or router structure changes could break pages silently
- Component prop changes aren't validated

**Fix approach:**
1. Add Vitest as dev dependency (lightweight, Vite-native)
2. Create basic test setup:
   - `vitest.config.ts`
   - `src/**/*.test.ts` files for composables
   - `src/components/**/*.spec.ts` for components
3. Start with high-value tests:
   - `useTheme.ts`: verify toggle, localStorage persistence
   - Route structure: verify all routes resolve
   - Color token existence: ensure primitive and semantic tokens are defined
4. Document testing guidelines in CLAUDE.md

## Dependency Audit

**Issue:** No lock file in git, unclear dependency management.

**Files:** `package.json`, `pnpm-lock.yaml`

**Problem:** `pnpm-lock.yaml` exists locally but git status shows it as modified. This could indicate:
- Lock file wasn't committed initially
- Dependencies were recently updated
- CI/CD pipeline may not have reproducible builds

**Impact:** Different machines or CI runners might install different versions.

**Fix approach:**
1. Ensure `pnpm-lock.yaml` is committed to git
2. Add `.npmrc` with `frozen-lockfile=true` to enforce lock file usage
3. Document in README: "Use `pnpm install` (not npm or yarn)"
4. Consider periodic dependency updates via Dependabot or manual audit

---

*Concerns audit: 2026-03-10*
