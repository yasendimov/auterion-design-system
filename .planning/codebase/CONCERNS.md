# Codebase Concerns

**Analysis Date:** 2026-02-21

## Tech Debt

**Hardcoded Tailwind classes instead of semantic tokens:**
- Issue: Components use raw Tailwind utility classes (`bg-zinc-900`, `text-zinc-500`, `border-zinc-200`) instead of consuming the semantic token system (CSS custom properties like `--color-text-primary`, `--color-surface-1`). While the semantic tokens are defined in `src/assets/tokens/colors.css`, they're not exposed as Tailwind utilities in the current `@theme` block in `src/assets/main.css`.
- Files:
  - `src/layouts/DefaultLayout.vue` (lines 6)
  - `src/components/TheSidebar.vue` (throughout)
  - `src/components/ThemeToggle.vue` (lines 15)
  - `src/pages/PlaceholderPage.vue` (throughout)
  - All page components (`src/pages/*.vue`)
- Impact: Makes it impossible to theme components through semantic tokens. Changes to semantic token values won't propagate to components unless Tailwind bridge is completed. Creates maintenance friction — if token system changes, components must be manually updated.
- Fix approach: Extend the `@theme` block in `src/assets/main.css` to bridge all semantic CSS custom properties (e.g., `--color-text-primary`, `--color-surface-1`, `--color-primary`, `--color-alarm`, etc.) as Tailwind utilities. This enables `text-text-primary`, `bg-surface-1`, `border-primary-border` etc. Document the semantic utility classes in CONVENTIONS.md.

**Theme persistence not implemented:**
- Issue: Theme choice (dark/light) is not persisted to localStorage. When the user toggles between dark and light mode in `ThemeToggle.vue`, it updates `document.documentElement.setAttribute('data-theme', ...)` only in memory. Refreshing the page resets to dark mode (the hardcoded default in `useTheme.ts`).
- Files:
  - `src/composables/useTheme.ts` (no persistence logic)
  - `src/components/ThemeToggle.vue` (no save on toggle)
- Impact: Poor user experience — theme preference is lost on page reload. Design system is dark-first, but users may prefer light mode and shouldn't have to toggle every visit.
- Fix approach: Add localStorage persistence to `useTheme.ts`. On `initialize()`, check `localStorage.getItem('theme')` before defaulting to dark. On `toggle()`, update both DOM and localStorage. Consider respecting system preference via `window.matchMedia('(prefers-color-scheme: dark)')` as fallback if no saved preference.

**Placeholder pages are not discoverable:**
- Issue: 38 of 48 routes (79%) use the `PlaceholderPage` component with only meta data (section, title) indicating they're under construction. No visual distinction between "work in progress" and "functional" pages. Users cannot see at a glance which areas are ready vs. incomplete.
- Files:
  - `src/router/index.ts` (lines 34-84 show placeholder() calls for Logo, Typography, Color, Photography, Iconography, Language & Style, Gallery sections)
  - `src/pages/PlaceholderPage.vue` (generic "Content coming soon" message)
- Impact: Reduces credibility of design system. Users may expect navigation to be complete and waste time looking for missing content. Sidebar shows all sections equally — no visual hierarchy distinguishing done from pending.
- Fix approach: (1) Add a `status` meta field to routes (e.g., `meta: { status: 'draft' | 'ready' }`) or use a different placeholder component for different maturity levels. (2) Style placeholder sections differently in the sidebar (e.g., dimmed text, badge, strike-through). (3) Consider a progress bar on the home page or section overview showing completion % per category.

**No form component library or validation patterns:**
- Issue: Zero form-related components or validation patterns exist in the codebase. While the design system itself contains no interactive forms, it will eventually need form inputs, validation, error messaging, etc. When forms are added, developers will invent their own patterns instead of following centralized conventions.
- Files: None (absence of forms-related code)
- Impact: Future form components may be inconsistent with each other, leading to fragmented validation UX and accessibility issues. No shared validation library means duplicated error handling logic.
- Fix approach: Create a roadmap for form component library (inputs, selects, checkboxes, radio groups, validation messages). Define error states and helper text patterns. Establish whether to use a third-party solution (e.g., VeeValidate) or build custom.

