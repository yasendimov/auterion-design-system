# Domain Pitfalls

**Domain:** Aerospace design system documentation site (Vue SPA, solo maintainer, brownfield)
**Researched:** 2026-03-10
**Confidence:** HIGH — grounded in codebase inspection + domain knowledge of design systems and Vue SPA patterns

---

## Critical Pitfalls

Mistakes that cause rewrites, broken systems, or the site becoming a liability rather than a force multiplier.

---

### Pitfall 1: Sidebar-Router Divergence

**What goes wrong:** The sidebar navigation (`TheSidebar.vue`) and `router/index.ts` are two separate sources of truth for the same information — route paths, section membership, item labels. As new pages are created, one gets updated and the other doesn't. Routes exist that aren't in the sidebar, or sidebar links point to routes that 404. This is currently latent: the sidebar hardcodes all section/item data as a `sections` array, while the router hardcodes the same structure independently.

**Why it happens:** Placeholder routes are cheap to add (one line in router using the `placeholder()` helper), but the sidebar requires a parallel manual update. There is no runtime assertion or TypeScript type linking them together.

**Consequences:** Dead links in nav, 404s from direct URL visits, sidebar items silently missing from new sections.

**Warning signs:**
- You add a new `placeholder()` route in `router/index.ts` and don't immediately update `TheSidebar.vue`
- A section in the sidebar has a different item count than what the router has registered
- `HomPage.vue` shows a `count` for each section that drifts from reality

**Prevention:** Extract the navigation data into a single shared constant (e.g., `src/navigation.ts`) that both the sidebar and the router import. The router derives routes from it; the sidebar derives its list from it. This collapses two sources of truth into one.

**Phase that should address it:** The first phase that adds real page content — do this refactor before creating more than 2-3 new pages, or the debt compounds.

---

### Pitfall 2: Token Usage Drift — Components Bypass Semantic Layer

**What goes wrong:** Developers and even the designer start using raw zinc/tailwind color classes (`text-zinc-400`, `border-zinc-800`, `bg-zinc-950`) instead of semantic tokens (`text-text-secondary`, `border-border-subtle`, `bg-surface-1`). This is already present in the codebase — TheSidebar, BrandIdeaPage, ColorsPage, and HomePage all use `zinc-*` classes extensively rather than the custom token system.

**Why it happens:** Tailwind's built-in zinc scale is autocompleted by editors and is faster to reach for. The semantic token classes require knowing the naming convention. When the designer is also the one writing components, there's no second pair of eyes enforcing the layer.

**Consequences:** When the design evolves — say, you swap the neutral from zinc/gray to slate for a cooler aerospace tone — you'd need to hunt down every `zinc-*` reference instead of changing one token. The token system provides no leverage because it was bypassed. Theme consistency breaks: `zinc-800` and `--color-border-subtle` will have the same value today but could diverge.

**Warning signs:**
- Any `zinc-*`, `gray-*`, `slate-*` class in a page component that isn't on the Colors documentation page itself
- `border-zinc-200 dark:border-zinc-800` pattern instead of `border-border-subtle`
- `text-zinc-500 dark:text-zinc-400` instead of `text-text-secondary`

**Prevention:** Establish the mapping once (write it in the docs) and enforce it from the next component forward. A codemod or find-replace pass before the codebase grows is feasible now; it will not be at 30+ pages. The colors documentation page itself is a valid exception — showing raw primitives is its purpose.

**Phase that should address it:** Before the component library phase. Do a single pass to migrate existing pages to semantic tokens as part of the content foundation work.

---

### Pitfall 3: No Content Authoring System — Each Page Is Bespoke

**What goes wrong:** Every content page is written entirely in Vue template markup with inline Tailwind. There is no shared layout for common patterns: prose sections, rule tables, do/don't comparisons, color swatches, code snippets, image galleries. As you scale to 30+ pages, each new page becomes a from-scratch build where you're retyping `px-8 lg:px-16 py-16` and deciding afresh whether the section header should be `text-xl` or `text-2xl`.

**Why it happens:** The current approach was fast for the first few pages. It feels like it will scale. It doesn't — not for one person maintaining 30+ pages of content that needs visual consistency.

