# Project Research Summary

**Project:** Auterion Design System Documentation Site
**Domain:** Aerospace design system documentation (Vue SPA, brownfield expansion)
**Researched:** 2026-03-10
**Confidence:** HIGH — architecture and pitfalls grounded in direct codebase analysis; stack and features grounded in established industry patterns

## Executive Summary

This is a brownfield Vue 3 SPA that needs to expand from a skeleton with two working pages (Colors, Typography) into a comprehensive 30-page design system reference site. The stack is fully locked — Vue 3, Vite 6, Tailwind CSS v4, TypeScript, Vue Router 5 — and no structural change is warranted. The core challenge is not technical: it is a content authoring and consistency problem. Scaling from 2 pages to 30 without a shared layout primitive library will result in visual inconsistency across pages and a maintenance burden that makes every new page expensive to produce. The first investment must be architectural scaffolding (DocPage, DocSection, content-block components) before any content is written at scale.

The aerospace context adds material documentation obligations that generic design system sites do not have. The alert hierarchy (Alarm/Warning/Caution/OK) maps to OpenBridge/aviation standards, not stylistic preference. If these tokens are documented as color swatches without operational must/must-not guidance, the 300-person engineering team will misapply them — a known HMI failure mode that erodes operator trust in safety-critical interfaces. Alert hierarchy documentation is load-bearing, not decorative, and must be the most rigorous section in the color docs.

The critical risks are two structural debt items already present in the codebase before new content is written: (1) sidebar navigation and router are independent sources of truth that will diverge as pages are added, and (2) raw Tailwind zinc classes are used throughout existing pages instead of the semantic token layer. Both must be resolved in Phase 1 before the debt compounds across 20+ new pages.

## Key Findings

### Recommended Stack

The stack is fixed. The only justified additions are: `shiki` + `@shikijs/vue` for syntax-highlighted code blocks (VS Code-quality grammar-based tokenization with CSS custom property theme switching), `fuse.js` for optional client-side fuzzy search if page count exceeds ~50, and `vite-svg-loader` if a custom aerospace icon set is added. Everything else — clipboard, toasts, component previews — should be built as small Vue composables and components rather than introduced as external dependencies. Storybook, MDX, Pagefind, and Algolia are explicitly out of scope for this solo-author docs site.

**Core technologies:**
- `shiki` + `@shikijs/vue`: syntax highlighting for code blocks — grammar-based (VS Code engine), CSS var theme switching, no server required
- `navigator.clipboard` (browser API): copy-to-clipboard for token values — zero dependency
- `fuse.js`: client-side fuzzy search — no build step, runs at app mount, correct for Vue SPA (Pagefind requires post-build indexing of static HTML and cannot index client-rendered content)
- `vite-svg-loader`: SVG-as-Vue-component imports — only if custom aerospace icon set is needed
- Custom `useToast` composable: clipboard confirmation feedback — ~30 lines, no external library needed

### Expected Features

**Must have (table stakes):**
- Color token reference with copyable hex values and CSS variable names shown (`--color-primary`, not just a swatch)
- Typography scale specimens with variable names paired to rendered type
- Alert hierarchy documentation — all four levels (Alarm/Warning/Caution/OK) with operational must/must-not guidance, not just color swatches
- Section introduction pages for every major section (orienting prose, not placeholders)
- Logo section: all six subsections (introduction, basics, lockup, scale, B&W, placement)
- Persistent sidebar with active state, breadcrumb context, theme toggle

**Should have (differentiators):**
- Semantic token mapping visualization (primitive → semantic alias, e.g. blue-7 → primary, theme-aware)
- Token copy-to-clipboard with format selector (CSS var, hex, HSL)
- Contrast ratio callouts on color token pairs (WCAG AA/AAA pass/fail badges)
- Application pattern screenshots — annotated product UI callouts demonstrating system in context
- HUD/instrument aesthetic rationale page — explicit principle document explaining data-dense ≠ cluttered
- "When to use" guidance column for semantic color tokens
- Self-hosted font documentation (airgap justification, file location)