## Known Bugs

**Type assertion in PlaceholderPage without fallback safety:**
- Symptoms: If a route meta lacks `title` or `section` fields, the type assertion falls back to hardcoded strings ('Page', ''), but TypeScript does not warn of this risk.
- Files: `src/pages/PlaceholderPage.vue` (lines 5–6)
- Trigger: Create a new placeholder route without populating both meta.title and meta.section fields.
- Workaround: Always populate both fields in router/index.ts when using `placeholder()`.
- Fix: Use optional chaining or nullish coalescing more explicitly. Consider a route guard that validates meta on every placeholder navigation.

## Security Considerations

**No input sanitization or XSS protection in dynamic content:**
- Risk: Page components render user-controllable or externally-sourced content (e.g., voice principles, brand guidelines) without sanitization. If any content is ever pulled from a CMS or user input, there's no sanitization layer.
- Files: All page components (`src/pages/*.vue`) — content is currently hardcoded, but structure allows future injection points
- Current mitigation: Content is hardcoded in Vue templates; no external data sources yet.
- Recommendations: (1) If content moves to a CMS, implement input sanitization using a library like `xss` or `DOMPurify`. (2) Use Vue's built-in template escaping (avoid `v-html` for user content). (3) Audit all `v-html` usages — currently none detected. (4) Add Content Security Policy (CSP) headers in the HTTP server configuration.

**Self-hosted fonts and assets lack integrity checks:**
- Risk: `src/assets/fonts/InterVariable.woff2` is served locally without subresource integrity (SRI) verification. If the font file is corrupted or replaced, there's no browser validation.
- Files: `src/assets/main.css` (line 14, @font-face declaration)
- Current mitigation: File is checked into version control; no CDN delivery means lower risk than external fonts.
- Recommendations: (1) Add SRI hash to font-face if ever served from CDN. (2) Monitor font file integrity in CI/CD. (3) Document expected font file checksum.

## Performance Bottlenecks

**ColorsPage renders 170+ color swatches with no virtualization:**
- Problem: `ColorsPage.vue` renders 17 primitive color scales × 10 steps = 170 color divs, plus 10 neutral-alpha divs, plus 6 semantic groups × 6 variants = 216+ DOM nodes. All render on page load with no lazy loading.
- Files: `src/pages/ColorsPage.vue` (lines 49–152)
- Cause: Nested `v-for` loops render every swatch unconditionally. Browser must paint and composite 216+ color boxes immediately.
- Improvement path: (1) Implement virtualization using a library like `vue-virtual-scroller` if page gets longer. (2) Lazy-load sections below the fold using `IntersectionObserver`. (3) Batch color swatches into collapsible groups (e.g., "Neutrals", "Chromatic"). (4) Profile actual impact with DevTools — may be negligible for modern hardware.

**TypographyPage renders 13 type scale rows × 3 weights = 39+ text samples with per-row style binding:**
- Problem: `src/pages/TypographyPage.vue` (lines 51–78) renders type scale with inline `:style` bindings computed per weight/size combination. 13 rows × 3 weights = 39 DOM nodes with dynamic style attributes calculated on each render.
- Files: `src/pages/TypographyPage.vue` (lines 61–77)
- Cause: Dynamic `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing` computed per element in template. No CSS classes; all inline styles.
- Improvement path: (1) Generate static CSS classes for each type scale + weight combination. (2) Use CSS variables (`--font-size-*`, etc.) instead of inline styles. (3) Profile actual render time — likely negligible but improves maintainability.

