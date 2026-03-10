# Technology Stack

**Project:** Auterion Design System Documentation Site
**Researched:** 2026-03-10
**Research Mode:** Brownfield expansion — existing Vue 3 + Vite + Tailwind CSS v4 SPA

---

## Context: What Already Exists

The stack is locked per PROJECT.md constraints. Do not replace or second-guess:

| Layer | Fixed |
|-------|-------|
| Vue 3 (^3.5.13) | Yes |
| Vue Router 5 (^5.0.3) | Yes |
| Vite 6 (^6.2.0) | Yes |
| Tailwind CSS 4 (^4.1.0) | Yes |
| TypeScript ~5.7 | Yes |
| pnpm | Yes |

This research only covers **what to add** to expand from a skeleton with color/type pages to a comprehensive design system documentation site.

---

## Recommended Additions

### Syntax Highlighting — Code Snippets

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `shiki` | ^1.x | Syntax highlighting for code blocks | TextMate grammar engine, same engine used by VS Code; produces semantic tokens, not regex class soup. Supports arbitrary language grammars. Ships a bundled WASM renderer — no server required. CSS theme output integrates cleanly with CSS custom properties, making dark/light theme switching trivial via a CSS variable swap rather than re-highlighting. |
| `@shikijs/vue` | ^1.x | Vue integration for Shiki | Thin Vue wrapper that exposes a `<ShikiCode>` component (or composable) so highlight calls are reactive and tree-shaken per page. |

**Confidence:** MEDIUM — Shiki v1 stable was released 2024-Q1, widely adopted by VitePress, Nuxt Content, and Astro as their default highlighter. Cannot verify exact current minor version without network access, but the library is mature and the recommendation is stable.

**Why not Prism.js:** Unmaintained since 2022. Regex-based tokenization produces incorrect highlighting for complex generics and modern JS/TS syntax. No built-in CSS custom property theming.

**Why not highlight.js:** Regex-based tokenizer with the same limitations. Adequate for simple snippets but not worth the dependency if Shiki is available.

---

### Component Preview — Live Demos

**Recommendation: No additional library. Build a `<ComponentPreview>` wrapper component in Vue.**

Design system docs at this scale (solo designer, brownfield SPA) do not benefit from Storybook or Histoire overhead:

- Storybook requires a separate build pipeline, stories format, and port. The audience reads docs, not develops components — the overhead vs. value ratio is poor for a solo author.
- Histoire (Storybook alternative for Vue) is lighter but still adds a parallel app structure.

The pattern that works: a `ComponentPreview.vue` component that accepts a slot for the live render and a `code` prop (string) passed to the Shiki highlighter. The preview pane renders the slot in an isolated container styled with the token system. The code pane shows the highlighted snippet. This is exactly what Radix Colors docs, Tailwind docs, and Mantine docs do internally — it is not a library, it is a page pattern.

**Confidence:** HIGH — This is the dominant pattern in production design system docs sites built on Vue SPAs. The overhead of a dedicated preview library is only justified when teams write stories as a design workflow (not the case here).

---

### Clipboard — Copy Token Values

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `navigator.clipboard` (browser API) | — | Copy CSS variable names and hex values to clipboard | Zero dependency. The Clipboard API is available in all modern browsers (Chromium 66+, Firefox 63+, Safari 13.1+). A small `useClipboard` Vue composable handles the async pattern and exposes a `copied` reactive state for the "Copied!" flash feedback. |

**Confidence:** HIGH — No external dependency needed. This is browser-native.

---

### Search — In-Page Navigation

**Recommendation: `fuse.js` for client-side fuzzy search, not Pagefind.**

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `fuse.js` | ^7.x | Fuzzy client-side search over token names, section titles, page content | Fuse.js runs entirely in-browser, requires no build step, no crawler, no post-build indexing. For a design system docs site the corpus is small (hundreds of tokens, ~20 pages). A simple index built at app boot over the router route metadata + token lists is fast and sufficient. |

**Why not Pagefind:** Pagefind requires a post-build static file indexing step. It is designed for SSG sites (Astro, Hugo, Jekyll) where content is already serialized HTML. A Vue SPA renders content client-side — Pagefind cannot index it without a full headless browser crawl after every build, which is operationally complex for a solo author. Wrong tool for this architecture.

**Why not Algolia DocSearch:** Requires indexing infrastructure, a crawler, and an API key. Overkill for a single-author internal documentation site.

**Implementation:** Build a `useSearch` composable that indexes route metadata + token names into a Fuse instance on app mount. Mount a `<SearchModal>` triggered by `Cmd+K`. No SSR required, no build step.

**Confidence:** MEDIUM — Fuse.js ^6.x was the established version through mid-2024; ^7.x may or may not be released by now (unverifiable). The architecture recommendation is HIGH confidence regardless of minor version.

---

### Content Authoring — Page Structure Patterns

**Recommendation: Vue SFC pages with a shared page-layout component system. No MDX, no CMS.**

The existing approach (route-level `*Page.vue` components) is correct for this project. Extending it:

