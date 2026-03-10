# Auterion Design System

## What This Is

A comprehensive design system documentation site for Auterion — an aerospace/robotics company building autonomous systems. It serves as the single source of truth for brand identity, visual language, UI components, and application patterns. Built as a Vue SPA, it enables one designer to scale design decisions across 300 people by letting teams self-serve instead of asking.

## Core Value

Bring simplicity and visual craft to military/aerospace UI — the way game studios (Ace Combat, DCS) make complex real-time data feel intuitive and beautiful — so Auterion's products are both operationally precise and visually distinctive.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Complete brand documentation (logo usage, lockups, scale, placement, black & white)
- [ ] Color system fully documented (primitives, semantic tokens, theme support, copy-paste values)
- [ ] Typography system documented (type scale, weights, usage rules, specimens)
- [ ] Iconography guidelines (product symbols, functional icons, introduction)
- [ ] Photography & art direction guidelines (art direction, YouTube, social media, blog)
- [ ] Strategy section (brand idea, voice principles, writing Auterion, formatting)
- [ ] Language & style guide (voice principles, writing, product names, blog, social media)
- [ ] Gallery section (introduction, marketing, applications, website examples)
- [ ] Beautiful, well-organized documentation site that itself demonstrates the design language
- [ ] Dark-mode-first theming with light mode support
- [ ] Component library foundations (buttons, inputs, cards, data displays)
- [ ] Application patterns (map views, telemetry dashboards, mission planning layouts)

### Out of Scope

- Figma plugin/integration — Figma and site evolve in parallel, no automated sync
- End-user product UI implementation — this documents the system, doesn't ship product code
- Mobile-specific patterns — web-first documentation site
- Animation/motion system — defer until visual foundations are solid

## Context

- Auterion builds autonomous systems for aerospace/robotics, including military applications
- One designer supporting ~300 people — the design system is a force multiplier
- Existing Figma file with variables, styles, and colors serves as the design source alongside this site
- OpenBridge (openbridge.no) used as functional guidance for professional software interfaces, but Auterion wants its own visual language
- Visual inspiration: Area17 (editorial craft, understated confidence), Intrepid Automation, DevRev standard projects (documentation structure)
- Game UI inspiration: Ace Combat / DCS — clean HUD overlays, flight-instrument aesthetics, spatial information design over decoration
- Existing Vue SPA has sidebar navigation, color tokens (primitives + semantic), typography tokens, and theme toggling already built
- All sidebar sections currently have placeholder routes — real content needs to be created from scratch

## Constraints

- **Tech stack**: Vue 3 + Vite + Tailwind CSS v4 + TypeScript — already established, no changes
- **Theming**: Dark mode is primary, light mode secondary — uses `data-theme` attribute
- **Tokens**: Two-layer system (primitives → semantic aliases) already in place in CSS custom properties
- **Solo designer**: Content must be authorable by one person — templates and patterns over bespoke pages
- **Self-hosted fonts**: Inter Variable for UI, JetBrains Mono for code — no external font services

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Vue SPA for documentation | Allows live component demos alongside docs, team already uses Vue | — Pending |
| Dark-mode-first | Matches aerospace/military UI conventions, aligns with product UIs | — Pending |
| OpenBridge as functional reference | Industry-standard maritime bridge design, applicable patterns for complex operational UIs | — Pending |
| Game UI as visual inspiration | Solves same problem (real-time data under pressure) with better visual craft | — Pending |
| Figma and site evolve in parallel | Neither is strictly upstream — decisions flow both ways | — Pending |

---
*Last updated: 2026-03-10 after initialization*