**Sidebar navigation opens/closes section with instant DOM mutation + CSS transition:**
- Problem: `TheSidebar.vue` toggles `openSections` Set on click, triggering a grid layout transition (line 155: `transition-[grid-template-rows]`). No debouncing on rapid clicks; rapid opening/closing of sections may cause jank.
- Files: `src/components/TheSidebar.vue` (lines 97–105, 154–157)
- Cause: Each click triggers a state change that reflows the entire accordion. No debounce or rate limiting.
- Improvement path: (1) Add `@click.prevent` with a debounce. (2) Profile with DevTools to confirm jank exists before optimizing. (3) Consider `requestAnimationFrame` for smoother transitions.

## Fragile Areas

**PlaceholderPage depends on route meta fields with no validation:**
- Files: `src/pages/PlaceholderPage.vue`, `src/router/index.ts`
- Why fragile: Route meta is an untyped object. If a developer adds a new placeholder route and forgets to populate `title` or `section`, the page will render with fallback strings ('Page', ''). There's no build-time check or runtime warning.
- Safe modification: (1) Define a strict `PlaceholderRoute` type that extends Vue Router's meta. (2) Use TypeScript strict mode to enforce meta shape at route definition time. (3) Add a route guard that validates meta on every navigation to a placeholder.
- Test coverage: No tests for edge cases (missing title, missing section, unicode characters in title).

**TheSidebar accordion state is local-only, not synced to URL:**
- Files: `src/components/TheSidebar.vue`
- Why fragile: Opening/closing sections updates a local `openSections` Set but doesn't update the URL or query params. If a user opens the "Logo" section and then shares the URL, the recipient will see all sections collapsed. Refresh also closes all sections.
- Safe modification: (1) Sync `openSections` to URL query params (e.g., `?sections=Logo,Typography`). (2) Restore state on page load. (3) Use URL as source of truth, not local state.
- Test coverage: No tests for state persistence across navigation or page reload.

**useTheme composable hardcodes 'dark' as default, not tied to design tokens:**
- Files: `src/composables/useTheme.ts`
- Why fragile: Default theme is hardcoded to `dark` (line 3: `const isDark = ref(true)`), separate from the semantic token system. If the design system ever needs a new theme (e.g., 'high-contrast'), or if light mode becomes primary, the hardcoded default must be manually updated in two places (useTheme.ts and CSS).
- Safe modification: (1) Consider externalizing default theme as an environment variable or config file. (2) Document the relationship between isDark ref and [data-theme] attribute. (3) Add a test that validates the default matches design intent.
- Test coverage: No tests for initialization or theme toggle.

**Route meta types are untyped:**
- Files: `src/router/index.ts`, all page components
- Why fragile: Route `meta` object is passed around without TypeScript validation. `PlaceholderPage.vue` casts `route.meta.title as string`, which silently fails if the field is undefined.
- Safe modification: Define a `RouteMeta` interface and extend Vue Router's meta type. Force all route definitions to conform to the interface.
- Test coverage: No tests for route meta consistency.

## Scaling Limits

**Design system is primarily read-only; no admin interface for content updates:**
- Current capacity: Hardcoded content in Vue components. Roughly 8 main page components with ~800 LOC total.
- Limit: As the design system grows to 50+ pages with detailed component documentation, maintaining content in Vue source files becomes unsustainable. No way to update copy, images, or examples without a code change + build + deploy.
- Scaling path: (1) Migrate content to a CMS (Contentful, Sanity, MDX files in git). (2) Build a simple admin UI for curators to edit page content. (3) Generate component documentation from JSDoc or a dedicated schema. (4) Consider a static site generator (Astro, 11ty) for performance if the system grows to 100+ pages.

**No component library exports for external consumption:**
- Current capacity: Components live in `src/components/` but are not packaged for npm distribution.
- Limit: Other Auterion projects cannot import and reuse `TheSidebar`, `ThemeToggle`, or future components without copying code or depending on the entire design system monorepo.
- Scaling path: (1) Separate the design system into two packages: `@auterion/design-tokens` (CSS, types) and `@auterion/components` (Vue components). (2) Publish to npm with semantic versioning. (3) Add package exports in package.json. (4) Document breaking changes and upgrade paths.