| Tool/Pattern | Purpose | Why |
|---|---|---|
| `DocSection.vue` shared component | Wraps a titled section with consistent padding, dividers, and responsive behavior | Eliminates repeated layout boilerplate across 20+ pages. A solo author can compose new pages from section primitives rather than re-laying out every page. |
| `TokenTable.vue` shared component | Renders a CSS variable name + value + swatch row | Reusable across color, typography, spacing token pages. Props: `namespace` (string) + optional `values` (array). Reads computed CSS var values via `getComputedStyle` for live hex display. |
| `PageHeader.vue` shared component | Section label, h1, description pattern already used everywhere | Extract from repetition in ColorsPage/TypographyPage to a single source. |
| Static data files `src/data/*.ts` | Store token metadata (names, descriptions, groups) as TypeScript arrays | Decouples content from layout. A solo author edits a `.ts` data file rather than digging into template markup. |

No MDX: MDX requires a remark/rehype pipeline (adds Vite plugin, build complexity) and loses the benefit of Vue's reactivity inside prose. Since there is no prose-heavy content (the site is primarily visual specimens and token tables, not long-form writing), MDX adds cost without benefit.

No CMS (Contentful, Sanity, etc.): Adds external dependency, hosting cost, and auth overhead for a single author who already lives in VS Code.

**Confidence:** HIGH — This matches the pattern of the existing ColorsPage and TypographyPage files, which are already structured as data-driven Vue templates. Formalizing it is a refactor, not a direction change.

---

### Icon System Expansion

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `@heroicons/vue` | ^2.2.0 | Already installed — functional UI icons | Keep for sidebar chevrons, theme toggle, search UI chrome. |
| Custom SVG sprite | — | Auterion product symbols and functional icon set | Aerospace domain has specialized icons (waypoints, drone status, telemetry glyphs) that no generic icon library covers. Import as Vue components via Vite's built-in asset handling or a simple `vite-svg-loader` setup. |

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `vite-svg-loader` | ^5.x | Import SVG files as Vue components | Allows `import DroneIcon from './drone.svg?component'`. Clean authoring, proper TypeScript types, tree-shaken. Widely used in Vue + Vite projects. |

**Confidence:** MEDIUM — `vite-svg-loader` ^5.x was current in 2024. Cannot verify if a major version has released. The library is stable and actively maintained as of August 2025 knowledge cutoff.

---

### Clipboard + Toast Notifications

**Recommendation: Build a minimal `useToast` composable. No external toast library.**

Libraries like `vue-toastification` or `vue-sonner` are 15–40 KB for a use case that requires one notification type: "Copied to clipboard." A simple composable + a `<ToastStack>` component is ~30 lines and matches the token system precisely.

**Confidence:** HIGH — This is a conscious simplicity decision, not a gap in available libraries.

---

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Syntax highlighting | Shiki | Prism.js | Unmaintained, regex-based, no CSS var theming |
| Syntax highlighting | Shiki | highlight.js | Regex-based, CSS class theming is heavier to integrate with dark mode |
| Live component preview | Custom `ComponentPreview.vue` | Storybook | Separate build pipeline, stories format overhead, wrong tool for docs-first audience |
| Live component preview | Custom `ComponentPreview.vue` | Histoire | Lighter than Storybook but still parallel app structure; overkill for solo author |
| Search | Fuse.js | Pagefind | Requires post-build indexing; incompatible with Vue SPA (client-rendered content) |
| Search | Fuse.js | Algolia DocSearch | External infra, crawler, API key — overkill for internal docs |
| Content authoring | Vue SFC + data files | MDX | Adds remark/rehype pipeline; no benefit for primarily visual/token content |
| Content authoring | Vue SFC + data files | Nuxt Content | Would require migrating from Vite SPA to Nuxt — violates stack constraint |
| Icons | vite-svg-loader | SVGR | React-only |
| Toasts | Custom composable | vue-toastification | 15–40 KB for a single notification type |

---

## Installation

```bash
# Syntax highlighting
pnpm add shiki @shikijs/vue

# Client-side search
pnpm add fuse.js

# SVG-as-Vue-components (only if custom icon system is needed)
pnpm add -D vite-svg-loader
```

No other runtime dependencies are required.

---

## Version Verification Status

| Library | Version Stated | Verification Method | Confidence |
|---------|---------------|---------------------|------------|
| shiki | ^1.x | Training data (stable since 2024-Q1); unverified current minor | MEDIUM |
| @shikijs/vue | ^1.x | Training data; unverified current minor | MEDIUM |
| fuse.js | ^7.x | Training data; ^6.x confirmed stable, ^7.x unverified | LOW — verify before specifying in lockfile |
| vite-svg-loader | ^5.x | Training data; widely used in Vue+Vite ecosystem | MEDIUM |
| navigator.clipboard | Browser API | MDN specification, no version needed | HIGH |

**NOTE:** External research tools (WebSearch, WebFetch, Context7) were denied during this research session. All version numbers are from training data (cutoff August 2025). Before adding dependencies to `package.json`, verify current versions on npm:
```
npm info shiki version
npm info fuse.js version
npm info vite-svg-loader version
```

---

## Sources

- Existing codebase: `package.json`, `src/pages/ColorsPage.vue`, `src/pages/TypographyPage.vue`
- Project context: `.planning/PROJECT.md`, `.planning/codebase/STACK.md`
- Training knowledge: Shiki v1 release (2024), VitePress 1.x default highlighter, Fuse.js ecosystem patterns, Vue SPA documentation site patterns
- Note: All training-data claims are flagged with confidence levels above. No external sources were accessible during this session.
