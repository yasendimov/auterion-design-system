# Feature Landscape

**Domain:** Aerospace design system documentation site
**Researched:** 2026-03-10
**Confidence:** MEDIUM — Based on training knowledge of IBM Carbon, Shopify Polaris, GitHub Primer, OpenBridge, Area17, DevRev; web research unavailable. Core design system conventions are stable and well-established; aerospace-specific recommendations draw on OpenBridge published research and Auterion's own CLAUDE.md context.

---

## Reference Systems Analyzed

| System | What It Taught |
|--------|---------------|
| IBM Carbon | Data-dense UI patterns, data visualization tokens, motion specs, exhaustive component coverage |
| Shopify Polaris | Opinionated usage guidance ("do/don't"), content guidelines tightly integrated with components |
| GitHub Primer | Token-first documentation, live in-page interactive demos, accessibility prominence |
| OpenBridge (Norwegian maritime) | Alert hierarchy formalization, operational color semantics, ISO/IEC standards integration |
| Area17 (A17) | Editorial craft — minimal chrome, typography-led layout, confident whitespace |
| Intrepid Automation | Aerospace robotics context — functional density without decoration |
| DevRev | Structured documentation hierarchy, clear section taxonomy |

---

## Table Stakes

Features users (Auterion's 300 engineers and designers) expect. Missing = the site fails as a reference tool.

### Content

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Color token reference with hex values | Engineers need to copy-paste values; a color grid without copy-able values is decorative only | Low | Already partially built in ColorsPage.vue — needs copy-to-clipboard |
| Color token CSS variable names shown | Engineers use `var(--color-primary)`, not hex; token names must be visible | Low | Show `--color-primary`, `--color-alarm`, etc. alongside swatches |
| Typography scale specimens | Showing sizes/weights visually, not just listing them in a table | Low | Live rendered text at each scale step |
| Type token variable names | Same as color: engineers need `--text-scale-*` names | Low | Pair with specimens |
| Logo download / clear usage rules | Contractors and partners need the logo file and basic rules immediately | Low | Clear do/don't with visual examples |
| Alert hierarchy explanation | Auterion ships safety-critical UIs; any engineer touching alarm states needs this | Medium | Alarm/Warning/Caution/OK with color, icon, and copy pattern for each |
| Dark mode primary, light mode documented | The site itself must demonstrate the dark-mode-first convention | Low | Already built — document it explicitly in color section |
| Section introduction pages | Each major section (Color, Typography, Logo, etc.) needs a short orienting paragraph | Low | 2-3 sentences explaining purpose and how to use that section |
| Iconography browsable grid | Engineers need to find icon names; a searchable/browsable grid is the minimum | Medium | Heroicons is the current icon library — grid of all icons with names |
| Photography/art direction visual examples | Written rules without images are unactionable for contractors | Medium | Real image examples with annotation |

### Navigation and Site

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Persistent sidebar navigation | Industry standard; users navigate between sections frequently | Low | Already built |
| Active state in sidebar | Users need orientation — which page they are on | Low | Already built |
| Theme toggle (dark/light) | The design system covers both themes; users verify their work in each | Low | Already built |
| In-page section anchors | Long pages (color tokens, typography scale) need jump-links | Low | `id` attributes + anchor links in a page TOC |
| Breadcrumb or section label | Context header so users know which section they're in | Low | Already partially built via `meta.section` |
| Legible at 1440px | Auterion's CLAUDE.md establishes this as the target width | Low | Already in place |

---

## Differentiators

Features that distinguish the Auterion design system from generic corporate documentation. These serve the aerospace/defense context and the stated visual aspiration (Ace Combat / DCS HUD aesthetic).

### Content

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Alert hierarchy visual demo — live states | Show all four severity levels (Alarm/Warning/Caution/OK) rendered as real UI components, not just color swatches. OpenBridge does this; Auterion should too | Medium | Requires component states: banner, badge, icon+label combinations |
| Semantic token mapping visualization | Show the explicit mapping from primitive → semantic alias (e.g. blue-7 → primary) with theme-aware rendering. GitHub Primer does this well | Medium | Two-column layout: primitive grid on left, semantic aliases on right |
| Token copy-to-clipboard with format selector | Toggle between CSS variable, hex, HSL. Carbon does hex only; offering both CSS var and hex gives engineers what they actually need | Medium | JS interaction — three format options, clipboard API |
| Type scale in context — not just specimens | Show type at scale rendered in real sentence examples, not lorem ipsum. Area17 uses real editorial copy to demonstrate | Low | Write real Auterion-branded sentences for each scale step |
| "When to use" column for semantic colors | Not just what a color is, but when to reach for it. Polaris integrates this directly. For aerospace: "Use alarm-border for any alert container that requires immediate pilot attention" | Low | Content work, not engineering work |
| Application pattern screenshots — annotated | Gallery section showing Auterion's actual product UIs (map views, telemetry dashboards) with callouts to design system components. Carbon has UI shell patterns; Auterion should show its own | High | Requires screenshots from real products or Figma mocks |
| HUD/instrument aesthetic rationale page | Explain why Auterion chose game UI (Ace Combat/DCS) as visual reference — the explicit principle that data-dense ≠ cluttered. This is a differentiator no other aerospace design system documents | Low | Essentially a written manifesto with comparison images |
| Brand idea page with strategic framing | Area17-style editorial page explaining the brand position, not just guidelines. Already started as BrandIdeaPage.vue | Low | Content-heavy, already scaffolded |
| Contrast ratio callouts on color tokens | Show WCAG AA/AAA compliance per token pair. Critical for text-on-background pairings in alarm states | Medium | Pre-compute ratios and display with pass/fail badge |
| Self-hosted font download note | Document that Inter Variable is self-hosted, why (no external dependencies in airgapped/classified environments) and where the file lives | Low | Single paragraph + code snippet |

### Site

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| The site is its own demo | Every page demonstrates the design system — spacing, type, color, elevation. The site is evidence, not just instructions | Low | Achieved through disciplined application of semantic tokens throughout |
| Operational dark mode as default | Most design system docs default to light mode. Auterion's site defaults to dark — matching what aerospace product UIs look like | Low | Already implemented |
| Full-bleed gallery pages | Gallery section (marketing, applications, website) uses full-width image treatment — editorial layout contrasting the structured reference pages | Medium | Already scaffolded as `standalone: true` meta flag |
| Code snippet blocks with token names | For each design decision, show the actual CSS variable name in a styled `<code>` block using JetBrains Mono | Low | Consistent `<pre><code>` component with copy button |

---

## Anti-Features

Features to explicitly NOT build in this phase — each one is a trap for a solo designer on a tight scope.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| Live interactive component playground (Storybook-style) | Enormous build complexity; requires a component library to exist first. Auterion's components are not yet documented let alone built as importable packages | Document components visually with screenshots from Figma; defer interactive demos to a Components phase |
| Figma embed / iframe previews | Figma embed is slow, requires auth, and breaks in airgapped environments. Common design system site mistake | Link to Figma file directly; embed static screenshots |
| Auto-generated token docs from CSS | Tooling like Style Dictionary or Token Pipeline adds CI complexity. Token surface area is small enough to document manually | Maintain token docs by hand in ColorsPage.vue and TypographyPage.vue |
| Search / full-text search | Needs indexing infra (Algolia, Pagefind, etc.). Site is small enough that sidebar navigation plus in-page anchors are sufficient | Good section hierarchy makes search unnecessary at this scale |
| Version history / changelog page | Requires discipline to maintain; becomes stale fast with a one-person team | Git history is the changelog for now; add this when team grows |
| Motion / animation system documentation | PROJECT.md explicitly defers this | Defer until visual foundations are solid |
| Mobile-specific layout patterns | PROJECT.md explicitly out-of-scope; aerospace products are web/desktop | Exclude; document web-first only |
| Component API reference (props tables) | No component library exists yet; documenting non-existent APIs creates confusion | Document visual patterns and token usage; ship component API docs in a future Components milestone |
| Dark pattern warning callouts | Polaris-style "don't do this" interaction patterns — appropriate for consumer UI. Auterion is building operational tools with trained users | Focus on "how to use correctly" rather than "how not to misuse" |
| RSS / email newsletter for updates | Overhead with no audience yet | Slack announcement when sections ship |

---

## Feature Dependencies

```
Color token reference → Semantic token mapping visualization
  (can't show semantic mappings without primitives being documented first)

Alert hierarchy page → Semantic token reference
  (alert hierarchy relies on alarm/warning/caution/ok semantic tokens being explained)

Application pattern screenshots → Gallery section
  (gallery/applications is the container for annotated screenshots)

Type specimens → "Using Type" page
  (introduction to type scale is prerequisite to usage rules)

Logo introduction → All other logo subsections
  (The Basics, Lockup, Scale, etc. assume introduction context)

Copy-to-clipboard tokens → Color primitives page
  (clipboard feature extends the existing ColorsPage.vue)

Contrast ratio callouts → Copy-to-clipboard tokens
  (both touch the color token UI; build as a single pass)

Section introduction pages → All section detail pages
  (introductions should land before drilling into specifics)
```

---

## MVP Recommendation

The minimum that makes the site useful as a day-one reference tool for Auterion's team:

**Phase 1 — Foundations (ship first):**
1. Color section: primitives + semantic token documentation with copy-to-clipboard and token names visible
2. Typography section: type scale specimens with variable names
3. Alert hierarchy page: all four severity levels documented with colors, icons, and copy patterns
4. Section introduction pages for every major section (short orienting text, not placeholder)

**Phase 2 — Brand Identity:**
5. Logo section: all six subsections (introduction, basics, lockup, scale, B&W, placement)
6. Strategy section: brand idea, voice principles (already scaffolded)

**Phase 3 — Content Guidance:**
7. Photography/art direction with real examples
8. Language & style guide (voice, product names, blog, social)

**Phase 4 — Gallery (highest effort, highest impact):**
9. Gallery/applications with annotated product screenshots
10. Gallery/marketing

**Defer:**
- Iconography grid — requires auditing which icon set is in use and generating a full grid; medium complexity, not blocking other sections
- Contrast ratio callouts — valuable but not blocking; add in Phase 1 follow-up
- HUD aesthetic rationale page — differentiating but not urgent; add to Strategy section in Phase 2

---

## Sources

**Confidence levels for underlying claims:**

| Claim | Confidence | Basis |
|-------|------------|-------|
| IBM Carbon includes token documentation with copy-to-clipboard | HIGH | Well-documented public system, stable for 5+ years |
| Shopify Polaris integrates "when to use" into component docs | HIGH | Well-documented, heavily referenced in design community |
| GitHub Primer shows primitive → semantic token mapping | HIGH | Public documentation, frequently referenced |
| OpenBridge formalizes alert hierarchy (Alarm/Warning/Caution/OK) | HIGH | Published Norwegian research center output, open documentation |
| Area17 uses editorial typographic layouts with real copy | MEDIUM | Training knowledge; exact current implementation may differ |
| Storybook-style playgrounds require component library prerequisite | HIGH | Fundamental architectural constraint, not documentation specific |
| Airgapped/classified environments are a real Auterion constraint | MEDIUM | Inferred from aerospace/defense context; not explicitly stated in PROJECT.md but reasonable assumption |
| Figma embed authentication requirement | HIGH | Fundamental Figma product constraint |

**No URLs available** — web fetch and web search tools were denied. Recommend verifying current state of Carbon, Polaris, and Primer docs manually if any specific implementation detail needs confirmation before building.