**Color palette is manually defined in CSS; no design token generation from design source:**
- Current capacity: 30+ color scales with 10 steps each, manually defined in `src/assets/tokens/colors.css`. Any changes require manual hex editing + testing.
- Limit: If Figma or another design tool is the source of truth, tokens are duplicated. Mistakes happen during manual sync; a single typo breaks the entire color system.
- Scaling path: (1) Use a token generation tool (Token Studio for Figma, Design Tokens Community Group format). (2) Export tokens as JSON from design source. (3) Transform JSON to CSS custom properties via a build script. (4) Add a CI check that validates color tokens match Figma.

## Missing Critical Features

**No accessibility audit or WCAG compliance documentation:**
- Problem: No evidence of accessibility testing. No ARIA labels on interactive elements (sidebar buttons, theme toggle). Color contrast ratios not validated. Keyboard navigation not tested.
- Blocks: Auditing design system against WCAG 2.1 AA standards. Building confidence that downstream products built with these components are accessible.
- Fix: (1) Run an automated accessibility audit (axe, Lighthouse). (2) Add manual testing for keyboard navigation and screen reader support. (3) Document accessibility expectations in CONVENTIONS.md. (4) Add accessibility tests to CI/CD.

**No component story documentation or interactive examples:**
- Problem: Components like `ThemeToggle` and `TheSidebar` have no isolated stories or usage examples. Documentation is implicit in the live app only.
- Blocks: Developers can't understand component APIs without reading source code or browsing the live demo. No way to document component variants, props, or edge cases.
- Fix: (1) Add Storybook or similar tool for component documentation. (2) Create stories for each component with prop variations. (3) Document component APIs with TypeScript interfaces (already done for props in `.types.ts` files, but not surfaced).

**No design-to-code hand-off workflow:**
- Problem: No Figma-to-code sync or design token generation pipeline. Designers and developers maintain parallel token systems or rely on manual copy-paste.
- Blocks: Keeping design and code in sync as the system scales. Designers can't iterate on tokens in Figma and have changes auto-populate code.
- Fix: (1) Set up Token Studio in Figma + GitHub integration. (2) Auto-generate CSS and TypeScript types from design tokens. (3) Document the workflow in ARCHITECTURE.md.

## Test Coverage Gaps

**No unit or component tests:**
- What's not tested: Router configuration, theme composable behavior, sidebar accordion state management, placeholder page fallbacks, type safety of route meta.
- Files: All TypeScript and Vue files lack corresponding `.spec.ts` or `.spec.vue` test files.
- Risk: Refactoring the router, changing theme persistence, or adding new routes is high-risk. A typo in a route path won't be caught until manual testing.
- Priority: **High** — Router is mission-critical. Theme toggle is user-facing. At minimum, test: (1) All routes are reachable, (2) Placeholders render with correct meta, (3) Theme toggle updates DOM and localStorage, (4) Sidebar accordion state is correct after navigation.

**No accessibility testing:**
- What's not tested: ARIA labels, keyboard navigation, color contrast, focus management, screen reader compatibility.
- Files: All components.
- Risk: Design system may inadvertently enforce inaccessible patterns. Downstream products inherit the accessibility debt.
- Priority: **High** — Accessibility is non-negotiable. Add: (1) Automated axe-core tests in CI/CD, (2) Manual keyboard navigation testing, (3) Screen reader audit for interactive components.

**No visual regression testing:**
- What's not tested: Color rendering across light/dark themes, font rendering, layout shifts on responsive breakpoints.
- Files: All page components, `DefaultLayout.vue`, `TheSidebar.vue`.
- Risk: A CSS change could subtly break color contrast or introduce a layout shift that's invisible in code review.
- Priority: **Medium** — Add: (1) Percy or similar visual snapshot testing, (2) Cross-browser testing for font rendering, (3) Responsive design testing at multiple breakpoints.

---

*Concerns audit: 2026-02-21*
