# Requirements: Auterion Design System

**Defined:** 2026-03-10
**Core Value:** Bring simplicity and visual craft to military/aerospace UI — one designer scaling design decisions across 300 people.

## v1 Requirements

### Infrastructure

- [ ] **INFRA-01**: Shared DocPage layout component with consistent header, description, and section anatomy
- [ ] **INFRA-02**: Content-block primitives (TokenSwatch, TokenGrid, SpecTable, DoDont, ImageFrame, CodeBlock, CalloutBlock)
- [ ] **INFRA-03**: Single navigation data source powering both sidebar and router
- [ ] **INFRA-04**: All pages migrated from raw zinc-* classes to semantic token classes
- [ ] **INFRA-05**: Theme persistence via localStorage in useTheme composable
- [ ] **INFRA-06**: Client-side search over routes and token corpus using Fuse.js
- [ ] **INFRA-07**: Syntax-highlighted code snippets using Shiki with theme-aware styling

### Color System

- [ ] **COLR-01**: Complete primitive scale documentation with visual swatches for all hues and steps
- [ ] **COLR-02**: Semantic token documentation with usage guidance and variant breakdown
- [ ] **COLR-03**: Copy-to-clipboard for CSS variable names and resolved values
- [ ] **COLR-04**: Dark/light mode side-by-side or toggle preview for all tokens
- [ ] **COLR-05**: Alert hierarchy page with OpenBridge-aligned operational guidance (Alarm/Warning/Caution/OK)
- [ ] **COLR-06**: WCAG contrast ratio display for text/background token combinations
- [ ] **COLR-07**: on-{name} tokens documented alongside their semantic groups
- [ ] **COLR-08**: Black & white usage guidelines page

### Typography

- [ ] **TYPO-01**: Type scale specimens showing all sizes, weights, and line heights
- [ ] **TYPO-02**: Font stack documentation (Inter Variable for UI, JetBrains Mono for code)
- [ ] **TYPO-03**: Usage rules for headings, body text, code, labels, and captions
- [ ] **TYPO-04**: OpenType feature documentation (tabular numbers, contextual alternates)
- [ ] **TYPO-05**: Formatting guidelines (number formatting, date/time, units)

### Logo

- [ ] **LOGO-01**: Logo introduction page with brand story and symbol meaning
- [ ] **LOGO-02**: The Basics page (primary logo, symbol, wordmark)
- [ ] **LOGO-03**: Lockup page (horizontal, vertical, with tagline)
- [ ] **LOGO-04**: Scale guidelines (minimum sizes, clear space rules)
- [ ] **LOGO-05**: Black & white logo variants with usage rules
- [ ] **LOGO-06**: Placement guidelines (positioning on layouts, co-branding)

### Strategy

- [ ] **STRT-01**: Brand idea page articulating Auterion's design philosophy
- [ ] **STRT-02**: Voice principles page defining communication tone
- [ ] **STRT-03**: Writing Auterion page with brand-specific language guidance
- [ ] **STRT-04**: Formatting & structure page for content layout conventions

### Photography

- [ ] **PHOT-01**: Art direction page with photographic style and mood guidance
- [ ] **PHOT-02**: YouTube guide for video content visual standards
- [ ] **PHOT-03**: Social media image guidelines
- [ ] **PHOT-04**: Blog photography guidelines

### Iconography

- [ ] **ICON-01**: Iconography introduction page (style, grid, principles)
- [ ] **ICON-02**: Product symbols documentation (aerospace-specific icons)
- [ ] **ICON-03**: Functional icons documentation (UI action icons)

### Language & Style