**Consequences:** Visual inconsistency across pages (different heading sizes, padding, spacing). Enormous authoring burden — a "simple" new page still requires writing 150 lines of template markup. The site stops feeling like a coherent system and starts feeling like a collection of one-offs. Documentation sites that feel inconsistent undermine the authority of the design system they're documenting.

**Warning signs:**
- You find yourself copy-pasting the `<header>` block from another page to start a new one
- Two pages use different padding values for the same visual intent
- It takes more than 30 minutes to create a new, empty content page

**Prevention:** Build a small set of reusable content components before writing the bulk of the content: `<DocSection>`, `<DocProse>`, `<TokenTable>`, `<DoNotDo>`, `<ColorSwatch>`. These components encode the layout decisions once. New pages become composition of components, not markup-from-scratch. The amount of Tailwind in page components should drop dramatically.

**Phase that should address it:** Before or during the first content phase (brand/logo). Do not wait until you've written 10 pages in bespoke markup.

---

### Pitfall 4: Alert Hierarchy Misrepresented in Documentation

**What goes wrong:** The alarm/warning/caution/ok hierarchy has precise meaning in aviation and maritime standards (OpenBridge). If the documentation describes these as stylistic choices ("red = danger, yellow = caution") without conveying the operational specificity, engineers and product teams will misapply them — using "alarm" styling for a low-priority notice, or using "warning" when nothing actionable is required.

**Why it happens:** The designer understands the nuance; it's not obvious in a color swatch. Documentation tends toward "here's what it looks like" rather than "here's when you must/must not use it."

**Consequences:** A 300-person team building operational UIs with incorrectly applied alert levels. In aerospace/defense contexts this is not just an aesthetic problem — it creates interfaces that train operators to ignore alarms, or that cause alarm fatigue. This is a known failure mode in aviation HMI (Human-Machine Interface) design.

**Warning signs:**
- The color documentation page shows the four alert colors as a visual swatch without "must/must not use" guidance
- An engineer builds a toast notification using alarm red for a non-critical error
- The caution amber is used for a form validation error instead of an awareness state

**Prevention:** For each alert level token, the documentation must include: the triggering condition, the required operator response, and at least one explicit non-use case. Reference OpenBridge terminology directly. This isn't "nice to have" for an aerospace company — it's load-bearing content.

**Phase that should address it:** Color documentation phase. The alert hierarchy section should be the most detailed section in the color docs, not a footnote.

---

### Pitfall 5: Figma-Site Divergence Becomes Permanent

**What goes wrong:** The project notes that "Figma and site evolve in parallel, no automated sync." This is pragmatically correct, but without a discipline for keeping them aligned, they will silently diverge. Figma has token values; the site has token values. When one changes, the other doesn't follow. In 6 months, engineers reference the site for hex values and designers reference Figma — they get different answers.

**Why it happens:** No tooling enforces alignment. The designer is the only person who knows both systems. When you're working fast on content, updating the parallel system is easy to defer.

**Consequences:** Loss of trust in the design system as a single source of truth. Engineers start copy-pasting from wherever they found the value last — the system's value collapses.

**Warning signs:**
- A color value on the site differs from the same token in Figma by any amount
- You update a token in one place and mentally note "I'll update the other one later"
- Someone asks "which is right, Figma or the site?"

**Prevention:** Adopt a direction: either Figma is the source of truth (CSS is derived from Figma exports), or the CSS files are the source of truth (Figma variables are manually synced from them). The current architecture — where CSS is the declared source — should mean that any Figma variable changes follow the CSS. Document this explicitly in the site itself so the team knows the answer. A changelog helps too.

**Phase that should address it:** During the color and typography documentation phases. The docs should state explicitly which is authoritative.

---

## Moderate Pitfalls

---

### Pitfall 6: Dark Mode as the Only Tested State

**What goes wrong:** Dark mode is primary and correctly so for aerospace. But the light theme was also implemented and is a deliverable. As components are built, they are developed, reviewed, and iterated on in dark mode only. Light mode styles are added but not tested. Light mode surfaces visual regressions that are only discovered when a stakeholder opens the site on a light-mode OS.