**Defer (v2+):**
- Live interactive component playground — requires a component library to exist first; document visually with screenshots in this phase
- Auto-generated token docs from CSS (Style Dictionary, Token Pipeline) — manual maintenance is correct at this scale
- Full-text search — sidebar navigation is sufficient for 30 pages; add Fuse.js only if page count reaches 50+
- Version history/changelog page — git history is the changelog until team grows
- Motion/animation system — explicitly deferred in PROJECT.md
- Mobile layout patterns — explicitly out of scope (aerospace products are web/desktop)
- Iconography grid — medium complexity, not blocking other sections; defer to a follow-up milestone

### Architecture Approach

The existing architecture is sound and must not be restructured. The problem is that it has not been abstracted: 9+ existing page files duplicate header markup and layout boilerplate, and raw `zinc-*` Tailwind classes are used instead of the semantic token layer. The recommended approach is a two-tier component model: (1) `DocPage.vue` and `DocSection.vue` as page-level wrappers that encode the standard header + section anatomy once, eliminating copy-paste across all 30 pages; and (2) a library of content-block primitives (TokenSwatch, TokenGrid, SpecTable, DoDont, ImageFrame, CodeBlock, CalloutBlock, GalleryGrid) that pages compose freely. All data lives as typed local constants in `<script setup>` — no Pinia, no CMS, no Markdown pipeline.

**Major components to build:**
1. `DocPage.vue` — standard page anatomy (eyebrow, h1, lede, divider); eliminates header duplication across all pages
2. `DocSection.vue` — section wrapper with optional h2, description, divider; the primary content container
3. `TokenSwatch.vue` + `TokenGrid.vue` — color swatch display reading CSS custom properties at runtime
4. `SpecTable.vue` — generic token/spec table (name, value, description columns)
5. `DoDont.vue` — side-by-side Do/Don't comparison pairs
6. `CalloutBlock.vue` — attention rules with severity type (info, warning, rule)
7. `CodeBlock.vue` — pre-formatted code with JetBrains Mono and copy support
8. `ImageFrame.vue` — responsive image container with caption
9. `GalleryGrid.vue` — aspect-ratio-preserved grid for Gallery section

**Single navigation source of truth (`src/navigation.ts`):** The router and sidebar currently duplicate the same section/route structure independently. This must be consolidated into one exported constant that both import before new pages are added.

### Critical Pitfalls

1. **Sidebar-Router Divergence** — two independent sources of truth for section structure will drift as pages are added; consolidate into `src/navigation.ts` before creating more than 2–3 new pages
2. **Token Usage Drift (zinc classes bypass semantic layer)** — already present in the codebase; do a codemod pass before writing new pages, or it compounds across 30 files; the colors documentation page is the only valid exception
3. **No Content Authoring System** — without `DocPage`/`DocSection`/content-block components, each new page costs 150+ lines of bespoke markup and visual consistency degrades; build components before writing content at scale
4. **Alert Hierarchy Misrepresented** — documenting Alarm/Warning/Caution/OK as visual options without operational must/must-not guidance violates aviation HMI standards and will cause misapplication by engineers; this is load-bearing content for an aerospace company
5. **Figma-Site Divergence** — without declared source of truth, Figma and the site will silently produce different token values; declare CSS as authoritative, document it explicitly on the site, and do not defer this decision

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Infrastructure and Foundation
**Rationale:** Two structural debt items (sidebar-router divergence, token bypass) will compound with every new page added. The content authoring component system (DocPage, DocSection, content-block primitives) must exist before bulk content is authored, or 30 pages will be written in bespoke markup that is expensive to maintain and visually inconsistent. This phase has no content deliverable but unblocks every subsequent phase.
**Delivers:** Navigation single-source-of-truth (`src/navigation.ts`), DocPage + DocSection components, 6–8 content-block primitives, semantic token audit (zinc class migration), theme persistence fix (`localStorage` in `useTheme`), sidebar section ordering corrected to conceptual dependency sequence
**Addresses:** Anti-pattern elimination before content scale (FEATURES: section introduction pages scaffolded, sidebar navigation corrected)
**Avoids:** Pitfall 1 (sidebar-router divergence), Pitfall 2 (token drift), Pitfall 3 (bespoke markup), Pitfall 8 (Tailwind v4 token class matrix verified)

