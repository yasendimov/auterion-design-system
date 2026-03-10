# Architecture Patterns

**Domain:** Design system documentation site (Vue SPA, aerospace brand, solo maintainer)
**Researched:** 2026-03-10
**Confidence:** HIGH — based on direct codebase analysis of existing patterns

---

## Recommended Architecture

The existing architecture is sound. The scaling challenge is not a structural redesign but a **content authoring problem**: 27 placeholder pages need real content, and a solo designer needs patterns that make authoring fast and consistent without coupling page markup to layout boilerplate every time.

The recommended approach is a **two-tier component model** layered on top of the existing routing/layout foundation:

1. **Page-level wrappers** — A small `DocPage` component that enforces the standard header + divider + sections anatomy, so individual page files only declare their content.
2. **Content-block components** — A library of reusable display primitives (token swatches, spec tables, do/don't pairs, image frames, code callouts) that pages compose freely.

This keeps the existing architecture intact while solving the authoring bottleneck.

---

## Component Boundaries

### Existing (do not change)

| Component | Responsibility | Communicates With |
|-----------|---------------|-------------------|
| `App.vue` | Layout routing gate — reads `route.meta.standalone` to choose layout | Vue Router, `DefaultLayout` |
| `DefaultLayout.vue` | Two-column flex shell (sidebar + main) | `TheSidebar`, `<router-view>` |
| `TheSidebar.vue` | Navigation tree, accordion sections, active state, theme toggle host | Vue Router (`useRoute`, `useRouter`), `ThemeToggle` |
| `ThemeToggle.vue` | Dark/light switch button | `useTheme` composable |
| `useTheme.ts` | Theme state (`isDark` ref), `toggle()`, DOM attribute mutation | None — DOM only |
| `src/assets/tokens/colors.css` | All primitive and semantic color tokens as CSS custom properties | CSS cascade — consumed by everything |
| `src/assets/tokens/typography.css` | All type scale and weight tokens | CSS cascade — consumed by everything |
| `router/index.ts` | Route definitions, metadata (`section`, `title`, `standalone`), `placeholder()` helper | All page components |

### To Build

| Component | Responsibility | Communicates With |
|-----------|---------------|-------------------|
| `DocPage.vue` | Standard page anatomy: header block (eyebrow, h1, lede), optional intro divider, named slot `#default` for sections | Receives props: `section`, `title`, `description` — passes nothing outward |
| `DocSection.vue` | Section wrapper with optional `h2`, optional description paragraph, divider-before option, and named `#default` slot | Used by page components — no external dependencies |
| `TokenSwatch.vue` | Renders a single color swatch with `var()` background, token name below in mono | Receives `token` (CSS var name), `label` props — reads CSS custom properties |
| `TokenGrid.vue` | Renders a labeled row or grid of `TokenSwatch` components from a data array | Receives typed array prop describing token set |
| `SpecTable.vue` | Generic two-to-five column table (token name, value, description, etc.) with correct type treatment | Receives `columns` and `rows` props — pure display |
| `DoDont.vue` | Side-by-side comparison pair: green "Do" frame vs. red "Don't" frame with caption | Receives `doLabel`, `dontLabel`, optional `doImage`/`dontImage` slots |
| `ImageFrame.vue` | Responsive image container with optional caption and credit line | Receives `src`, `alt`, `caption` props — wraps `<img>` |
| `CodeBlock.vue` | Pre-formatted code display with JetBrains Mono, token name copy support | Receives `code` (string), `language` — no external deps |
| `CalloutBlock.vue` | Attention-grabbing rule box (e.g., "Always use semantic tokens, never primitives") with optional severity/type | Receives `type` (`info`, `warning`, `rule`) and `#default` slot |
| `GalleryGrid.vue` | Masonry/grid image layout for Gallery section — responsive, aspect-ratio-preserved | Receives array of `{ src, alt, caption }` items |

---

## Data Flow

### How Content Reaches the Page (Static Data Pattern)

```
router/index.ts
  │  defines route + meta: { section, title }
  ▼
App.vue
  │  reads meta.standalone → chooses layout
  ▼
DefaultLayout.vue
  │  renders TheSidebar + <router-view>
  ▼
[PageName]Page.vue
  │  declares local data (arrays, objects) in <script setup>
  │  composes DocPage + DocSection + content-block components
  ▼
DocPage.vue
  │  reads section/title props → renders standard header
  │  passes through #default slot
  ▼
DocSection.vue + TokenGrid, SpecTable, DoDont, etc.
  │  receive local page data as props
  ▼
CSS custom properties (colors.css, typography.css)
    resolve at paint time — no JS involved
```

The flow is intentionally one-directional and stateless. Pages own their data as typed local constants. No Vuex, no Pinia, no API calls. Data mutates only when the `.vue` file is edited.

### Theme Switching Flow (existing, unchanged)

```
ThemeToggle click
  → useTheme.toggle()
  → isDark.value flips
  → document.documentElement.setAttribute('data-theme', ...)
  → CSS cascade: [data-theme="dark"] overrides primitive values
  → all semantic aliases auto-resolve to new primitives
  → no component re-renders required (pure CSS)
```

### Navigation Flow (existing, unchanged)

```
Router link click / URL change
  → Vue Router matches path
  → route.meta read by App.vue (standalone?) and TheSidebar (active item?)
  → TheSidebar auto-opens section containing active route
  → DefaultLayout renders new page component in <router-view>
```

---

## Content Authoring Model (Solo Maintainer)

The key architectural decision for a solo designer is: **content lives in the `.vue` file as typed local data, composed through a small set of layout primitives.** This means:

- No CMS, no Markdown pipeline, no build-time plugins to learn or maintain.
- Adding a page = create one file, add one route, add one sidebar entry.
- Changing content = edit the `.vue` file directly; Vite HMR reflects changes instantly.
- Consistent visual appearance comes from `DocPage`/`DocSection` wrappers, not from the author remembering to copy the right header markup.

### Page File Template Pattern

Every content page follows this shape:

```vue
<!-- src/pages/LogoIntroductionPage.vue -->
<script setup lang="ts">
// All content as typed local data — no imports from external content sources
const examples = [
  { label: 'Primary', src: '/brand/logo/auterion-logo-full.svg', usage: 'Default on all materials' },
  { label: 'Symbol', src: '/brand/logo/auterion-logo-symbol.svg', usage: 'App icons, favicons' },
]
</script>

<template>
  <DocPage section="Logo" title="Introduction" description="Correct usage of the Auterion wordmark and symbol.">
    <DocSection heading="Logo Variants">
      <ImageFrame v-for="ex in examples" :key="ex.label" :src="ex.src" :alt="ex.label" :caption="ex.usage" />
    </DocSection>

    <DocSection heading="Clear Space">
      <CalloutBlock type="rule">Always maintain a clear space of 1× the logo height on all sides.</CalloutBlock>
    </DocSection>
  </DocPage>
</template>
```

This is the pattern every page should follow. It eliminates copy-paste of `px-8 lg:px-16 pt-16 pb-12` header markup and border dividers from every file.

---

## Patterns to Follow

### Pattern 1: Props-down, Slots-in

**What:** `DocPage` and `DocSection` receive structured metadata as props (title, description) and accept content via slots. They never reach up into the router or down into business logic.

**When:** Always. Every new page component should be a composition of layout primitives, not raw HTML with duplicated Tailwind utility strings.

**Why this matters:** When the header layout needs to change (padding, eyebrow text size, divider style), change `DocPage.vue` once and all 27 pages update. Without this, each page is a maintenance liability.

### Pattern 2: Local Typed Data — No Content Files

**What:** Page-specific data (token tables, usage rules, image lists, do/don't pairs) is declared as typed arrays/objects in `<script setup>` rather than imported from JSON or Markdown files.

**When:** For all pages where content is structured (token specs, tables, grids). Prose-heavy sections (Brand Idea, Voice Principles) can remain as direct template markup.

**Why this matters:** Keeps the authoring environment in one place (the `.vue` file), avoids a content pipeline, and keeps TypeScript strict mode fully enforced on all data shapes.

```typescript
// Good: typed local data
const tokenRows: Array<{ name: string; value: string; usage: string }> = [
  { name: '--color-primary', value: 'blue-7', usage: 'Interactive element fill' },
]

// Avoid: importing raw JSON or parsing Markdown
import tokens from '../data/tokens.json' // creates a content pipeline dependency
```

### Pattern 3: CSS Custom Properties as the Only Token API

**What:** All visual decisions (colors, sizes, weights) are expressed via CSS custom properties. Components never hard-code hex values or pixel sizes. JavaScript only writes to `[data-theme]` attribute — never to individual style properties.

**When:** Always. Even in content-block components like `TokenSwatch`, the background is set via `style="background-color: var(--color-blue-7)"` not `style="background-color: #1475ff"`.

**Why this matters:** Theme switching works without any JavaScript color computation. The CSS cascade handles all theming.

### Pattern 4: Standalone Flag for Full-Bleed Pages

**What:** Pages that should not render the sidebar (Gallery showcase, full-page image displays) set `meta: { standalone: true }` in the router. `App.vue` gates on this to skip `DefaultLayout`.

**When:** Gallery/Website page pattern — content that needs the full viewport width. Never for documentation pages.

---

## Anti-Patterns to Avoid

### Anti-Pattern 1: Repeating Header Markup in Every Page

**What:** Copying `<header class="px-8 lg:px-16 pt-16 pb-12">` with eyebrow, h1, description, and divider into every page component.

**Why bad:** Already present in 9+ page files. Any layout change (e.g., increase top padding, add breadcrumb) requires editing every file. Inconsistencies creep in.

**Instead:** Introduce `DocPage.vue` that owns this markup. Existing pages should be migrated to use it as a first phase.

### Anti-Pattern 2: Pinia/Vuex for Page Content

**What:** Adding a state store to hold design token data, page content, or navigation metadata.

**Why bad:** This project has no server, no async data loading, no shared mutable state between pages. A store would add complexity with no benefit.

**Instead:** Local data in `<script setup>`. The router's `meta` object already handles shared page metadata.

### Anti-Pattern 3: Markdown or MDX Pipeline

**What:** Adding a Markdown processor (Vite plugin, Content Collections, etc.) to author pages as `.md` files.

**Why bad:** Adds a build step, removes TypeScript safety from content, makes live component demos inside documentation harder, and introduces a content pipeline the solo designer must learn and maintain.

**Instead:** `.vue` files with typed local data. When a page needs rich text, write it directly in the template. The overhead is justified by the control.

### Anti-Pattern 4: Importing Tailwind Raw Classes Into Scripts

**What:** Constructing class strings dynamically in `<script setup>` to vary component appearance.

**Why bad:** Violates PurgeCSS/Tailwind's static class detection. Classes not present as complete strings in templates get tree-shaken from the build.

**Instead:** Use `:class` conditionals with complete class strings. For theming, rely on CSS custom properties rather than conditional Tailwind classes.

---

## Suggested Build Order

Build order is driven by two dependency chains: (1) layout primitives must precede content pages, (2) design token documentation must precede usage examples.

```
Phase 1: Foundation (unblocks everything else)
  ├── DocPage.vue component
  ├── DocSection.vue component
  └── Migrate 2–3 existing pages to use DocPage/DocSection (proves pattern)

Phase 2: Content-Block Primitives (unblocks all token + spec pages)
  ├── TokenSwatch.vue + TokenGrid.vue
  ├── SpecTable.vue
  └── CalloutBlock.vue

Phase 3: Visual Foundation Content (depends on Phase 2)
  ├── Logo section (6 pages) — uses ImageFrame, DoDont, CalloutBlock
  ├── Color section completion (3 remaining pages) — uses TokenGrid, SpecTable
  └── Typography section completion (2 remaining pages) — uses SpecTable

Phase 4: Editorial Content Pages (depends on Phase 1 only)
  ├── Strategy section (prose-heavy, low component dependency)
  ├── Language & Style section (same pattern as Strategy)
  └── Photography section (uses ImageFrame, DoDont)

Phase 5: Gallery + Rich Display (depends on Phase 2 + Phase 3)
  ├── GalleryGrid.vue component
  ├── Gallery section content (Introduction, Marketing, Applications)
  └── Iconography section (may require icon asset pipeline)
```

**Rationale for this order:**

- Phase 1 first because `DocPage.vue` removes the header-duplication anti-pattern before it spreads to 20+ new pages. Fixing this early costs little; fixing it after 20 pages are written is tedious.
- Content-block primitives before content because each section needs 2–4 display components before it can be authored efficiently.
- Logo and Color before Language because they are the most component-dependent sections; Strategy/Language pages are prose-heavy and can be written with just `DocPage` + `DocSection`.
- Gallery last because it has the most design ambiguity (full-bleed, showcase layouts) and benefits from all other sections being finished first so the designer can demonstrate the full system.

---

## Scalability Considerations

This is a documentation site for a single brand. Scalability concerns are different from product apps.

| Concern | Current state | Threshold to act |
|---------|--------------|-----------------|
| Navigation depth | 8 sections, 30 pages — accordion handles it | Act at 15+ sections: consider grouping or search |
| Page file count | ~30 total — trivial for a Vue project | Act at 100+: consider directory-based routing |
| Asset size (images) | Only SVG logos today | Act when adding photography: lazy-load + WebP conversion |
| Search / findability | None today — sidebar scan works for 30 pages | Act at 50+ pages: add in-page fuzzy search (Fuse.js, no server) |
| Theme persistence | Resets on reload (known gap in `useTheme`) | Fix as part of Phase 1 — one-line `localStorage` addition |
| Token versioning | No versioning mechanism | Design freeze before adding: document as a note in sidebar footer |

---

## Sources

- Direct codebase analysis: `src/components/`, `src/pages/`, `src/router/index.ts`, `src/layouts/`, `src/composables/`, `src/assets/tokens/`
- `.planning/codebase/ARCHITECTURE.md` — existing architecture analysis (2026-03-10)
- `.planning/PROJECT.md` — project requirements and constraints (2026-03-10)
- Pattern inference from: Storybook, Radix UI docs, Tailwind UI docs — common design system documentation conventions (training data, MEDIUM confidence)