**Why it happens:** The designer works in dark mode by default. The `ThemeToggle` component exists but isn't part of the development habit.

**Consequences:** Light mode looks broken or inconsistent, eroding confidence in the system. The `dark:` variant classes exist on every component — if they're wrong, the bugs are invisible until someone switches.

**Warning signs:**
- You haven't toggled to light mode in the past week
- A border or text color looks correct in dark but invisible/washed out in light
- The sidebar `zinc-200/zinc-800` border pattern hasn't been verified against the semantic token equivalents in both modes

**Prevention:** Make theme-toggle a step in your personal review process for every page completed. Consider adding a split-view demo mode for color and component pages that shows both themes simultaneously.

**Phase that should address it:** Any phase that builds page content. Establish the habit before content volume makes it hard.

---

### Pitfall 7: The Gallery Section Becomes a Screenshot Dump

**What goes wrong:** The Gallery section (`/gallery/marketing`, `/gallery/applications`, `/gallery/website`) is listed in the requirements but has the least structural definition. Without a clear purpose, it becomes a place to drop screenshots of products with minimal curation or annotation — a "look at this" section with no design system value.

**Why it happens:** Gallery content is easy to produce (take screenshots) but hard to make valuable. The temptation is to populate it quickly to make the site feel complete.

**Consequences:** The section provides no guidance to engineers or designers. It looks like a portfolio, not a design system. It doesn't help the team self-serve.

**Warning signs:**
- Gallery pages contain images without explanatory text about what design decisions they demonstrate
- The section is completed in one sitting by dropping in screenshots
- Engineers don't cite the gallery section as useful

**Prevention:** Define the gallery as "annotated exemplars" — each item should explain which tokens, patterns, or decisions are demonstrated, not just show the result. Think of it as applied documentation rather than inspiration board. If you don't have time to annotate, defer the section rather than populate it with uncommented screenshots.

**Phase that should address it:** Scope and structure the gallery before creating its content. Define the template first.

---

### Pitfall 8: Tailwind v4 Semantic Token Classes Not Available

**What goes wrong:** Tailwind v4 auto-discovers CSS custom properties, but the behavior with utility classes like `bg-primary` or `text-text-primary` depends on how the custom properties are named and whether they follow Tailwind's naming conventions. If the token names don't map cleanly to Tailwind utility classes, you end up writing `bg-[--color-primary]` everywhere — which is verbose and easy to get wrong.

**Why it happens:** Tailwind v4 changed significantly from v3 in how it handles custom properties. The CLAUDE.md notes that "Color tokens (CSS custom properties) are auto-discovered by Tailwind v4, so `bg-[--color-primary]` or semantic classes like `bg-primary` work without explicit `@theme` entries." This claim needs to hold under all color utility variants (bg, text, border, ring, fill, stroke, placeholder).

**Consequences:** Inconsistent utility class syntax across the codebase. Some people use `bg-[--color-primary]`, others try `bg-primary` — they may not behave identically.

**Warning signs:**
- Mixing `bg-[--color-alarm]` and `bg-alarm` in different files for the same intent
- A color utility class produces no effect until you switch to the bracket syntax
- Border or ring colors behave differently than background colors with the same token

**Prevention:** Test each utility type (bg, text, border, ring) against each semantic token category early. Document the working syntax in CLAUDE.md, including any exceptions. The existing pages already show the `zinc-*` pattern, which suggests semantic token utilities haven't been tested across all contexts yet.

**Phase that should address it:** Component foundation phase. Verify the full matrix before building components that depend on it.

---

### Pitfall 9: Sidebar Section Ordering Communicates Priority

**What goes wrong:** The current sidebar order is: Strategy, Gallery, Logo, Typography, Color, Photography, Iconography, Language & Style. Gallery appears second, before Logo and Color. This ordering might confuse new readers — gallery (examples) coming before the system itself (colors, typography) is unusual for a design system and may imply incorrect priority or learning sequence.

**Why it happens:** The sections were likely ordered as they were built or based on sidebar visual hierarchy decisions, not user journey.