### Phase 2: Visual Foundations — Color and Typography
**Rationale:** Color and typography are the dependency for all other sections. Alert hierarchy documentation is the highest-priority content item in the entire site due to aerospace operational requirements. Cannot document "when to use alarm" until color tokens are fully documented.
**Delivers:** Complete color section (primitives, semantic aliases, alert hierarchy with OpenBridge-aligned must/must-not guidance, contrast ratio callouts, copy-to-clipboard with format selector), complete typography section (scale specimens, variable names, JetBrains Mono stack resolved)
**Addresses:** FEATURES table stakes (color token reference, typography specimens, alert hierarchy), differentiators (semantic token mapping visualization, token copy with format selector, contrast ratio badges)
**Avoids:** Pitfall 4 (alert hierarchy misrepresented), Pitfall 10 (font stack inconsistency), Pitfall 11 (on-{name} tokens undocumented), Pitfall 6 (light mode testing habit established here)

### Phase 3: Brand Identity
**Rationale:** Logo and strategy sections are content-heavy but component-light — they depend on DocPage/DocSection/ImageFrame/DoDont/CalloutBlock from Phase 1, and benefit from color/type foundations being complete so the brand pages can demonstrate the token system in use. These sections are required for contractor and partner onboarding.
**Delivers:** Logo section (6 pages: introduction, basics, lockup, scale, B&W, placement), Strategy section (brand idea, voice principles), Figma source-of-truth declaration documented on site
**Addresses:** FEATURES table stakes (logo download and usage rules), differentiators (brand idea editorial page, HUD aesthetic rationale)
**Avoids:** Pitfall 5 (Figma-site divergence resolved by explicit declaration)

### Phase 4: Content Guidance
**Rationale:** Photography, language, and style guide pages are prose-heavy and editorial. They depend on Phase 1 infrastructure but not on each other. They are lower urgency than visual foundations for an engineering audience but required for the complete documentation set.
**Delivers:** Photography/art direction with annotated real examples, Language & Style section (voice, product names, blog, social)
**Addresses:** FEATURES table stakes (photography visual examples), differentiators (type scale in context with real Auterion sentences)
**Avoids:** Pitfall 7 (gallery section delineated from photography; photography pages require annotation, not screenshot dumps)

### Phase 5: Gallery and Applied Examples
**Rationale:** Gallery requires the full system to be documented before it can be demonstrated. Annotated product screenshots need color, typography, and component context to be meaningful. Full-bleed layout ambiguity is highest here — build GalleryGrid after all other components are proven.
**Delivers:** GalleryGrid component, Gallery section (introduction, marketing, applications with annotated callouts)
**Addresses:** FEATURES differentiators (application pattern screenshots annotated, full-bleed gallery pages)
**Avoids:** Pitfall 7 (gallery defined as annotated exemplars, not screenshot dump; each item explains design decisions demonstrated)

### Phase Ordering Rationale

- Phase 1 must be first because structural debt (navigation source of truth, token semantic layer) compounds with every page added; the cost of deferring is proportional to page count
- Phase 2 before Phase 3 because color and typography are the semantic foundation that logo, photography, and strategy pages demonstrate; alert hierarchy is the most safety-critical documentation item and must not be deprioritized
- Phase 3 before Phase 4 because brand identity (logo, strategy) is the prerequisite framing that language and style guidance references
- Phase 5 last because gallery content annotates a complete system; building it before the system is complete produces an incomplete exemplar, and GalleryGrid layout ambiguity benefits from all other component patterns being settled first

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 2 (Color Documentation):** Contrast ratio computation approach needs decision — pre-computed values in TypeScript vs. runtime WCAG calculation via `getComputedStyle`. Neither is trivial; needs a short spike.
- **Phase 5 (Gallery):** Full-bleed layout with `standalone: true` flag needs design decision before implementation — what layout, what image treatment, what annotation pattern. Needs wireframe or reference, not just component work.