- [ ] **LANG-01**: Voice principles page (tone, audience, do/don't)
- [ ] **LANG-02**: Writing Auterion style guide
- [ ] **LANG-03**: Product names and terminology reference
- [ ] **LANG-04**: Blog writing guidelines
- [ ] **LANG-05**: Social media writing guidelines

### Gallery

- [ ] **GLRY-01**: Gallery introduction page explaining the showcase
- [ ] **GLRY-02**: Marketing materials gallery with annotated examples
- [ ] **GLRY-03**: Applications gallery showing design system in product UI
- [ ] **GLRY-04**: Website examples gallery

## v2 Requirements

### Components

- **COMP-01**: Interactive component playground with live props editing
- **COMP-02**: Button component documentation with variants, sizes, states
- **COMP-03**: Input/form component documentation
- **COMP-04**: Card and data display component documentation
- **COMP-05**: Application layout patterns (map view, telemetry dashboard, mission planning)

### Advanced

- **ADVN-01**: Motion/animation system documentation
- **ADVN-02**: Figma-to-code token sync tooling
- **ADVN-03**: Design token versioning and changelog
- **ADVN-04**: Accessibility audit tooling integration

## Out of Scope

| Feature | Reason |
|---------|--------|
| Storybook / Histoire | Adds parallel app structure; overkill for docs-first solo-author site |
| MDX / Markdown pipeline | Vue SFC pages with typed data are more maintainable and allow component embedding |
| CMS integration | Solo author, content changes infrequently, no editorial workflow needed |
| Figma plugin / automated sync | Figma and site evolve in parallel; automation adds fragile coupling |
| Mobile-responsive docs site | Internal team tool, desktop-first is acceptable for v1 |
| External search (Algolia) | Fuse.js covers the corpus size; no external dependency needed |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| INFRA-01 | Phase 1 | Pending |
| INFRA-02 | Phase 1 | Pending |
| INFRA-03 | Phase 1 | Pending |
| INFRA-04 | Phase 1 | Pending |
| INFRA-05 | Phase 1 | Pending |
| INFRA-06 | Phase 1 | Pending |
| INFRA-07 | Phase 1 | Pending |
| COLR-01 | Phase 2 | Pending |
| COLR-02 | Phase 2 | Pending |
| COLR-03 | Phase 2 | Pending |
| COLR-04 | Phase 2 | Pending |
| COLR-05 | Phase 2 | Pending |
| COLR-06 | Phase 2 | Pending |
| COLR-07 | Phase 2 | Pending |
| COLR-08 | Phase 2 | Pending |
| TYPO-01 | Phase 2 | Pending |
| TYPO-02 | Phase 2 | Pending |
| TYPO-03 | Phase 2 | Pending |
| TYPO-04 | Phase 2 | Pending |
| TYPO-05 | Phase 2 | Pending |
| LOGO-01 | Phase 3 | Pending |
| LOGO-02 | Phase 3 | Pending |
| LOGO-03 | Phase 3 | Pending |
| LOGO-04 | Phase 3 | Pending |
| LOGO-05 | Phase 3 | Pending |
| LOGO-06 | Phase 3 | Pending |
| STRT-01 | Phase 3 | Pending |
| STRT-02 | Phase 3 | Pending |
| STRT-03 | Phase 3 | Pending |
| STRT-04 | Phase 3 | Pending |
| PHOT-01 | Phase 4 | Pending |
| PHOT-02 | Phase 4 | Pending |
| PHOT-03 | Phase 4 | Pending |
| PHOT-04 | Phase 4 | Pending |
| ICON-01 | Phase 4 | Pending |
| ICON-02 | Phase 4 | Pending |
| ICON-03 | Phase 4 | Pending |
| LANG-01 | Phase 4 | Pending |
| LANG-02 | Phase 4 | Pending |
| LANG-03 | Phase 4 | Pending |
| LANG-04 | Phase 4 | Pending |
| LANG-05 | Phase 4 | Pending |
| GLRY-01 | Phase 5 | Pending |
| GLRY-02 | Phase 5 | Pending |
| GLRY-03 | Phase 5 | Pending |
| GLRY-04 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 44 total
- Mapped to phases: 44
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-10*
*Last updated: 2026-03-10 after initial definition*