**Consequences:** New team members don't know where to start. The site feels navigationally confusing for onboarding flows.

**Warning signs:**
- Someone asks "where do I start?" after visiting the site
- The home page section grid order doesn't match the sidebar order
- Gallery is used as a starting point rather than a reference

**Prevention:** Order sidebar sections by conceptual dependency: foundational (Strategy → Logo → Color → Typography) before applied (Photography, Iconography, Language) before examples (Gallery). Update `TheSidebar.vue` `sections` array ordering.

**Phase that should address it:** Information architecture phase, or as part of the first content-building milestone.

---

## Minor Pitfalls

---

### Pitfall 10: Font Stack Fallback Inconsistency

**What goes wrong:** JetBrains Mono is mentioned in CLAUDE.md as the monospace font for code/tokens, but `typography.css` shows the mono stack as `ui-monospace, 'SF Mono', 'Cascadia Code', 'Fira Code', monospace` — no JetBrains Mono. If token values are displayed in mono (e.g., `--color-blue-7: #5982ff`), the rendering will differ between environments because the fallback stack varies.

**Prevention:** Decide: self-host JetBrains Mono (adds a font file) or drop the JetBrains Mono intent and document SF Mono / Cascadia as the target. Update CLAUDE.md to reflect the actual stack.

**Phase that should address it:** Typography documentation phase.

---

### Pitfall 11: `on-{name}` Tokens Are Defined for Some Groups but Missing from Documentation

**What goes wrong:** `--color-on-primary: #ffffff`, `--color-on-alarm: #ffffff`, and similar `on-` tokens are defined as hardcoded values in `colors.css` (not `var()` references). The `ColorsPage.vue` semantic groups list only `['subtle', 'muted', 'border', 'default', 'hover', 'text']` — `on-{name}` is absent. These tokens will be invisible to developers reading the docs.

**Prevention:** Add `on-{name}` as a seventh variant in the semantic groups display and document why it's hardcoded (it's static across themes, used for text on solid fills).

**Phase that should address it:** Color semantic tokens documentation page.

---

### Pitfall 12: Version Number in Sidebar Footer Has No Mechanism to Stay Current

**What goes wrong:** The sidebar footer shows `v0.1.0` as a hardcoded string in `TheSidebar.vue`. There is no connection to `package.json`. It will stay `v0.1.0` forever unless manually updated.

**Prevention:** Either remove the version display if it provides no value, or import the version from `package.json` via Vite's `import.meta.env` or a virtual module. Don't leave static versioning that guarantees stale display.

**Phase that should address it:** Any early infrastructure pass.

---

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|---|---|---|
| Color documentation | Alert hierarchy under-documented | Write must/must-not guidance for each alert level; reference OpenBridge |
| Component library | Token bypass (zinc-* classes) | Audit existing pages first; establish semantic token convention before adding components |
| Content authoring (any section) | Bespoke markup per page | Build `<DocSection>`, `<DocProse>`, `<DoNotDo>` components before writing bulk content |
| Navigation / routing | Sidebar-router divergence | Consolidate to single navigation data source before adding more routes |
| Gallery section | Uncommented screenshot dump | Define annotated exemplar template before populating; defer if time is short |
| Typography docs | JetBrains Mono mismatch | Audit actual font stack against CLAUDE.md and resolve before documenting |
| Light theme | Dark-mode-only testing | Add theme toggle to personal page review checklist |
| Figma sync | Silent divergence | Declare CSS as source of truth; document this on the site itself |

---

## Sources

- Codebase inspection: `src/components/TheSidebar.vue`, `src/router/index.ts`, `src/assets/tokens/colors.css`, `src/assets/tokens/typography.css`, `src/pages/*.vue`
- Project context: `.planning/PROJECT.md`
- OpenBridge HMI standard: https://openbridge.no (alert hierarchy, alarm/warning/caution/ok definitions)
- Design system failure patterns: domain knowledge from documented industry post-mortems (Pitfalls 1–5 are HIGH confidence; Pitfalls 6–12 are MEDIUM–HIGH confidence based on direct codebase evidence)