Phases with standard patterns (skip research-phase):
- **Phase 1 (Infrastructure):** Navigation consolidation, DocPage/DocSection component patterns, and semantic token migration are all well-established Vue patterns with no ambiguity. Direct implementation.
- **Phase 3 (Brand Identity):** Logo documentation pages follow the DocPage/DocSection/ImageFrame/DoDont pattern with static content. Standard execution.
- **Phase 4 (Content Guidance):** Prose-heavy pages; DocPage + DocSection + direct template markup is sufficient. No research needed.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | MEDIUM | Core stack is locked and HIGH confidence; additions (shiki, fuse.js) are from training data, exact current minor versions unverified — run `npm info` before pinning |
| Features | MEDIUM | Reference system analysis (Carbon, Polaris, Primer, OpenBridge) is HIGH confidence for well-documented systems; aerospace-specific inferences (airgap constraint) are reasonable assumptions not explicitly confirmed in PROJECT.md |
| Architecture | HIGH | Grounded in direct codebase inspection of all existing source files; patterns are established Vue 3 conventions with no ambiguity |
| Pitfalls | HIGH | Pitfalls 1–5 are grounded in codebase evidence (verified in source files); Pitfalls 6–12 are MEDIUM–HIGH based on domain knowledge and direct code inspection |

**Overall confidence:** HIGH — architecture is verified against source, not inferred; feature recommendations align with established design system conventions; the only areas of genuine uncertainty are npm package minor versions

### Gaps to Address

- **Shiki/fuse.js version pinning:** Cannot verify current npm versions without network access. Run `npm info shiki version` and `npm info fuse.js version` before adding to `package.json`.
- **Contrast ratio computation approach:** WCAG contrast ratio calculation at runtime vs. pre-computed table is an unresolved implementation question for Phase 2. A short spike (30 min) will determine feasibility of `getComputedStyle`-based runtime calculation vs. hardcoded values.
- **Airgap constraint:** Inferred from aerospace/defense context; not explicitly stated in PROJECT.md. If classified environments are a real deployment target, verify this affects the font self-hosting decision (already addressed) and confirm no CDN dependencies are introduced.
- **Custom icon set scope:** The aerospace-specific icon requirement (waypoints, drone status, telemetry glyphs) is flagged but not scoped. Before the iconography milestone, audit what assets exist vs. what needs to be created.

## Sources

### Primary (HIGH confidence)
- Direct codebase analysis: `src/components/`, `src/pages/`, `src/router/index.ts`, `src/assets/tokens/`, `src/composables/` — architecture and pitfall findings
- `.planning/PROJECT.md` — project requirements and constraints
- `.planning/codebase/STACK.md`, `.planning/codebase/ARCHITECTURE.md` — existing system analysis

### Secondary (MEDIUM confidence)
- OpenBridge HMI standard (openbridge.no) — alert hierarchy (Alarm/Warning/Caution/OK) definitions and operational semantics
- IBM Carbon, Shopify Polaris, GitHub Primer documentation sites — feature and documentation pattern reference
- Training knowledge: Shiki v1 (released 2024-Q1, VitePress/Nuxt default), Fuse.js ecosystem, Vue SPA documentation patterns

### Tertiary (LOW confidence)
- `fuse.js` ^7.x version — ^6.x confirmed; ^7.x unverified; validate before pinning
- Area17 editorial documentation style — training knowledge, exact current implementation may differ

---
*Research completed: 2026-03-10*
*Ready for roadmap: yes*
